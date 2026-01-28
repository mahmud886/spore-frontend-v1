import ExternalStyles from "./ExternalStyles";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Analytics } from "./components/shared/Analytics";
import BackgroundSetter from "./components/shared/BackgroundSetter";
import VerticalLines from "./components/shared/VerticalLines";
import { Wrapper } from "./components/shared/Wrapper";
import "./globals.css";

// Metadata is handled dynamically by individual pages
// Root layout doesn't define static metadata to allow page-level overrides

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
