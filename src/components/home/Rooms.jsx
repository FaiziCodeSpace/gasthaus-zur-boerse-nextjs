import Image from "next/image";
import Link from "next/link";
import Heading from "../layout/Heading";

const rooms = [
    {
        img: "/images/rooms/doppelzimmer-gasthaus-zur-boerse-celle.webp",
        alt: "Doppelzimmer im Gasthaus zur Börse in Celle",
        title: "Doppelzimmer",
        desc: "3 Zimmer verfügbar. Perfekt für Paare, die einen rustikalen und gemütlichen Rückzugsort suchen.",
    },
    {
        img: "/images/rooms/einzelzimmer-gasthaus-zur-boerse-celle.webp",
        alt: "Einzelzimmer im Gasthaus zur Börse in Celle",
        title: "Einzelzimmer",
        desc: "1 Zimmer verfügbar. Eine ruhige Unterkunft für Alleinreisende oder Geschäftsreisende.",
    },
    {
        img: "/images/rooms/familienzimmer-gasthaus-zur-boerse-celle.webp",
        alt: "Familienzimmer im Gasthaus zur Börse in Celle",
        title: "Familienzimmer",
        desc: "Großzügiger Grundriss mit 1 Doppelbett und 1 Einzelbett für besonderen Komfort.",
    },
];

export default function Rooms() {
    return (
        <section id="zimmer" className="w-full bg-background py-16 px-6 sm:px-10 lg:px-25">
            <Heading
                heading="Unsere Zimmerkategorien"
                paragraph="Bei Reservierung aller Zimmer kann das gesamte Gasthaus gebucht werden"
                num="05"
                comment="Exklusive Zimmer"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {rooms.map((room) => (
                    <div
                        key={room.title}
                        className="bg-black rounded-2xl overflow-hidden flex flex-col p-6"
                    >
                        {/* Image */}
                        <div className="relative w-full h-[260px] sm:h-[300px] rounded-xl overflow-hidden mb-4">
                            <Image
                                src={room.img}
                                alt={room.alt}
                                fill
                                className="object-cover pointer-events-none"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col flex-1 items-center text-center  gap-3">
                            <h3 className="text-white font-playfair font-bold text-[22px] sm:text-[26px]">
                                {room.title}
                            </h3>
                            <p className="text-white/60 text-sm">
                                {room.desc}
                            </p>
                            <Link
                                href="/kontakt"
                                className="mt-auto border-2 border-white text-white hover:bg-white hover:text-foreground px-6 py-2.5 text-sm font-semibold transition-all duration-300 rounded-full text-center"
                            >
                                Jetzt buchen
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}