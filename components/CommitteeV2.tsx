'use client';

import { useState, useEffect, useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { committeeData, type CommitteeMemberProps } from "@/data/committee";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import CommitteeMemberV2 from "./CommitteeMemberV2";
import CommitteeMemberModal from "./CommitteeMemberModal";
import Pretitle from "./Pretitle";

const CommitteeV2 = () => {
    const t = useTranslations('Committee');
    const locale = useLocale();
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [selectedMember, setSelectedMember] = useState<CommitteeMemberProps | null>(null);

    const autoplay = useRef(
        Autoplay({ delay: 1500, stopOnInteraction: false, stopOnMouseEnter: true })
    );

    useEffect(() => {
        if (!api) return;

        setCurrent(api.selectedScrollSnap());
        const onSelect = () => {
            setCurrent(api.selectedScrollSnap());
        };
        api.on("select", onSelect);

        return () => {
            // The listener must be the same function instance to be removed.
            api.off("select", onSelect);
        };
    }, [api]);

    useEffect(() => {
        // Wait for the carousel API and autoplay plugin to be initialized.
        if (!api || !autoplay.current) return;

        if (selectedMember) {
            autoplay.current.stop();
        } else {
            // Using reset() is more robust for restarting autoplay
            // after it has been stopped by user interaction or other events.
            autoplay.current.reset();
        }
    }, [selectedMember, api]);

    const members = committeeData[locale] || committeeData.vi;

    if (!Array.isArray(members)) {
        console.error("Committee members data is not a valid array:", members);
        return null;
    }

    const sortedMembers = [...members].sort((a, b) => (a.order ?? 999) - (b.order ?? 999));

    const selectedMemberIndex = selectedMember
        ? sortedMembers.findIndex((m) => m.order === selectedMember.order)
        : -1;

    const navigateMember = (direction: 'next' | 'prev') => {
        if (selectedMemberIndex === -1) return;

        const totalMembers = sortedMembers.length;
        const newIndex = direction === 'next'
            ? (selectedMemberIndex + 1) % totalMembers
            : (selectedMemberIndex - 1 + totalMembers) % totalMembers;

        setSelectedMember(sortedMembers[newIndex]);
        // Đồng bộ carousel ở nền để cuộn đến thành viên tương ứng
        if (api) {
            api.scrollTo(newIndex);
        }
    };

    const handleMemberClick = (member: CommitteeMemberProps) => {
        setSelectedMember(member);
    };

    const handleCardClick = (index: number) => {
        if (api) {
            api.scrollTo(index);
        }
    };

    const closeModal = () => {
        setSelectedMember(null);
    };

    return (
        <section id="ban-to-chuc" className="scroll-mt-16 py-16 bg-gray-50">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="mx-auto w-full px-4 sm:px-6 lg:px-8"
            >
                <motion.div variants={fadeInUp} className="text-center">
                    <Pretitle text={t('title')} center starColor="text-primary" textColor="text-primary" />
                    {/* <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl uppercase">{t('title')}</h2> */}
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                        {t('subtitle')}
                    </p>
                </motion.div>

                <motion.div variants={fadeInUp}>
                    <Carousel
                        setApi={setApi}
                        plugins={[autoplay.current]}
                        opts={{ align: "center", loop: true }}
                        className="w-full max-w-7xl mx-auto"
                    >
                        <CarouselContent className="-ml-2 md:-ml-4 pt-12">
                            {sortedMembers.map((member, index) => (
                                <CarouselItem key={member.order} className="pl-2 md:pl-4 basis-full md:basis-1/3 lg:basis-1/5">
                                    <CommitteeMemberV2
                                        {...member}
                                        isActive={index === current}
                                        onInfoClick={() => handleMemberClick(member)}
                                        onCardClick={() => handleCardClick(index)}
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex" />
                        <CarouselNext className="hidden md:flex" />
                    </Carousel>
                </motion.div>

                <motion.div
                    key={current}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-4 text-center max-w-4xl mx-auto h-[350px] overflow-y-auto p-2"
                >
                    {sortedMembers[current] && (
                        <div>
                            <h3 className="text-2xl font-bold text-primary">{`${sortedMembers[current].name}`}</h3>
                            <ul className="mt-4 list-disc list-inside text-left space-y-2 text-gray-700 md:text-lg">
                                {sortedMembers[current].role.map((roleItem, index) => (
                                    <li key={index}>{roleItem}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </motion.div>

                <CommitteeMemberModal
                    isOpen={!!selectedMember}
                    onClose={closeModal}
                    member={selectedMember}
                    onNext={() => navigateMember('next')}
                    onPrevious={() => navigateMember('prev')}
                    hasNext={sortedMembers.length > 1}
                    hasPrevious={sortedMembers.length > 1}
                />
            </motion.div>
        </section>
    );
};

export default CommitteeV2;