import Image from "next/image";
import Heading from "../layout/Heading";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const events = [
    {
        title: "Events",
        img: "/images/events/events-veranstaltung-gasthaus-boerse-celle.webp",
        alt: "Firmenveranstaltung im Gasthaus zur Börse in Celle",
        points: [
            "Hochzeiten",
            "Geburtstagsfeiern",
            "Jubiläen",
            "Firmenfeiern",
        ],
    },
    {
        title: "Catering",
        img: "/images/events/catering-gasthaus-boerse-celle.webp",
        alt: "Catering-Buffet mit deutschen Spezialitäten vom Gasthaus zur Börse in Celle",
        points: [
            "Firmenveranstaltungen",
            "Private Feiern",
            "Bestes kulinarisches Erlebnis",
            "Speisen- & Getränkeservice",
        ],
    },
];

export default function Events() {
    return (
        <section id="events" className="w-full bg-background py-16 px-6 sm:px-10 lg:px-25">
            <Heading
                heading="Unsere Events & Catering in Celle"
                paragraph="Feiern Sie Ihre perfekte Veranstaltung mit den Aromen des Gasthaus zur Börse."
            />

            <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className="flex-1 bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col"
                    >
                        {/* Image */}
                        <div className="relative w-full h-[220px] sm:h-[260px] lg:h-[300px]">
                            <Image
                                src={event.img}
                                alt={event.alt}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-5 sm:p-6 flex flex-col flex-1">
                            <h2 className="text-[22px] sm:text-[26px] font-bold text-foreground font-playfair mb-4">
                                {event.title}
                            </h2>

                            <ul className="space-y-2 flex-1">
                                {event.points.map((point, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-sm sm:text-base text-gray-700">
                                        <span className="w-1.5 h-1.5 rounded-full bg-foreground flex-shrink-0" />
                                        {point}
                                    </li>
                                ))}
                            </ul>

                            {/* Button */}
                            <Link
                                href="/kontakt"
                                className="mt-6 inline-flex items-center justify-center gap-2 border-2 border-foreground text-foreground hover:bg-foreground hover:text-white px-5 py-3 text-sm font-semibold transition-all duration-300 w-full"
                            >
                                Jetzt buchen <MoveRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}