"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  MessageSquare,
  Circle,
  Send,
  Share2,
  Twitter,
} from "lucide-react";

const platformIcons = {
  X_SHARE: Twitter,
  THREADS: MessageSquare,
  TIKTOK: Share2,
  IG_STORY: Instagram,
  FACEBOOK: Facebook,
  WHATSAPP: MessageCircle,
  DISCORD: MessageCircle,
  TELEGRAM: Send,
  REDDIT: Circle,
  LINKEDIN: Linkedin,
};

export default function SocialShareCard({ platform, onClick }) {
  const Icon = platformIcons[platform] || Share2;

  return (
    <button
      className="border border-white/10 py-2 px-4 text-[10px] text-primary font-bold hover:bg-primary/10 transition-colors uppercase flex items-center justify-center gap-2"
      onClick={onClick}
    >
      <Icon className="w-4 h-4" />
      <span>Execute: {platform}</span>
    </button>
  );
}
