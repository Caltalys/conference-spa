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

    return (
        <section id="ban-to-chuc" className="scroll-mt-16 top-wave bottom-wave bg-primary">
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={staggerContainer}
                className="mx-auto w-full sm:px-6 lg:px-8">
                <motion.div variants={fadeInUp} className="mb-8 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl uppercase">{t('title')}</h2>
                    <p className="mt-4 text-lg text-white">
                        {t('subtitle')}
                    </p>
                </motion.div>
                <motion.div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {members.map((member) => (
                        <motion.div variants={staggerContainer}
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