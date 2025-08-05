'use client';

import { type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarClock, Link as LinkIcon, type LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from "@/lib/animations";
import "yet-another-react-lightbox/styles.css";
import Pretitle from "./Pretitle";

interface SectionHeaderProps {
    title: string;
    subtitle: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => (
    <motion.div variants={fadeInUp} className="text-center mb-8">
        <Pretitle text={title} center starColor="text-primary" textColor="text-primary" />
        {/* <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl uppercase">{title}</h2> */}
        <p className="mt-4 text-lg text-gray-600">{subtitle}</p>
    </motion.div>
);

interface InfoLineProps {
    icon: LucideIcon;
    children: ReactNode;
}

const InfoLine = ({ icon: Icon, children }: InfoLineProps) => (
    <div className="flex items-start gap-4">
        <Icon className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" aria-hidden="true" />
        <p className="text-base text-gray-700">{children}</p>
    </div>
);

const ScientificReportInfo = () => {
    const t = useTranslations('Register');
    return (
        <Card className="shadow-xl">
            <CardContent className="space-y-6 pt-6">
                <p className="text-base text-gray-700">{t('reportStep1')}</p>
                <p className="text-base text-gray-700">{t('reportStep2')}</p>
                <InfoLine icon={CalendarClock}>
                    {t('submissionDeadline')} <span className="font-semibold">{t('submissionDate')}</span>.
                </InfoLine>
                <InfoLine icon={CalendarClock}>
                    {t('announceResultLabel')} <span className="font-semibold">{t('announceResultDate')}</span>.
                </InfoLine>
            </CardContent>
        </Card>
    );
};

const AnimatedList = ({ items }: { items: string[] }) => (
    <ul className="list-disc pl-5 mt-2 text-gray-600 space-y-1">
        {items.map((item, i) => (
            item && (
                <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                >
                    {item}
                </motion.li>
            )
        ))}
    </ul>
);

// ... (rest of the file)
const AttendanceDetails = () => {
    const t = useTranslations('Register');
    const items1 = [
        t('attendanceFeeBankAccountName'),
        t('attendanceFeeBankAccountNumber'),
        t('attendanceFeeBankName'),
        t('attendanceFeeSwiftCode')
    ];

    const items2 = [
        t('transferSyntax1'),
        t('transferSyntax2'),
        t('transferSyntax3')
    ];

    return (
        <Card className="flex flex-col h-full">
            <CardContent className='space-y-6 pt-6'>
                <p className="text-lg text-gray-600 italic">{t('attendanceDescription')}</p>
                <div>
                    <p className="text-lg text-gray-600 font-semibold">{t('attendanceFeeTitle')}</p>
                    <AnimatedList items={items1} />
                </div>
                <div>
                    <p className="text-lg text-gray-600 font-semibold">{t('transferSyntaxTitle')}</p>
                    <AnimatedList items={items2} />
                </div>
                <InfoLine icon={CalendarClock}>
                    {t('attendanceDeadline')} <span className="font-semibold">{t('deadlineDate')}</span>.
                </InfoLine>

                <div className="flex flex-col justify-center items-center space-y-4">
                    <motion.div
                        className="flex justify-center items-center lg:justify-end"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button asChild size="lg" className="text-lg py-6 px-8 hover:bg-destructive transition-colors duration-300">
                            <Link href="https://forms.gle/eWMEoPqUEAa9TD6K9" target="_blank" rel="noopener noreferrer">
                                <LinkIcon className="mr-2 h-5 w-5" />
                                {t('registerButton')}
                            </Link>
                        </Button>
                    </motion.div>

                    <motion.div
                        className="flex flex-col items-center justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-gray-700">{t('scanToRegister')}</p>
                    </motion.div>
                    <Image src="/QR.png" alt={t('qrAlt')} width={180} height={180} />
                </div>
            </CardContent>
        </Card>
    );
};

const Register = () => {
    const t = useTranslations('Register');

    // Create motion-wrapped versions of the shadcn/ui components for type-safe animation
    const MotionTabsList = motion(TabsList);
    const MotionTabsTrigger = motion(TabsTrigger);

    return (
        <motion.section
            id="dang-ky"
            className="scroll-mt-16 py-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
                <SectionHeader title={t('title')} subtitle={t('subtitle')} />

                <motion.div variants={fadeInUp}>
                    <Tabs defaultValue="attendance" className="w-full max-w-7xl mx-auto">
                        <div className="flex justify-center mb-6">
                            <MotionTabsList
                                className="w-full max-w-lg rounded-xl bg-gray-200 p-2"
                                variants={staggerContainer}
                            >
                                <MotionTabsTrigger value="attendance" variants={fadeInUp} className="flex-1 py-2.5 text-base font-semibold data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg transition-colors">
                                    {t('attendanceTitle')}
                                </MotionTabsTrigger>
                                <MotionTabsTrigger value="report" variants={fadeInUp} className="flex-1 py-2.5 text-base font-semibold data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg transition-colors">
                                    {t('reportTitle')}
                                </MotionTabsTrigger>
                            </MotionTabsList>
                        </div>
                        <TabsContent value="attendance">
                            <motion.div
                                key="attendance"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, ease: 'easeOut' }}
                                viewport={{ once: true }}
                                className=""
                            >
                                <AttendanceDetails />
                            </motion.div>
                        </TabsContent>
                        <TabsContent value="report">
                            <motion.div
                                key="report"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, ease: 'easeOut' }}
                                viewport={{ once: true }}
                            >
                                <ScientificReportInfo />
                            </motion.div>
                        </TabsContent>
                    </Tabs>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Register;
