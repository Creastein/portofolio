import type { Metadata } from "next";
import { Poppins, Playfair_Display, Oswald } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "WELLI | Business Analyst & Developer Portfolio",
  description: "WELLI - Business Analyst & Developer. Solution Architect & Product Engineer. Turning business ideas into simple and useful web experiences.",
  keywords: "Business Analyst, Developer, Solution Architect, Product Engineer, Web Development, Portfolio, UI/UX Design",
  authors: [{ name: "WELLI" }],
  icons: {
    icon: "/portofolio/images/logo.png",
    apple: "/portofolio/images/logo.png",
  },
  openGraph: {
    type: "website",
    url: "https://welli.dev/",
    title: "WELLI | Business Analyst & Developer Portfolio",
    description: "Solution Architect & Product Engineer. Turning business ideas into simple and useful web experiences.",
    images: ["/portofolio/images/logo.png"],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "WELLI | Business Analyst & Developer Portfolio",
    description: "Solution Architect & Product Engineer. Turning business ideas into simple and useful web experiences.",
    images: ["/portofolio/images/logo.png"],
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
        {children}
      </body>
    </html>
  );
}
