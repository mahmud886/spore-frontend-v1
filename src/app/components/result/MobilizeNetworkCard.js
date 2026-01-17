'use client';

import SocialShareCard from './SocialShareCard';

const defaultPlatforms = ['X_SHARE', 'THREADS', 'TIKTOK', 'IG_STORY'];

export default function MobilizeNetworkCard({
  title = 'Silence is Complicity',
  description = 'The infection spreads through silence. Your network is your weapon. Broadcast the signal before the connection is severed.',
  platforms = defaultPlatforms,
  onShare,
}) {
  const handleShare = (platform) => {
    if (onShare) {
      onShare(platform);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 text-xs font-bold tracking-widest text-primary uppercase">
        <span className="w-1 h-3 bg-primary"></span>
        <span>Mobilize Network</span>
      </div>
      <div className="bg-terminal-gray/30 border border-white/10 p-6">
        <h3 className="text-primary font-bold uppercase mb-2">{title}</h3>
        <p className="text-sm text-white/60 leading-relaxed mb-6">{description}</p>
        <div className="grid grid-cols-2 gap-3">
          {platforms.map((platform, index) => (
            <SocialShareCard key={index} platform={platform} onClick={() => handleShare(platform)} />
          ))}
        </div>
      </div>
    </div>
  );
}
