'use client';

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "motion/react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { fadeInUp } from "@/lib/animations";

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
    className="text-center mb-12"
  >
    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl uppercase">
      {title}
    </h2>
    {subtitle && <p className="mt-4 text-lg text-gray-600">{subtitle}</p>}
  </motion.div>
);

const Gallery = () => {
  const t = useTranslations('Gallery');
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // In a real application, this data would likely come from a CMS or the translation files.
  const galleryImages = [
    { src: '/gallery/IMG_1542.JPG', alt: 'IMG_1542.JPG' },
    { src: '/gallery/IMG_1632.JPG', alt: 'IMG_1632.JPG' },
    { src: '/gallery/IMG_1609.JPG', alt: 'IMG_1609.JPG' },
    { src: '/gallery/_ATA6354.JPG', alt: '_ATA6354.JPG' }
  ];

  return (
    <section id="thu-vien" className="scroll-mt-16 pt-16 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title={t('title')} />
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {galleryImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 group">
                <button
                  type="button"
                  className="p-1 w-full h-full cursor-pointer"
                  onClick={() => {
                    setIndex(index);
                    setOpen(true);
                  }}
                >
                  <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="relative flex aspect-video items-center justify-center p-0">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </CardContent>
                  </Card>
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={galleryImages}
        index={index}
      />
      <motion.div variants={fadeInUp} className="pt-8 text-center font-semibold bottom-wave bg-primary">
        <p className="pb-8 text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          {t('subtitle')}
        </p>
      </motion.div>
    </section>
  );
};

export default Gallery;