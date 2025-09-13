import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";

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
  title: "RISE Enterprises - Premier Civil Construction & Development Services",
  description: "RISE Enterprises offers premium civil construction and development services in Pune. Specializing in infrastructure, RCC construction, and luxury development projects.",
  keywords: "civil construction, development services, Pune, infrastructure, RCC construction, luxury development",
  authors: [{ name: "RISE Enterprises" }],
  robots: "index, follow",
  openGraph: {
    title: "RISE Enterprises - Premier Civil Construction",
    description: "Premium civil construction and development services in Pune",
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
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="preload" href="/Complex-1 Construction.webp" as="image" type="image/webp" />
        <link rel="preload" href="/Complex-2 Construction.webp" as="image" type="image/webp" />
        <link rel="preload" href="/rise-logo.webp" as="image" type="image/webp" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
