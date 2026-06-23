"use client";

import { useEffect } from "react";
import { scrollToSection } from "@/lib/lenis";

export default function ScrollOnMount() {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setTimeout(() => scrollToSection(hash), 100);
    }
  }, []);

  return null;
}