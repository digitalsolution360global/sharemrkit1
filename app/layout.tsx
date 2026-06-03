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
  "image": "https://www.sharemarketskills.in/assets/images/academy.jpg",
  "description": "Share Market Skills Academy provides stock market training, options trading, swing trading, technical analysis, cryptocurrency trading, investment education, and financial market courses in Ghaziabad and Delhi NCR.",
  "email": "sharemarketskillsacademy@gmail.com",
  "telephone": "+91-8460188483",
  "foundingDate": "2020",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "41 Vishnu Enclave, Main Hapur Road, Opp. Govindpuram",
    "addressLocality": "Ghaziabad",
    "addressRegion": "Uttar Pradesh",
    "postalCode": "201013",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "",
    "longitude": ""
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Ghaziabad"
    },
    {
      "@type": "City",
      "name": "Noida"
    },
    {
      "@type": "City",
      "name": "Delhi"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Delhi NCR"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Training Courses",
    "itemListElement": [
      {
        "@type": "Course",
        "name": "Stock Market Trading Course"
      },
      {
        "@type": "Course",
        "name": "Technical Analysis Course"
      },
      {
        "@type": "Course",
        "name": "Options Trading Course"
      },
      {
        "@type": "Course",
        "name": "Swing Trading Course"
      },
      {
        "@type": "Course",
        "name": "Cryptocurrency Trading Course"
      },
      {
        "@type": "Course",
        "name": "Investment & Wealth Building Course"
      }
    ]
  },
  "employee": [
    {
      "@type": "Person",
      "name": "Ashish Singh",
      "jobTitle": "Co-Founder & Faculty"
    },
    {
      "@type": "Person",
      "name": "Nikhil Singh",
      "jobTitle": "Co-Founder & Faculty"
    }
  ],
  "sameAs": [
    "https://maps.app.goo.gl/rUvkPonuF8snnci4A",
    "https://www.facebook.com/Sharemarketskills",
    "https://www.instagram.com/sharemarketskillsacademy"
  ]
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
