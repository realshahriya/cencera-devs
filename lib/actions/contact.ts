'use server'

import { z } from 'zod'

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

  // 1. Telegram Bot Notification (requires TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in .env)
  const tgBotToken = process.env.TELEGRAM_BOT_TOKEN
  const tgChatId = process.env.TELEGRAM_CHAT_ID
  const tgTopicId = process.env.TELEGRAM_TOPIC_ID || process.env.TELEGRAM_THREAD_ID

  if (tgBotToken && tgChatId) {
    try {
      const tgText = `🚀 <b>New CENCERA Project Inquiry</b>\n\n` +
        `<b>👤 Name:</b> ${escapeHtml(name)}\n` +
        `<b>📧 Email:</b> ${escapeHtml(email)}\n` +
        `<b>💰 Budget:</b> ${escapeHtml(budget || 'Not specified')}\n` +
        `<b>📌 Subject:</b> ${escapeHtml(subject)}\n\n` +
        `<b>💬 Message:</b>\n${escapeHtml(message)}\n\n` +
        `<i>Sent via cencera.xyz contact form //</i>`

      const payload: Record<string, any> = {
        chat_id: tgChatId,
        text: tgText,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }

      // If sending to a specific Telegram Forum Topic Thread
      if (tgTopicId && !isNaN(Number(tgTopicId))) {
        payload.message_thread_id = Number(tgTopicId)
      }

      // Dispatch fetch with a 4-second timeout so network issues never block the UI response
      fetch(`https://api.telegram.org/bot${tgBotToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(4000),
      })
        .then(async (res) => {
          if (!res.ok) {
            const errJson = await res.json().catch(() => null)
            console.error('Telegram Bot sendMessage returned non-200:', errJson)
          } else {
            console.log('✅ Telegram Bot notification delivered successfully to group/topic!')
          }
        })
        .catch((err) => {
          console.error('Telegram Bot fetch timeout/error:', err.message || err)
        })
    } catch (err) {
      console.error('Telegram Bot fetch exception:', err)
    }
  } else {
    console.warn('⚠️ Telegram Bot config missing: Set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in .env.local')
  }

  // 2. Discord Webhook Notification (optional fallback if configured)
  const discordWebhook = process.env.DISCORD_WEBHOOK_URL
  if (discordWebhook) {
    try {
      fetch(discordWebhook, {
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
