'use client';

import Image from "next/image";
import { Building, CalendarDays, Download, MapPin, Users, XIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ConferenceInfo = () => {
  const t = useTranslations('ConferenceInfo');
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);

  const infoItems = [
    {
      icon: Building,
      label: t('conferenceNameLabel'),
      value: t('conferenceNameValue'),
    },
    {
      icon: CalendarDays,
      label: t('timeLabel'),
      value: t('timeValue'),
    },
    {
      icon: MapPin,
      label: t('locationLabel'),
      value: t('locationValue'),
    },
    {
      icon: Users,
      label: t('attendanceLabel'),
      value: t('attendanceValue'),
    },
  ];

  return (
    <section id="tong-quan" className="scroll-mt-16 lg:pt-16">
      <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl uppercase">
            {t('title')}
          </h2>
        </div>
      <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="space-y-8">
            {/* <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Thông tin Hội nghị
            </h2> */}
            <dl className="space-y-6">
              {infoItems.map((item) => (
                <div key={item.label} className="flex">
                  <dt className="flex-shrink-0">
                    <item.icon
                      className="h-6 w-6 text-blue-600"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd className="ml-4">
                    <p className="text-lg font-semibold leading-6 text-gray-900">
                      {item.label}
                    </p>
                    <p className="mt-1 text-base text-gray-700">{item.value}</p>
                  </dd>
                </div>
              ))}
            </dl>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg">
                <Link href="/ThongBao.pdf" download="ThongBaoHoiNghi.pdf">
                  <Download className="mr-2 h-5 w-5" />
                  {t('downloadNotice')}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/ThuNgo.pdf" download="ThuNgo.pdf">
                  <Download className="mr-2 h-5 w-5" />
                  {t('downloadLetter')}
                </Link>
              </Button>
            </div>

          </div>

          <div className="relative mt-12 lg:mt-0">
            <button
              type="button"
              onClick={() => setIsMapModalOpen(true)}
              className="relative block w-full aspect-[16/9] overflow-hidden rounded-2xl shadow-xl"
              aria-label={t('viewMap')}
            >
              <Image
                src="/map.png"
                alt={t('mapAlt')}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </button>
          </div>
        </div>
      </div>
      {isMapModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIsMapModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            onClick={() => setIsMapModalOpen(false)}
            aria-label={t('closeMap')}
          >
            <XIcon className="h-8 w-8" />
          </button>
          <div className="relative w-full h-full max-w-6xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <Image src="/map.png" alt={t('mapAlt')} fill className="object-contain" />
          </div>
        </div>
      )}
    </section>
  );
};

export default ConferenceInfo;
