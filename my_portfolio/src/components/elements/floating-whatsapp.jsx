import { RiWhatsappFill } from 'react-icons/ri'
import { whatsappLink } from '@/constants/data/socials'

const FloatingWhatsapp = () => {
  // This component renders a global floating WhatsApp contact button.
  return (
    <a
      data-umami-event="Contact - Floating WhatsApp"
      aria-label="Contact on WhatsApp"
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#25d366] focus:ring-offset-2 dark:focus:ring-offset-slate-950"
      title="WhatsApp"
    >
      <RiWhatsappFill size={26} />
    </a>
  )
}

export default FloatingWhatsapp

