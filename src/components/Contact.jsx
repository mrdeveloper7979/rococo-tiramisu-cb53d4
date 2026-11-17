import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { BUSINESS, SERVICES } from '../data'
import { Eyebrow, Reveal } from './ui'

const EMPTY = { fullName: '', phone: '', email: '', service: '', preferredDate: '', message: '' }

const today = () => {
  const d = new Date()
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
  return d.toISOString().slice(0, 10)
}

function validate(v) {
  const e = {}
  if (v.fullName.trim().length < 2) e.fullName = 'Please enter your full name.'
  const digits = v.phone.replace(/\D/g, '')
  if (!digits) e.phone = 'Please enter your phone number.'
  else if (digits.length < 10 || digits.length > 11) e.phone = 'Please enter a valid 10-digit phone number.'
  if (!v.email.trim()) e.email = 'Please enter your email address.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Please enter a valid email address.'
  if (!v.service) e.service = 'Please select the service you need.'
  if (v.preferredDate && v.preferredDate < today()) e.preferredDate = 'Please choose today or a future date.'
  if (v.message.length > 2000) e.message = 'Please keep your message under 2,000 characters.'
  return e
}

export default function Contact({ service, setService }) {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const v = { ...values, service: service ?? values.service }

  const update = (name) => (e) => {
    const value = e.target.value
    if (name === 'service') setService(value)
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const found = validate(v)
    setErrors(found)
    if (Object.keys(found).length) {
      document.getElementById(Object.keys(found)[0])?.focus()
      return
    }
    setStatus('sending')
    const body = new URLSearchParams({
      'form-name': 'appointment',
      'bot-field': e.target.elements['bot-field'].value,
      subject: `New appointment request: ${v.service} — ${v.fullName.trim()}`,
      ...v,
    })
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })
      if (!res.ok) throw new Error(`Status ${res.status}`)
      setStatus('success')
      setValues(EMPTY)
      setService('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div className="pointer-events-none absolute -bottom-48 -left-40 size-[36rem] rounded-full bg-gold/10 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <Eyebrow dark>Contact</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.6rem]">
            Let&rsquo;s Take Care of Your <span className="text-foil">Notary Needs</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
            Call, email or send an appointment request. We&rsquo;ll get back to you to confirm the details and a
            convenient time.
          </p>

          <ul className="mt-10 space-y-4">
            <ContactRow icon={Phone} label="Phone" href={BUSINESS.phoneHref}>
              {BUSINESS.phone}
            </ContactRow>
            <ContactRow icon={Mail} label="Email" href={BUSINESS.emailHref}>
              <span className="break-all">{BUSINESS.email}</span>
            </ContactRow>
            <ContactRow icon={MapPin} label="Address">
              {BUSINESS.fullAddress}
            </ContactRow>
            <ContactRow icon={Clock} label="Business Hours">
              Monday–Friday, 10 AM–6 PM. Weekends by appointment.
            </ContactRow>
          </ul>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-7">
          <div className="rounded-3xl bg-white p-6 text-ink shadow-lift sm:p-10">
            {status === 'success' ? (
              <div className="flex flex-col items-center py-12 text-center" role="status" aria-live="polite">
                <span className="bg-foil flex size-16 items-center justify-center rounded-full text-ink">
                  <CheckCircle2 className="size-8" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold">Thank you — your request was sent.</h3>
                <p className="mt-3 max-w-md text-ink/65">
                  We&rsquo;ve received your appointment request and will contact you soon to confirm. For anything
                  urgent, call us at{' '}
                  <a href={BUSINESS.phoneHref} className="font-semibold text-gold-dark underline-offset-4 hover:underline">
                    {BUSINESS.phone}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-8 rounded-full border border-ink/15 px-6 py-3 font-display text-sm font-semibold transition hover:border-gold-dark hover:text-gold-dark"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form name="appointment" method="POST" data-netlify="true" netlify-honeypot="bot-field" noValidate onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="appointment" />
                <p className="hidden">
                  <label>
                    Leave this field empty: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                  </label>
                </p>

                <h3 className="font-display text-2xl font-semibold">Request an Appointment</h3>
                <p className="mt-1.5 text-sm text-ink/60">
                  Fields marked <span className="text-gold-dark">*</span> are required.
                </p>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <Field id="fullName" label="Full Name" required error={errors.fullName} className="sm:col-span-2">
                    <input id="fullName" name="fullName" type="text" autoComplete="name" value={v.fullName} onChange={update('fullName')} {...aria('fullName', errors)} className={inputCls(errors.fullName)} />
                  </Field>
                  <Field id="phone" label="Phone Number" required error={errors.phone}>
                    <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="(302) 555-0123" value={v.phone} onChange={update('phone')} {...aria('phone', errors)} className={inputCls(errors.phone)} />
                  </Field>
                  <Field id="email" label="Email Address" required error={errors.email}>
                    <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" value={v.email} onChange={update('email')} {...aria('email', errors)} className={inputCls(errors.email)} />
                  </Field>
                  <Field id="service" label="Service Required" required error={errors.service}>
                    <select id="service" name="service" value={v.service} onChange={update('service')} {...aria('service', errors)} className={`${inputCls(errors.service)} select-chevron pr-10`}>
                      <option value="">Select a service</option>
                      {SERVICES.map((s) => (
                        <option key={s.title} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field id="preferredDate" label="Preferred Appointment Date" error={errors.preferredDate}>
                    <input id="preferredDate" name="preferredDate" type="date" min={today()} value={v.preferredDate} onChange={update('preferredDate')} {...aria('preferredDate', errors)} className={inputCls(errors.preferredDate)} />
                  </Field>
                  <Field id="message" label="Message" error={errors.message} className="sm:col-span-2">
                    <textarea id="message" name="message" rows={4} placeholder="Briefly describe your document and any questions you have." value={v.message} onChange={update('message')} {...aria('message', errors)} className={`${inputCls(errors.message)} resize-y`} />
                  </Field>
                </div>

                {status === 'error' && (
                  <div role="alert" className="mt-6 flex items-start gap-3 rounded-xl border border-gold-dark/30 bg-ivory p-4 text-sm text-ink">
                    <AlertCircle className="mt-0.5 size-5 shrink-0 text-gold-dark" aria-hidden="true" />
                    <p>
                      Sorry, your request could not be sent. Please try again, or call us at{' '}
                      <a href={BUSINESS.phoneHref} className="font-semibold text-gold-dark underline">
                        {BUSINESS.phone}
                      </a>
                      .
                    </p>
                  </div>
                )}
                {Object.values(errors).some(Boolean) && (
                  <p role="alert" className="mt-6 text-sm font-medium text-gold-dark">
                    Please review the highlighted fields above.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 font-display font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:text-gold-light disabled:cursor-wait disabled:opacity-70 sm:w-auto"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="size-4 animate-spin" aria-hidden="true" /> Sending…
                    </>
                  ) : (
                    <>
                      <Send className="size-4" aria-hidden="true" /> Submit Request
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

const aria = (name, errors) => ({
  'aria-invalid': errors[name] ? 'true' : undefined,
  'aria-describedby': errors[name] ? `${name}-error` : undefined,
})

const inputCls = (err) =>
  `w-full rounded-xl border bg-white px-4 py-3.5 text-[0.95rem] text-ink placeholder:text-ink/35 transition focus:outline-none focus:ring-4 ${
    err ? 'border-gold-dark ring-gold-dark/10 focus:ring-gold-dark/15' : 'border-ink/15 focus:border-gold focus:ring-gold/15'
  }`

function Field({ id, label, required, error, className = '', children }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block font-display text-sm font-medium text-ink/80">
        {label} {required && <span className="text-gold-dark">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 flex items-center gap-1.5 text-sm text-gold-dark">
          <AlertCircle className="size-3.5" aria-hidden="true" /> {error}
        </p>
      )}
    </div>
  )
}

function ContactRow({ icon: Icon, label, href, children }) {
  const inner = (
    <>
      <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-gold/30 bg-white/5 text-gold-light transition group-hover:bg-foil group-hover:text-ink">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <span>
        <span className="block font-display text-xs font-semibold uppercase tracking-[0.2em] text-white/50">{label}</span>
        <span className="mt-1 block text-white">{children}</span>
      </span>
    </>
  )
  return (
    <li>
      {href ? (
        <a href={href} className="group flex items-center gap-4 rounded-2xl transition hover:text-gold-light">
          {inner}
        </a>
      ) : (
        <div className="group flex items-center gap-4">{inner}</div>
      )}
    </li>
  )
}
