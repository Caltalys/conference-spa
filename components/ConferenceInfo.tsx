'use client';

import Image from "next/image";
import Link from "next/link";
import { Building, CalendarDays, Download, MapPin, Users } from "lucide-react";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

// Sub-component for the section title
export const SectionHeader = ({ title }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="text-center mb-12"
  >
    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl uppercase">
      {title}
    </h2>
  </motion.div>
);

// Sub-component for each info item. Now accepts an `index` for staggered animations.
const InfoItem = ({ icon: Icon, label, index, children }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }} // Stagger delay
    className="flex"
  >
    <dt className="flex-shrink-0">
      <Icon className="h-6 w-6 text-white" aria-hidden="true" />
    </dt>
    <dd className="ml-4">
      <p className="text-lg font-semibold leading-6 text-white">{label}</p>
      {children}
    </dd>
  </motion.div>
);

// Sub-component for download buttons
const DownloadButtons = ({ t }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="flex flex-col sm:flex-row gap-4 pt-4"
  >
    {/* Replaced `whileHover`/`whileTap` with `hover`/`press` */}
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button asChild size="lg" variant="destructive">
        <Link href={t('downloadFilename')} download="ThongBaoHoiNghi.pdf">
          <Download className="mr-2 h-5 w-5" />
          {t('downloadNotice')}
        </Link>
      </Button>
    </motion.div>
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button asChild variant="outline" size="lg">
        <Link href="/ThuNgo.pdf" download="ThuNgo.pdf">
          <Download className="mr-2 h-5 w-5" />
          {t('downloadLetter')}
        </Link>
      </Button>
    </motion.div>
  </motion.div>
);


const ConferenceInfo = () => {
  const t = useTranslations('ConferenceInfo');

  const infoItems = [
    { icon: Building, label: t('conferenceNameLabel'), value: t('conferenceNameValue') },
    { icon: CalendarDays, label: t('timeLabel'), value: t('timeValue') },
    { icon: MapPin, label: t('locationLabel'), value: t('locationValue') },
    { icon: Users, label: t('attendanceLabel'), value: t('attendanceValue') },
  ];

  const extraAttendanceValues = [
    t('attendanceValue1'),
    t('attendanceValue2'),
    t('attendanceValue3'),
  ].filter(Boolean);

  return (
    <section id="tong-quan" className="scroll-mt-16 top-wave bottom-wave bg-primary">
      <SectionHeader title={t('title')} />
      <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-16">

          {/* Left Column */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-8"
          >
            <dl className="space-y-6">
              {/* We now pass the `index` to the InfoItem for staggering */}
              {infoItems.map((item, index) => (
                <InfoItem key={item.label} icon={item.icon} label={item.label} index={index}>
                  <p className="mt-1 text-base text-white">{item.value}</p>
                  {item.label === t('attendanceLabel') && extraAttendanceValues.length > 0 && (
                    <ul className="mt-2 list-disc list-inside space-y-1 text-base text-white">
                      {extraAttendanceValues.map((value, idx) => (
                        <li key={idx}>{value.startsWith('- ') ? value.substring(2) : value}</li>
                      ))}
                    </ul>
                  )}
                </InfoItem>
              ))}
            </dl>
            <DownloadButtons t={t} />
          </motion.div>

          {/* Right Column (Map) */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative mt-12 lg:mt-0"
          >
            <Link
              href="https://www.google.com/maps/place/Trung+T%C3%A2m+Ki%E1%BB%83m+So%C3%A1t+B%E1%BB%87nh+T%E1%BA%ADt+(CDC)+%C4%90%C3%A0+N%E1%BA%B5ng/@16.0542243,108.2090089,17z/data=!3m1!4b1!4m6!3m5!1s0x3142192e9a35a1bf:0x57e8e45b501ffea2!8m2!3d16.0542243!4d108.2115838!16s%2Fg%2F11hz3jv49q?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="relative block w-full aspect-[16/9] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/map.png"
                  alt={t('mapAlt')}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceInfo;