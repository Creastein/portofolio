export interface SkillTile {
    name: string;
    icon: string;
}

export interface AnalysisItem {
    icon: string;
    label: string;
}

export const frontendSkills: SkillTile[] = [
    { name: "HTML5", icon: "https://cdn.simpleicons.org/html5" },
    { name: "CSS3", icon: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" },
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
    { name: "React", icon: "https://cdn.simpleicons.org/react" },
    { name: "Vite", icon: "https://cdn.simpleicons.org/vite" },
    { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
    { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap" },
    { name: "GitHub", icon: "https://cdn.simpleicons.org/github/white" },
    { name: "Draw.io", icon: "https://cdn.simpleicons.org/diagramsdotnet" }
];

export const analysisItems: AnalysisItem[] = [
    { icon: "fa-search", label: "System Requirements Analysis" },
    { icon: "fa-share-alt", label: "Flowchart & Process Design" },
    { icon: "fa-database", label: "ERD & Database Modeling" },
    { icon: "fa-file-alt", label: "Technical Documentation" }
];

export const multimediaSkills: SkillTile[] = [
    { name: "OBS Studio", icon: "https://cdn.simpleicons.org/obsstudio/white" },
    { name: "CapCut", icon: "https://commons.wikimedia.org/wiki/Special:FilePath/Capcut-icon.svg" },
    { name: "Canva", icon: "https://img.icons8.com/color/48/canva.png" }
];

export const officeSkills: SkillTile[] = [
    { name: "Microsoft Word", icon: "https://commons.wikimedia.org/wiki/Special:FilePath/Microsoft_Office_Word_%282019%E2%80%932025%29.svg" },
    { name: "Microsoft Excel", icon: "https://commons.wikimedia.org/wiki/Special:FilePath/Microsoft_Office_Excel_%282019%E2%80%932025%29.svg" },
    { name: "Microsoft PowerPoint", icon: "https://commons.wikimedia.org/wiki/Special:FilePath/Microsoft_Office_PowerPoint_%282019%E2%80%932025%29.svg" }
];
