import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Analytics } from "./components/shared/Analytics";
import BackgroundSetter from "./components/shared/BackgroundSetter";
import PerformanceMonitor from "./components/shared/PerformanceMonitor";
import VerticalLines from "./components/shared/VerticalLines";
import { Wrapper } from "./components/shared/Wrapper";
import ExternalStyles from "./ExternalStyles";
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
      <head>
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/assets/fonts/gotham/Gotham-Book.otf"
          as="font"
          type="font/opentype"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/assets/fonts/astron/astron.otf"
          as="font"
          type="font/opentype"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/assets/fonts/mokoto/mokoto.ttf"
          as="font"
          type="font/truetype"
          crossOrigin="anonymous"
        />
        <link rel="preload" href="/assets/videos/infection_WIDE_2.mp4" as="video" type="video/mp4" />
        <link rel="prefetch" href="/assets/images/background.webp" as="image" type="image/webp" />
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
      </head>
      <body className="antialiased text-white selection:bg-primary selection:text-black overflow-x-hidden ">
        <Analytics />
        <PerformanceMonitor />
        <ExternalStyles />
        <BackgroundSetter />
        <VerticalLines />
        <div className="text-white selection:bg-primary selection:text-black cyber-hex-grid">
          <div className="cyber-screen-flicker">
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
