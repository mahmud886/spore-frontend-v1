"use client";

import { SectionTitle } from "../shared/SectionTitle";
import SocialShareCard from "./SocialShareCard";

const defaultPlatforms = [
  "FACEBOOK",
  "WHATSAPP",
  "DISCORD",
  "TELEGRAM",
  "LINKEDIN",
  "X_SHARE",
  "THREADS",
  "TIKTOK",
  "IG_STORY",
  "REDDIT",
];

export default function MobilizeNetworkCard({ title, description, platforms = defaultPlatforms, onShare }) {
  const handleShare = (platform) => {
    if (onShare) {
      onShare(platform);
    }
  };

  return (
    <div className="space-y-4 mb-24">
      <SectionTitle className="">Mobilize Your Network</SectionTitle>
      <div className="bg-black/50 border font-body border-white/10 p-6 text-center mt-10 py-12">
        <h3 className="text-primary font-light text-[26px] md:text-[36px] tracking-normal uppercase mb-2">{title}</h3>
        <p className="text-sm text-white/50 font-body tracking-widest leading-relaxed mb-12">{description}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 mx-auto">
          {platforms.map((platform, index) => (
            <SocialShareCard key={index} platform={platform} onClick={() => handleShare(platform)} />
          ))}
        </div>
        <div className="mt-10">
          <h3 className="text-white/50 text-[14px] font-light md:text-[18px]  uppercase mb-2">
            Your Contribution Is Vital
          </h3>
          <p className="text-[18px] md:text-[26px] text-white/50 font-subheading tracking-widest leading-relaxed mb-6 font-bold">
            <span className="text-primary font-bold">10, 984 </span>signals broadcasted
          </p>
        </div>
      </div>
    </div>
  );
}
