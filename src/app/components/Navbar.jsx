"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";
import { Wrapper } from "./shared/Wrapper";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    // Close mobile menu when clicking a link
    setIsMobileMenuOpen(false);

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
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center text-primary hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <div className="flex flex-col space-y-4">
              <a
                href="/#home"
                onClick={(e) => handleScrollToSection(e, "home")}
                className="text-primary hover:opacity-80 transition-opacity text-sm font-bold font-subheading tracking-widest uppercase py-2"
              >
                HOME
              </a>
              <a
                href="/#spore-log"
                onClick={(e) => handleScrollToSection(e, "spore-log")}
                className="hover:text-primary transition-colors text-sm font-bold font-subheading tracking-widest uppercase py-2"
              >
                SPORE LOG
              </a>
              <a
                href="/result#shop"
                onClick={(e) => handleScrollToSection(e, "shop")}
                className="hover:text-primary transition-colors text-sm font-bold font-subheading tracking-widest uppercase py-2"
              >
                SHOP
              </a>
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-primary transition-colors text-sm font-bold font-subheading tracking-widest uppercase py-2"
              >
                ABOUT
              </Link>
            </div>
          </div>
        )}
      </Wrapper>
    </nav>
  );
}
