"use client";

import { ArrowRight, Clock, Lock } from "lucide-react";
import Image from "next/image";
import { AnimatedCard } from "../shared/AnimatedWrapper";
import Carousel from "../shared/Carousel";
import { SectionTitle } from "../shared/SectionTitle";

const episodes = [
  {
    id: 1,
    title: "Episode 01 : Genesis",
    description:
      "The first contact with the Sporefall phenomena sends the factions into a frenzy. Commander Valeria makes a discovery that changes everything.",
    thumbnail: "/assets/images/episodes/episode-1.png",
    status: "available",
    runtime: "40:15 m",
  },
  {
    id: 2,
    title: "Episode 02 : The Fall",
    description:
      "The first contact with the Sporefall phenomena sends the factions into a frenzy. Commander Valeria makes a discovery that changes everything.",
    thumbnail: "/assets/images/episodes/episode-2.png",
    status: "available",
    runtime: "40:15 m",
  },
  {
    id: 3,
    title: "Episode 03 : The Herd",
    description:
      "The first contact with the Sporefall phenomena sends the factions into a frenzy. Commander Valeria makes a discovery that changes everything.",
    thumbnail: "/assets/images/episodes/episode-3.png",
    status: "upcoming",
    runtime: "40:15 m",
  },
  {
    id: 4,
    title: "Episode 04: The Blind",
    description:
      "The first contact with the Sporefall phenomena sends the factions into a frenzy. Commander Valeria makes a discovery that changes everything.",
    thumbnail: "/assets/images/episodes/episode-4.png",
    status: "locked",
    runtime: "40:15 m",
  },
];

export default function EpisodesSection() {
  const renderEpisodeCard = (episode) => (
    <AnimatedCard key={episode.id} hoverGlow={true} hoverFloat={true}>
      <div
        className={`group overflow-hidden transition-all duration-300 h-full flex flex-col box-shadow-xl border border-transparent ${
          episode.status === "available"
            ? "hover:border-primary"
            : episode.status === "upcoming"
              ? "hover:border-orange-600"
              : "hover:border-gray-700"
        }`}
        style={{
          borderTopRightRadius: "20px",
          borderBottomLeftRadius: "20px",
        }}
      >
        {/* Image Section */}
        <div className="relative overflow-hidden w-full aspect-[326/222]">
          <Image
            alt={episode.title}
            className={`object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 ${
              episode.status === "locked" ? "grayscale" : episode.status === "upcoming" ? "grayscale" : ""
            }`}
            src={episode.thumbnail}
            fill
            unoptimized
          />
          {episode.status === "available" && (
            <span className="absolute top-2 left-2 bg-black text-white text-[8px] font-bold px-2 py-0.5 uppercase flex items-center gap-1.5 rounded">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Available
            </span>
          )}
          {episode.status === "upcoming" && (
            <span className="absolute top-2 left-2 bg-orange-600 text-white text-[8px] font-bold px-2 py-0.5 uppercase flex items-center gap-1 rounded">
              <Clock className="w-2 h-2" />
              <span>Upcoming</span>
            </span>
          )}
          {episode.status === "locked" && (
            <span className="absolute top-2 left-2 bg-gray-700 text-white text-[8px] font-bold px-2 py-0.5 uppercase flex items-center gap-1 rounded">
              <Lock className="w-2 h-2" />
              <span>Locked</span>
            </span>
          )}
        </div>

        {/* Text/Info Section */}
        <div
          className={`p-4 space-y-3 transition-all duration-300 flex-1 flex flex-col ${
            episode.status === "available"
              ? "bg-black/50 group-hover:bg-primary"
              : episode.status === "upcoming"
                ? "bg-black/50 group-hover:bg-orange-600"
                : "bg-black/50 group-hover:bg-gray-700"
          }`}
        >
          <h4
            className={`text-[16px] font-display font-bold uppercase mb-2 tracking-wide transition-colors duration-300 ${
              episode.status === "available"
                ? "text-white group-hover:text-black"
                : episode.status === "upcoming"
                  ? "text-white group-hover:text-black"
                  : episode.status === "locked"
                    ? "text-white/40 group-hover:text-white"
                    : "text-white"
            }`}
          >
            {episode.title}
          </h4>
          <p
            className={`text-[12px] leading-relaxed mb-4 mr-4 flex-1 transition-colors duration-300 ${
              episode.status === "available"
                ? "text-white/70 group-hover:text-black"
                : episode.status === "upcoming"
                  ? "text-white/70 group-hover:text-black"
                  : episode.status === "locked"
                    ? "text-white/30 group-hover:text-white/60"
                    : "text-white/70"
            }`}
          >
            {episode.description}
          </p>
          <div className="flex items-center justify-between pb-2">
            <span
              className={`text-[10px] uppercase tracking-widest transition-colors duration-300 ${
                episode.status === "available"
                  ? "text-white/50 group-hover:text-black/60"
                  : episode.status === "upcoming"
                    ? "text-white/50 group-hover:text-black/60"
                    : episode.status === "locked"
                      ? "text-white/20 group-hover:text-white/40"
                      : "text-white/50"
              }`}
            >
              {episode.status === "upcoming" || episode.status === "locked" ? "Est. " : ""}
              Runtime: {episode.runtime}
            </span>
            {episode.status === "available" && (
              <button
                className="border border-primary text-white text-[9px] font-bold px-3 py-1.5 uppercase flex items-center gap-1 transition-all duration-300 group-hover:bg-white group-hover:border-white group-hover:text-black"
                style={{
                  borderTopRightRadius: "4px",
                  borderBottomLeftRadius: "4px",
                }}
              >
                Watch Now <ArrowRight className="w-3 h-3 group-hover:text-black" />
              </button>
            )}
            {episode.status === "upcoming" && (
              <button
                className="border border-orange-600 text-orange-600 text-[9px] font-bold px-3 py-1.5 uppercase flex items-center gap-1 transition-all duration-300 group-hover:bg-white group-hover:border-white group-hover:text-black"
                style={{
                  borderTopRightRadius: "4px",
                  borderBottomLeftRadius: "4px",
                }}
              >
                <ArrowRight className="w-3 h-3 group-hover:text-black" /> Notify Me
              </button>
            )}
            {episode.status === "locked" && (
              <button
                className="border border-white/20 text-white/30 text-[9px] font-bold px-3 py-1.5 uppercase transition-all duration-300 group-hover:bg-white group-hover:border-white group-hover:text-black"
                style={{
                  borderTopRightRadius: "4px",
                  borderBottomLeftRadius: "4px",
                }}
              >
                Locked
              </button>
            )}
          </div>
        </div>
      </div>
    </AnimatedCard>
  );

  return (
    <section className="py-24 px-8 cyber-hex-grid">
      <Carousel
        items={episodes}
        renderItem={renderEpisodeCard}
        itemsPerView={{ mobile: 1, tablet: 2, desktop: 4 }}
        gridClassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
        titleComponent={<SectionTitle>Episodes</SectionTitle>}
      />
    </section>
  );
}
