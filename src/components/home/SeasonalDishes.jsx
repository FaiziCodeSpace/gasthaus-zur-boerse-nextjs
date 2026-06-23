'use client';
import Image from "next/image";
import Heading from "../layout/Heading";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const seasonalDishes = [
    {
        season: "Spargelsaison",
        months: [3, 4, 5],
        img: "/images/welcome/hero-gasthaus-aussen-celle.webp",
        alt: "Frischer weißer Spargel vom Gasthaus zur Börse in Celle",
        dishes: [
            { name: "Frischer Weißer Spargel", description: "Zarter weißer Spargel mit Sauce Hollandaise, gekochtem Schinken und Salzkartoffeln." }
        ]
    },
    {
        season: "Pfifferlingssaison",
        months: [5, 6, 7, 8],
        img: "/images/welcome/hero-gasthaus-aussen-celle.webp",
        alt: "Pfifferlings-Schnitzel vom Gasthaus zur Börse in Celle",
        dishes: [
            { name: "Pfifferlings-Schnitzel", description: "Knuspriges Schnitzel mit einer cremigen Pfifferlings-Rahmsauce verfeinert." },
            { name: "Pfifferlings-Pasta", description: "Frische Spätzle mit goldenen Pfifferlingen, Butter und Kräutern." }
        ]
    },
    {
        season: "Wintersaison",
        months: [10, 11, 0],
        img: "/images/welcome/hero-gasthaus-aussen-celle.webp",
        alt: "Knuspriges Schweinshaxe vom Gasthaus zur Börse in Celle",
        dishes: [
            { name: "Knuspriges Schweinshaxe", description: "Langsam gebratene Schweinshaxe mit goldener Kruste, serviert mit Sauerkraut und Kartoffelknödeln." }
        ]
    },
    {
        season: "Weihnachtssaison",
        months: [11, 0],
        img: "/images/welcome/hero-gasthaus-aussen-celle.webp",
        alt: "Gebratene Ente und Gans vom Gasthaus zur Börse in Celle",
        dishes: [
            { name: "Gebratene Ente & Gans", description: "Traditionelle Weihnachtsente und -gans, langsam gebraten und serviert mit Rotkohl und Semmelknödeln." }
        ]
    },
    {
        season: "Grünkohlsaison",
        months: [0, 1, 2],
        img: "/images/welcome/hero-gasthaus-aussen-celle.webp",
        alt: "Grünkohl mit Pinkel vom Gasthaus zur Börse in Celle",
        dishes: [
            { name: "Grünkohl mit Pinkel", description: "Hausgemachter Grünkohl mit geräucherter Pinkelwurst, Speck und Kartoffeln — ein nordwestdeutscher Winterklassiker." }
        ]
    }
];

function getCurrentMonth() {
    return new Date(new Date().toLocaleString("en-US", { timeZone: "Europe/Berlin" })).getMonth();
}

function FadeContent({ children, watchKey }) {
    const [visible, setVisible] = useState(true);
    const prevKey = useRef(watchKey);

    useEffect(() => {
        if (prevKey.current !== watchKey) {
            setVisible(false);
            const t = setTimeout(() => {
                setVisible(true);
                prevKey.current = watchKey;
            }, 300);
            return () => clearTimeout(t);
        }
    }, [watchKey]);

    return (
        <div className={`transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            {children}
        </div>
    );
}

export default function SeasonalDishes() {
    const currentMonth = getCurrentMonth();
    const currentDishes = seasonalDishes.filter(s => s.months.includes(currentMonth));
    const [seasonIndex, setSeasonIndex] = useState(0);
    const [dishIndex, setDishIndex] = useState(0);

    if (currentDishes.length === 0) return null;

    const activeSeason = currentDishes[seasonIndex];
    const activeDish = activeSeason.dishes[dishIndex];
    const hasMultipleSeasons = currentDishes.length > 1;
    const hasMultipleDishes = activeSeason.dishes.length > 1;

    const prevSeason = () => {
        setSeasonIndex(i => (i === 0 ? currentDishes.length - 1 : i - 1));
        setDishIndex(0);
    };

    const nextSeason = () => {
        setSeasonIndex(i => (i === currentDishes.length - 1 ? 0 : i + 1));
        setDishIndex(0);
    };

    const prevDish = () => setDishIndex(i => (i === 0 ? activeSeason.dishes.length - 1 : i - 1));
    const nextDish = () => setDishIndex(i => (i === activeSeason.dishes.length - 1 ? 0 : i + 1));

    const fadeKey = `${seasonIndex}-${dishIndex}`;

    return (
        <section id="saisonal" className="w-full bg-background py-16 px-6 sm:px-10 lg:px-25">
            <Heading heading="Saisonale Gerichte" paragraph="Entdecken Sie unsere saisonalen Spezialitäten, die von der frischen Zutatenwahl und der passionierten Zubereitung geprägt sind." btnLabel="Alle Gerichte ansehen"
                btnHref="/speisekarte" />

            <div className="border-2 border-dashed border-black rounded-2xl p-4 sm:p-6 mb-8 bg-[#FFC793]">

                {/* Header row */}
                <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-foreground bg-white border border-foreground/20 px-3 py-1 rounded-full">
                        {activeSeason.season}
                    </span>
                    <span className="text-xs font-bold text-red-500 border-2 border-red-500 px-3 py-1 rounded-full">
                        Aktuelle Saison
                    </span>
                </div>

                {/* Dish name — fades */}
                <FadeContent watchKey={fadeKey}>
                    <h2 className="text-center font-playfair text-xl sm:text-2xl font-black tracking-widest text-black mb-4">
                        {activeDish.name}
                    </h2>
                </FadeContent>

                {/* Image — buttons anchored here, never move */}
                <div className="relative w-full h-[220px] sm:h-[300px] lg:h-[380px] rounded-xl overflow-hidden">
                    <FadeContent watchKey={fadeKey}>
                        <Image
                            src={activeSeason.img}
                            alt={activeSeason.alt}
                            fill
                            className="object-cover"
                        />
                    </FadeContent>

                    {hasMultipleSeasons && (
                        <>
                            <button
                                onClick={prevSeason}
                                aria-label="Vorherige Saison"
                                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border border-white/40 bg-white/20 backdrop-blur-sm hover:bg-white hover:text-foreground text-white rounded-full transition-all duration-200"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                                onClick={nextSeason}
                                aria-label="Nächste Saison"
                                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border border-white/40 bg-white/20 backdrop-blur-sm hover:bg-white hover:text-foreground text-white rounded-full transition-all duration-200"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </>
                    )}
                </div>

                {/* Description — fades */}
                <FadeContent watchKey={fadeKey}>
                    <p className="text-sm font-medium text-gray-600 mt-4 text-center max-w-xl mx-auto">
                        {activeDish.description}
                    </p>
                </FadeContent>
            </div>

            {/* Bottom cards */}
            {hasMultipleSeasons && (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                    {currentDishes.map((dish, i) => (
                        <button
                            key={i}
                            onClick={() => { setSeasonIndex(i); setDishIndex(0); }}
                            className={`text-left rounded-xl overflow-hidden border-2 transition-all duration-200 ${i === seasonIndex ? 'border-foreground' : 'border-transparent'
                                } bg-white shadow-sm`}
                        >
                            <div className="relative w-full h-[100px] sm:h-[120px]">
                                <Image src={dish.img} alt={dish.alt} fill className="object-cover" />
                            </div>
                            <div className="p-3">
                                <p className="text-[11px] sm:text-xs font-semibold text-foreground/60 mb-1">{dish.season}</p>
                                <h3 className="text-xs sm:text-sm font-bold text-foreground font-playfair leading-tight">{dish.dishes[0].name}</h3>
                            </div>
                        </button>
                    ))}
                </div>
            )}
        </section>
    );
}