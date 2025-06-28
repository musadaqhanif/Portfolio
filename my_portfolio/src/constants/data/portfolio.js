import { BiBook, BiBriefcase, BiBuilding, BiCodeAlt, BiCube, BiCustomize, BiGrid, BiGroup, BiLogoFlask, BiPalette, BiPen, BiUser, BiBrain } from "react-icons/bi";

export const PORTFOLIO_CATEGORIES = {
    'web': {
        classIcon: 'fad fa-globe',
        reactIcon: <BiCodeAlt />,
        slug: 'web',
        label: {
            en: 'Web Development',
            id: 'Pengembangan Web',
        }
    },
    'webdev': {
        classIcon: 'fad fa-code',
        reactIcon: <BiCodeAlt />,
        slug: 'webdev',
        label: {
            en: 'Web Development',
            id: 'Pengembangan Web',
        }
    },
    'mlai': {
        classIcon: 'fad fa-brain',
        reactIcon: <BiBrain />,
        slug: 'mlai',
        label: {
            en: 'ML/AI',
            id: 'ML/AI',
        }
    },
};

export const PORTFOLIO_TYPES = {
    office: {
        icon: <BiBuilding/>,
        en: "Office Project",
        id: "Proyek Kantor"
    },
    personal: {
        icon: <BiUser/>,
        en: "Personal Project",
        id: "Proyek Pribadi"
    },
    team: {
        icon: <BiGroup/>,
        en: "Team Project",
        id: "Proyek Tim"
    },
    client: {
        icon: <BiBriefcase/>,
        en: "Client Project",
        id: "Proyek Klien"
    },
    open_source: {
        icon: <BiCodeAlt/>,
        en: "Open Source Project",
        id: "Proyek Sumber Terbuka"
    },
    research: {
        icon: <BiLogoFlask/>,
        en: "Research Project",
        id: "Proyek Penelitian"
    },
    academic: {
        icon: <BiBook/>,
        en: "Academic Project",
        id: "Proyek Akademik"
    }
};
