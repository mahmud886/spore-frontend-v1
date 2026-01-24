"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wrapper } from "./shared/Wrapper";

export default function Navbar() {
  const pathname = usePathname();

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();

    // Special handling for "shop" - always go to result page
    if (sectionId === "shop") {
      if (pathname === "/result") {
        // Already on result page, scroll to shop section
        const scrollToElement = () => {
          const element = document.getElementById("shop");
          if (element) {
            const offset = 80; // Account for sticky navbar height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
            return true;
          }
          return false;
        };

        // Try to scroll immediately
        if (!scrollToElement()) {
          setTimeout(() => {
            scrollToElement();
          }, 100);
        }
      } else {
        // Navigate to result page with shop hash
        window.location.href = "/result#shop";
      }
      return;
    }

    // Scroll to element on current page
    const scrollToElement = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80; // Account for sticky navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
        return true;
      }
      return false;
    };

    // Try to scroll immediately
    if (!scrollToElement()) {
      // If element not found, try after a short delay (for dynamic content)
      setTimeout(() => {
        scrollToElement();
      }, 100);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background-dark/90 backdrop-blur-md border-b border-white/5 px-6 py-4 ">
      <Wrapper>
        <div className="flex justify-between items-center">
          <Link href="/" className="font-display font-subheading font-bold text-xl tracking-widest">
            SPORE <span className="text-primary">FALL</span>
          </Link>
          <div className="hidden md:flex space-x-8 text-xs font-bold font-subheading tracking-widest">
            <a
              href="/#home"
              onClick={(e) => handleScrollToSection(e, "home")}
              className="text-primary hover:opacity-80 transition-opacity"
            >
              HOME
            </a>
            <a
              href="/#spore-log"
              onClick={(e) => handleScrollToSection(e, "spore-log")}
              className="hover:text-primary transition-colors"
            >
              SPORE LOG
            </a>
            <a
              href="/result#shop"
              onClick={(e) => handleScrollToSection(e, "shop")}
              className="hover:text-primary transition-colors"
            >
              SHOP
            </a>
            <Link href="/about" className="hover:text-primary transition-colors">
              ABOUT
            </Link>
          </div>
          <div className="md:hidden">
            <span className="material-symbols-outlined text-primary">menu</span>
          </div>
        </div>
      </Wrapper>
    </nav>
  );
}
