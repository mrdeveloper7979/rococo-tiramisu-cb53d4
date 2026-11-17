import { useState } from 'react'
import { MapPin, Navigation, Clock, CalendarCheck, Plus } from 'lucide-react'
import { BUSINESS, HOURS, FAQS } from '../data'
import { ButtonLink, Eyebrow, Reveal, SectionHeading } from './ui'

const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.mapsQuery)}`
const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(BUSINESS.mapsQuery)}&z=14&output=embed`

const AREAS = [
  'Harrington, DE',
  'Felton, DE',
  'Greenwood, DE',
  'Milton, DE',
  'Bridgeville, DE',
  'Georgetown, DE',
  'Camden, DE',
  'Dover, DE',
  'Lewes, DE',
  'Seaford, DE',
  'Rehoboth Beach, DE',
]

export function ServiceArea() {
  return (
    <section id="service-area" className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <Eyebrow>Service Area</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Serving Milford, Delaware and Nearby Communities
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink/70 sm:text-lg">
              Our office is conveniently located in downtown Milford, DE. Clients are welcome to visit us in person to
              discuss their needs and receive our services. For added convenience, we also offer the option of having a
              representative visit you at your location. We proudly serve Milford and surrounding communities within an
              approximately 20–25-mile service area.
            </p>

            <div className="mt-8">
              <p className="font-display font-semibold">Areas We Serve</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {AREAS.map((a) => (
                  <li key={a} className="rounded-full border border-ink/[0.07] bg-white px-3 py-1 text-sm text-ink/70">
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex items-start gap-4 rounded-2xl border border-ink/[0.07] bg-white p-6 shadow-soft">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-ink text-gold-light">
                <MapPin className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-display font-semibold">Our Office</p>
                <address className="mt-1 not-italic leading-relaxed text-ink/70">
                  {BUSINESS.street}
                  <br />
                  {BUSINESS.cityLine}, USA
                </address>
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-gold-dark hover:text-ink"
                >
                  <Navigation className="size-4" aria-hidden="true" /> Get Directions
                </a>
              </div>
            </div>

            {/* Hours card */}
            <div id="hours" className="mt-6 overflow-hidden rounded-2xl bg-ink text-white shadow-lift">
              <div className="flex items-center gap-3 border-b border-white/10 px-6 py-5">
                <Clock className="size-5 text-gold-light" aria-hidden="true" />
                <h3 className="font-display text-lg font-semibold">Business Hours</h3>
              </div>
              <dl className="divide-y divide-white/10 px-6">
                {HOURS.map((h) => (
                  <div key={h.day} className="flex items-center justify-between gap-4 py-4">
                    <dt className="text-white/80">{h.day}</dt>
                    <dd className={`text-right font-display font-medium ${h.time.startsWith('By') ? 'text-gold-light' : 'text-white'}`}>
                      {h.time}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="px-6 pb-6 pt-2">
                <ButtonLink href="#contact" variant="gold" className="w-full">
                  <CalendarCheck className="size-4" aria-hidden="true" />
                  Schedule Your Appointment
                </ButtonLink>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <div className="relative h-full min-h-[380px] overflow-hidden rounded-3xl border border-ink/[0.07] bg-white p-2 shadow-lift">
              <iframe
                title="Map showing Eagle Lux Multi Services at 18 SW Front St Ste 100, Milford, DE"
                src={mapsEmbed}
                className="h-full min-h-[364px] w-full rounded-[1.25rem] grayscale-[35%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faqs" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              center={false}
              eyebrow="FAQs"
              title="Frequently Asked Questions"
              intro="Helpful answers to common questions. Document-specific requirements may vary, so please contact us with any questions about your situation."
            />
            <Reveal delay={100}>
              <ButtonLink href="#contact" variant="outlineDark" className="mt-8">
                Still have questions? Contact us
              </ButtonLink>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-8">
          <ul className="space-y-3">
            {FAQS.map((f, i) => {
              const isOpen = open === i
              const id = `faq-${i}`
              return (
                <li
                  key={f.q}
                  className={`rounded-2xl border transition-colors duration-300 ${
                    isOpen ? 'border-gold/40 bg-ivory' : 'border-ink/[0.08] bg-white hover:border-gold/30'
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      id={`${id}-btn`}
                      aria-expanded={isOpen}
                      aria-controls={`${id}-panel`}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left font-display text-base font-semibold sm:text-lg"
                    >
                      {f.q}
                      <span
                        className={`flex size-9 shrink-0 items-center justify-center rounded-full transition duration-300 ${
                          isOpen ? 'rotate-45 bg-ink text-gold-light' : 'bg-ivory text-gold-dark'
                        }`}
                        aria-hidden="true"
                      >
                        <Plus className="size-4" />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`${id}-panel`}
                    role="region"
                    aria-labelledby={`${id}-btn`}
                    className={`grid transition-[grid-template-rows] duration-400 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 leading-relaxed text-ink/70">{f.a}</p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
