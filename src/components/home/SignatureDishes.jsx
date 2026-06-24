import Image from "next/image";
import Heading from "../layout/Heading";

const featured = {
    src: "/images/signatureDishes/jagerschnitzel-celle.webp",
    alt: "Jägerschnitzel mit Champignonrahmsauce und Bratkartoffeln auf weißem Teller im Gasthaus zur Börse Celle",
    title: "Jägerschnitzel",
    desc: "Knuspriges Schweineschnitzel mit hausgemachter Champignonrahmsauce und goldenen Bratkartoffeln – ein beliebter Klassiker der deutschen Küche.",
};

const sideDishes = [
    {
        src: "/images/signatureDishes/gansebraten-celle.webp",
        alt: "Traditioneller Gänsebraten mit Rotkohl und Kartoffelklößen im Gasthaus zur Börse Celle",
        title: "Gänsebraten",
        desc: "Saftiger Gänsebraten mit Rotkohl, Kartoffelklößen und aromatischer Bratensauce – besonders beliebt in der Winter- und Weihnachtszeit.",
    },
    {
        src: "/images/signatureDishes/schweinshaxe-celle.webp",
        alt: "Knusprige Schweinshaxe mit Sauerkraut und Bratkartoffeln im Gasthaus zur Börse Celle",
        title: "Schweinshaxe",
        desc: "Knusprig gebratene Schweinshaxe mit Sauerkraut, Bratkartoffeln und Senf – ein herzhaftes deutsches Traditionsgericht.",
    },
    {
        src: "/images/signatureDishes/gruenkohl-celle.webp",
        alt: "Traditioneller Grünkohl mit Mettwurst, Kasseler und Bratkartoffeln im Gasthaus zur Börse Celle",
        title: "Grünkohl",
        desc: "Hausgemachter Grünkohl mit Mettwurst, Kasseler und Bratkartoffeln – ein norddeutscher Klassiker voller Geschmack.",
    },
];

export default function SignatureDishes() {
    return (
        <section id="signaturgerichte" className="w-full bg-background py-16 px-6 sm:px-10 lg:px-25">

            <Heading
                heading="Unsere Spezialitäten"
                btnLabel="Alle Gerichte ansehen"
                btnHref="/speisekarte"
            />

            {/* Cards */}
            <div className="flex flex-col lg:flex-row gap-4">

                {/* Featured large card */}
                <div className="relative w-full lg:w-[55%] min-h-[340px] sm:min-h-[420px] lg:min-h-[520px] rounded-2xl overflow-hidden flex-shrink-0">
                    <Image
                        src={featured.src}
                        alt={featured.alt}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                        <h2 className="text-white font-playfair font-bold text-[24px] sm:text-[32px]">
                            {featured.title}
                        </h2>
                        <p className="text-white/70 text-sm mt-1 max-w-[450px]">
                            {featured.desc}
                        </p>
                    </div>
                </div>

                {/* Side cards */}
                <div className="flex flex-col gap-4 flex-1 lg:h-[520px]">
                    {sideDishes.map((dish, i) => (
                        <div
                            key={i}
                            className="flex flex-1 items-center gap-4 bg-foreground rounded-2xl overflow-hidden p-3 sm:p-4"
                        >
                            <div className="relative w-[80px] h-[80px] sm:w-[140px] sm:h-full flex-shrink-0 rounded-xl overflow-hidden">
                                <Image
                                    src={dish.src}
                                    alt={dish.alt}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="text-white font-playfair font-bold text-base sm:text-lg">
                                    {dish.title}
                                </h3>
                                <p className="text-white/60 text-xs sm:text-sm mt-1">
                                    {dish.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}