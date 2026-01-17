'use client';

import Image from 'next/image';

const episodes = [
  {
    id: 1,
    title: 'Episode 01 : Genesis',
    description:
      'The first contact with the Sporefall phenomena sends the factions into a frenzy. Commander Valeria makes a discovery that changes everything.',
    thumbnail:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBxvPk05f_n9rw0sS6uYBUjTIPmSwnEijxr9Tz26p4_4tsIAhl1Yo4AJ3xZazj3hpOxNwjEs4CDyJELVAEIEFmkjNm5-KN1RxU7xcn1DW3VURrV5FpnTktJa3ImQ9PiSiZJ7BSvmoScdFCZxhRmjV4Mi3dynJzswi_owwHlnpVA8BnfK28uWtDUUxYp2_tiYVG7VRUpZFutzlE8RpmyN8bbB4IJBGrU1UwzytiQP7wQL4sCCCyIoThKJJsYzYQ1eO1KOjDzS-rHljM',
    status: 'available',
    runtime: '40:15 m',
  },
  {
    id: 2,
    title: 'Episode 02 : The Fall',
    description:
      'The first contact with the Sporefall phenomena sends the factions into a frenzy. Commander Valeria makes a discovery that changes everything.',
    thumbnail:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAGHMvUCQAfqgwN075mDGsHYFOaGEA-YHa_SapNo7-lSqhmN6Na1mQHnmGznyfTO6jhontKE7l6kUOfKwgrF5DAuQHWWQJDqPLhwH4NYMKKWkeIDmWoQv8xATzOM8m5rSl0GAa0t3WT-ZYeu81NAGcrsgBAjGmY14udzJy1v6GsE1E4MvMdVHTUKYdcV6oaD0Zdxq0JtVAoh7pRWgswWCio0ZUpZSK5I3iqQ3qGepYDslRz_Omgr5UTStl3MSaHMsqs-fmeKrvIGmE',
    status: 'available',
    runtime: '40:15 m',
  },
  {
    id: 3,
    title: 'Episode 03 : The Herd',
    description:
      'The first contact with the Sporefall phenomena sends the factions into a frenzy. Commander Valeria makes a discovery that changes everything.',
    thumbnail:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC_-BiHee71_iyAh1aQEDOITgcsirYNHDSgFGQD8JjBZmPWNmMtm9xlri_dHCs3J55bxsNiViWc3dOAzNTLPWj-f48IJu49RdEi8cF1MvTuNn6XMCfas20Va53gxNVdrFYZ9-CHvnx8x_N4x1ERkYqRd7Llddd9xH3H5zH3uEqTjHqwitHWaahK-HG2ERK7Hk2azhpiSIi-IkaLG8klTkyc--p2zkiDtUBpBAkAskGc3lmXgs9MhbhIC2QFTpt7FLOTnqOFIIyimTQ',
    status: 'upcoming',
    runtime: '40:15 m',
  },
  {
    id: 4,
    title: 'Episode 04: The Blind',
    description:
      'The first contact with the Sporefall phenomena sends the factions into a frenzy. Commander Valeria makes a discovery that changes everything.',
    thumbnail:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB2oAZayByVlrH8F9Tr2dlvtV5EbHLjX6KKaZv5hfdd0Ql-LaU-5cs69rDUBZDY8cgqXuJsTjl6dcE9C5TMspDBxMR8a138Wwv9r9OSFK7rhRuCYC5obqEKSF9y1BOlpF6BnziG6xwY2306rtrgajc4ClzMVAMgpiSFhTYxbqmsKdZTlRWI709-_We5iIesx5zMaxw95v3xl592zChYAXD59N17js6PuxAlOPRPn7W_vKY9GIrRow26tNZPVLUk41hZ6xz0PcsJxnE',
    status: 'locked',
    runtime: '40:15 m',
  },
];

export default function EpisodesSection() {
  return (
    <section className="py-24 px-8  bg-background-dark/30">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-3xl font-display font-bold text-primary flex items-center gap-4 uppercase tracking-tighter">
          <span className="text-primary/40 text-4xl font-light">||</span> Episodes
        </h2>
        <div className="flex gap-4 items-center">
          <button className="w-10 h-10 border border-primary/20 flex items-center justify-center text-primary/40 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <div className="px-4 py-1 border border-primary/40 bg-primary/10 text-primary font-mono text-sm tracking-widest">
            1 OF 35
          </div>
          <button className="w-10 h-10 border border-primary/20 flex items-center justify-center text-primary/40 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {episodes.map((episode) => (
          <div
            key={episode.id}
            className="group border border-white/5 bg-white/5 p-4 space-y-4 hover:border-primary/40 transition-all duration-300"
          >
            <div className="relative overflow-hidden aspect-video">
              <Image
                alt={episode.title}
                className={`w-full h-full object-cover group-hover:scale-110 transition-transform ${
                  episode.status === 'locked' ? 'grayscale opacity-30' : episode.status === 'upcoming' ? 'grayscale' : ''
                }`}
                src={episode.thumbnail}
                width={400}
                height={225}
                unoptimized
              />
              {episode.status === 'available' && (
                <span className="absolute top-2 left-2 bg-primary text-black text-[8px] font-bold px-2 py-0.5 uppercase flex items-center gap-1">
                  <span className="w-1 h-1 bg-black rounded-full"></span> Available
                </span>
              )}
              {episode.status === 'upcoming' && (
                <span className="absolute top-2 left-2 bg-orange-600 text-white text-[8px] font-bold px-2 py-0.5 uppercase flex items-center gap-1">
                  <span className="material-symbols-outlined text-[8px]">schedule</span> Upcoming
                </span>
              )}
              {episode.status === 'locked' && (
                <span className="absolute top-2 left-2 bg-gray-700 text-white text-[8px] font-bold px-2 py-0.5 uppercase flex items-center gap-1">
                  <span className="material-symbols-outlined text-[8px]">lock</span> Locked
                </span>
              )}
            </div>
            <div>
              <h4 className={`text-xs font-display font-bold uppercase mb-2 tracking-wide ${
                episode.status === 'locked' ? 'text-white/40' : 'text-white'
              }`}>
                {episode.title}
              </h4>
              <p className={`text-[10px] leading-relaxed mb-4 ${
                episode.status === 'locked' ? 'text-white/30' : 'text-white/50'
              }`}>
                {episode.description}
              </p>
              <div className="flex items-center justify-between">
                <span className={`text-[8px] uppercase tracking-widest ${
                  episode.status === 'locked' ? 'text-white/20' : 'text-white/40'
                }`}>
                  {episode.status === 'upcoming' || episode.status === 'locked' ? 'Est. ' : ''}Runtime: {episode.runtime}
                </span>
                {episode.status === 'available' && (
                  <button className="bg-primary text-black text-[9px] font-bold px-3 py-1 uppercase">Watch Now</button>
                )}
                {episode.status === 'upcoming' && (
                  <button className="border border-orange-600/40 text-orange-600 text-[9px] font-bold px-3 py-1 uppercase flex items-center gap-1">
                    Notify Me <span className="material-symbols-outlined text-[10px]">notifications</span>
                  </button>
                )}
                {episode.status === 'locked' && (
                  <button className="border border-white/10 text-white/20 text-[9px] font-bold px-3 py-1 uppercase">
                    Locked
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
