import { CalendarCheck, Phone, Check, ArrowRight, Stamp } from 'lucide-react'
import { BUSINESS, SERVICES } from '../data'
import { ButtonLink, img, srcSet } from './ui'

const POINTS = ['In-office appointments in downtown Milford', 'Weekday hours, weekends by appointment', 'Clear guidance on what to bring']

export default function Hero({ onSelect }) {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-ink text-white">
      <img
        src={img('hero.png', 1600)}
        srcSet={srcSet('hero.png', [800, 1200, 1600, 2000])}
        sizes="100vw"
        alt="Notary public in Milford, Delaware signing a document beside a brass notary seal"
        width="1376"
        height="768"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center]"
        fetchPriority="high"
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#000_0%,rgb(0_0_0/0.93)_38%,rgb(0_0_0/0.7)_64%,rgb(0_0_0/0.45)_100%)]"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink to-transparent" aria-hidden="true" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-32 sm:px-8 lg:min-h-[100svh] lg:grid-cols-12 lg:pb-24 lg:pt-44">
        <div className="lg:col-span-7">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-ink/50 px-4 py-1.5 font-display text-xs font-medium uppercase tracking-[0.22em] text-gold-light backdrop-blur">
            <Stamp className="size-3.5" aria-hidden="true" />
            Notary Public · Milford, Delaware
          </p>

          <h1 className="mt-7 font-serif text-[2.75rem] font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.6rem]">
            Notary Services in <span className="text-foil italic">Milford, DE</span>
            <span className="mt-3 block font-display text-xl font-medium leading-snug tracking-normal text-white/85 sm:text-2xl lg:text-[1.65rem]">
              Handled with precision, discretion and care.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Eagle Lux Multi Services is a professional notary office on SW Front Street in Milford, Delaware. We help
            individuals, families and businesses with acknowledgements, jurats, copy certification, signature witnessing
            and apostille assistance.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-3 sm:gap-4">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-sm text-white/80">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold-light">
                  <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="#contact" variant="gold" className="px-7 py-4">
              <CalendarCheck className="size-4" aria-hidden="true" />
              Book an Appointment
            </ButtonLink>
            <ButtonLink href={BUSINESS.phoneHref} variant="outlineLight" className="px-7 py-4">
              <Phone className="size-4" aria-hidden="true" />
              Call {BUSINESS.phone}
            </ButtonLink>
          </div>
        </div>

        {/* Quick service picker — pre-selects the appointment form */}
        <div className="lg:col-span-5 lg:flex lg:justify-end">
          <div className="w-full rounded-3xl border border-gold/25 bg-ink/70 p-6 shadow-[0_30px_80px_-30px_rgb(181_145_58/0.45)] backdrop-blur-md sm:p-8 lg:max-w-md">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-gold-light">Start Your Request</p>
            <p className="mt-3 font-serif text-[1.7rem] font-semibold leading-tight">Which service do you need?</p>
            <ul className="mt-6 space-y-2.5">
              {SERVICES.map(({ title, icon: Icon }) => (
                <li key={title}>
                  <a
                    href="#contact"
                    onClick={() => onSelect(title)}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 transition duration-300 hover:border-gold/60 hover:bg-white/[0.07]"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold-light transition group-hover:bg-foil group-hover:text-ink">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <span className="flex-1 font-display text-[0.95rem] font-medium">{title}</span>
                    <ArrowRight className="size-4 text-white/40 transition group-hover:translate-x-1 group-hover:text-gold-light" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-white/10 pt-5 text-sm text-white/60">
              Prefer to talk first?{' '}
              <a href={BUSINESS.phoneHref} className="font-semibold text-gold-light underline-offset-4 hover:underline">
                Call {BUSINESS.phone}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
