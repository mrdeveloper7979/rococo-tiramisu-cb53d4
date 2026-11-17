import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { BUSINESS, NAV, SERVICES, HOURS } from '../data'
import { img } from './ui'

export default function Footer({ onSelect }) {
  return (
    <footer className="border-t border-gold/20 bg-ink text-white">
      <div className="hairline h-px" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <img src={img('logo.png', 360)} alt="Eagle Lux Multi Services LLC logo" width="180" height="125" loading="lazy" className="h-28 w-auto" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
            Eagle Lux Multi Services provides professional, reliable notary services in Milford, Delaware, helping
            individuals and businesses handle important documents with confidence and care.
          </p>
        </div>

        <FooterCol title="Quick Links" className="lg:col-span-2">
          {NAV.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="text-white/65 transition hover:text-gold-light">
                {n.label}
              </a>
            </li>
          ))}
        </FooterCol>

        <FooterCol title="Our Services" className="lg:col-span-3">
          {SERVICES.map((s) => (
            <li key={s.title}>
              <a href="#contact" onClick={() => onSelect(s.title)} className="text-white/65 transition hover:text-gold-light">
                {s.title}
              </a>
            </li>
          ))}
        </FooterCol>

        <FooterCol title="Contact" className="lg:col-span-3">
          <li>
            <a href={BUSINESS.phoneHref} className="flex gap-3 text-white/65 transition hover:text-gold-light">
              <Phone className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" /> {BUSINESS.phone}
            </a>
          </li>
          <li>
            <a href={BUSINESS.emailHref} className="flex gap-3 break-all text-white/65 transition hover:text-gold-light">
              <Mail className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" /> {BUSINESS.email}
            </a>
          </li>
          <li className="flex gap-3 text-white/65">
            <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
            <address className="not-italic">
              {BUSINESS.street}
              <br />
              {BUSINESS.cityLine}
              <br />
              {BUSINESS.country}
            </address>
          </li>
          <li className="flex gap-3 text-white/65">
            <Clock className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
            <span>
              {HOURS.map((h) => (
                <span key={h.day} className="block">
                  {h.day}: {h.time}
                </span>
              ))}
            </span>
          </li>
        </FooterCol>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Eagle Lux Multi Services LLC. All rights reserved.</p>
          <p>Notary Services · Milford, Delaware</p>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, className = '', children }) {
  return (
    <div className={className}>
      <h2 className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-gold-light">{title}</h2>
      <ul className="mt-5 space-y-3 text-sm">{children}</ul>
    </div>
  )
}
