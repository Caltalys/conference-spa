'use client';

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import { Search } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";


const FlyerImageItem = () => {
    const t = useTranslations('Register');
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const flyerThumbnailSrc = t('flyer');
    const flyerFullSrc = t('flyerFull');
    const flyerAlt = 'Conference Flyer';

    const slides = [{ src: flyerFullSrc, alt: flyerAlt }];

    return (
        <Card className="col-span-2 w-full overflow-hidden">
            <CardContent className='p-0'>
                <motion.div
                    className="relative w-full cursor-pointer group aspect-[2/3]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    onClick={() => setIsLightboxOpen(true)}
                >
                    <Image src={flyerThumbnailSrc} alt={flyerAlt} fill className="object-contain" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                        <Search className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                </motion.div>
                <Lightbox
                    open={isLightboxOpen}
                    close={() => setIsLightboxOpen(false)}
                    slides={slides}
                />
            </CardContent>
        </Card>
    );
};

const FlyerImage = () => {
    return (
        <motion.section
            id="dang-ky"
            className="scroll-mt-16 py-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <FlyerImage />
        </motion.section>
    )
}

export default FlyerImage