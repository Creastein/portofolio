export interface ServiceItem {
    title: string;
    description: string;
    icon: string;
}

export const servicesData: ServiceItem[] = [
    {
        title: "Business & System Analysis",
        description: "Analyze business processes, identify problems, and translate requirements into clear system and feature definitions.",
        icon: "fa-chart-line"
    },
    {
        title: "Frontend Web Development",
        description: "Build clean, responsive, and user-friendly web interfaces using modern frontend technologies.",
        icon: "fa-code"
    },
    {
        title: "UI Implementation from Requirements",
        description: "Turn business and user requirements into practical, intuitive, and functional user interfaces.",
        icon: "fa-layer-group"
    },
    {
        title: "System & Feature Design",
        description: "Design system flows, page structures, and features that align with real business goals.",
        icon: "fa-sitemap"
    },
    {
        title: "Website for Small Business & Personal Use",
        description: "Create simple and effective websites tailored for small businesses and personal portfolios.",
        icon: "fa-globe"
    }
];
