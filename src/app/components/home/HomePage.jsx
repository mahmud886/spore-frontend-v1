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
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD06g_s4kxbtDMStzMp28gfvth2Yh46h9TYz2E9e-jmbTaks7FC6xYaWP1UOiE_KLBu_1ZceWnqKpxHzjxvF5nMCQqCqJfZPrcbtpks4u4L6Rq60ssZWQCQP8L48rB9tx5BTYh58p2jQAisOYKkUPNkaxXo5r6l-b85bDa8s96U9XIxRCVILNy_lSAshlCpe5oJpuIk0DFmGEq-s-KrnQ2qFU4WEDzsYyAjkiGfL1ALbyX_v9SG3BScWNraSainYwXrg3xoI1luEsg",
    imageAlt: "Patient Zero Identified",
    link: "#",
  },
  {
    id: "XYZ_#822SAD",
    timestamp: "2 hour ago",
    title: "Wall Construction",
    description:
      "Surveillance drones have captured footage of the initial contagion site. Containment protocols were... delayed.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDZjeFkTLEfRsSQrQQ4bulE8dyWHpdGHCqG1EtTACqBZGtUndqN1-1xJ5im75xSOy5Rr93pi3cOpXVR734sf9Y7SkN9qpwlocH0EDvfMeJB2qvkP5ns_owRn81QzNmB4AUcA-xw4qOpqlBvS-FjJR_QKllLC_b9-6j4bOYjLCstsX1ybsoFASAil4COCVjHOh02TApFB1C7Pd4But1xfUBVHzuO4g45TSDKr_CbTKTdSRcsywpOXLSXg9D09chxev6rq5EA6ZyKjFs",
    imageAlt: "Wall Construction",
    link: "#",
  },
  {
    id: "CONTAINMENT",
    timestamp: "2 hour ago",
    title: "Mutation Rate",
    description:
      "Surveillance drones have captured footage of the initial contagion site. Containment protocols were... delayed.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAFa4jS2TmEI_MEE1oADVuf3cfgtR-YhJUy0GrRztu7j18HUMIIgjNinAyueqsFnZ53PslSzmL-Xe8LxprN-Ve5ASAon9UX7AyqS8LTQHa6WjV_nlx614Bu0h9rSOnEarBqC4GyG6LCYWuRThsZGwaNzDU1npR4CM0hRmRaEQp6XOLeYEjqPR7i8nSCgE2i7VDgFLnYyZ3Ezskd1tLe8tSpPm1-NHV4srrEJdqRT8gikpUuyACko4WLih0I745fcT8C15ZcO9pvBx8",
    imageAlt: "Mutation Rate",
    link: "#",
  },
  {
    id: "QUARANTINE_001",
    timestamp: "4 min ago",
    title: "Quarantine Protocol",
    description:
      "Surveillance drones have captured footage of the initial contagion site. Containment protocols were... delayed.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCD1Kkv8urDU7Ls2Ky2VlEO77_mquFjTwaF8cdYUOAKUe52n2JsfoEEzhQTWoA7RlBLPRSKgZ5vEPhQCb-gF9jmoD8c-ZN09agmn5NslerTku8l7CPoLUcjw4tfAyHLTB7-1U0O39jLX77TSLoMJslNAYcd0FATHiPLCjqSMYE1BvsyDz05HiAeCq9ygiP0OWlQrFjNaAlBMi2yUfC0a1c4unE4RdFVCu9cq3RFpoKRPfjI7612a3Vh-Ja32H3-S3rkMhQu0DTUx2I",
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
