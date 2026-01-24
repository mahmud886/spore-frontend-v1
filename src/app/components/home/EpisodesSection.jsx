"use client";

import { ArrowRight, ChevronLeft, ChevronRight, Clock, Lock } from "lucide-react";
import Image from "next/image";
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
  return (
    <section className="py-24 px-8">
      <div className="flex items-center justify-between mb-12">
        <SectionTitle>Episodes</SectionTitle>
        <div className="flex gap-2 sm:gap-4 items-center">
          <button className="w-8 h-8 sm:w-10 sm:h-10 border border-white/20 rounded-full flex items-center justify-center text-white/40 hover:text-primary hover:border-primary transition-colors bg-black/30">
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <div className="px-2 sm:px-4 py-1 sm:py-1.5 border-2 border-primary bg-primary text-black font-mono text-xs sm:text-sm tracking-widest rounded">
            1 OF 35
          </div>
          <button className="w-8 h-8 sm:w-10 sm:h-10 border border-white/20 rounded-full flex items-center justify-center text-white/40 hover:text-primary hover:border-primary transition-colors bg-black/30">
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {episodes.map((episode) => {
          return (
            <div
              key={episode.id}
              className={`group overflow-hidden transition-all duration-300 h-full flex flex-col box-shadow-xl`}
              style={{
                borderTopRightRadius: "20px",
              }}
            >
              {/* Image Section */}
              <div className="relative overflow-hidden w-[326px] h-[222px]">
                <Image
                  alt={episode.title}
                  className={`object-contain w-[326px] h-[222px] group-hover:scale-110 transition-transform duration-500 ${
                    episode.status === "locked" ? "grayscale" : episode.status === "upcoming" ? "grayscale" : ""
                  }`}
                  src={episode.thumbnail}
                  width={400}
                  height={250}
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
                style={{
                  borderBottomLeftRadius: "20px",
                }}
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
          );
        })}
      </div>
    </section>
  );
}
