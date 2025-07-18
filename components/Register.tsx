'use client';

import { registerForAttendance } from '@/app/[locale]/actions';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarClock, Link as LinkIcon, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from 'next/image';
import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { motion } from 'motion/react';

const SectionHeader = ({ title, subtitle }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        viewport={{ once: true }}
        className="text-center mb-8"
    >
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl uppercase">{title}</h2>
        <p className="mt-4 text-lg text-gray-600">{subtitle}</p>
    </motion.div>
);

function SubmitButton({ children }) {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" className="w-full text-lg py-6 hover:bg-destructive transition-colors duration-300" disabled={pending}>
            {pending ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <LinkIcon className="mr-2 h-5 w-5" />}
            {children}
        </Button>
    );
}

const InfoLine = ({ icon: Icon, children }) => (
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
        <Card className="col-span-1 lg:col-span-3 flex flex-col h-full">
            <CardContent className='space-y-6 pt-6'>
                <p className="text-lg text-gray-600 italic">{t('attendanceDescription')}</p>
                <div>
                    <p className="text-lg text-gray-600 font-semibold">{t('attendanceFeeTitle')}</p>
                    <ul className="list-disc pl-5 mt-2 text-gray-600 space-y-1">
                        {items1.map((item, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </div>
                <div>
                    <p className="text-lg text-gray-600 font-semibold">{t('transferSyntaxTitle')}</p>
                    <ul className="list-disc pl-5 mt-2 text-gray-600 space-y-1">
                        {items2.map((item, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </div>
                <InfoLine icon={CalendarClock}>
                    {t('attendanceDeadline')} <span className="font-semibold">{t('deadlineDate')}</span>.
                </InfoLine>
            </CardContent>
        </Card>
    );
};

const AttendanceRegistrationForm = () => {
    const t = useTranslations('Register');

    const handleClick = () => {
        window.open('https://forms.gle/eWMEoPqUEAa9TD6K9', '_blank');
    };

    return (
        <div className="col-span-1">
            <div className="flex flex-col items-center justify-center text-center h-full space-y-6 pt-6">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                        className="w-full text-lg py-6 hover:bg-destructive transition-colors duration-300"
                        onClick={handleClick}
                    >
                        <LinkIcon className="mr-2 h-5 w-5" />
                        {t('registerButton')}
                    </Button>
                </motion.div>
                <p className="text-base text-gray-700">{t('scanToRegister')}</p>
                <motion.div
                    className="flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <Image src="/QR.png" alt={t('qrAlt')} width={220} height={220} />
                </motion.div>
            </div>
        </div>
    );
};

const Register = () => {
    const t = useTranslations('Register');

    return (
        <motion.section
            id="dang-ky"
            className="scroll-mt-16 py-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
                <SectionHeader title={t('title')} subtitle={t('subtitle')} />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 100 }}
                    viewport={{ once: true }}
                >
                    <Tabs defaultValue="attendance" className="w-full max-w-7xl mx-auto">
                        <div className="flex justify-center mb-6">
                            <TabsList className="grid w-full max-w-lg grid-cols-2 gap-2 rounded-xl bg-gray-200 p-2">
                                <TabsTrigger value="attendance" className="py-2.5 text-base font-semibold data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg transition-colors">
                                    {t('attendanceTitle')}
                                </TabsTrigger>
                                <TabsTrigger value="report" className="py-2.5 text-base font-semibold data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg transition-colors">
                                    {t('reportTitle')}
                                </TabsTrigger>
                            </TabsList>
                        </div>
                        <TabsContent value="attendance">
                            <motion.div
                                key="attendance"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, ease: 'easeOut' }}
                                viewport={{ once: true }}
                                className="grid grid-cols-1 lg:grid-cols-4 gap-y-8 lg:gap-8 items-start"
                            >
                                <AttendanceDetails />
                                <AttendanceRegistrationForm />
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
