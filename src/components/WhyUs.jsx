import { UserCheck, FileSearch, CalendarDays, ShieldCheck, MapPinned, MessagesSquare, PhoneCall, CalendarCheck2, Stamp } from 'lucide-react'
import { Reveal, SectionHeading } from './ui'

const REASONS = [
  { icon: UserCheck, title: 'Professional and courteous assistance', text: 'A respectful, polished experience for every client and every document.' },
  { icon: FileSearch, title: 'Attention to document details', text: 'Careful handling of each step so your notarization is completed correctly.' },
  { icon: CalendarDays, title: 'Convenient appointment scheduling', text: 'Weekday office hours, with Saturday and Sunday appointments available.' },
  { icon: ShieldCheck, title: 'Commitment to client confidentiality', text: 'Your personal information and documents are treated with discretion.' },
  { icon: MapPinned, title: 'Reliable local service', text: 'A dependable notary office right in the heart of Milford, Delaware.' },
  { icon: MessagesSquare, title: 'Clear communication', text: 'Straightforward answers about what to bring and what to expect.' },
]

const STEPS = [
  { n: '01', icon: PhoneCall, title: 'Contact Us', text: 'Tell us about your notarization requirements.' },
  { n: '02', icon: CalendarCheck2, title: 'Schedule Your Appointment', text: 'Arrange a convenient time for your service.' },
  { n: '03', icon: Stamp, title: 'Get Professional Assistance', text: 'Receive professional assistance with your notarial needs.' },
]

export function WhyUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div
        className="pointer-events-none absolute -right-40 -top-40 size-[34rem] rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          dark
          eyebrow="Why Choose Us"
          title={
            <>
              Why Choose <span className="text-foil">Eagle Lux Multi Services?</span>
            </>
          }
          intro="Important documents deserve a notary who takes them seriously. Here is what you can expect when you work with us."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className="group bg-ink p-8 transition-colors duration-300 hover:bg-charcoal sm:p-10">
              <Reveal delay={(i % 3) * 80}>
                <Icon className="size-7 text-gold transition-colors duration-300 group-hover:text-gold-light" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="mt-6 font-display text-lg font-semibold">{title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/60">{text}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function HowItWorks() {
  return (
    <section id="process" aria-labelledby="how-heading" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title={<span id="how-heading">A Simple, Three-Step Process</span>}
          intro="Getting your documents notarized should feel easy. Here is how it works."
        />
        <div className="relative mt-16">
          <div className="hairline absolute left-[16.66%] right-[16.66%] top-10 hidden h-px md:block" aria-hidden="true" />
        <ol className="relative grid gap-10 md:grid-cols-3 md:gap-8">
          {STEPS.map(({ n, icon: Icon, title, text }, i) => (
            <Reveal as="li" key={n} delay={i * 120} className="relative text-center">
              <div className="relative mx-auto flex size-20 items-center justify-center rounded-full border border-gold/30 bg-white shadow-soft">
                <Icon className="size-7 text-gold-dark" strokeWidth={1.6} aria-hidden="true" />
                <span className="bg-foil absolute -right-1 -top-1 flex size-8 items-center justify-center rounded-full font-display text-xs font-bold text-ink">
                  {n}
                </span>
              </div>
              <h3 className="mt-7 font-display text-xl font-semibold">
                <span className="sr-only">Step {n}: </span>
                {title}
              </h3>
              <p className="mx-auto mt-2.5 max-w-xs text-ink/65">{text}</p>
            </Reveal>
          ))}
        </ol>
        </div>
      </div>
    </section>
  )
}
