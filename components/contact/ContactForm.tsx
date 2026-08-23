"use client"

import { useState } from 'react'
import { submitContact } from '@/lib/actions/contact'
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'

const budgetOptions = [
  'Under $5K',
  '$5K – $15K',
  '$15K – $50K',
  '$50K – $150K',
  '$150K+',
  'Not sure yet',
]

export function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '',
    honeypot: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    const result = await submitContact(form)
    if (result.success) {
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '', budget: '', honeypot: '' })
    } else {
      setStatus('error')
      const firstError = result.errors ? Object.values(result.errors).flat()[0] : null
      setErrorMessage(firstError || result.message || 'Please check your form inputs.')
    }
  }

  const inputStyle = {
    background: '#F1F5F9',
    border: '1px solid rgba(203, 213, 225, 0.9)',
    boxShadow: 'inset 2px 3px 6px rgba(15, 23, 42, 0.05)',
    color: '#0F172A',
    borderRadius: '14px',
    padding: '14px 18px',
    fontSize: '14px',
    width: '100%',
    outline: 'none',
    transition: 'all 0.25s ease',
  }

  const labelStyle = {
    display: 'block',
    fontSize: '11px',
    fontWeight: '700',
    letterSpacing: '0.12em',
    marginBottom: '8px',
    color: '#334155',
  }

  return (
    <div className="soft-card p-6 sm:p-10">
      {status === 'success' ? (
        <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
          <div className="soft-icon-box !w-16 !h-16 mb-2">
            <CheckCircle2 size={36} className="text-[#2563EB]" />
          </div>
          <h2
            className="text-xl sm:text-2xl font-bold"
            style={{ color: 'var(--color-cencera-text)' }}
          >
            Message Sent Successfully!
          </h2>
          <p className="text-sm" style={{ color: 'var(--color-cencera-muted)' }}>
            We&apos;ll get back to you within 24 hours.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-4 soft-pill font-mono text-xs text-[#2563EB] hover:text-[#1D4ED8]"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Honeypot */}
          <input
            type="text"
            name="honeypot"
            value={form.honeypot}
            onChange={handleChange}
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="contact-name" style={labelStyle}>YOUR NAME</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                required
                placeholder="Alex Mercer"
                value={form.name}
                onChange={handleChange}
                style={inputStyle}
                onFocus={(e) => {
                  ;(e.target as HTMLElement).style.borderColor = 'rgba(37, 99, 235, 0.6)'
                  ;(e.target as HTMLElement).style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.15)'
                }}
                onBlur={(e) => {
                  ;(e.target as HTMLElement).style.borderColor = 'rgba(203, 213, 225, 0.9)'
                  ;(e.target as HTMLElement).style.boxShadow = 'inset 2px 3px 6px rgba(15, 23, 42, 0.05)'
                }}
              />
            </div>
            <div>
              <label htmlFor="contact-email" style={labelStyle}>EMAIL ADDRESS</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                required
                placeholder="you@company.com"
                value={form.email}
                onChange={handleChange}
                style={inputStyle}
                onFocus={(e) => {
                  ;(e.target as HTMLElement).style.borderColor = 'rgba(37, 99, 235, 0.6)'
                  ;(e.target as HTMLElement).style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.15)'
                }}
                onBlur={(e) => {
                  ;(e.target as HTMLElement).style.borderColor = 'rgba(203, 213, 225, 0.9)'
                  ;(e.target as HTMLElement).style.boxShadow = 'inset 2px 3px 6px rgba(15, 23, 42, 0.05)'
                }}
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-subject" style={labelStyle}>SUBJECT / PROJECT TYPE</label>
            <input
              id="contact-subject"
              type="text"
              name="subject"
              required
              placeholder="What are you building?"
              value={form.subject}
              onChange={handleChange}
              style={inputStyle}
              onFocus={(e) => {
                ;(e.target as HTMLElement).style.borderColor = 'rgba(37, 99, 235, 0.6)'
                ;(e.target as HTMLElement).style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.15)'
              }}
              onBlur={(e) => {
                ;(e.target as HTMLElement).style.borderColor = 'rgba(203, 213, 225, 0.9)'
                ;(e.target as HTMLElement).style.boxShadow = 'inset 2px 3px 6px rgba(15, 23, 42, 0.05)'
              }}
            />
          </div>

          <div>
            <label htmlFor="contact-budget" style={labelStyle}>ESTIMATED BUDGET RANGE</label>
            <select
              id="contact-budget"
              name="budget"
              value={form.budget}
              onChange={handleChange}
              style={{ ...inputStyle, cursor: 'pointer' }}
              onFocus={(e) => {
                ;(e.target as HTMLElement).style.borderColor = 'rgba(37, 99, 235, 0.6)'
              }}
              onBlur={(e) => {
                ;(e.target as HTMLElement).style.borderColor = 'rgba(203, 213, 225, 0.9)'
              }}
            >
              <option value="">Select a range...</option>
              {budgetOptions.map((opt) => (
                <option key={opt} value={opt} style={{ background: '#FFFFFF', color: '#0F172A' }}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="contact-message" style={labelStyle}>PROJECT DETAILS</label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              placeholder="Describe your goals, tech stack preferences, timeline, or requirements..."
              value={form.message}
              onChange={handleChange}
              style={{ ...inputStyle, resize: 'vertical' }}
              onFocus={(e) => {
                ;(e.target as HTMLElement).style.borderColor = 'rgba(37, 99, 235, 0.6)'
                ;(e.target as HTMLElement).style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.15)'
              }}
              onBlur={(e) => {
                ;(e.target as HTMLElement).style.borderColor = 'rgba(203, 213, 225, 0.9)'
                ;(e.target as HTMLElement).style.boxShadow = 'inset 2px 3px 6px rgba(15, 23, 42, 0.05)'
              }}
            />
          </div>

          {status === 'error' && (
            <div className="flex items-center gap-2 p-3.5 rounded-xl bg-red-50 text-red-600 border border-red-200 text-xs font-semibold">
              <AlertCircle size={16} className="shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <button
            type="submit"
            id="contact-submit"
            disabled={status === 'loading'}
            className="btn-butter w-full font-bold py-4 text-sm uppercase tracking-wider flex items-center justify-center gap-2"
          >
            {status === 'loading' ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Submitting Inquiry...
              </>
            ) : (
              <>
                <Send size={16} />
                Send Project Inquiry //
              </>
            )}
          </button>
        </form>
      )}
    </div>
  )
}
