'use client';
import Image from "next/image";
import Link from "next/link";
import { MoveRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback, useRef } from "react";

const slides = [
    {
        src: "/images/hero/hero-biergarten-terrasse-celle.webp",
        alt: "Gasthaus zur Börse Terrasse in Celle",
    },
    {
        src: "/images/hero/hero-restaurant-innen-celle.webp",
        alt: "Gasthaus zur Börse Restaurant Innenraum in Celle",
    },
];

export function Hero() {
    const [current, setCurrent] = useState(0);
    const [transitioning, setTransitioning] = useState(false);
    const autoPlayRef = useRef(null);

    const goTo = useCallback((index) => {
        if (transitioning) return;
        setTransitioning(true);
        setCurrent(index);
        setTimeout(() => setTransitioning(false), 700);
    }, [transitioning]);

    const prev = useCallback(() => {
        goTo(current === 0 ? slides.length - 1 : current - 1);
    }, [current, goTo]);

    const next = useCallback(() => {
        goTo(current === slides.length - 1 ? 0 : current + 1);
    }, [current, goTo]);

    useEffect(() => {
        autoPlayRef.current = setInterval(next, 5000);
        return () => clearInterval(autoPlayRef.current);
    }, [next]);

    const handleManual = (fn) => {
        clearInterval(autoPlayRef.current);
        fn();
        autoPlayRef.current = setInterval(next, 5000);
    };

    function scrollToSection(id) {
        const el = document.getElementById(id);
        if (!el) return;
        if (window.__lenis) {
            window.__lenis.scrollTo(el, { offset: -70, duration: 1.4 });
        } else {
            el.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <section id="start" className="min-h-screen w-full overflow-hidden relative flex flex-col items-center justify-center">

            {/* Slides */}
            {slides.map((slide, i) => (
                <div
                    key={slide.src}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${i === current ? 'opacity-100' : 'opacity-0'}`}
                >
                    <Image
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        priority={i === 0}
                        className="object-cover"
                    />
                </div>
            ))}

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/55 z-10" />

            {/* Prev button */}
            <button
                onClick={() => handleManual(prev)}
                aria-label="Vorheriges Bild"
                className="hidden sm:flex absolute left-5 z-20 w-11 h-11 items-center justify-center border border-white/40 text-white hover:bg-white/20 transition-colors duration-200 rounded-full"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Next button */}
            <button
                onClick={() => handleManual(next)}
                aria-label="Nächstes Bild"
                className="hidden sm:flex absolute right-5 z-20 w-11 h-11 items-center justify-center border border-white/40 text-white hover:bg-white/20 transition-colors duration-200 rounded-full"
            >
                <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => handleManual(() => goTo(i))}
                        aria-label={`Bild ${i + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-white' : 'w-2 bg-white/40'}`}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center text-center px-6 sm:px-10 md:px-4 w-full md:w-[80%] lg:w-[70%]">
                <h1 className="text-white text-[42px] sm:text-[64px] md:text-[80px] lg:text-[96px] leading-none font-bold">
                    Willkommen im Gasthaus zur Börse in Celle
                </h1>
                <p className="text-white/80 mt-4 text-sm sm:text-base text-center md:text-left md:px-20 max-w-2xl md:max-w-none">
                    Genießen Sie hausgemachte deutsche Spezialitäten, saisonale Gerichte und komfortable Gästezimmer in einer warmen und einladenden Atmosphäre.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 w-full sm:w-auto">
                    <Link
                        href="/speisekarte"
                        className="border-white border-2 text-white hover:bg-white hover:text-foreground px-6 py-3 cursor-pointer flex items-center justify-center transition-all duration-300 text-sm sm:text-base"
                    >
                        Speisekarte entdecken <MoveRight className="w-4 h-4 ml-2" />
                    </Link>
                    <button
                        onClick={() => scrollToSection('zimmer')}
                        className="border-white border-2 text-white hover:bg-white hover:text-foreground px-6 py-3 cursor-pointer flex items-center justify-center transition-all duration-300 text-sm sm:text-base"
                    >
                        Zimmer entdecken <MoveRight className="w-4 h-4 ml-2" />
                    </button>
                </div>
            </div>

        </section>
    );
}