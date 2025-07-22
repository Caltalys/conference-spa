'use client';

import { useTranslations } from "next-intl";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";
import Image from "next/image";


const FlyerImageItem = () => {
    const t = useTranslations('Register');

    const flyerFullSrc = t('flyerFull');
    const flyerAlt = 'Conference Flyer';

    return (
        <motion.div
            className="relative w-full max-w-7xl mx-auto aspect-[3/2]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
        >
            <Image
                src={flyerFullSrc}
                alt={flyerAlt}
                fill
                className="object-contain"/>
        </motion.div>
    );
};

const FlyerImage = () => {
    return (
        <motion.section className="scroll-mt-16 pt-16">
            <FlyerImageItem />
        </motion.section>
    )
}

export default FlyerImage