import AboutHeader from "../components/about/AboutHeader";
import ContactSection from "../components/about/ContactSection";

export default function AboutPage() {
  return (
    <main className="relative grid-bg min-h-screen">
      <AboutHeader />
      <ContactSection />
    </main>
  );
}
