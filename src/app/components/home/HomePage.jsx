"use client";

import { useEffect, useState } from "react";
import PollStepModal from "../popups/PollStepModal";
import SporeBlogSection from "../shared/SporeBlogSection";
import { Wrapper } from "../shared/Wrapper";
import CharacterLogsSection from "./CharacterLogsSection";
import EpisodesSection from "./EpisodesSection";
import HeroSection from "./HeroSection";
import NewsletterSection from "./NewsletterSection";
import { PrologueSection } from "./PrologueSection";
import { Synopsis } from "./Synopsis";

const homePageLogs = [
  {
    id: "XYZ_#325SAD",
    timestamp: "2 hour ago",
    title: "Patient Zero Identified",
    description:
      "Surveillance drones have captured footage of the initial contagion site. Containment protocols were... delayed.",
    image: "/assets/images/blogs/blog-1.png",
    imageAlt: "Patient Zero Identified",
    link: "#",
  },
  {
    id: "XYZ_#822SAD",
    timestamp: "2 hour ago",
    title: "Wall Construction",
    description:
      "Surveillance drones have captured footage of the initial contagion site. Containment protocols were... delayed.",
    image: "/assets/images/blogs/blog-2.png",
    imageAlt: "Wall Construction",
    link: "#",
  },
  {
    id: "CONTAINMENT",
    timestamp: "2 hour ago",
    title: "Mutation Rate",
    description:
      "Surveillance drones have captured footage of the initial contagion site. Containment protocols were... delayed.",
    image: "/assets/images/blogs/blog-3.png",
    imageAlt: "Mutation Rate",
    link: "#",
  },
  {
    id: "QUARANTINE_001",
    timestamp: "4 min ago",
    title: "Quarantine Protocol",
    description:
      "Surveillance drones have captured footage of the initial contagion site. Containment protocols were... delayed.",
    image: "/assets/images/blogs/blog-1.png",
    imageAlt: "Quarantine Protocol",
    link: "#",
  },
];

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Auto-open modal after 3 seconds
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <HeroSection />
      <Synopsis />
      <PrologueSection />
      <Wrapper>
        <div className="relative z-10 -mx-4 sm:-mx-6 lg:-mx-8">
          {/* <AboutSection /> */}

          <EpisodesSection />
          <NewsletterSection />
          <CharacterLogsSection />
          <div className="pb-4 px-8 ">
            <SporeBlogSection posts={homePageLogs} title="Spore Logs" className="" sectionClassName="" />
          </div>
        </div>
        <PollStepModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} autoOpenDelay={0} />
      </Wrapper>
    </>
  );
}
