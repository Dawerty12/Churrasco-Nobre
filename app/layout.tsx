import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { siteConfig } from "@/app/config/site";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name + " - " + siteConfig.tagline,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "churrasco rio de janeiro",
    "buffet de churrasco",
    "churrasco em domicílio",
    "festa churrasco rj",
    "churrascaria buffet",
    "churrasco para eventos",
    "baixada fluminense churrasco",
    "festa junina buffet",
    "feijoada completa rj",
    "coquetel empresarial",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name + " - " + siteConfig.tagline,
    description: siteConfig.description,
    images: [
      {
        url: "/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/img/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "seu-codigo-google-search-console",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  logo: `${siteConfig.url}/img/logo.png`,
  image: `${siteConfig.url}/img/og-image.jpg`,
  telephone: siteConfig.contato.whatsappPrincipalFormatado,
  email: siteConfig.contato.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rio de Janeiro",
    addressRegion: "RJ",
    addressCountry: "BR",
  },
  servesCuisine: "Churrasco Brasileiro",
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
  },
  sameAs: [siteConfig.contato.instagram],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href={siteConfig.url} />
      </head>
      <body className="font-sans antialiased bg-black text-white selection:bg-primary selection:text-black">
        {/* Background Effects Premium */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-grid-premium opacity-20"></div>

          {/* Animated Gradient Orbs */}
          <div className="absolute -top-[40%] -left-[20%] w-[800px] h-[800px] bg-gradient-to-br from-primary/20 via-yellow-600/10 to-transparent rounded-full blur-[120px] animate-pulse-slow"></div>
          
          <div className="absolute top-[20%] -right-[10%] w-[600px] h-[600px] bg-gradient-to-bl from-red-900/15 via-orange-800/10 to-transparent rounded-full blur-[100px] animate-float"></div>

          <div className="absolute bottom-[10%] left-[30%] w-[500px] h-[500px] bg-gradient-to-tr from-amber-600/10 via-yellow-500/5 to-transparent rounded-full blur-[90px] opacity-60"></div>

          {/* Vignette Premium */}
          <div className="absolute inset-0 vignette-premium"></div>
        </div>

        <Header />
        
        <div className="relative flex flex-col min-h-screen">
          {children}
        </div>
        
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}