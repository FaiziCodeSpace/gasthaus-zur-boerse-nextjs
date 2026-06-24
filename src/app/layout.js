import { Playfair_Display, Diplomata_SC } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LenisProvider } from "@/lib/lenis";

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

const diplomata = Diplomata_SC({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-diplomata',
});

const SITE_URL = "https://gasthauszurboerse.de";
const OG_IMAGE = "/images/hero/hero-restaurant-innen-celle.webp";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Gasthaus zur Börse Celle | Restaurant & Gästehaus in Celle",
    template: "%s | Gasthaus zur Börse Celle",
  },
  description:
    "Gasthaus zur Börse in Celle, Niedersachsen — traditionelle deutsche Küche, gemütliches Gästehaus mit 5 Zimmern und herzliche Gastfreundschaft mitten in Celle.",
  keywords: [
    "Gasthaus zur Börse",
    "Restaurant Celle",
    "Gästehaus Celle",
    "Übernachten Celle",
    "Deutsche Küche Celle",
    "Hannoversche Heerstraße Celle",
    "Niedersachsen Restaurant",
  ],
  authors: [{ name: "Gasthaus zur Börse" }],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: "Gasthaus zur Börse Celle",
    title: "Gasthaus zur Börse Celle | Restaurant & Gästehaus in Celle",
    description:
      "Traditionelle deutsche Küche, gemütliches Gästehaus mit 5 Zimmern und herzliche Gastfreundschaft mitten in Celle, Niedersachsen.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 800,
        alt: "Gasthaus zur Börse Celle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gasthaus zur Börse Celle",
    description:
      "Traditionelle deutsche Küche, gemütliches Gästehaus und herzliche Gastfreundschaft in Celle, Niedersachsen.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Gasthaus zur Börse",
  "image": `${SITE_URL}${OG_IMAGE}`,
  "url": SITE_URL,
  "telephone": "+49 514 19937973",
  "email": "gasthauszuerboerse@web.de",
  "servesCuisine": "German",
  "priceRange": "€€",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Hannoversche Heerstraße 132",
    "addressLocality": "Celle",
    "postalCode": "29227",
    "addressRegion": "Niedersachsen",
    "addressCountry": "DE",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 52.6254,
    "longitude": 10.0804,
  },
};

const bedAndBreakfastSchema = {
  "@context": "https://schema.org",
  "@type": "BedAndBreakfast",
  "name": "Gästehaus zur Börse",
  "image": `${SITE_URL}${OG_IMAGE}`,
  "url": SITE_URL,
  "telephone": "+49 514 19937973",
  "email": "gasthauszuerboerse@web.de",
  "numberOfRooms": 5,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Hannoversche Heerstraße 132",
    "addressLocality": "Celle",
    "postalCode": "29227",
    "addressRegion": "Niedersachsen",
    "addressCountry": "DE",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 52.6254,
    "longitude": 10.0804,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="de"
      className={`${playfair.variable} ${diplomata.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(bedAndBreakfastSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col ">
        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
