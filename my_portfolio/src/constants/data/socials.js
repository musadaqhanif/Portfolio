import { RiGithubFill, RiInstagramFill, RiLinkedinFill, RiFacebookFill } from 'react-icons/ri'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { RiWhatsappFill } from 'react-icons/ri'

export const whatsappNumber = '923076297161'
export const whatsappPrefilledMessage = "Hi, I have visited your website and I'm interested in your services."
export const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappPrefilledMessage)}`
export const fiverrProfileLink = 'https://www.fiverr.com/musadaq5'

export const Socials = [
    {
        reactIcon : <RiWhatsappFill size={18}/>,
        background: '#25d366',
        link: whatsappLink,
        eventName: 'Contact: WhatsApp',
        label: 'WhatsApp',
    },
    {
        reactIcon : <RiGithubFill size={18}/>,
        background: '#000',
        link: 'https://github.com/musadaqhanif',
        eventName: 'Social: Github',
        label: 'Github',
    },
    {
        reactIcon : <RiLinkedinFill size={18}/>,
        background: '#3b82f6',
        link: 'https://www.linkedin.com/in/musadaq-hanif/',
        eventName: 'Social: Linkedin',
        label: 'Linkedin',
    },
    {
        reactIcon : <MdOutlineAlternateEmail size={18}/>,
        background: '#18a34c',
        link: 'mailto:musadaqhanif678@gmail.com',
        eventName: 'Contact: Email',
        label: 'Email',
    },
    {
        reactIcon : <RiFacebookFill size={18}/>,
        background: '#1877f3',
        link: 'https://www.facebook.com/mianmusadaq.mianmusada',
        eventName: 'Social: Facebook',
        label: 'Facebook',
    },
    {
        reactIcon : <RiInstagramFill size={18}/>,
        background: '#c2410c',
        link: 'https://www.instagram.com/_musadaqhanif_/',
        eventName: 'Social: Instagram',
        label: 'Instagram',
    },
]

