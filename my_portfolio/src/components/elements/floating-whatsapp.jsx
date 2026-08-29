import { RiWhatsappFill } from 'react-icons/ri';

import { whatsappLink } from '@/constants/data/socials';

const FloatingWhatsapp = () => (
  <a
    href={whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Message me on WhatsApp"
    title="Message me on WhatsApp"
    className="group fixed bottom-6 right-6 z-40 flex h-13 items-center gap-0 overflow-hidden rounded-full bg-[#25d366] px-3.5 py-3.5 text-white shadow-lift transition-all duration-300 ease-out hover:gap-2 hover:pr-5"
  >
    <RiWhatsappFill size={24} aria-hidden className="shrink-0" />
    <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-300 ease-out group-hover:max-w-[9rem]">
      Chat on WhatsApp
    </span>
  </a>
);

export default FloatingWhatsapp;
