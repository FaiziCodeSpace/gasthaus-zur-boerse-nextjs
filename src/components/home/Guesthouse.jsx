import Image from "next/image";
import Heading from "../layout/Heading";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const points = [
    "Located in the historic heart of Arnsberg, Gasthaus zur Börse offers five cozy guest rooms designed for maximum comfort and relaxation.",
    "Our rooms combine traditional wooden architecture with modern amenities, providing a warm atmosphere that feels like a home away from home.",
    "We prioritize personal service and authentic regional hospitality for all our guests.",
];

export default function Guesthouse() {
    return (
        <section className="w-full bg-background py-16 px-6 sm:px-10 lg:px-25">
            <Heading
                heading="Authentic Guesthouse Charm"
                paragraph="Experience the warmth and hospitality of our guesthouse, where every detail is crafted to provide you with a memorable stay."
            />

            <div className="flex flex-col lg:flex-row gap-10 items-center">

                {/* Text */}
                <div className="flex-1">
                    <h2 className="text-[22px] sm:text-[28px] font-bold text-black font-playfair mb-6">
                        About Our Guesthouse
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