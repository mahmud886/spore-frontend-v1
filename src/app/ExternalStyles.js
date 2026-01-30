"use client";

import { useEffect } from "react";

export default function ExternalStyles() {
  useEffect(() => {
    // Load Material Symbols with priority
    const materialSymbols = document.createElement("link");
    materialSymbols.href =
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap";
    materialSymbols.rel = "stylesheet";
    materialSymbols.media = "print";
    materialSymbols.onload = () => {
      materialSymbols.media = "all";
    };
    document.head.appendChild(materialSymbols);

    // Load Font Awesome with lower priority
    const fontAwesome = document.createElement("link");
    fontAwesome.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
    fontAwesome.rel = "stylesheet";
    fontAwesome.media = "print";
    fontAwesome.onload = () => {
      fontAwesome.media = "all";
    };
    document.head.appendChild(fontAwesome);

    return () => {
      // Cleanup on unmount
      if (document.head.contains(materialSymbols)) {
        document.head.removeChild(materialSymbols);
      }
      if (document.head.contains(fontAwesome)) {
        document.head.removeChild(fontAwesome);
      }
    };
  }, []);

  return null;
}
