import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { portfolio, WEBSITE_URL } from "@/src/data/portfolio";
import { siteDescription, siteTitle } from "@/src/data/seo";
import "./globals.css";

const bodyFont = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Source_Serif_4({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(WEBSITE_URL),
  title: siteTitle,
  description: siteDescription,
  alternates: { canonical: WEBSITE_URL },
  authors: [{ name: portfolio.profile.name, url: WEBSITE_URL }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: WEBSITE_URL,
    siteName: portfolio.profile.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1733,
        height: 907,
        alt: "Aqila Kresna Arrafi — Electrical Engineering Student and IoT & AI Enthusiast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont.variable} ${displayFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
