import Image from "next/image";
import Heading from "../layout/Heading";

export default function Welcome() {
    return (
        <section className="min-h-screen w-full bg-background py-16 px-6 sm:px-10 lg:px-16 xl:px-25">
            <Heading heading="Willkommen bei Gasthaus zur Börse" />
            <div className="flex flex-col lg:flex-row justify-between mt-10 gap-8 xl:gap-10">

                {/* Image */}
                <div className="w-full lg:w-[42%] xl:w-[480px] h-[300px] sm:h-[400px] lg:h-auto min-h-[480px] xl:h-[600px] relative flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                        src="/images/welcome/hero-gasthaus-aussen-arnsberg.webp"
                        alt="Gasthaus zur Börse Außenansicht in Arnsberg"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Right side */}
                <div className="flex-1 min-w-0">
                    <div className="flex flex-col">
                        <div>
                            <h1 className="text-[24px] sm:text-[28px] lg:text-[28px] xl:text-[36px] font-bold text-black font-playfair">
                                A Family Tradition
                            </h1>
                            <p className="text-[14px] sm:text-[15px] xl:text-[16px] text-gray-700 mt-4">
                                Enjoy our signature homemade dishes, prepared with recipes passed down through generations. Our guesthouse offers a cozy atmosphere where every guest is treated like family. We pride ourselves on using local, seasonal ingredients to bring you the true taste of German heritage, from hearty schnitzels to delicate seasonal vegetables.
                            </p>
                            <hr className="my-5 border-2 border-black w-32" />
                        </div>

                        {/* Cards */}
                        <div className="flex flex-col sm:flex-row justify-between gap-3 xl:gap-4 mt-6">
                            {[
                                { title: "Homemade Recipes", desc: "Generations-old recipes crafted with love. Savor our fresh ingredients and flavorful, made-from-scratch dishes." },
                                { title: "Traditional German Cuisine", desc: "Indulge in authentic classics: Schnitzel, Wurst, Sauerbraten, and fresh local specialties. True German flavors." },
                                { title: "Friendly Family Atmosphere", desc: "Experience the warmth of true Bavarian hospitality in our inviting, family-owned Gasthaus." },
                            ].map((card) => (
                                <div key={card.title} className="flex flex-col flex-1 gap-3 items-center bg-white rounded-lg shadow-md">
                                    <div className="w-full h-[140px] lg:h-[120px] xl:h-[160px] relative">
                                        <Image
                                            src="/images/welcome/hero-gasthaus-aussen-arnsberg.webp"
                                            alt={`${card.title} - Gasthaus zur Börse Arnsberg`}
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