'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import { cn } from '@/lib/utils';
import Pretitle from './Pretitle';
import { useAnimationProps } from '@/lib/useAnimationProps';

// const silverSponsors = [
//     { src: '/sponsors/pfizer.svg', alt: 'Pfizer Inc' }
// ];

const bronzeSponsors = [
    {
        src: '/sponsors/mtts.jpg',
        alt: 'MEDICAL TECHNOLOGY TRANSFER AND SERVICES Co., LTD',
    },
    { src: '/sponsors/AstraZeneca.png', alt: 'AstraZeneca' },
    { src: '/sponsors/draeger_default.svg', alt: 'Dräger Việt Nam' },
    { src: '/sponsors/iceland.png', alt: 'Government of Ireland' },
    { src: '/sponsors/thrive.png', alt: 'Thrive' },
    { src: '/sponsors/TAIPEI.png', alt: 'TAIPEI' },
];

const partners = [
    {
        src: '/sponsors/nhisosinh.png',
        alt: 'Nhi sơ sinh Đà Nẵng- Da Nang NICU',
    },
    {
        src: '/sponsors/benhvienquangnam.jpg',
        alt: 'Khoa Phụ sản BV Đa khoa Quảng Nam',
    },
];

const Sponsor = () => {
    const t = useTranslations('Footer');

    const SponsorCategory = ({ title, sponsors, itemClassName }: { title: string, sponsors: any[], itemClassName: string }) => (
        <motion.div
            variants={staggerContainer}
            className="pt-4 w-full"
        >
            <motion.div variants={fadeInUp} className="text-center">
                <p className="text-2xl lg:text-3xl uppercase text-primary font-bold">{title}</p>
            </motion.div>
            <motion.div
                variants={staggerContainer}
                className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16">
                {sponsors.map((sponsor) => (
                    <motion.div key={sponsor.alt} variants={fadeInUp} className={cn('relative', itemClassName)}>
                        <Image src={sponsor.src} alt={sponsor.alt} fill className="p-4 object-contain" style={{ clipPath: 'inset(1px 2px 1px 2px)' }} />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );

    return (
        <section id="sponsor" className="scroll-mt-16">
            <motion.div {...useAnimationProps(staggerContainer)}
                className="flex flex-col items-center justify-center pt-8 pb-16 space-y-8 mx-auto px-4 sm:px-6 lg:px-8"
            >
                <motion.div variants={fadeInUp}>
                    <Pretitle text={t("sponsor")} center starColor="text-primary" textColor="text-primary" />
                </motion.div>

                {/* <motion.div variants={fadeInUp}>
                    <SponsorCategory title={t('silverSponsor')} sponsors={silverSponsors} itemClassName="h-28 w-48" />
                </motion.div> */}
                <motion.div variants={fadeInUp}>
                    <SponsorCategory title={t('bronzeSponsor')} sponsors={bronzeSponsors} itemClassName="h-28 w-48" />
                </motion.div>
                <motion.div variants={fadeInUp}>
                    <SponsorCategory title={t('partnerSponsor')} sponsors={partners} itemClassName="h-28 w-48" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Sponsor;