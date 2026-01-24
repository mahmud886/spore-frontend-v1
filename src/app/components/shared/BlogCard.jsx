"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedCard } from "./AnimatedWrapper";

export default function BlogCard({ post }) {
  const { image, imageAlt, id, timestamp, title, excerpt, description, link } = post;
  const content = excerpt || description;

  return (
    <AnimatedCard hoverGlow={true} hoverFloat={true} className="h-full">
      <article
        className="bg-black/50 border border-primary/10 hover:border-primary/50 transition-all overflow-hidden h-full cyber-energy-wave"
        style={{
          borderTopRightRadius: "20px",
          borderBottomLeftRadius: "20px",
        }}
      >
        <Image
          alt={imageAlt || title}
          className="w-full h-48 object-cover grayscale hover:grayscale-0 transition duration-500"
          src={image}
          width={400}
          height={192}
          unoptimized
        />
        <div className="p-6">
          <div className="flex justify-between text-[9px] text-white/40 uppercase font-mono mb-3">
            <span>{id}</span>
            <span>{timestamp}</span>
          </div>
          <h3 className="text-lg font-bold uppercase mb-3">{title}</h3>
          <p className="text-xs text-white/50 leading-relaxed mb-6">{content}</p>
          <a className="text-[10px] text-primary font-bold uppercase hover:underline" href={link || "#"}>
            Read Log
          </a>
        </div>
      </article>
    </AnimatedCard>
  );
}
