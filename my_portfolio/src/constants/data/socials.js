import { RiGithubFill, RiInstagramFill, RiLinkedinFill, RiTelegram2Fill, RiFacebookFill } from 'react-icons/ri'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { RiWhatsappFill } from 'react-icons/ri'

export const Socials = [
    {
        reactIcon : <MdOutlineAlternateEmail size={18}/>,
        background: '#18a34c',
        link: 'mailto:musadaqhanif678@gmail.com',
        eventName: 'Contact: Email',
        label: 'Email',
    },
    {
        reactIcon : <RiInstagramFill size={18}/>,
        background: '#c2410c',
        link: 'https://www.instagram.com/_musadaqhanif_/',
        eventName: 'Social: Instagram',
        label: 'Instagram',
    },
    {
        reactIcon : <RiLinkedinFill size={18}/>,
        background: '#3b82f6',
        link: 'https://www.linkedin.com/in/musadaq-hanif/',
        eventName: 'Social: Linkedin',
        label: 'Linkedin',
    },
    {
        reactIcon : <RiGithubFill size={18}/>,
        background: '#000',
        link: 'https://github.com/musadaqhanif',
        eventName: 'Social: Github',
        label: 'Github',
    },
    {
        reactIcon : <RiTelegram2Fill size={18}/>,
        background: '#0088cc',
        link: 'https://t.me/musadaqhanif',
        eventName: 'Contact: Telegram',
        label: 'Telegram',
    },
    {
        reactIcon : <RiFacebookFill size={18}/>,
        background: '#1877f3',
        link: 'https://www.facebook.com/mianmusadaq.mianmusada',
        eventName: 'Social: Facebook',
        label: 'Facebook',
    },
    {
        reactIcon : <RiWhatsappFill size={18}/>,
        background: '#25d366',
        link: 'https://wa.me/923076293411?text=I%20need%20your%20services!',
        eventName: 'Contact: WhatsApp',
        label: 'WhatsApp',
    },
]