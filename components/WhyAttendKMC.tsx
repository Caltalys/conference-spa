"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { staggerContainer, fadeInUp, fadeInRight } from "@/lib/animations";
import { useAnimationProps } from "@/lib/useAnimationProps";

const FeatureItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <motion.div variants={fadeInUp} className="mb-10">
    <h3 className="text-xl font-semibold text-white">{title}</h3>
    <p className="mt-2 text-white/90">{description}</p>
    <div className="mt-4 border-t border-cyan-400 w-full"></div>
  </motion.div>
);

const WhyAttendKMC = () => {
  const t = useTranslations("WhyAttend");

  const items = [
    {
      title: t("feature1_title"),
      description: t("feature1_desc"),
    },
    {
      title: t("feature2_title"),
      description: t("feature2_desc"),
    },
    {
      title: t("feature3_title"),
      description: t("feature3_desc"),
    },
  ];

  return (
    <section className="relative top-wave bottom-wave bg-primary">
      <motion.div {...useAnimationProps(staggerContainer, { once: true, amount: 0.2 })}
        className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4"
      >
        {/* Cột trái: Sử dụng staggerContainer để các phần tử con xuất hiện lần lượt */}
        <motion.div variants={staggerContainer}>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-white mb-8">
            {t("title")}
          </motion.h2>
          {items.map((item, i) => (
            <FeatureItem key={i} title={item.title} description={item.description} />
          ))}
        </motion.div>

        {/* Cột phải: Xuất hiện đồng thời với cột trái */}
        <motion.div variants={fadeInUp} className="relative w-full max-w-[480px] h-96 md:h-auto mx-auto">
          <Image src={t('flyer')} alt="Why Attend KMC" fill className="object-contain rounded-md shadow-lg" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyAttendKMC;
