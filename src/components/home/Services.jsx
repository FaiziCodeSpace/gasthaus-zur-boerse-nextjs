import Heading from "../layout/Heading";
import Link from "next/link";
import { Clock } from "lucide-react";

const stats = [
    {
        num: "10",
        title: "KM Delivery Radius",
        desc: "Minimum order: €75",
    },
    {
        num: "20",
        title: "KM Catering Radius",
        desc: "Booking required at least 3 days in advance",
    },
];

export default function Services() {
    return (
        <section className="w-full bg-background py-16 px-6 sm:px-10 lg:px-25">
            <Heading heading="Services" />

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

                {/* Left — stats */}
                <div className="flex flex-col gap-10 flex-1">
                    {stats.map((stat) => (
                        <div key={stat.num} className="flex items-center gap-6">
                            <h2 className="text-[80px] sm:text-[100px] font-bold font-diplomata text-foreground leading-none flex-shrink-0">
                                {stat.num}
                            </h2>
                            <div>
                                <h3 className="text-lg sm:text-xl font-bold text-black">
                                    {stat.title}
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">
                                    {stat.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right — catering card */}
                <div className="flex-1 w-full bg-white border border-foreground/10 rounded-2xl p-8 flex flex-col gap-4">
                    <h3 className="text-[22px] sm:text-[26px] font-bold font-playfair text-foreground text-center">
                        Professional Catering
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 text-center">
                        Host your guests with the flavors of Gasthaus zur Börse. We provide high-quality catering for private parties and business functions.
                    </p>
                    <div className="flex items-center justify-center gap-2 text-red-500 text-sm font-semibold">
                        <Clock className="w-4 h-4 flex-shrink-0" />
                        Please book at least 3 days in advance.
                    </div>
                    <Link
                        href="/speisekarte"
                        className="mt-2 inline-flex items-center justify-center bg-foreground text-white hover:bg-foreground/80 px-6 py-3 text-sm font-semibold transition-all duration-300 rounded-full"
                    >
                        View Menu
                    </Link>
                </div>

            </div>
        </section>
    );
}