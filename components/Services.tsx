"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Facebook, Link as LinkIcon, Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

// Manual delay helper
const getDelay = (index: number, base = 0.2) => base + index * 0.15;

const ServiceCard = ({
  title,
  description,
  imageUrl,
  index,
}: {
  title: string;
  description: string;
  imageUrl: string;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay: getDelay(index) }}
    className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
  >
    <div className="relative h-56 w-full overflow-hidden">
      <Image
        src={imageUrl}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt={title}
        fill
        className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
    </div>

    <div className="text-left p-4">
      <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
        {title}
      </h3>
      <p className="text-base text-gray-600">{description}</p>
    </div>
  </motion.div>
);

const ContactInfoItem = ({ icon: Icon, children, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: getDelay(index) }}
    className="flex items-start gap-3"
  >
    <Icon className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
    <div className="text-gray-700">{children}</div>
  </motion.div>
);

const Services = () => {
  const t = useTranslations("Services");

  const serviceItems = [
    { title: t("service1_title"), description: t("service1_description"), imageUrl: "/photo.jpg" },
    { title: t("service2_title"), description: t("service2_description"), imageUrl: "/photo.jpg" },
    { title: t("service3_title"), description: t("service3_description"), imageUrl: "/photo.jpg" },
  ];

  return (
    <section
      id="dich-vu"
      className="scroll-mt-16 py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl uppercase">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-gray-600">{t("subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900">{t("companyName")}</h3>
            <p className="mt-4 text-gray-700">{t("companyDescription")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 italic">{t("experience")}</p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700">{t("support")}</p>

          </motion.div>


          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {serviceItems.map((item, index) => (
              <ServiceCard key={index} {...item} index={index} />
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex mt-2 w-full max-w-7xl mx-auto items-center justify-center"
          >
            <Link
              href="https://forms.gle/3bQ9ztbrVNMMZzhq9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="text-lg py-6 hover:bg-destructive transition-colors duration-300">
                  <LinkIcon className="mr-2 h-5 w-5" />
                  {t("registerButton")}
                </Button>
              </motion.div>
            </Link>
          </motion.div>


          <div className="mt-6 flex flex-col items-center justify-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl mb-4 font-bold text-gray-900"
            >
              {t("contactTitle")}
            </motion.h3>

            <div className="flex items-end justify-center gap-4 ">
              <ContactInfoItem icon={Phone} index={0}>
                <p><strong>{t("contactPhone1")}</strong> {t("contactPerson1")}</p>
              </ContactInfoItem>
              <ContactInfoItem icon={Phone} index={1}>
                <p><strong>{t("contactPhone2")}</strong> {t("contactPerson2")}</p>
              </ContactInfoItem>
              <ContactInfoItem icon={Mail} index={2}>
                <a href={`mailto:${t("contactEmail")}`} className="text-blue-600 hover:underline break-all">
                  {t("contactEmail")}
                </a>
              </ContactInfoItem>
              <ContactInfoItem icon={Facebook} index={3}>
                <a href={t("facebookUrl")} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-all">
                  {t("facebookHandle")}
                </a>
              </ContactInfoItem>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
