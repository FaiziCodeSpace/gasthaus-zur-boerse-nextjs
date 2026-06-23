'use client';
import Heading from "../layout/Heading";
import { useState } from "react";

const menuData = {
    "Mittagskarte": [
        { num: 1, name: "Hähnchen Schnitzel", desc: "mit Pommes, Béarnaise Sauce oder Champignon Sauce", price: "12,90€" },
        { num: 2, name: "Schweine Schnitzel", desc: "mit Pommes, Béarnaise Sauce oder Champignon Sauce", price: "11,90€" },
        { num: 3, name: "Gegrilltes Hähnchen Filet", desc: "mit Gemüse oder Ofenkartoffel", price: "12,90€" },
        { num: 4, name: "Currywurst", desc: "mit Pommes und Curry Sauce", price: "10,90€" },
        { num: 5, name: "Chicken Salat mit gegrilltem Hähnchen", desc: "gegrillte Hähnchenstreifen mit Ofenkartoffel, geschmorten Zwiebeln und Brot", price: "12,90€" },
        { num: 6, name: "Hüftsteak 200g", desc: "mit Bratkartoffeln, geschmorten Zwiebeln und einem kleinen gemischten Gemüsesalat", price: "15,90€" },
        { num: 7, name: "Gemischter Salat mit Ofenkartoffel", desc: "dazu Brot", price: "9,90€" },
        { num: 8, name: "Bratkartoffeln mit Leberkäse", desc: "dazu Spiegelei", price: "9,90€" },
    ],
    "Beilagen": [
        { num: 9, name: "Pommes", desc: "", price: "kl. 4,00€ / 5,90€" },
        { num: 10, name: "Bratkartoffeln mit Speck", desc: "", price: "5,90€" },
        { num: 11, name: "Salat \"klein gemischt\"", desc: "", price: "4,00€" },
        { num: 12, name: "Bulgur", desc: "", price: "4,00€" },
        { num: 13, name: "Knobi Brot (3 Stk.)", desc: "", price: "3,50€" },
        { num: 14, name: "Ofenkartoffel mit Sour Cream", desc: "", price: "4,90€" },
    ],
    "Vorspeisen": [
        { num: 15, name: "Carpaccio vom Rind", desc: "mit Parmesan, Rucola und Knoblauchbrot", price: "11,90€" },
        { num: 16, name: "Bruschetta", desc: "mit Tomaten, Parmesan und Balsamico, Rucola", price: "6,90€" },
        { num: 17, name: "Maiskolben", desc: "mit Salat und Brot", price: "7,90€" },
        { num: 18, name: "Weinblätter", desc: "", price: "6,00€" },
        { num: 19, name: "Hausgemacht Linsensuppe", desc: "", price: "6,90€" },
        { num: 20, name: "Hausgemacht Tomatencremesuppe", desc: "mit Croutons", price: "6,90€" },
        { num: 21, name: "Hausgemacht Kartoffelsuppe", desc: "", price: "6,90€" },
        { num: 22, name: "Hausgemacht Gulaschsuppe", desc: "mit Sour Cream", price: "6,90€" },
        { num: 23, name: "Hausgemacht Zwiebelsuppe", desc: "", price: "6,90€" },
        { num: 24, name: "Kleiner gemischter Salat", desc: "mit hausgemachtem Dressing", price: "5,90€" },
    ],
    "Salat": [
        { num: 25, name: "Gemischter Salat", desc: "", price: "9,90€" },
        { num: 26, name: "Hähnchen Salat", desc: "", price: "14,90€" },
        { num: 27, name: "Käse Salat (Hirtenkäse)", desc: "", price: "12,90€" },
        { num: 28, name: "Lammstreifen Salat", desc: "", price: "13,90€" },
        { num: 29, name: "Rinder Salat", desc: "", price: "13,90€" },
    ],
    "Kinder": [
        { num: 30, name: "Chicken Nuggets (6x)", desc: "Pommes Mayo + Ketchup, CapriSun", price: "7,90€" },
        { num: 31, name: "Kinder Burger", desc: "Pommes, Gewürzgurken, Ketchup, CapriSun", price: "7,90€" },
        { num: 32, name: "Kinder Schnitzel", desc: "Hähnchen oder Schwein, Pommes, Ketchup, CapriSun", price: "9,90€" },
    ],
    "Celler Spezialitäten": [
        { num: 33, name: "Original Celler Rouladen", desc: "mit Gewürzgurke, Zwiebeln und Speck, Schwarzbrot, Butter dazu Bratkartoffeln", price: "18,90€" },
        { num: 34, name: "Heidjer Pfannenschlag", desc: "mit Bratkartoffel, Essiggurken und Salat", price: "15,90€" },
        { num: 35, name: "Deftiger Leberkäse", desc: "mit Bratkartoffel, Spiegelei", price: "15,90€" },
        { num: 36, name: "Börse Spezial Bratkartoffel", desc: "mit Spiegelei", price: "10,90€" },
        { num: 37, name: "Rinderleber Berliner Art", desc: "mit Apfel, Zwiebeln und Kartoffelstampf", price: "16,90€" },
        { num: 38, name: "Strammer Max", desc: "mit Rohschinken, 2 Spiegeleiern und Salatgarnitur", price: "11,90€" },
        { num: 39, name: "Hausgemacht Schnitzel", desc: "Schwein oder Hähnchen – Balkan Art, Holsteiner Art, Wiener Art", price: "14,90€" },
        { num: 40, name: "Börse Spezial überbacken", desc: "Schnitzel mit Gouda, Pilzensoße, Hollandaise, dazu Bratkartoffeln", price: "15,90€" },
        { num: 41, name: "Kaltes Roastbeef", desc: "mit Bratkartoffeln und Salatbeilage", price: "19,90€" },
    ],
    "Wraps": [
        { num: 42, name: "Chicken Crunch Wrap", desc: "mit Mayonnaise, Salat, Tomaten, Zwiebeln und frischen Gurken", price: "135g – 9,90€" },
        { num: 43, name: "Gegrillter Chicken Wrap", desc: "Sweet Chili Sauce, Salat, Tomaten, Zwiebeln und frischen Gurken", price: "100g – 9,90€" },
    ],
    "Grill Spezialitäten": [
        { num: 44, name: "Schweinemedallions gegrillt", desc: "mit Pilze Rahm Soße, dazu Gemüse, Hollandaise und Bratkartoffel", price: "18,90€" },
        { num: 45, name: "Börse Grillplatte", desc: "mit Hähnchenbrust, Rindfleisch und Schweinemedaillons mit geschmorten Zwiebeln, Gemüse und Bratkartoffel oder Pommes", price: "16,90€" },
        { num: 46, name: "Gegrilltes saftiges Hähnchenbrustfilet", desc: "auf Gemüse, Bratkartoffel oder Pommes", price: "16,90€" },
        { num: 47, name: "Grill Schweine Lachs Steak", desc: "gebraten Pilze, Zwiebeln, dazu Bratkartoffel oder Pommes", price: "15,90€" },
        { num: 48, name: "Saftige Hüftsteak", desc: "gegrillt mit Knoblauchbrot, Kräuterbutter und Wunschbeilage", price: "200g – 19,90€ / 250g – 21,90€ / 300g – 25,90€" },
        { num: 49, name: "Rumpsteak (200g)", desc: "gegrillt mit Knoblauchbrot, Kräuterbutter und Wunschbeilage", price: "24,90€" },
        { num: 50, name: "Hähnchenspieß gegrillt", desc: "mit Pommes oder Bulgur, geschmorten Zwiebeln, Salat und Sauce", price: "16,00€" },
        { num: 51, name: "Lammspieß gegrillt", desc: "mit Pommes oder Bulgur, geschmorten Zwiebeln, Salat und Sauce", price: "18,90€" },
        { num: 52, name: "Lammkoteletts (4 St.)", desc: "mit Pommes oder Bulgur, geschmorten Zwiebeln, Salat und Sauce", price: "20,00€" },
        { num: 53, name: "Chicken Hawaii überbacken", desc: "mit Hollandaise, Ananas, Gouda, dazu Pommes", price: "15,90€" },
        { num: 54, name: "Familien Grillplatte", desc: "Lammkotelett, Lammfleisch, Hähnchenspieß, Adana, dazu Pommes oder Bulgur, Salat und Sauce", price: "1 Pers. 19,90€ / 2 Pers. 37,00€ / 3 Pers. 54,00€ / 4 Pers. 71,00€" },
    ],
    "Burger": [
        { num: 55, name: "Classic Burger", desc: "mit Salat, Tomaten, Gewürzgurken, Röstzwiebeln und Burger Sauce", price: "100g – 10,90€ / 200g – 13,90€" },
        { num: 56, name: "Cheese Burger", desc: "mit Cheddar, Salat, Tomaten, Gewürzgurken, Röstzwiebeln und Burger Sauce", price: "100g – 11,90€ / 200g – 14,90€" },
        { num: 57, name: "Gegrillter Chicken Burger", desc: "mit 160g Hähnchenbrust, Salat, frischen Gurken, Tomaten, geschmorten Zwiebeln und Sweet Chili Sauce", price: "160g – 14,90€" },
        { num: 58, name: "Chicken Crunch Burger", desc: "mit Salat, Gurken, Tomaten, frischen Zwiebeln und Mayonnaise", price: "135g – 10,90€" },
        { num: 59, name: "Veggie Burger", desc: "mit Salat, Tomaten, Gewürzgurken, Röstzwiebeln und Burger Sauce", price: "130g – 10,90€" },
        { num: 60, name: "BBQ Burger", desc: "mit Salat, Tomaten, Gewürzgurken, Zwiebeln, Bacon und BBQ Sauce", price: "100g – 11,90€ / 200g – 14,90€" },
        { num: 61, name: "Pilz Burger", desc: "mit gebratenen Pilzen, geschmorten Zwiebeln, Salat, Tomaten und Burger Sauce", price: "100g – 13,90€ / 200g – 15,90€" },
    ],
    "Fisch Spezialitäten": [
        { num: 62, name: "Gebratene Scholle", desc: "mit frischem Gemüse, Kartoffeln und feiner Zitronen-Butter-Sauce", price: "19,90€" },
        { num: 63, name: "Pengasius Fisch", desc: "Knusprig paniert, serviert mit Pommes und Tatarsauce", price: "16,90€" },
        { num: 64, name: "Gebratener Lachs", desc: "Lachs mit Gemüse, Kartoffeln in Zitronen-Butter-Sauce", price: "19,90€" },
    ],
    "Nachspeisen": [
        { num: 65, name: "Warm Lava Cakes mit Eis", desc: "", price: "7,90€" },
        { num: 66, name: "Drei Kugeln Eis", desc: "", price: "4,90€" },
        { num: 67, name: "Käsekuchen", desc: "", price: "7,90€" },
    ],
    "Getränke": [
        { name: "Coca-Cola", desc: "", price: "0,3l – 3,00€ / 0,4l – 4,50€ / 1l – 7,00€" },
        { name: "Coca-Cola Zero", desc: "", price: "0,3l – 3,00€ / 0,4l – 4,50€ / 1l – 7,00€" },
        { name: "Sprite", desc: "", price: "0,3l – 3,00€ / 0,4l – 4,50€ / 1l – 7,00€" },
        { name: "Fanta", desc: "", price: "0,3l – 3,00€ / 0,4l – 4,50€" },
        { name: "Fanta Exotic", desc: "", price: "0,3l – 3,00€ / 0,4l – 4,50€" },
        { name: "Spezi", desc: "", price: "0,3l – 3,00€ / 0,4l – 4,50€" },
        { name: "RedBull", desc: "", price: "0,25l – 3,00€" },
        { name: "Ayran", desc: "", price: "0,25l – 2,50€" },
        { name: "Uludag", desc: "", price: "0,3l – 3,00€" },
        { name: "Orangensaft", desc: "", price: "0,3l – 3,00€ / 0,4l – 4,00€" },
        { name: "Apfelsaft", desc: "", price: "0,3l – 3,00€ / 0,4l – 4,00€" },
        { name: "Apfelschorle", desc: "", price: "0,3l – 3,00€ / 0,4l – 4,00€" },
        { name: "Mineralwasser (Gerolsteiner)", desc: "", price: "0,25l – 2,90€ / 0,75l – 5,50€" },
        { name: "Stilles Wasser (Gerolsteiner)", desc: "", price: "0,25l – 2,90€ / 0,75l – 5,50€" },
    ],
    "Warme Getränke": [
        { name: "Kaffee", desc: "", price: "3,00€" },
        { name: "Espresso", desc: "", price: "2,50€" },
        { name: "Espresso Macchiato", desc: "", price: "3,00€" },
        { name: "Latte Macchiato", desc: "", price: "3,50€" },
        { name: "Café au lait", desc: "", price: "3,80€" },
        { name: "Cappuccino", desc: "", price: "3,50€" },
        { name: "Kakaotraum", desc: "", price: "4,00€" },
        { name: "Schokokaffee", desc: "", price: "3,50€" },
        { name: "Milchkaffee", desc: "", price: "3,00€" },
    ],
    "Alkoholische Getränke": [
        { name: "Absolut Vodka 40%", desc: "", price: "2cl – 3,00€" },
        { name: "Vodka Ciroc 40%", desc: "", price: "2cl – 4,00€" },
        { name: "Grey Goose 40%", desc: "", price: "2cl – 4,00€" },
        { name: "Three Sixty Vodka 37,5%", desc: "", price: "2cl – 4,50€" },
        { name: "Belvedere Vodka 40%", desc: "", price: "2cl – 3,40€" },
        { name: "Jägermeister 40%", desc: "", price: "2cl – 4,50€" },
        { name: "Akvavit Jubi 40%", desc: "", price: "2cl – 3,20€" },
        { name: "Fürst Bismarck 38%", desc: "", price: "2cl – 3,50€" },
        { name: "Ramazzotti 30%", desc: "", price: "2cl – 2,90€" },
        { name: "Jack Daniels 35%", desc: "", price: "2cl – 5,50€" },
        { name: "Yeni Raki 45%", desc: "", price: "2cl – 4,50€ / 4cl – 7,00€" },
        { name: "Rotwein", desc: "", price: "0,25l – 5,80€" },
        { name: "Weißwein", desc: "", price: "0,25l – 5,80€" },
    ],
    "Bier": [
        { name: "König Pilsener vom Fass", desc: "", price: "0,3l – 3,00€ / 0,4l – 4,00€" },
        { name: "Köstritzer Schwarze vom Fass", desc: "", price: "0,3l – 3,50€ / 0,5l – 5,00€" },
        { name: "Benedikter Weißbier", desc: "", price: "0,5l – 5,00€" },
        { name: "Benedikter Alkoholfrei", desc: "", price: "0,5l – 5,00€" },
        { name: "Pilsener Alkoholfrei", desc: "", price: "0,3l – 3,50€ / 0,5l – 5,00€" },
        { name: "Alster", desc: "", price: "0,3l – 3,00€ / 0,4l – 4,00€ / 0,5l – 5,00€" },
        { name: "Becks", desc: "", price: "0,3l – 3,00€ / 0,5l – 5,00€" },
        { name: "Krombacher", desc: "", price: "0,3l – 3,00€ / 0,5l – 5,00€" },
    ],
};

const categories = Object.keys(menuData);

// special notes for certain categories
const categoryNotes = {
    "Salat": "Alle Salate mit grünem Salat, Tomaten, Gurken, roten Zwiebeln, Rucola, Mais und Erdnüssen. Dressing: Hausgemachte Cocktailsauce, Joghurt oder Balsamico",
    "Burger": "Alle Burger werden mit Pommes serviert",
};

export default function Menu() {
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    return (
        <section className="w-full bg-background py-16 px-6 sm:px-10 lg:px-25">
            <Heading heading="Unsere Speisekarte" paragraph="Hausgemachte deutsche Küche — frische Zutaten, traditionelle Rezepte." />

            {/* category tab pills */}
            <div className="flex flex-wrap gap-2 mb-10">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 rounded-full border-2 ${activeCategory === cat
                            ? 'bg-foreground text-white border-foreground'
                            : 'bg-transparent text-foreground border-foreground/30 hover:border-foreground'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* parchment card */}
            <div
                className="relative rounded-2xl overflow-hidden p-6 sm:p-10"
                style={{
                    backgroundImage: "url('/images/textures/parchment.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* overlay so white text is readable over the texture */}
                <div className="absolute inset-0 bg-black/50" />

                <div className="relative z-10">

                    {/* category heading */}
                    <h2 className="text-[28px] sm:text-[36px] font-bold font-playfair text-center text-white mb-2 tracking-widest uppercase">
                        {activeCategory}
                    </h2>

                    {/* optional category note */}
                    {categoryNotes[activeCategory] && (
                        <p className="text-center text-sm text-white/70 mb-6 italic">
                            {categoryNotes[activeCategory]}
                        </p>
                    )}

                    <div className="w-16 h-0.5 bg-white/40 mx-auto mb-8" />

                    {/* menu items */}
                    <div className="flex flex-col gap-5">
                        {menuData[activeCategory].map((item, i) => (
                            <div key={i} className="flex items-start gap-2">

                                {/* item number — only food categories have these */}
                                {item.num && (
                                    <span className="text-xs font-bold text-white/50 mt-0.5 flex-shrink-0 w-5">
                                        {item.num}.
                                    </span>
                                )}

                                <div className="flex-1 min-w-0">

                                    {/* mobile — stack price below to avoid overflow */}
                                    <div className="flex sm:hidden flex-col">
                                        <span className="font-bold text-white text-sm font-playfair">
                                            {item.name}
                                        </span>
                                        {item.desc && (
                                            <p className="text-xs text-white/70 mt-0.5">{item.desc}</p>
                                        )}
                                        <span className="text-xs font-bold text-white/80 mt-1">
                                            {item.price}
                                        </span>
                                    </div>

                                    {/* desktop — name ... dotted line ... price */}
                                    <div className="hidden sm:block">
                                        <div className="flex items-baseline gap-2">
                                            <span className="font-bold text-white text-base font-playfair flex-shrink-0">
                                                {item.name}
                                            </span>
                                            <span className="flex-1 border-b border-dotted border-white/40 mb-1" />
                                            <span className="text-sm font-bold text-white flex-shrink-0">
                                                {item.price}
                                            </span>
                                        </div>
                                        {item.desc && (
                                            <p className="text-sm text-white/70 mt-0.5">{item.desc}</p>
                                        )}
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-16 h-0.5 bg-white/40 mx-auto mt-8" />

                    {/* restaurant stamp */}
                    <p className="text-center text-xs tracking-[0.3em] uppercase text-white/40 mt-4 font-playfair">
                        Zur Börse · Westercelle
                    </p>

                </div>
            </div>
        </section>
    );
}