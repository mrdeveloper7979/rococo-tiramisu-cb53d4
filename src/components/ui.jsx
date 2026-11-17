import { useEffect, useRef } from 'react'

/** Netlify Image CDN URL for an image in /public/img */
export const img = (file, w, extra = '') => `/.netlify/images?url=/img/${file}&w=${w}&fm=webp&q=78${extra}`

export const srcSet = (file, widths) => widths.map((w) => `${img(file, w)} ${w}w`).join(', ')

/** Adds `is-visible` once the element scrolls into view */
export function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  )
}

export function Eyebrow({ children, dark = false, className = '' }) {
  return (
    <p
      className={`inline-flex items-center gap-3 font-display text-xs font-semibold uppercase tracking-[0.28em] ${
        dark ? 'text-gold-light' : 'text-gold-dark'
      } ${className}`}
    >
      <span className={`h-px w-8 ${dark ? 'bg-gold-light/70' : 'bg-gold'}`} aria-hidden="true" />
      {children}
    </p>
  )
}

/** Shared H2 style — serif display face for a refined, editorial feel */
export const h2Cls = (dark = false) =>
  `font-serif text-[2.1rem] font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem] ${dark ? 'text-white' : 'text-ink'}`

export function SectionHeading({ eyebrow, title, intro, id, dark = false, center = true, className = '' }) {
  return (
    <Reveal className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <h2 id={id} className={`mt-4 ${h2Cls(dark)}`}>
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${dark ? 'text-white/70' : 'text-ink/70'} ${center ? 'mx-auto max-w-2xl' : ''}`}>
          {intro}
        </p>
      )}
    </Reveal>
  )
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-display text-sm font-semibold tracking-wide transition duration-300 focus-visible:outline-offset-4'

export function ButtonLink({ variant = 'gold', className = '', children, ...props }) {
  const styles = {
    gold: 'bg-foil text-ink shadow-[0_10px_30px_-10px_rgb(181_145_58/0.7)] hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-10px_rgb(181_145_58/0.85)]',
    outlineLight: 'border border-white/30 text-white hover:border-gold-light hover:text-gold-light',
    outlineDark: 'border border-ink/15 text-ink hover:border-gold-dark hover:text-gold-dark',
    dark: 'bg-ink text-white hover:-translate-y-0.5 hover:bg-charcoal hover:text-gold-light',
  }
  return (
    <a className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </a>
  )
}
