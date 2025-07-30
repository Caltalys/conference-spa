"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import CountDown from "./Countdown";
import Link from "next/link";

const CounterContainer = () => {
    const t = useTranslations("Hero");
    return (
        <section className="flex flex-col w-full h-full items-center justify-center pt-8 pb-4 space-y-8">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
            >
                <p className="text-xl lg:text-3xl uppercase text-primary font-semibold font-serif">
                    {t("remainTitle")}
                </p>
            </motion.div>
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
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
                    className="animate-bounce inline-block rounded-full bg-destructive shadow-xs px-8 py-3 text-xl lg:text-2xl font-bold text-primary-foreground transition-transform duration-300 hover:scale-105"
                    >
                    {t("registerNow")}
                </Link>
            </motion.div>
        </section>
    )
}

export default CounterContainer