'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { staggerContainer } from '@/lib/animations';
import { cn } from '@/lib/utils';
import Pretitle from './Pretitle';

const silverSponsors = [{ src: '/sponsors/pfizer.svg', alt: 'Pfizer Inc' }];

const bronzeSponsors = [
    {
        src: '/sponsors/mtts.jpg',
        alt: 'MEDICAL TECHNOLOGY TRANSFER AND SERVICES Co., LTD',
    },
    { src: '/sponsors/AstraZeneca.png', alt: 'AstraZeneca' },
    { src: '/sponsors/iceland.png', alt: 'Government of Ireland' },
    { src: '/sponsors/thrive.png', alt: 'Thrive' },
];

const partners = [
    {
        src: '/sponsors/nhisosinh.jpg',
        alt: 'Nhi sơ sinh Đà Nẵng- Da Nang NICU',
    },
    {
        src: '/sponsors/benhvienquangnam.jpg',
        alt: 'Khoa Phụ sản BV Đa khoa Quảng Nam',
    },
];

const Sponsor = () => {
    const t = useTranslations('Footer');

    const SponsorCategory = ({ title, sponsors, itemClassName }) => (
        <div className="pt-4 w-full">
            <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: 'easeOut' }} viewport={{ once: true, amount: 0.5 }} className="text-center">
                <p className="text-2xl lg:text-3xl uppercase text-primary font-bold">{title}</p>
            </motion.div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16">
                {sponsors.map((sponsor, index) => (
                    <motion.div key={sponsor.alt} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 * index }} viewport={{ once: true, amount: 0.5 }} className={cn('relative', itemClassName)}>
                        <Image src={sponsor.src} alt={sponsor.alt} fill className="p-4 object-contain" style={{ clipPath: 'inset(1px 2px 1px 2px)' }} />
                    </motion.div>
                ))}
            </div>
        </div>
    );

    return (
        <section id="sponsor" className="scroll-mt-16">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={staggerContainer}
                className="flex flex-col items-center justify-center pt-8 pb-16 space-y-8 mx-auto px-4 sm:px-6 lg:px-8"
            >
                <Pretitle text={t("sponsor")} center starColor="text-primary" textColor="text-primary" />
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-center"
                >
                    {/* <p className="text-xl lg:text-2xl uppercase text-primary font-semibold">{t('sponsorTitle')}</p> */}
                </motion.div>
                {/* <div className="flex items-center justify-center gap-8 md:gap-16 w-full h-48">
                    <div className="relative h-full w-full max-w-xl">
                        <Image src="/sponsor.png" alt="sponsor" fill className="object-contain" />
                    </div>
                </div> */}

                <SponsorCategory title={t('silverSponsor')} sponsors={silverSponsors} itemClassName="h-28 w-48" />
                <SponsorCategory title={t('bronzeSponsor')} sponsors={bronzeSponsors} itemClassName="h-28 w-48" />
                <SponsorCategory title={t('partnerSponsor')} sponsors={partners} itemClassName="h-28 w-48" />
            </motion.div>
        </section>
    );
};

export default Sponsor;