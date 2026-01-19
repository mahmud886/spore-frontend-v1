"use client";

import { useState } from "react";

export default function PollLeftPopup({
  phase = "PHASE 01: IDENTIFICATION",
  title = "Classification Required",
  subtitle = "Identity Verification. Assign a designation.",
  codename = "SPECTRE_01",
  maxLength = 12,
  onInitiateLink,
  onClose,
  show = true,
}) {
  const [inputValue, setInputValue] = useState(codename);
  const characterCount = inputValue.length;

  if (!show) return null;

  const handleInitiateLink = () => {
    if (onInitiateLink) {
      onInitiateLink(inputValue);
    }
  };

  return (
    <>
      {/* Main popup card */}
      <div className="w-full max-w-md bg-black rounded-[32px] border border-white/10 p-8 shadow-2xl relative">
        {/* Close button */}
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white/60 hover:bg-primary hover:border-primary hover:text-black transition-all duration-200 z-20"
            aria-label="Close"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        )}
        {/* Phase label - inside popup */}
        <div className="flex flex-col items-center mb-8">
          <span className="font-display text-[10px] tracking-[0.2em] text-white/50 mb-4">{phase}</span>
        </div>
        {/* Decorative SVG pattern */}
        <div className="absolute top-16 right-8 opacity-20 select-none">
          <svg
            className="text-white/40"
            fill="none"
            height="48"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            width="48"
          >
            <path
              d="M3 3h4v4H3zM17 3h4v4h-4zM3 17h4v4H3zM14 14h2v2h-2zM18 18h2v2h-2zM14 18h2v2h-2zM18 14h2v2h-2zM7 7V3h4v4H7zM3 7V3h4v4H3z"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path d="M11 11h2v2h-2zM11 17h2v2h-2zM17 11h2v2h-2z" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </div>

        {/* Status dots */}
        <div className="flex justify-center gap-2 mb-12 -mt-4">
          <div className="w-2.5 h-2.5 rounded-full bg-primary glow-lime"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
        </div>

        {/* Fingerprint icon */}
        <div className="flex justify-center mb-10">
          <div className="w-20 h-20 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center relative">
            <div className="absolute inset-0 rounded-full border border-primary/40 animate-ping opacity-20"></div>
            <span className="material-symbols-outlined text-primary text-4xl">fingerprint</span>
          </div>
        </div>

        {/* Title section */}
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-3xl font-display font-black text-white uppercase tracking-tight mb-3">
            {title}
          </h1>
          <p className="font-mono text-sm text-white/50 leading-relaxed">{subtitle}</p>
        </div>

        {/* Form section */}
        <div className="space-y-8">
          <div className="space-y-2">
            <label
              className="block font-mono text-[10px] uppercase tracking-widest text-primary font-bold"
              htmlFor="codename"
            >
              Codename
            </label>
            <div className="relative flex items-center">
              <div className="absolute left-4 pointer-events-none text-white/40">
                <span className="material-symbols-outlined text-[18px]">terminal</span>
              </div>
              <input
                id="codename"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value.toUpperCase())}
                maxLength={maxLength}
                autoFocus
                className="w-full bg-zinc-900/50 border border-white/10 rounded-xl py-4 pl-12 pr-16 font-mono text-white focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-200 outline-none uppercase tracking-wider"
              />
              <div className="absolute right-4 font-mono text-[10px] text-white/40">
                {characterCount}/{maxLength}
              </div>
            </div>
          </div>

          <button
            onClick={handleInitiateLink}
            className="w-full bg-primary hover:bg-[#b8e600] text-black font-mono font-bold py-5 rounded-xl flex items-center justify-center gap-2 group transition-all duration-300 active:scale-[0.98]"
          >
            INITIATE LINK
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>
        </div>

        {/* Progress bar */}
        <div className="mt-8 border-t border-white/10 pt-6">
          <div className="h-[2px] w-full bg-zinc-900 rounded-full overflow-hidden">
            <div className="h-full bg-primary/20 w-1/3"></div>
          </div>
        </div>
      </div>

      {/* Fixed bottom status bar */}
      <div className="fixed bottom-8 text-[10px] font-mono text-white/40 flex gap-6">
        <span>STATION_ID: 0X99_A</span>
        <span>LINK_STATUS: STABLE</span>
        <span className="animate-pulse">ENCRYPTION: ACTIVE</span>
      </div>
    </>
  );
}
