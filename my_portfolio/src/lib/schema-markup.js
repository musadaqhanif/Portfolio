export const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Person",
            "name": "Musadaq Hanif",
            "url": "https://dwiwijaya.com/",
            "jobTitle": "Fullstack Developer",
            "worksFor": { "@type": "Organization", "name": "Freelancer" },
            "sameAs": [
                "https://www.linkedin.com/in/musadaq-hanif/",
                "https://github.com/musadaqhanif",
                "https://www.instagram.com/_musadaqhanif_/"
            ]
        },
        {
            "@type": "WebSite",
            "name": "Musadaq Hanif - Personal Website",
            "url": "https://dwiwijaya.com/",
            "potentialAction": {
                "@type": "SearchAction",
                "target": "https://dwiwijaya.com/?s={search_term_string}",
                "query-input": "required name=search_term_string"
            }
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dwiwijaya.com/" },
                { "@type": "ListItem", "position": 2, "name": "About", "item": "https://dwiwijaya.com/about" },
                { "@type": "ListItem", "position": 3, "name": "Skillset", "item": "https://dwiwijaya.com/skillset" },
                { "@type": "ListItem", "position": 4, "name": "Experience", "item": "https://dwiwijaya.com/experience" },
                { "@type": "ListItem", "position": 5, "name": "Services", "item": "https://dwiwijaya.com/services" },
                { "@type": "ListItem", "position": 6, "name": "Portfolio", "item": "https://dwiwijaya.com/portfolio" },
                { "@type": "ListItem", "position": 7, "name": "Reviews", "item": "https://dwiwijaya.com/reviews" },
                { "@type": "ListItem", "position": 8, "name": "Blog", "item": "https://dwiwijaya.com/blog" },
                { "@type": "ListItem", "position": 9, "name": "Contact", "item": "https://dwiwijaya.com/contact" }
            ]
        },
        {
            "@type": "ItemList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "url": "https://dwiwijaya.com/" },
                { "@type": "ListItem", "position": 2, "name": "About", "url": "https://dwiwijaya.com/about" },
                { "@type": "ListItem", "position": 3, "name": "Skillset", "url": "https://dwiwijaya.com/skillset" },
                { "@type": "ListItem", "position": 4, "name": "Experience", "url": "https://dwiwijaya.com/experience" },
                { "@type": "ListItem", "position": 5, "name": "Services", "url": "https://dwiwijaya.com/services" },
                { "@type": "ListItem", "position": 6, "name": "Portfolio", "url": "https://dwiwijaya.com/portfolio" },
                { "@type": "ListItem", "position": 7, "name": "Reviews", "url": "https://dwiwijaya.com/reviews" },
                { "@type": "ListItem", "position": 8, "name": "Blog", "url": "https://dwiwijaya.com/blog" },
                { "@type": "ListItem", "position": 9, "name": "Contact", "url": "https://dwiwijaya.com/contact" }
            ]
        },
    ]
};
