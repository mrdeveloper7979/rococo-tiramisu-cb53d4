import { ArrowUpRight } from 'lucide-react'
import { SERVICES } from '../data'
import { Reveal, SectionHeading, img } from './ui'

export default function Services({ onSelect }) {
  return (
    <section id="services" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Notary Services"
          title="Notary Services in Milford, Delaware"
          intro="We offer five notarial services, each handled carefully and professionally. Read the guides below to learn more, or choose a service to request an appointment."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-6">
          {SERVICES.map((s, i) => (
            <Reveal
              key={s.title}
              delay={(i % 3) * 90}
              className={`lg:col-span-2 ${i === 3 ? 'lg:col-start-2' : ''} ${i === 4 ? 'md:col-span-2 md:mx-auto md:w-[calc(50%-0.75rem)] lg:mx-0 lg:w-auto' : ''}`}
            >
              <ServiceCard service={s} index={i} onSelect={onSelect} />
            </Reveal>
          ))}
        </div>

        {/* Seal detail banner */}
        <Reveal className="relative mt-20 overflow-hidden rounded-3xl bg-ink">
          <img
            src={img('detail.png', 1400)}
            alt=""
            loading="lazy"
            width="1376"
            height="768"
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-transparent" aria-hidden="true" />
          <div className="relative flex flex-col items-start gap-6 p-8 sm:p-12 lg:max-w-2xl">
            <p className="font-display text-2xl font-semibold leading-snug text-white sm:text-3xl">
              Have a question about your document before you visit?
            </p>
            <p className="text-white/70">
              Send us a few details and we&rsquo;ll explain what to bring and what to expect at your appointment.
              Requirements vary by document and by the agency that will receive it.
            </p>
            <a
              href="#contact"
              className="bg-foil inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-display text-sm font-semibold text-ink transition hover:-translate-y-0.5"
            >
              Ask a Question <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ServiceCard({ service, index, onSelect }) {
  const Icon = service.icon
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink/[0.07] bg-white p-8 shadow-soft transition duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-lift">
      <span
        className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-foil transition-transform duration-500 group-hover:scale-x-100"
        aria-hidden="true"
      />
      <div className="flex items-start justify-between">
        <span className="relative flex size-14 items-center justify-center rounded-2xl bg-ink text-gold-light shadow-[inset_0_0_0_1px_rgb(181_145_58/0.45)] transition duration-500 group-hover:bg-foil group-hover:text-ink">
          <Icon className="size-6" strokeWidth={1.6} aria-hidden="true" />
        </span>
        <span className="font-display text-sm font-semibold tracking-[0.2em] text-gold-dark/50">0{index + 1}</span>
      </div>
      <h3 className="mt-7 font-serif text-[1.65rem] font-semibold leading-tight tracking-tight">{service.title}</h3>
      <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink/65">{service.description}</p>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-ink/[0.07] pt-6">
        <a
          href={service.guide}
          className="font-display text-sm font-semibold text-ink/70 underline decoration-gold/50 underline-offset-4 transition hover:text-gold-dark"
          aria-label={`Learn more about ${service.title}`}
        >
          Learn more
        </a>
        <a
          href="#contact"
          onClick={() => onSelect(service.title)}
          className="inline-flex items-center gap-2 font-display text-sm font-semibold text-gold-dark transition-colors hover:text-ink"
          aria-label={`Request an appointment for ${service.title}`}
        >
          Request
          <span className="flex size-8 items-center justify-center rounded-full border border-gold/40 transition duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-gold-light">
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </span>
        </a>
      </div>
    </article>
  )
}
