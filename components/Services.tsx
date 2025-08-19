"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link as LinkIcon, Mail, Phone } from "lucide-react";
import { SiFacebook } from '@icons-pack/react-simple-icons';
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import Pretitle from "./Pretitle";

// Manual delay helper
const getDelay = (index: number, base = 0.2) => base + index * 0.15;

const ServiceCard = ({
  title,
  description,
  detail,
  imageUrl,
  index,
  label,
  url
}: {
  title: string;
  description: string;
  detail: string;
  imageUrl: string;
  index: number;
  label: string;
  url: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay: getDelay(index) }}
    className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
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

    <div className="text-left p-4 flex-grow">
      <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
        {title}
      </h3>
      <p className="text-base text-gray-600">{description}</p>
    </div>
    {/* <div className="flex flex-col md:flex-row gap-4 justify-center mx-auto pb-4">
      <Link
              href={url}
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
                  {label}
                </Button>
              </motion.div>
            </Link>
    </div> */}
  </motion.div>
);

const ContactInfoItem = ({ icon: Icon, children, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: getDelay(index, 0.1) }}
    viewport={{ once: true, amount: 0.5 }}
    className="flex items-start gap-3"
  >
    <Icon className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
    <div className="text-gray-700 pt-1">{children}</div>
  </motion.div>
);

const Services = () => {
  const t = useTranslations("Services");

  const serviceItems = [
    { title: t("service1_title"), description: t("service1_description"), detail: t("service1_detail"), imageUrl: "/xe-dua-don.jpeg" , label: t("registerButton"), url: t("service1_url") },
    { title: t("service2_title"), description: t("service2_description"), detail: t("service2_detail"), imageUrl: "/luu-tru.jpg", label: t("registerButton"), url: t("service2_url") },
    { title: t("service3_title"), description: t("service3_description"), detail: t("service3_detail"), imageUrl: "/tour.jpg", label: t("registerButton"), url: t("service3_url") },
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
          <Pretitle text={t("title")} center starColor="text-primary" textColor="text-primary" />

          {/* <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl uppercase">
            {t("title")}
          </h2> */}
          <p className="mt-4 text-lg text-gray-600">{t("subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-primary">{t("companyName")}</h3>
            <p className="mt-4 text-gray-700">{t("support")}</p>
            {/* <p className="mt-4 text-gray-700 italic">{t("companyDescription")}</p> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 italic">{t("companyDescription")} {t("experience")}</p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p
              className="text-gray-700"
              dangerouslySetInnerHTML={{ __html: t.raw("registerSubtitle") }}
            />
          </motion.div>

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

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {serviceItems.map((item, index) => (
              <ServiceCard key={index} {...item} index={index} />
            ))}
          </div>




          <div className="flex flex-col md:flex-row gap-4 justify-center mx-auto">
            {t("contactPhone1") && (
              <ContactInfoItem icon={Phone} index={0}>
                <p><strong>{t("contactPhone1")}</strong> {t("contactPerson1")}</p>
              </ContactInfoItem>
            )
            }
            <ContactInfoItem icon={Phone} index={1}>
                  <p><strong>{t("contactPhone2")}</strong> {t("contactPerson2")}</p>
                </ContactInfoItem>
            <ContactInfoItem icon={Mail} index={2}>
              <a href={`mailto:${t("contactEmail")}`} className="text-blue-600 hover:underline break-all">
                {t("contactEmail")}
              </a>
            </ContactInfoItem>
            <ContactInfoItem icon={SiFacebook} index={3}>
              <a href={t("facebookUrl")} target="_blank" rel="noopener noreferrer"
                className="text-blue-600 hover:underline break-all">
                {t("facebookHandle")}
              </a>
            </ContactInfoItem>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
