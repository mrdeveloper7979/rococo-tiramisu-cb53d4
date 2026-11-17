import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import { Ticker, AtAGlance } from './components/Highlights'
import About from './components/About'
import Services from './components/Services'
import { WhyUs, HowItWorks } from './components/WhyUs'
import { ServiceArea, Faq } from './components/Info'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  // Shared so service CTAs can pre-select the contact form dropdown
  const [service, setService] = useState('')

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-gold-light focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero onSelect={setService} />
        <Ticker />
        <AtAGlance />
        <About />
        <Services onSelect={setService} />
        <WhyUs />
        <HowItWorks />
        <ServiceArea />
        <Faq />
        <Contact service={service} setService={setService} />
      </main>
      <Footer onSelect={setService} />
    </>
  )
}
