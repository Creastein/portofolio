export interface PortfolioItem {
  title: string;
  category: string;
  image: string;
  link: string;
  alt: string;
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const portfolioItems: PortfolioItem[] = [
  {
    title: "IDX Trading Assistant",
    category: "AI Financial Terminal · Next.js",
    image: `${basePath}/images/IDX-Trading-Assistant.png`,
    link: "https://idx-trading-assistant.vercel.app/",
    alt: "IDX Trading Assistant — AI-Driven Financial Terminal"
  },
  {
    title: "Luxury Villa Website",
    category: "Real Estate · High-End UI",
    image: `${basePath}/images/luxury_villa_website.png`,
    link: "https://luxury-villa-website.vercel.app/",
    alt: "Luxury Villa Website — High-Conversion Digital Storefront"
  },
  {
    title: "Portfolio",
    category: "Web Portfolio · Frontend Development",
    image: `${basePath}/images/portofolio.png`,
    link: "https://creastein.github.io/portofolio",
    alt: "Portfolio — Personal Portfolio Website"
  },
  {
    title: "Dancing Mountain Villa",
    category: "Web Design · React",
    image: `${basePath}/images/dancingmountainvilla.png`,
    link: "https://dancing-mountain-villa.vercel.app/",
    alt: "Dancing Mountain Villa — Villa Rental Website"
  },
  {
    title: "Villa Utamaro",
    category: "Web Design · UI/UX",
    image: `${basePath}/images/VillaUtamaro.png`,
    link: "https://villa-utamaro-next.vercel.app/id",
    alt: "Villa Utamaro — Luxury Villa Website"
  },
  {
    title: "Gereja JHB Salatiga",
    category: "Web Design · Community",
    image: `${basePath}/images/GerejaJHBSalatiga.png`,
    link: "#",
    alt: "Gereja JHB Salatiga — Church Website"
  },
  {
    title: "Best1Trans",
    category: "Car Rental · Web Development",
    image: `${basePath}/images/best1trans.png`,
    link: "https://best1-trans.vercel.app/",
    alt: "Best1Trans — Car Rental Service"
  },
  {
    title: "E-commerce / SaaS",
    category: "Landing Page · Marketing",
    image: `${basePath}/images/E-commerceSaaSLandingPage.png`,
    link: "#",
    alt: "E-commerce Landing Page — SaaS Website"
  }
];
