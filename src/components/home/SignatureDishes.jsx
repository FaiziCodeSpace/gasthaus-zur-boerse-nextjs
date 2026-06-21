import Image from "next/image";
import Heading from "../layout/Heading";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const featured = {
    src: "/images/welcome/hero-gasthaus-aussen-arnsberg.webp",
    alt: "Hausgemachtes Schnitzel im Gasthaus zur Börse Arnsberg",
    title: "Homemade Schnitzel",
    desc: "Crispy 300g pork schnitzel served with golden fried potatoes.",
};

const sideDishes = [
    {
        src: "/images/welcome/hero-gasthaus-aussen-arnsberg.webp",
        alt: "Jägerschnitzel im Gasthaus zur Börse Arnsberg",
        title: "Jägerschnitzel",
        desc: "Rich mushroom cream sauce.",
    },
    {
        src: "/images/welcome/hero-gasthaus-aussen-arnsberg.webp",
        alt: "Jägerschnitzel im Gasthaus zur Börse Arnsberg",
        title: "Jägerschnitzel",
        desc: "Rich mushroom cream sauce.",
    },
    {
        src: "/images/welcome/hero-gasthaus-aussen-arnsberg.webp",
        alt: "Jägerschnitzel im Gasthaus zur Börse Arnsberg",
        title: "Jägerschnitzel",
        desc: "Rich mushroom cream sauce.",
    },
];

export default function SignatureDishes() {
    return (
        <section className="w-full bg-background py-16 px-6 sm:px-10 lg:px-25">

            <Heading
                heading="Our Signature Dishes"
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
                        <p className="text-white/70 text-sm mt-1 max-w-[280px]">
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