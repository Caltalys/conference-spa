"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import CountDown from "./Countdown";

const CounterContainer = () => {
    const t = useTranslations("Hero");
    return (
        <section className="flex w-full h-full items-center justify-center py-16">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
            >
                <CountDown />
            </motion.div>

        </section>
    )
}

export default CounterContainer