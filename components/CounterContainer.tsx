"use client";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import CountDown from "./Countdown";

const CounterContainer = () => {
    const t = useTranslations("Hero");
    return (
        <section className="flex w-full h-full items-center justify-center py-16">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <CountDown />
            </motion.div>

        </section>
    )
}

export default CounterContainer