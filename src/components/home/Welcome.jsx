import Image from "next/image";
import Heading from "../layout/Heading";

export default function Welcome() {
    return (
        <section id="willkommen" className="min-h-screen w-full bg-background py-16 px-6 sm:px-10 lg:px-16 xl:px-25">
            <Heading heading="Willkommen bei Gasthaus zur Börse" />
            <div className="flex flex-col lg:flex-row justify-between mt-10 gap-8 xl:gap-10">

                {/* Image */}
                <div className="w-full lg:w-[42%] xl:w-[480px] h-[300px] sm:h-[400px] lg:h-auto min-h-[480px] xl:h-[600px] relative flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                        src="/images/welcome/hero-gasthaus-aussen-celle.webp"
                        alt="Gasthaus zur Börse Außenansicht in Celle"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Right side */}
                <div className="flex-1 min-w-0">
                    <div className="flex flex-col">
                        <div>
                            <h2 className="text-[24px] sm:text-[28px] lg:text-[28px] xl:text-[36px] font-bold text-black font-playfair">
                                Eine Familientradition
                            </h2>
                            <p className="text-[14px] sm:text-[15px] xl:text-[16px] text-gray-700 mt-4">
                                Genießen Sie unsere hausgemachten Spezialitäten, zubereitet nach Rezepten, die seit Generationen weitergegeben werden. Unser Gasthaus bietet eine gemütliche Atmosphäre, in der jeder Gast wie ein Familienmitglied behandelt wird. Wir legen großen Wert auf regionale, saisonale Zutaten, um Ihnen den echten Geschmack deutscher Tradition zu bieten – vom herzhaften Schnitzel bis zum feinen saisonalen Gemüse.
                            </p>
                            <hr className="my-5 border-2 border-black w-32" />
                        </div>

                        {/* Cards */}
                        <div className="flex flex-col sm:flex-row justify-between gap-3 xl:gap-4 mt-6">
                            {[
                                { title: "Hausgemachte Rezepte", desc: "Generationen alte Rezepte mit Liebe zubereitet. Genießen Sie unsere frischen Zutaten und geschmackvollen, hausgemachten Gerichte.", img: "/images/welcome/card-hausgemachte-rezepte.webp" },
                                { title: "Traditionelle deutsche Küche", desc: "Lassen Sie sich authentische Klassiker schmecken: Schnitzel, Wurst, Sauerbraten und frische regionale Spezialitäten. Echter deutscher Geschmack.", img: "/images/welcome/card-traditionelle-deutsche-kuche.webp" },
                                { title: "Familiäre Atmosphäre", desc: "Erleben Sie die Herzlichkeit echter deutscher Gastfreundschaft in unserem einladenden, familiengeführten Gasthaus in Celle.", img: "/images/welcome/card-familiare-atmosphare.webp" },
                            ].map((card) => (
                                <div key={card.title} className="flex flex-col flex-1 gap-3 items-center bg-white rounded-lg shadow-md">
                                    <div className="w-full h-[140px] lg:h-[120px] xl:h-[160px] relative">
                                        <Image
                                            src={card.img}
                                            alt={`${card.title} - Gasthaus zur Börse Celle`}
                                            fill
                                            className="object-cover rounded-t-lg"
                                        />
                                    </div>
                                    <div className="text-center px-3 xl:px-4 pb-5 xl:pb-6">
                                        <h3 className="text-sm lg:text-base xl:text-lg font-bold text-black">{card.title}</h3>
                                        <p className="text-[11px] xl:text-[12px] mt-2">{card.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}