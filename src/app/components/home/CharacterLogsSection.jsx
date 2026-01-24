import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { SectionTitle } from "../shared/SectionTitle";

const characters = [
  {
    name: "Lena",
    role: "Technician",
    image: "/assets/images/characters/lena.png",
  },
  {
    name: "Eli",
    role: "Guide",
    image: "/assets/images/characters/eli.png",
  },
  {
    name: "Troopers",
    role: "Armour",
    image: "/assets/images/characters/troopers.png",
  },
  {
    name: "Dust Keeper",
    role: "Commando",
    image: "/assets/images/characters/dustkeeper.png",
  },
];

export default function CharacterLogsSection() {
  return (
    <section className="py-24 px-8 ">
      <div className="flex items-center justify-between mb-16">
        <SectionTitle>Character Logs</SectionTitle>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {characters.map((character, index) => (
          <div
            key={index}
            className="group relative bg-black/50"
            style={{
              borderTopRightRadius: "20px",
              borderBottomLeftRadius: "20px",
              padding: "3px",
              backgroundSize: "300% 300%",
              animation: "gradient-border 3s ease infinite",
            }}
          >
            {/* Content wrapper */}
            <div
              className="relative overflow-hidden  border-3 border-primary/10 group-hover:border-primary transition-all duration-500"
              style={{
                borderTopRightRadius: "17px",
                borderBottomLeftRadius: "17px",
              }}
            >
              <Image
                alt={character.name}
                className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                src={character.image}
                width={400}
                height={500}
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 z-10">
                <span className="bg-primary text-black text-[9px] px-2 py-0.5 font-bold uppercase mb-2 inline-block">
                  {character.role}
                </span>
                <h3 className="text-4xl font-display font-black text-white uppercase tracking-tighter">
                  {character.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
