"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/animations";
import CountDown from "./Countdown";
import Link from "next/link";
import { useAnimationProps } from "@/lib/useAnimationProps";

const CounterContainer = () => {
    const t = useTranslations("Hero");
    const sectionProps = useAnimationProps(staggerContainer, { once: true, amount: 0.5 });
    return (
        <motion.section {...sectionProps}
            className="flex flex-col w-full h-full items-center justify-center pt-8 pb-4 space-y-8"
        >
            <motion.div variants={fadeInUp}>
                <p className="text-xl lg:text-3xl uppercase text-primary font-semibold font-serif">
                    {t("remainTitle")}
                </p>
            </motion.div>
            <motion.div variants={fadeInUp}>
                <CountDown />
            </motion.div>
            <motion.div
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Link
                    href="#dang-ky" 
                    className="animate-bounce inline-block rounded-full bg-destructive shadow-xs px-8 py-3 text-xl lg:text-2xl font-bold text-primary-foreground transition-transform duration-300 hover:scale-105"
                    >
                    {t("registerNow")}
                </Link>
            </motion.div>
        </motion.section>
    )
}

export default CounterContainer