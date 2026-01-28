import ExternalStyles from "./ExternalStyles";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Analytics } from "./components/shared/Analytics";
import BackgroundSetter from "./components/shared/BackgroundSetter";
import VerticalLines from "./components/shared/VerticalLines";
import { Wrapper } from "./components/shared/Wrapper";
import "./globals.css";

// Export default metadata to ensure explicit og:image is available
export const metadata = {
  title: "SPORE FALL | Sci-Fi Narrative Series",
  description: "The city of Lionara is quarantined. A spore is rewriting human fate.",
  openGraph: {
    title: "SPORE FALL | Sci-Fi Narrative Series",
    description: "The city of Lionara is quarantined. A spore is rewriting human fate.",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://sporefall.com",
    siteName: "SPORE FALL",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL || "https://sporefall.com"}/api/default-og-image?size=facebook`,
        width: 1200,
        height: 630,
        alt: "SPORE FALL",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SPORE FALL | Sci-Fi Narrative Series",
    description: "The city of Lionara is quarantined. A spore is rewriting human fate.",
    images: [`${process.env.NEXT_PUBLIC_BASE_URL || "https://sporefall.com"}/api/default-og-image?size=twitter`],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased text-white selection:bg-primary selection:text-black overflow-x-hidden ">
        <Analytics />
        <ExternalStyles />
        <BackgroundSetter />
        <VerticalLines />
        <div className="text-white selection:bg-primary selection:text-black cyber-hex-grid">
          <div className="cyber-screen-flicker">
            {/* max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 */}
            <Navbar />
            {children}
            <Wrapper>
              <Footer />
            </Wrapper>
          </div>
        </div>
      </body>
    </html>
  );
}
