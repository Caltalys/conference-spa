"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { committeeData } from "@/data/committee";
import { useLocale, useTranslations } from "use-intl";
import CommitteeMemberV3 from "./CommitteeMemberV3";

export default function CommitteeV3() {
    const plugin = useRef(Autoplay({ delay: 3000 }));
    const t = useTranslations('Committee');
    const locale = useLocale();
    const members = committeeData[locale] || committeeData.vi;

    return (
        <section id="ban-to-chuc" className="scroll-mt-16 py-16 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-8">Committee Members</h2>
            <Carousel
                opts={{
                    align: "center",
                    loop: true,
                }}
                plugins={[plugin.current]}
                className="w-full"
            >
                <CarouselContent>
                    {members.map((member, index) => (
                        <CarouselItem
                            key={index}
                            className="md:basis-1/2 lg:basis-1/3 xl:basis-1/5 flex justify-center"
                        >
                            <CommitteeMemberV3 member={member} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    );
}