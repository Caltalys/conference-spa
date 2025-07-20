"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "motion/react";

const FeatureItem = ({
  title,
  description,
  delay,
}: {
  title: string;
  description: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="mb-10"
  >
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
      <div className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-8"
          >
            {t("title")}
          </motion.h2>
          {items.map((item, i) => (
            <FeatureItem
              key={i}
              title={item.title}
              description={item.description}
              delay={0.2 + i * 0.2}
            />
          ))}
        </div>
        <div className="relative w-full max-w-[480px] h-96 md:h-auto mx-auto">
          <Image
            src="/danang-bana.jpg" // Cập nhật lại theo đường dẫn ảnh của bạn
            alt="Why Attend KMC"
            fill
            className="object-cover rounded-md shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyAttendKMC;
