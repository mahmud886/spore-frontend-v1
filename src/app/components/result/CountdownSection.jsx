"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { fadeUp, staggerContainer } from "../../utils/animations";
import CountdownCard from "./CountdownCard";

export default function CountdownSection({ targetDate, highlightMinutes = true }) {
  // Calculate target date - 3 days from now if not provided
  const targetTime = useMemo(() => {
    if (targetDate) {
      return new Date(targetDate).getTime();
    }
    const now = new Date();
    now.setDate(now.getDate() + 3);
    return now.getTime();
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const formatValue = (value) => {
    return String(value).padStart(2, "0");
  };

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Calculate immediately
    calculateTimeLeft();

    // Update every second
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [targetTime]);

  return (
    <motion.section
      key="countdown-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-12 cyber-power-surge"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold text-primary pb-4 text-center mb-6 font-subheading cyber-text-glitch"
      >
        Add Copy above the clock
      </motion.h1>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-4 gap-2 sm:gap-4 max-w-3xl mx-auto pb-12"
      >
        <motion.div
          key={`days-${timeLeft.days}`}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <CountdownCard value={formatValue(timeLeft.days)} label="Days" />
        </motion.div>
        <motion.div
          key={`hours-${timeLeft.hours}`}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <CountdownCard value={formatValue(timeLeft.hours)} label="Hours" />
        </motion.div>
        <motion.div
          key={`minutes-${timeLeft.minutes}`}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <CountdownCard value={formatValue(timeLeft.minutes)} label="Minutes" isRed={true} />
        </motion.div>
        <motion.div
          key={`seconds-${timeLeft.seconds}`}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <CountdownCard value={formatValue(timeLeft.seconds)} label="Seconds" isRed={true} />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
