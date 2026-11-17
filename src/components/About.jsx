import { Check, CalendarCheck, Phone } from 'lucide-react'
import { BUSINESS } from '../data'
import { ButtonLink, Eyebrow, Reveal, h2Cls, img, srcSet } from './ui'

const POINTS = [
  'A calm, private office in downtown Milford',
  'Each document handled carefully, step by step',
  'Clear explanations before you sign',
]

export default function About() {
  return (
    <section id="about" className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative order-last lg:order-first">
          <div className="absolute -left-4 -top-4 h-2/3 w-2/3 rounded-3xl border border-gold/40 sm:-left-6 sm:-top-6" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-3xl shadow-lift">
            <img
              src={img('about.png', 900)}
              srcSet={srcSet('about.png', [500, 700, 900, 1200])}
              sizes="(min-width: 1024px) 560px, 92vw"
              alt="Notary office at Eagle Lux Multi Services in Milford, DE, with a wooden desk, document folder and notary stamp"
              loading="lazy"
              width="928"
              height="1152"
              className="aspect-[4/5] w-full object-cover sm:aspect-square lg:aspect-[4/5]"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <Eyebrow>About Us</Eyebrow>
          <h2 className={`mt-4 ${h2Cls()}`}>About Eagle Lux Multi Services</h2>
          <p className="mt-6 text-base leading-relaxed text-ink/75 sm:text-lg">
            Eagle Lux Multi Services provides notary services from an office on SW Front Street in the heart of
            Milford, Delaware. We help residents, families, students and local businesses with the documents that matter
            most, such as affidavits, powers of attorney, school records and paperwork bound for use overseas.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink/75">
            Our approach is simple. We listen first, explain each step in plain language and give every document our
            full attention. Notarization can feel formal, so we work hard to keep it calm, private and unhurried.
          </p>
          <ul className="mt-8 space-y-3.5">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3 text-ink/80">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-gold-light/40 text-gold-dark">
                  <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* Meet the owner */}
      <div className="mx-auto mt-24 max-w-7xl px-5 sm:px-8">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-ink text-white shadow-lift">
          <div className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-gold/15 blur-3xl" aria-hidden="true" />
          <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-12 lg:items-center lg:gap-14 lg:p-16">
            <div className="flex justify-center lg:col-span-4">
              <div className="relative flex size-48 items-center justify-center rounded-full border border-gold/40 sm:size-56" aria-hidden="true">
                <div className="absolute inset-3 rounded-full border border-gold/20" />
                <span className="text-foil font-serif text-7xl font-semibold italic sm:text-8xl">JJ</span>
              </div>
            </div>
            <div className="lg:col-span-8">
              <Eyebrow dark>Meet the Business Owner</Eyebrow>
              <h2 className={`mt-4 ${h2Cls(true)}`}>
                Jesula Jean, <span className="text-foil italic">Owner</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
                Jesula Jean leads Eagle Lux Multi Services. Her aim is to give Milford a notary office where people feel
                respected, informed and confident about their paperwork. She values punctuality, discretion and
                careful preparation. She believes a good appointment starts before you arrive, with a clear answer
                about what to bring.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/75">
                When you contact Eagle Lux, you get personal attention from a local business that cares about getting
                the details right.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href="#contact" variant="gold">
                  <CalendarCheck className="size-4" aria-hidden="true" /> Book an Appointment
                </ButtonLink>
                <ButtonLink href={BUSINESS.phoneHref} variant="outlineLight">
                  <Phone className="size-4" aria-hidden="true" /> Call {BUSINESS.phone}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
