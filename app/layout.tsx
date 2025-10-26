import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
// Access Google site verification from env
const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
  fallback: ["ui-monospace", "monospace"]
});

export const metadata: Metadata = {
  title: "Rise Enterprises, Rise Enterprise, Rise Construction, Rise Constructions | Top Construction Company India | Civil, RCC, Infrastructure, Pune",
  description: "Rise Enterprises (also known as Rise Enterprise, Rise Construction, Rise Constructions) is a leading construction company in India, specializing in civil construction, RCC, infrastructure, commercial and residential projects. Trusted builders in Pune and across India.",
  keywords: "Rise Enterprises, Rise Enterprise, Rise Construction, Rise Constructions, construction company India, civil construction, RCC construction, infrastructure development, building contractors, commercial construction, residential construction, luxury development, Pune, India, top builders, construction services, construction projects, construction contractors, building company, infrastructure company, construction firm, construction business, construction industry, best construction company, trusted builders, premier construction, rise enterprises pune, rise construction india",
  authors: [{ name: "Rise Enterprises" }],
  robots: "index, follow",
  openGraph: {
    title: "Rise Enterprises, Rise Enterprise, Rise Construction, Rise Constructions | Top Construction Company India",
    description: "Rise Enterprises (Rise Construction) is a leading construction company in India for civil, RCC, infrastructure, commercial and residential projects. Trusted builders in Pune and India.",
    type: "website",
    locale: "en_US"
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f172a',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics (GA4) using next/script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EMH64S6LX0"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EMH64S6LX0');
          `}
        </Script>
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="preload" href="/Complex-1 Construction.webp" as="image" type="image/webp" />
        <link rel="preload" href="/Complex-2 Construction.webp" as="image" type="image/webp" />
        <link rel="preload" href="/rise-logo.webp" as="image" type="image/webp" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        {/* SEO Meta Tags */}
        {googleSiteVerification && (
          <meta name="google-site-verification" content={googleSiteVerification} />
        )}
        <meta name="description" content="RISE Enterprises offers premium civil construction and development services in Pune. Specializing in infrastructure, RCC construction, and luxury development projects." />
        <meta name="keywords" content="civil construction, development services, Pune, infrastructure, RCC construction, luxury development" />
        <meta name="author" content="RISE Enterprises" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.rise-enterprises.co.in/" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="RISE Enterprises - Premier Civil Construction" />
        <meta property="og:description" content="Premium civil construction and development services in Pune" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rise-enterprises.co.in/" />
        <meta property="og:image" content="https://www.rise-enterprises.co.in/rise-logo.webp" />
        <meta property="og:locale" content="en_US" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RISE Enterprises - Premier Civil Construction" />
        <meta name="twitter:description" content="Premium civil construction and development services in Pune" />
        <meta name="twitter:image" content="https://www.rise-enterprises.co.in/rise-logo.webp" />
        {/* Sitemap and Robots */}
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
        <link rel="robots" type="text/plain" href="/robots.txt" />
        {/* Structured Data: Organization */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'RISE Enterprises',
              alternateName: ['Rise Enterprise', 'Rise Construction', 'Rise Constructions'],
              url: 'https://www.rise-enterprises.co.in/',
              logo: 'https://www.rise-enterprises.co.in/rise-logo.webp',
              contactPoint: [{
                '@type': 'ContactPoint',
                telephone: '+91-8830124503',
                contactType: 'customer service',
                areaServed: 'IN',
                availableLanguage: ['English', 'Hindi', 'Marathi']
              }],
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'A-1 Flat no. 01, Karishma Co.Op Society Appartment Servy no. 17/2, near sangam press, Kothrud',
                addressLocality: 'Pune',
                addressRegion: 'Maharashtra',
                postalCode: '411038',
                addressCountry: 'IN'
              },
              sameAs: [
                'https://www.instagram.com/rise_enterprises_2277',
                'https://wa.me/918830124503'
              ]
            },
            {
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'RISE Enterprises',
              alternateName: ['Rise Enterprise', 'Rise Construction', 'Rise Constructions'],
              url: 'https://www.rise-enterprises.co.in/',
              telephone: '+91-8830124503',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'A-1 Flat no. 01, Karishma Co.Op Society Appartment Servy no. 17/2, near sangam press, Kothrud',
                addressLocality: 'Pune',
                addressRegion: 'Maharashtra',
                postalCode: '411038',
                addressCountry: 'IN'
              },
              areaServed: 'IN',
              openingHours: 'Mo-Sa 09:00-18:00',
              priceRange: '$$',
              image: 'https://www.rise-enterprises.co.in/rise-logo.webp',
              sameAs: [
                'https://www.instagram.com/rise_enterprises_2277',
                'https://wa.me/918830124503'
              ]
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              'mainEntity': [
                {
                  '@type': 'Question',
                  'name': 'What services does Rise Enterprises offer?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Rise Enterprises offers civil construction, RCC construction, infrastructure development, commercial and residential building, luxury bungalows, road projects, and park & garden projects.'
                  }
                },
                {
                  '@type': 'Question',
                  'name': 'Where is Rise Enterprises located?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Rise Enterprises is based in Pune, Maharashtra, India.'
                  }
                },
                {
                  '@type': 'Question',
                  'name': 'How can I contact Rise Enterprises?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'You can contact Rise Enterprises via phone (+91-8830124503), WhatsApp, or the contact form on the website.'
                  }
                },
                {
                  '@type': 'Question',
                  'name': 'Is Rise Enterprises a trusted construction company in India?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Yes, Rise Enterprises is a leading and trusted construction company in India, known for quality, reliability, and a strong portfolio of completed projects.'
                  }
                }
              ]
            }
          ])
        }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
