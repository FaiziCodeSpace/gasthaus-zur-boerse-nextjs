"use client";

import { useEffect } from "react";
import { scrollToSection } from "@/lib/lenis";

export default function ScrollOnMount() {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    // Wait for Lenis to initialise and the page to paint before scrolling
    const t = setTimeout(() => scrollToSection(hash), 350);
    return () => clearTimeout(t);
  }, []);

  return null;
}
