'use client';

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export const WelcomeMessageItem = () => {
    const t = useTranslations('WelcomeMessage');

    const renderHTML = (key: string) => {
        const rawString = t.raw(key);
        // A simple check to avoid errors if the key is missing
        if (typeof rawString !== 'string') {
            console.error(`Translation key '${key}' is not a string.`);
            return { __html: '' };
        }
        return { __html: rawString };
    };

    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center"
        >
            <motion.div variants={fadeInUp}>
                {/* <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl uppercase">
                    {t('title')}
                </h2> */}
                <h3 className="mt-4 text-xl font-semibold text-white uppercase">
                    {t('subtitle')}
                </h3>
                <p className="mt-2 text-lg text-white">
                    {t('locationDate')}
                </p>
            </motion.div>

            <motion.div
                variants={fadeInUp}
                className="mt-12 text-left space-y-6 text-white text-lg"
            >
                <p className="italic">{t('salutation')}</p>
                <p dangerouslySetInnerHTML={renderHTML('intro')} className="text-justify"/>
                <p className="font-semibold text-white text-justify italic" dangerouslySetInnerHTML={renderHTML('slogan')} />
                <p className="text-justify">{t('paragraph1')}</p>
                <p className="text-justify">{t('paragraph2')}</p>
                <p className="text-justify font-semibold" dangerouslySetInnerHTML={renderHTML('closing')} />
                 {/* Added Signature Block */}
                <div className="mt-8 text-left">
                <p className="italic">{t("signature")}</p>
                <p className="font-bold mt-4">{t("signatureName")}</p>
                <p className="italic">{t("signatureRole")}</p>
                </div>
            </motion.div>
            <div className="mt-6 border-t border-cyan-400 w-1/2 mx-auto"></div>
        </motion.div>
    );
}


const WelcomeMessage = () => {
    const t = useTranslations('WelcomeMessage');

    const renderHTML = (key: string) => {
        const rawString = t.raw(key);
        // A simple check to avoid errors if the key is missing
        if (typeof rawString !== 'string') {
            console.error(`Translation key '${key}' is not a string.`);
            return { __html: '' };
        }
        return { __html: rawString };
    };

    return (
        <section className="scroll-mt-16 py-16 bg-slate-50">
            <WelcomeMessageItem />
        </section>
    );
};

export default WelcomeMessage;