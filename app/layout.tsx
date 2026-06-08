import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sharemarketskills.in"),
  title: "Stock Market Training Institute Ghaziabad - Academy",
  description:
    "Looking for the best stock market course for beginners in Ghaziabad in 2026? Join Share Market Skills Academy for advanced trading programs.",
    alternates: {
    canonical: "./",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": "https://www.sharemarketskills.in/#organization",
  "name": "Share Market Skills Academy",
  "url": "https://www.sharemarketskills.in/",
  "logo": "https://www.sharemarketskills.in/assets/images/logo.png",
  "image": "https://www.sharemarketskills.in/assets/images/logo.png",
  "description": "Share Market Skills Academy provides stock market, cryptocurrency trading, options trading, swing trading, investing, and technical analysis courses in Ghaziabad, Delhi NCR, and online across India.",
  "telephone": "+918460188483",
  "email": "sharemarketskillsacademy@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "41 Vishnu Enclave, Main Hapur Road, Opp. Govindpuram",
    "addressLocality": "Ghaziabad",
    "addressRegion": "Uttar Pradesh",
    "postalCode": "201013",
    "addressCountry": "IN"
  },
  "areaServed": [
    "Ghaziabad",
    "Noida",
    "Delhi NCR"
  ],
  "sameAs": [
    "https://www.facebook.com/Sharemarketskills",
    "https://www.instagram.com/sharemarketskillsacademy/"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Trading Courses",
    "itemListElement": [
      {
        "@type": "Course",
        "name": "Stock Market Trading Course"
      },
      {
        "@type": "Course",
        "name": "Cryptocurrency Trading Course"
      },
      {
        "@type": "Course",
        "name": "Options Trading Course"
      },
      {
        "@type": "Course",
        "name": "Technical Analysis Course"
      },
      {
        "@type": "Course",
        "name": "Swing Trading Course"
      }
    ]
  }
};
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
