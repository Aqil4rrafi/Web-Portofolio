import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
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
  metadataBase: new URL("https://aqila-kresna-arrafi-portfolio.arrafikresna.chatgpt.site"),
  title: "Aqila Kresna Arrafi — Digital CV",
  description:
    "Electrical Engineering student at Universitas Gadjah Mada exploring IoT, AI, and technology for sustainable innovation.",
  openGraph: {
    title: "Aqila Kresna Arrafi — Digital CV",
    description:
      "Electrical Engineering student at Universitas Gadjah Mada exploring IoT, AI, and technology for sustainable innovation.",
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
    title: "Aqila Kresna Arrafi — Digital CV",
    description:
      "Electrical Engineering student at Universitas Gadjah Mada exploring IoT, AI, and technology for sustainable innovation.",
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
