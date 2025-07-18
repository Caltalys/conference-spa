"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "motion/react";
import CountDown from "./Countdown";

const Hero = () => {
  const t = useTranslations("Hero");

  const AnimatedText = ({ textKey, className }) => {
    const text = t(textKey);
    if (!text) return null;

    return (
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={className}
      >
        {text}
      </motion.p>
    );
  };

  return (
    <section
      id="trang-chu"
      className="relative min-h-[580px] lg:h-screen bg-[url('/baby.jpg')] bg-cover bg-no-repeat bg-center pt-2 md:pt-0"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-500/50 to-black/50" />

      <div className="relative z-10 flex h-full w-full items-center justify-center pt-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center p-8 space-y-4 lg:space-y-8 text-center font-semibold text-white"
        >
          <AnimatedText
            textKey="conference"
            className="text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] uppercase"
          />
          <AnimatedText
            textKey="title"
            className="sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl lg:leading-tight drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] uppercase"
          />
          <AnimatedText
            textKey="title1"
            className="sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl lg:leading-tight drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] uppercase"
          />
          <AnimatedText
            textKey="title2"
            className="sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl lg:leading-tight drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] uppercase"
          />
          <AnimatedText
            textKey="subtitle"
            className="text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] uppercase"
          />
          <AnimatedText
            textKey="date"
            className="text-xl lg:text-3xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] uppercase"
          />

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <CountDown />
          </motion.div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Link
              href="#dang-ky"
              className="inline-block rounded-full bg-secondary px-8 py-3 text-lg font-bold text-primary-foreground transition-transform duration-300 hover:scale-105"
            >
              {t("registerNow")}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
