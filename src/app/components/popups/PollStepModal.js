"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import PollLeftPopup from "./PollLeftPopup";
import PollMiddlePopup from "./PollMiddlePopup";
import PollRightPopup from "./PollRightPopup";

export default function PollStepModal({ isOpen, onClose, autoOpenDelay = 3000 }) {
  const [step, setStep] = useState(1); // 1: left, 2: middle, 3: right
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    codename: "SPECTRE_01",
    faction: "Evolve",
    factionIcon: "microscope",
    designation: "SPECTRE_01",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen && autoOpenDelay > 0) {
      const timer = setTimeout(() => {
        setStep(1);
      }, autoOpenDelay);
      return () => clearTimeout(timer);
    } else if (isOpen) {
      setStep(1);
    }
  }, [isOpen, autoOpenDelay]);

  const handleLeftNext = (codename) => {
    setFormData((prev) => ({ ...prev, codename, designation: codename }));
    setStep(2);
  };

  const handleMiddleNext = (faction) => {
    const factionData = {
      Evolve: { faction: "Evolve", factionIcon: "biotech" },
      Contain: { faction: "Contain", factionIcon: "shield" },
    };
    setFormData((prev) => ({
      ...prev,
      ...(factionData[faction] || {
        faction: "Evolve",
        factionIcon: "biotech",
      }),
    }));
    setStep(3);
  };

  const handleRightComplete = () => {
    setStep(1);
    if (onClose) {
      onClose();
    }
  };

  const handleClose = () => {
    setStep(1);
    if (onClose) {
      onClose();
    }
  };

  if (!mounted || !isOpen) return null;

  const modalContent = (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Step 1: Left Popup */}
        {step === 1 && (
          <div className="flex items-center justify-center w-full h-full relative z-10">
            <PollLeftPopup codename={formData.codename} onInitiateLink={handleLeftNext} show={true} />
          </div>
        )}

        {/* Step 2: Middle Popup */}
        {step === 2 && (
          <div className="flex items-center justify-center w-full h-full relative z-10">
            <PollMiddlePopup
              onEvolveClick={() => handleMiddleNext("Evolve")}
              onContainClick={() => handleMiddleNext("Contain")}
              showWaitingMessage={true}
            />
          </div>
        )}

        {/* Step 3: Right Popup */}
        {step === 3 && (
          <div className="flex items-center justify-center w-full h-full relative z-10">
            <PollRightPopup
              designation={formData.designation}
              faction={formData.faction}
              factionIcon={formData.factionIcon}
              onClose={handleClose}
              onEmailSubmit={(email) => {
                console.log("Email submitted:", email);
              }}
              onClaimBadge={handleRightComplete}
              show={true}
            />
          </div>
        )}

        {/* Close button overlay - only show on step 3 */}
        {step === 3 && (
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/40 hover:text-primary transition-colors z-[110]"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
        )}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
