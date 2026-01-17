import { JetBrains_Mono, Orbitron } from "next/font/google";
import ExternalStyles from "./ExternalStyles";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const orbitron = Orbitron({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "SPORE FALL | Sci-Fi Narrative Series",
  description: "The city of Lionara is quarantined. A spore is rewriting human fate.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${jetbrainsMono.variable} ${orbitron.variable} antialiased bg-background-dark text-white font-mono selection:bg-primary selection:text-black overflow-x-hidden`}
      >
        <ExternalStyles />
        <div className="bg-background-dark text-white selection:bg-primary selection:text-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Navbar />
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
