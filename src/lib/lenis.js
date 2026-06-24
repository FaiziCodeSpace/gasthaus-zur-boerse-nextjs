// src/lib/lenis.js
"use client";

import { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

const LenisContext = createContext(null);

export function LenisProvider({ children }) {
  const lenisRef = useRef(null);
  const pathname = usePathname();

  // Initialise Lenis once
  useEffect(() => {
    // Tell the browser not to restore scroll position on its own —
    // Lenis owns scrolling from here.
    if (typeof window !== "undefined") {
      history.scrollRestoration = "manual";
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;
    window.__lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  // On every route change: scroll to top immediately (unless there's a hash)
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash && lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return (
    <LenisContext.Provider value={lenisRef}>
      {children}
    </LenisContext.Provider>
  );
}

export function useLenis() {
  return useContext(LenisContext);
}

// Utility: smooth scroll to a section by id
export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  if (window.__lenis) {
    window.__lenis.scrollTo(el, { offset: -80, duration: 1.4 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
}
