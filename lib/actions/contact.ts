'use server'

import { z } from 'zod'
import dns from 'dns'

// Force Node.js to resolve IPv4 first on Vercel/cloud environments (prevents Telegram API IPv6 connection hanging)
try {
  if (typeof dns.setDefaultResultOrder === 'function') {
    dns.setDefaultResultOrder('ipv4first')
  }
} catch {
  // Ignore
}

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  budget: z.string().optional(),
  honeypot: z.string().max(0, 'Bot detected'),
})

export type ContactFormData = z.infer<typeof contactSchema>

export interface ContactResult {
  success: boolean
  message: string
  errors?: Record<string, string[]>
}

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const limit = rateLimitMap.get(ip)
  if (!limit || now > limit.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60_000 })
    return true
  }
  if (limit.count >= 3) return false
  limit.count++
  return true
}

/**
 * Escapes HTML characters for safe Telegram Bot HTML formatting
 */
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

async function sendTelegramMessage(
  tgBotToken: string,
  chatId: string,
  topicId: string | undefined,
  tgText: string,
  tgApiBase: string
): Promise<boolean> {
  try {
    const payload: Record<string, any> = {
      chat_id: chatId,
      text: tgText,
      parse_mode: 'HTML',
      disable_web_page_preview: true,
    }

    if (topicId && !isNaN(Number(topicId))) {
      payload.message_thread_id = Number(topicId)
    }

    // 10 second timeout with IPv4 preference
    const res = await fetch(`${tgApiBase}/bot${tgBotToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10000),
    })

    if (res.ok) {
      console.log(`✅ Telegram Bot message delivered successfully to chat ${chatId}!`)
      return true
    }

    const errJson = await res.json().catch(() => null)
    console.error(`Telegram Bot sendMessage failed for chat ${chatId}:`, errJson)
    return false
  } catch (err: any) {
    console.error(`Telegram Bot fetch exception for chat ${chatId}:`, err.message || err)
    return false
  }
}

export async function submitContact(
  formData: ContactFormData,
  ip: string = 'unknown'
): Promise<ContactResult> {
  // Rate limit check
  if (!checkRateLimit(ip)) {
    return {
      success: false,
      message: 'Too many requests. Please try again in a minute.',
    }
  }

  // Validate input
  const parsed = contactSchema.safeParse(formData)
  if (!parsed.success) {
    return {
      success: false,
      message: 'Please check your form inputs.',
      errors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    }
  }

  const { name, email, subject, message, budget } = parsed.data

  console.log('📬 New Contact Form Submission:')
  console.log(`  Name: ${name}`)
  console.log(`  Email: ${email}`)
  console.log(`  Subject: ${subject}`)
  console.log(`  Budget: ${budget ?? 'Not specified'}`)
  console.log(`  Message: ${message}`)

  // 1. Telegram Bot Notification
  const tgBotToken = process.env.TELEGRAM_BOT_TOKEN
  const tgChatId = process.env.TELEGRAM_CHAT_ID
  const tgTopicId = process.env.TELEGRAM_TOPIC_ID || process.env.TELEGRAM_THREAD_ID
  const tgApiBase = (process.env.TELEGRAM_API_BASE || 'https://api.telegram.org').replace(/\/$/, '')

  if (tgBotToken && tgChatId) {
    const tgText = `🚀 <b>New CENCERA Project Inquiry</b>\n\n` +
      `<b>👤 Name:</b> ${escapeHtml(name)}\n` +
      `<b>📧 Email:</b> ${escapeHtml(email)}\n` +
      `<b>💰 Budget:</b> ${escapeHtml(budget || 'Not specified')}\n` +
      `<b>📌 Subject:</b> ${escapeHtml(subject)}\n\n` +
      `<b>💬 Message:</b>\n${escapeHtml(message)}\n\n` +
      `<i>Sent via cencera.xyz contact form //</i>`

    // Await fetch so Vercel Serverless environment never freezes context before delivery
    let sent = await sendTelegramMessage(tgBotToken, tgChatId, tgTopicId, tgText, tgApiBase)

    // Fallback: If chat ID format failed, try alternate prefix variant
    if (!sent && tgChatId.startsWith('-1002')) {
      const altChatId = '-100' + tgChatId.slice(5)
      console.log(`Attempting fallback to alternate chat_id: ${altChatId}`)
      await sendTelegramMessage(tgBotToken, altChatId, tgTopicId, tgText, tgApiBase)
    } else if (!sent && tgChatId.startsWith('-100') && !tgChatId.startsWith('-1002')) {
      const altChatId = '-1002' + tgChatId.slice(4)
      console.log(`Attempting fallback to alternate chat_id: ${altChatId}`)
      await sendTelegramMessage(tgBotToken, altChatId, tgTopicId, tgText, tgApiBase)
    }
  } else {
    console.warn('⚠️ Telegram Bot config missing: Set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in .env.local / Vercel')
  }

  // 2. Discord Webhook Notification (optional)
  const discordWebhook = process.env.DISCORD_WEBHOOK_URL
  if (discordWebhook) {
    try {
      await fetch(discordWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          embeds: [
            {
              title: '📬 New CENCERA Project Inquiry',
              color: 0x92dce5,
              fields: [
                { name: 'Name', value: name, inline: true },
                { name: 'Email', value: email, inline: true },
                { name: 'Budget', value: budget ?? 'Not specified', inline: true },
                { name: 'Subject', value: subject },
                { name: 'Message', value: message },
              ],
              timestamp: new Date().toISOString(),
            },
          ],
        }),
        signal: AbortSignal.timeout(4000),
      }).catch((err) => console.error('Discord webhook failed:', err.message || err))
    } catch (err) {
      console.error('Discord webhook exception:', err)
    }
  }

  return {
    success: true,
    message: "Message received! We'll get back to you within 24 hours.",
  }
}
