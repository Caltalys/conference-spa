'use client';

import { staggerContainer } from "@/lib/animations"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl";
import { SectionHeader } from "./ConferenceInfo";
import Image from "next/image";

const Sponsor = () => {
    const t = useTranslations('Footer');

    return (
        <section id="sponsor" className="scroll-mt-16">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={staggerContainer}
                className="flex flex-col items-center justify-center pt-8 pb-4 space-y-8 mx-auto px-4 sm:px-6 lg:px-8">
                
                <SectionHeader title={t('sponsor')} textColor="text-gray-600" />
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-center"
                >
                    <p className="text-xl lg:text-2xl uppercase text-primary font-semibold">
                        {t("sponsorTitle")}
                    </p>
                </motion.div>
                <div className="flex items-center justify-center gap-8 md:gap-16 w-full h-32">
                    <div className="relative h-full w-full max-w-xl">
                        <Image
                            src="/sponsor.png"
                            alt={t('alive-thrive')}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Sponsor