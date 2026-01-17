'use client';

export default function SocialShareCard({ platform, onClick }) {
  return (
    <button
      className="border border-white/10 py-2 px-4 text-[10px] text-primary font-bold hover:bg-primary/10 transition-colors uppercase"
      onClick={onClick}
    >
      Execute: {platform}
    </button>
  );
}
