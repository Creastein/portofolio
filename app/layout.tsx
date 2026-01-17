import type { Metadata } from "next";
import { Poppins, Playfair_Display, Oswald } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const metadata: Metadata = {
  metadataBase: new URL('https://welli.my.id'),
  title: "WELLI | Business Analyst & Developer Portfolio",
  description: "WELLI - Business Analyst & Developer. Web & System Analyst & Product Engineer. Turning business ideas into simple and useful web experiences.",
  keywords: "Business Analyst, Developer, Web & System Analyst, Product Engineer, Web Development, Portfolio, UI/UX Design",
  authors: [{ name: "WELLI" }],
  icons: {
    icon: `${basePath}/images/logo.png`,
    apple: `${basePath}/images/logo.png`,
  },
  openGraph: {
    type: "website",
    url: "https://welli.my.id/",
    title: "WELLI | Business Analyst & Developer Portfolio",
    description: "Web & System Analyst & Product Engineer. Turning business ideas into simple and useful web experiences.",
    images: [`${basePath}/images/logo.png`],
    locale: "en_US",
    siteName: "WELLI Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "WELLI | Business Analyst & Developer Portfolio",
    description: "Web & System Analyst & Product Engineer. Turning business ideas into simple and useful web experiences.",
    images: [`${basePath}/images/logo.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://welli.my.id',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable} ${oswald.variable}`}>
      <head>
        {/* Fallback for FontAwesome if import fails or for specific interactions */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="antialiased font-sans">
        <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''} />
        {children}
      </body>
    </html>
  );
}
