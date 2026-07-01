import { BiBook, BiBriefcase, BiBuilding, BiCodeAlt, BiGroup, BiLogoFlask, BiUser, BiBrain, BiDesktop, BiGrid, BiCube } from "react-icons/bi";

export const PORTFOLIO_CATEGORIES = {
    all: {
        classIcon: 'fad fa-grid-2-plus',
        reactIcon: <BiGrid />,
        slug: 'all',
        label: {
            en: 'All',
            id: 'Semua',
        }
    },
    'web-development': {
        classIcon: 'fad fa-globe',
        reactIcon: <BiCodeAlt />,
        slug: 'web-development',
        label: {
            en: 'Web Development',
            id: 'Pengembangan Web',
        }
    },
    'desktop-application': {
        classIcon: 'fad fa-desktop',
        reactIcon: <BiDesktop />,
        slug: 'desktop-application',
        label: {
            en: 'Desktop Application',
            id: 'Aplikasi Desktop',
        }
    },
    'ml-ai': {
        classIcon: 'fad fa-brain',
        reactIcon: <BiBrain />,
        slug: 'ml-ai',
        label: {
            en: 'ML/AI',
            id: 'ML/AI',
        }
    },
    'chrome-extensions': {
        classIcon: 'fad fa-puzzle-piece',
        reactIcon: <BiCodeAlt />,
        slug: 'chrome-extensions',
        label: {
            en: 'Chrome Extensions',
            id: 'Ekstensi Chrome',
        }
    },
    'web-design': {
        classIcon: 'fad fa-pen-nib',
        reactIcon: <BiCodeAlt />,
        slug: 'web-design',
        label: {
            en: 'Web Design',
            id: 'Desain Web',
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
    },
    'saas-platform': {
        icon: <BiCube/>,
        en: "SaaS Platform",
        id: "Platform SaaS"
    },
    'backend-security': {
        icon: <BiBriefcase/>,
        en: "Backend Security Project",
        id: "Proyek Keamanan Backend"
    }
};
