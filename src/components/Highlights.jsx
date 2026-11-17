import { Sparkle } from 'lucide-react'
import { BUSINESS, SERVICES } from '../data'
import { Eyebrow, Reveal, h2Cls } from './ui'

/** Gold ticker of the five services (list is duplicated for a seamless loop). */
export function Ticker() {
  const items = [...SERVICES, ...SERVICES]
  return (
    <div className="marquee-wrap relative overflow-hidden border-y border-gold/25 bg-charcoal py-4" aria-label="Services offered">
      <ul className="marquee flex w-max items-center gap-10">
        {items.map((s, i) => (
          <li
            key={`${s.key}-${i}`}
            aria-hidden={i >= SERVICES.length ? 'true' : undefined}
            className="flex items-center gap-10 whitespace-nowrap font-display text-sm font-medium uppercase tracking-[0.25em] text-gold-light/90"
          >
            {s.title}
            <Sparkle className="size-3.5 text-gold" aria-hidden="true" />
          </li>
        ))}
      </ul>
    </div>
  )
}

const FACTS = [
  ['Business', BUSINESS.name],
  ['Owner', BUSINESS.owner],
  ['Office', BUSINESS.fullAddress],
  ['Hours', 'Mon–Fri 10:00 AM–6:00 PM; Sat–Sun by appointment'],
  ['Service area', `Milford, DE and communities within ${BUSINESS.radius}`],
  ['Contact', `${BUSINESS.phone} · ${BUSINESS.email}`],
]

/** Concise, quotable summary of the business — useful for visitors and AI search. */
export function AtAGlance() {
  return (
    <section aria-labelledby="glance-heading" className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-6">
          <Eyebrow>At a Glance</Eyebrow>
          <h2 id="glance-heading" className={`mt-4 ${h2Cls()}`}>
            A Professional Notary Public in Milford, Delaware
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink/75 sm:text-lg">
            Eagle Lux Multi Services is a notary office at 18 SW Front St in Milford, Delaware, owned by{' '}
            {BUSINESS.owner}. We provide five notarial services: apostille or authentication assistance, notarial copy
            certification, jurats, notarial acknowledgements and signature witnessing. Visits take place at our office,
            on weekdays or by appointment at weekends.
          </p>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-6">
          <dl className="overflow-hidden rounded-3xl border border-ink/[0.08] bg-ivory shadow-soft">
            {FACTS.map(([k, v]) => (
              <div key={k} className="grid gap-1 border-b border-ink/[0.07] px-6 py-4 last:border-0 sm:grid-cols-[9rem_1fr] sm:gap-4">
                <dt className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">{k}</dt>
                <dd className="break-words text-[0.95rem] text-ink/85">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
