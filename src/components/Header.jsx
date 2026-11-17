import { useEffect, useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, Clock, CalendarCheck } from 'lucide-react'
import { BUSINESS, NAV } from '../data'
import { img } from './ui'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the nav item for the section in view
  useEffect(() => {
    const sections = NAV.map((n) => document.querySelector(n.href)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`))
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? 'border-b border-gold/20 bg-ink/95 shadow-[0_10px_30px_-15px_rgb(0_0_0/0.6)] backdrop-blur'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      {/* Utility bar — collapses once the page scrolls */}
      <div
        className={`hidden overflow-hidden border-b border-white/10 transition-[max-height,opacity] duration-300 lg:block ${
          scrolled ? 'max-h-0 border-transparent opacity-0' : 'max-h-12 opacity-100'
        }`}
      >
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between gap-6 px-8 text-[0.8rem] text-white/70">
          <p className="flex items-center gap-2">
            <MapPin className="size-3.5 text-gold" aria-hidden="true" />
            {BUSINESS.fullAddress}
          </p>
          <div className="flex items-center gap-6">
            <p className="flex items-center gap-2">
              <Clock className="size-3.5 text-gold" aria-hidden="true" />
              Mon–Fri 10 AM–6 PM · Weekends by appointment
            </p>
            <a href={BUSINESS.emailHref} className="flex items-center gap-2 transition hover:text-gold-light">
              <Mail className="size-3.5 text-gold" aria-hidden="true" />
              {BUSINESS.email}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#home" className="flex shrink-0 items-center" aria-label="Eagle Lux Multi Services — back to top">
          <img
            src={img('logo.png', 220)}
            alt="Eagle Lux Multi Services logo"
            width="104"
            height="72"
            className="h-[58px] w-auto"
          />
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={active === item.href ? 'true' : undefined}
                  className={`relative rounded-full px-3 py-2 font-display text-[0.9rem] font-medium tracking-wide transition-colors xl:px-3.5 ${
                    active === item.href ? 'text-gold-light' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-3 -bottom-0.5 h-px origin-left bg-gold-light transition-transform duration-300 ${
                      active === item.href ? 'scale-x-100' : 'scale-x-0'
                    }`}
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={BUSINESS.phoneHref}
            className="hidden items-center gap-2 rounded-full border border-gold/50 px-4 py-2.5 font-display text-sm font-semibold text-white transition hover:border-gold-light hover:text-gold-light xl:inline-flex"
          >
            <Phone className="size-4 text-gold-light" aria-hidden="true" />
            {BUSINESS.phone}
          </a>
          <a
            href="#contact"
            className="bg-foil hidden items-center gap-2 rounded-full px-5 py-2.5 font-display text-sm font-semibold text-ink shadow-[0_8px_24px_-10px_rgb(229_208_105/0.6)] transition hover:-translate-y-0.5 sm:inline-flex"
          >
            <CalendarCheck className="size-4" aria-hidden="true" />
            Book Now
          </a>
          <a
            href={BUSINESS.phoneHref}
            className="bg-foil inline-flex size-11 items-center justify-center rounded-full text-ink sm:hidden"
            aria-label={`Call ${BUSINESS.phone}`}
          >
            <Phone className="size-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-gold-light hover:text-gold-light lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-y-auto transition-[max-height,opacity] duration-400 lg:hidden ${
          open ? 'max-h-[calc(100svh-76px)] opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        }`}
      >
        <nav aria-label="Mobile" className="border-t border-white/10 px-5 pb-8 pt-4 sm:px-8">
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? undefined : -1}
                  className={`flex items-center justify-between border-b border-white/10 py-4 font-display text-lg ${
                    active === item.href ? 'text-gold-light' : 'text-white'
                  }`}
                >
                  {item.label}
                  <span className="h-px w-6 bg-gold/60" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a
              href={BUSINESS.phoneHref}
              tabIndex={open ? undefined : -1}
              className="bg-foil flex items-center justify-center gap-2 rounded-full py-3.5 font-display font-semibold text-ink"
            >
              <Phone className="size-4" aria-hidden="true" /> Call {BUSINESS.phone}
            </a>
            <a
              href={BUSINESS.emailHref}
              tabIndex={open ? undefined : -1}
              className="flex items-center justify-center gap-2 rounded-full border border-white/25 py-3.5 font-display font-semibold text-white"
            >
              <Mail className="size-4" aria-hidden="true" /> Email Us
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
