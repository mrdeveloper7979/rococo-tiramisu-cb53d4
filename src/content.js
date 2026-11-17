// Plain-data content module (no JSX / icons) so it can be imported both by the
// React app and by vite.config.js, which generates JSON-LD, sitemap and robots
// from it. Keeping one source guarantees structured data matches visible copy.

export const DEFAULT_SITE_URL = 'https://eagle-lux-landing.netlify.app'

export const SEO = {
  title: 'Notary Services in Milford, DE | Eagle Lux Multi Services',
  description:
    'Looking for professional notary services in Milford, Delaware? Eagle Lux Multi Services offers apostille assistance, acknowledgements, jurats, copy certification and signature witnessing.',
  ogImage: '/.netlify/images?url=/img/hero.png&w=1200&h=630&fit=cover&fm=jpg&q=80',
  ogImageAlt: 'A fountain pen signing a document beside a brass notary seal at Eagle Lux Multi Services in Milford, Delaware',
}

export const BUSINESS = {
  name: 'Eagle Lux Multi Services',
  legalName: 'Eagle Lux Multi Services LLC',
  owner: 'Jesula Jean',
  phone: '(954) 856-4722',
  phoneE164: '+19548564722',
  phoneHref: 'tel:+19548564722',
  email: 'documents@eagleluxmultiservices.com',
  emailHref: 'mailto:documents@eagleluxmultiservices.com',
  street: '18 SW Front St Ste 100',
  city: 'Milford',
  region: 'DE',
  regionName: 'Delaware',
  postalCode: '19963',
  cityLine: 'Milford, DE 19963',
  country: 'United States',
  fullAddress: '18 SW Front St Ste 100, Milford, DE 19963, USA',
  mapsQuery: '18 SW Front St Ste 100, Milford, DE 19963',
  radius: 'approximately 15–20 miles',
}

export const HOURS = [
  { day: 'Monday – Friday', time: '10:00 AM – 6:00 PM' },
  { day: 'Saturday', time: 'By Appointment Only' },
  { day: 'Sunday', time: 'By Appointment Only' },
]

export const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Service Area', href: '#service-area' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
]

/** The five services offered — titles are also the contact-form dropdown values. */
export const SERVICES = [
  {
    key: 'apostille',
    title: 'Apostille or Authentication',
    guide: '#apostille',
    description:
      'Guidance and notarial support for documents that must be apostilled or authenticated before use in another country.',
  },
  {
    key: 'copy',
    title: 'Notarial Copy Certification',
    guide: '#copy-certification',
    description: 'Certification that a copy is a true and complete reproduction of an original, where Delaware rules permit it.',
  },
  {
    key: 'jurat',
    title: 'Jurat',
    guide: '#acknowledgements-jurats',
    description: 'You swear or affirm that a document’s contents are true, then sign it in the notary’s presence.',
  },
  {
    key: 'ack',
    title: 'Notarial Acknowledgement',
    guide: '#acknowledgements-jurats',
    description: 'You appear in person, are identified, and confirm that you signed the document willingly.',
  },
  {
    key: 'witness',
    title: 'Signature Witnessing',
    guide: '#copy-certification',
    description: 'A notary observes you sign and records that the signature was made in their presence.',
  },
]

export const FAQS = [
  {
    q: 'What notary services do you offer in Milford, DE?',
    a: 'Eagle Lux Multi Services offers five services at our Milford office: apostille or authentication assistance, notarial copy certification, jurats, notarial acknowledgements and signature witnessing.',
  },
  {
    q: 'What is the difference between an acknowledgement and a jurat?',
    a: 'With an acknowledgement, you confirm that you signed the document willingly; you may have signed beforehand. With a jurat, you swear or affirm that the contents are true and sign in front of the notary. Your document’s wording usually shows which act is needed.',
  },
  {
    q: 'Can a notary issue an apostille?',
    a: 'No. Apostilles and authentication certificates are issued by government authorities. For Delaware documents, that is generally the Delaware Secretary of State. We can help you prepare your paperwork and notarize documents when a notarization is required first.',
  },
  {
    q: 'What should I bring to my appointment?',
    a: 'Bring the complete document, including all pages, and a current government-issued photo ID for every signer. Don’t sign in advance unless you have been told it is acceptable. If your document needs witnesses, ask us about this when you book.',
  },
  {
    q: 'Can you certify a copy of a birth or marriage certificate?',
    a: 'Generally, no. Certified copies of vital records and other public records are usually obtained from the agency that issued them. Contact us about your document first, because requirements vary.',
  },
  {
    q: 'Can you tell me which notarial act I need?',
    a: 'A notary who is not an attorney cannot give legal advice or choose the notarial act for you. If your document has no notarial wording, check with the person or agency who asked for it.',
  },
  {
    q: 'Do you offer weekend appointments?',
    a: 'Yes. Our office is open Monday to Friday, 10:00 AM to 6:00 PM. Saturday and Sunday appointments are available by appointment only. Call or send a request in advance.',
  },
]
