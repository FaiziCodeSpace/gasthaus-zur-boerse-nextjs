import Image from "next/image";
import Heading from "../layout/Heading";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const points = [
    "Das Gasthaus zur Börse liegt in Celle, Niedersachsen, und bietet fünf gemütliche Gästezimmer für maximalen Komfort und Erholung.",
    "Unsere Zimmer verbinden traditionelle Holzarchitektur mit modernem Komfort und schaffen so eine warme Atmosphäre, die sich an wie ein zweites Zuhause anfühlt.",
    "Persönlicher Service und authentische regionale Gastfreundschaft stehen für uns bei jedem Gast im Vordergrund.",
];

export default function Guesthouse() {
    return (
        <section id="gastehaus" className="w-full bg-background py-16 px-6 sm:px-10 lg:px-25">
            <Heading
                heading="Authentischer Charme unseres Gasthauses"
                paragraph="Erleben Sie die Wärme und Gastfreundschaft unseres Gasthauses, in dem jedes Detail für einen unvergesslichen Aufenthalt gestaltet ist."
            />

            <div className="flex flex-col lg:flex-row gap-10 items-center">

                {/* Text */}
                <div className="flex-1">
                    <h2 className="text-[22px] sm:text-[28px] font-bold text-black font-playfair mb-6">
                        Über unser Gasthaus
                    </h2>
                    <ul className="flex flex-col gap-4">
                        {points.map((point, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-gray-700">
                                <span className="w-1.5 h-1.5 rounded-full bg-foreground flex-shrink-0 mt-2" />
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
}