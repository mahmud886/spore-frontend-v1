"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";
import { AnimatedWrapper } from "../shared/AnimatedWrapper";

export default function NewsletterSection() {
  return (
    <AnimatedWrapper variant={fadeUp} className="">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="mx-auto">
          <div className="relative bg-black/50 rounded-2xl border border-[#C2FF02]/20 px-6 py-6 sm:px-8 md:px-12 md:pt-24 md:pb-30 overflow-hidden cyber-glow-pulse">
            {/* Glow Effect */}
            <div className="absolute inset-0 blur-3xl" />

            {/* Content */}
            <div className="relative z-10 space-y-6 sm:space-y-8">
              <div className="space-y-2 sm:space-y-3 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-subheading font-bold text-primary uppercase tracking-widest cyber-text-glitch">
                  Stay Updated
                </h2>
                <p className="text-primary text-sm font-subheading sm:text-base md:text-lg px-2 uppercase tracking-widest">
                  Get exclusive updates, behind-the-scenes content, and secret drops
                </p>
              </div>

              {/* Form */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mx-auto w-full">
                <motion.input
                  type="text"
                  placeholder="John Doe"
                  whileFocus={{ scale: 1.02, borderColor: "#C2FF02" }}
                  className="flex-1 w-full px-3 sm:px-4 py-6 sm:py-0 bg-black/20 border border-[#C2FF02]/20 text-white placeholder:text-gray-500 focus:border-[#C2FF02] focus:ring-2 focus:ring-primary rounded-lg h-auto sm:h-11 md:h-18 text-sm md:text-xl outline-none"
                />
                <motion.input
                  type="email"
                  placeholder="john.doe@example.com"
                  whileFocus={{ scale: 1.02, borderColor: "#C2FF02" }}
                  className="flex-1 w-full px-3 sm:px-4 py-6 sm:py-0 bg-black/20 border border-[#C2FF02]/20 text-white placeholder:text-gray-500 focus:border-[#C2FF02] focus:ring-2 focus:ring-primary rounded-lg h-auto sm:h-11 md:h-18 text-sm md:text-xl outline-none"
                />
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(194, 255, 2, 0.5)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#C2FF02] font-subheading uppercase h-11 sm:h-12 md:h-18 tracking-widest hover:bg-[#a8db02] text-black font-semibold px-6 sm:px-8 rounded-lg whitespace-nowrap text-sm md:text-xl w-full sm:w-auto"
                >
                  Secret Drops!
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedWrapper>
  );
}
