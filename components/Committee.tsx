'use client';
import { useLocale, useTranslations } from "next-intl";
import CommitteeMember from "./CommitteeMember";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { committeeData } from "@/data/committee";

const Committee = () => {
    const t = useTranslations('Committee');
    const locale = useLocale();

    // Fetching data from a dedicated, locale-aware data file
    // is more efficient and maintainable than using `t.raw`.
    const members = committeeData[locale] || committeeData.vi; // Fallback to English

    // A type guard to ensure that the data from the translation file is a valid array.
    // This prevents runtime errors if the translation key is missing or malformed.
    if (!Array.isArray(members)) {
        // In a production environment, you might want to log this error to a monitoring service.
        console.error("Committee members data is not a valid array:", members);
        return null; // Render nothing if the data is invalid
    }

    // Sort members by the 'order' property. Fallback to a large number if order is not defined.
    const sortedMembers = [...members].sort((a, b) => (a.order ?? 999) - (b.order ?? 999));

    return (
        <section id="ban-to-chuc" className="scroll-mt-16 pt-16 bottom-wave bg-primary">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={staggerContainer}
                className="mx-auto w-full p-4 sm:p-6 lg:p-8">
                <motion.div variants={fadeInUp} className="mb-8 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl uppercase">{t('title')}</h2>
                    <p className="mt-4 text-lg text-white">
                        {t('subtitle')}
                    </p>
                </motion.div>
                {/* This container will stagger its children (the cards) */}
                <motion.div variants={staggerContainer} className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {sortedMembers.map((member) => (
                        <motion.div variants={fadeInUp}
                            key={member.name}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        >
                            <CommitteeMember {...member} />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}
export default Committee