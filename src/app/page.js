// Home page
import Events from "@/components/home/Events";
import Guesthouse from "@/components/home/Guesthouse";
import { Hero } from "@/components/home/Hero";
import Rooms from "@/components/home/Rooms";
import SeasonalDishes from "@/components/home/SeasonalDishes";
import Services from "@/components/home/Services";
import SignatureDishes from "@/components/home/SignatureDishes";
import Welcome from "@/components/home/Welcome";
import ScrollOnMount from "@/components/layout/ScrollOnMount";

export const metadata = {
  title: "Startseite",
  description:
    "Willkommen im Gasthaus zur Börse in Celle, Niedersachsen — traditionelle deutsche Küche, saisonale Spezialitäten und ein gemütliches Gästehaus mit 5 Zimmern in zentraler Lage.",
  keywords: [
    "Gasthaus zur Börse",
    "Restaurant Celle",
    "Deutsche Küche Celle",
    "Gästehaus Celle",
    "Niedersachsen Gasthaus",
  ],
  alternates: {
    canonical: "https://gasthauszurboerse.de",
  },
  openGraph: {
    title: "Gasthaus zur Börse Celle | Restaurant & Gästehaus in Celle",
    description:
      "Traditionelle deutsche Küche, saisonale Spezialitäten und ein gemütliches Gästehaus mit 5 Zimmern in Celle, Niedersachsen.",
    url: "https://gasthauszurboerse.de",
    locale: "de_DE",
    siteName: "Gasthaus zur Börse Celle",
  },
};

export default function Home() {
  return (
    <>
      <ScrollOnMount />
      <Hero />
      <Welcome />
      <Events />
      <SignatureDishes />
      <SeasonalDishes />
      <Guesthouse />
      <Rooms />
      <Services />
    </>
  );
}
