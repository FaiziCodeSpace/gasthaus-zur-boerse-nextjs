import Menu from "@/components/menu/Menu";

export const metadata = {
  title: "Speisekarte",
  description:
    "Entdecken Sie die Speisekarte des Gasthaus zur Börse in Celle — traditionelle deutsche Küche, Celler Spezialitäten, hausgemachte Suppen und saisonale Gerichte.",
  keywords: [
    "Speisekarte Celle",
    "Restaurant Celle Speisekarte",
    "Deutsche Küche Celle",
    "Celler Spezialitäten",
    "Gasthaus zur Börse Speisekarte",
  ],
  alternates: {
    canonical: "https://gasthauszurboerse.de/speisekarte",
  },
  openGraph: {
    title: "Speisekarte | Gasthaus zur Börse Celle",
    description:
      "Traditionelle deutsche Küche und Celler Spezialitäten im Gasthaus zur Börse in Celle, Niedersachsen.",
    url: "https://gasthauszurboerse.de/speisekarte",
    locale: "de_DE",
    siteName: "Gasthaus zur Börse Celle",
  },
};

export default function MenuPage() {
  return (
    <>
      <Menu />
    </>
  );
}