"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValueEvent, useSpring } from "framer-motion";

function AnimatedPercentage({ value, delay = 0 }) {
  const [displayValue, setDisplayValue] = useState(0);
  const spring = useSpring(0, { stiffness: 50, damping: 30 });

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  useMotionValueEvent(spring, "change", (latest) => {
    setDisplayValue(Math.round(latest));
  });

  return (
    <motion.span
      className="text-black font-black text-2xl"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 0.5,
        delay: delay,
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
    >
      {displayValue}%
    </motion.span>
  );
}

export default function PollResultSection({
  faction1 = {
    name: "EVOLVE",
    subLabel: "BASTION PARTY",
    percentage: 50,
  },
  faction2 = {
    name: "RESIST",
    subLabel: "THE NEW ALLIANCE",
    percentage: 50,
  },
  centerLabel = "THE CITY STANDS DIVIDED",
}) {
  return (
    <motion.section className="mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      {/* Top Labels */}
      <div className="flex justify-between items-center mb-4">
        <motion.h3
          className="text-primary text-sm font-bold tracking-widest uppercase"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {faction1.name}
        </motion.h3>
        <motion.p
          className="text-[10px] text-white/60 uppercase tracking-widest"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {centerLabel}
        </motion.p>
        <motion.h3
          className="text-accent-blue text-sm font-bold tracking-widest uppercase"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {faction2.name}
        </motion.h3>
      </div>

      {/* Progress Bar */}
      <div className="h-16 w-full flex overflow-hidden rounded-full relative">
        <motion.div
          className="flex items-center justify-center"
          style={{
            background: "repeating-linear-gradient(45deg, #C2FF02, #C2FF02 10px, #a8db02 10px, #a8db02 20px)",
            borderTopLeftRadius: "9999px",
            borderBottomLeftRadius: "9999px",
          }}
          initial={{ width: "0%" }}
          animate={{ width: `${faction1.percentage}%` }}
          transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <AnimatedPercentage value={faction1.percentage} delay={1.5} />
        </motion.div>
        <motion.div
          className="flex items-center justify-center"
          style={{
            background: "repeating-linear-gradient(45deg, #9ca3af, #9ca3af 10px, #ffffff 10px, #ffffff 20px)",
            borderTopRightRadius: "9999px",
            borderBottomRightRadius: "9999px",
          }}
          initial={{ width: "0%" }}
          animate={{ width: `${faction2.percentage}%` }}
          transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <AnimatedPercentage value={faction2.percentage} delay={1.5} />
        </motion.div>
      </div>

      {/* Bottom Labels */}
      <div className="flex justify-between items-center mt-4">
        <motion.p
          className="text-[10px] text-white/60 uppercase tracking-widest"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {faction1.subLabel}
        </motion.p>
        <motion.p
          className="text-[10px] text-white/60 uppercase tracking-widest"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {faction2.subLabel}
        </motion.p>
      </div>
    </motion.section>
  );
}
