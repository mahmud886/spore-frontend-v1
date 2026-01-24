import Link from "next/link";
import { Wrapper } from "./shared/Wrapper";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-background-dark/90 backdrop-blur-md border-b border-white/5 px-6 py-4 ">
      <Wrapper>
        <div className="flex justify-between items-center">
          <Link href="/" className="font-display font-subheading font-bold text-xl tracking-widest">
            SPORE <span className="text-primary">FALL</span>
          </Link>
          <div className="hidden md:flex space-x-8 text-xs font-bold font-subheading tracking-widest">
            <Link href="/#home" className="text-primary hover:opacity-80 transition-opacity">
              HOME
            </Link>
            <Link href="/#spore-log" className="hover:text-primary transition-colors">
              SPORE LOG
            </Link>
            <Link href="/#shop" className="hover:text-primary transition-colors">
              SHOP
            </Link>
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
