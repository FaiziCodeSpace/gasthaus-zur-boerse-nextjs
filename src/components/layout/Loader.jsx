"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function Loader() {
    const [progress, setProgress] = useState(0);
    const [done, setDone] = useState(false);
    const [hidden, setHidden] = useState(false);
    const finishedRef = useRef(false);

    useEffect(() => {
        // Lock scroll while the loader is up
        const prevOverflow = document.documentElement.style.overflow;
        document.documentElement.style.overflow = "hidden";

        let raf;
        let safetyTimeout;

        function getTrackedImages() {
            return Array.from(document.images || []);
        }

        function checkProgress() {
            const images = getTrackedImages();
            const total = images.length;
            const loaded = images.filter((img) => img.complete).length;

            const ratio = total === 0 ? 1 : loaded / total;
            // Never let the bar show less than a small baseline so it feels alive immediately
            setProgress((prev) => {
                const next = Math.max(prev, Math.min(96, Math.round(ratio * 96)));
                return next;
            });

            const pageReady = document.readyState === "complete";

            if (pageReady && ratio >= 1 && !finishedRef.current) {
                finish();
                return;
            }

            raf = requestAnimationFrame(checkProgress);
        }

        function finish() {
            if (finishedRef.current) return;
            finishedRef.current = true;
            clearTimeout(safetyTimeout);
            setProgress(100);
            // brief pause so the bar visibly reaches 100% before fading
            setTimeout(() => {
                setDone(true);
                document.documentElement.style.overflow = prevOverflow;
                setTimeout(() => setHidden(true), 500); // matches fade-out duration
            }, 250);
        }

        // Safety net: never block the site for more than 6s even if an asset
        // fails to load or stalls.
        safetyTimeout = setTimeout(finish, 6000);

        raf = requestAnimationFrame(checkProgress);

        return () => {
            cancelAnimationFrame(raf);
            clearTimeout(safetyTimeout);
            document.documentElement.style.overflow = prevOverflow;
        };
    }, []);

    if (hidden) return null;

    return (
        <div
            aria-hidden={done}
            className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white transition-opacity duration-500 ease-in-out ${
                done ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
        >
            <div className="relative w-[140px] h-[70px] sm:w-[180px] sm:h-[90px]">
                <Image
                    src="/images/logos/logo.svg"
                    alt="Gasthaus zur Börse"
                    fill
                    priority
                    className="object-contain"
                />
            </div>

            <div className="mt-8 w-[180px] sm:w-[220px] h-[3px] bg-foreground/15 rounded-full overflow-hidden">
                <div
                    className="h-full bg-foreground rounded-full transition-[width] duration-200 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
}
