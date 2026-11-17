import { Globe2, Copy, ScrollText, FileSignature, PenLine } from 'lucide-react'
import { SERVICES as SERVICE_DATA } from './content'

// Plain content lives in content.js (shared with the build's SEO generation).
export { BUSINESS, HOURS, NAV, FAQS, SEO } from './content'

const ICONS = { apostille: Globe2, copy: Copy, jurat: ScrollText, ack: FileSignature, witness: PenLine }

export const SERVICES = SERVICE_DATA.map((s) => ({ ...s, icon: ICONS[s.key] }))
