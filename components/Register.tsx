'use client';

import { useFormStatus } from 'react-dom';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent} from "@/components/ui/card";
import { CalendarClock, Link as LinkIcon, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useActionState, useEffect, useRef } from 'react';
import { submitScientificReport, registerForAttendance } from '@/app/[locale]/actions';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


// A shared submit button component to show pending state
function SubmitButton({ children }: { children: React.ReactNode }) {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" className="w-full text-lg py-6 hover:bg-destructive transition-colors duration-300" disabled={pending}>
            {pending ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <LinkIcon className="mr-2 h-5 w-5" />}
            {children}
        </Button>
    );
}

// Form for scientific reports
const ScientificReportForm = () => {

    const t = useTranslations('Register');
    const [state, formAction] = useActionState(submitScientificReport, null);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (!state) return;
        if (state.success) {
            formRef.current?.reset();
        } else if (state.message) {
            alert(state.message); // Using alert as a placeholder for toast
        }
    }, [state]);

    return (
        <Card className="shadow-xl">
            <CardContent className="space-y-6">
                <form ref={formRef} action={formAction} className="space-y-6">
                    <div className="flex items-start gap-4">
                        <p className="text-base text-gray-700">{t('reportStep1')}</p>
                    </div>
                    <div>
                        <p className="text-base text-gray-700">{t('reportStep2')}</p>
                    </div>
                    {/* <SubmitButton>{t('submitReportButton')}</SubmitButton> */}
                </form>
                <div className="flex jus items-end gap-4">
                    <CalendarClock className="h-6 w-6 text-blue-600 mt-1" aria-hidden="true" />
                    <p className="text-base text-gray-700">
                        {t('submissionDeadline')}
                        <span className="font-semibold">{t('submissionDate')}</span>.
                    </p>
                </div>
                <div className="flex jus items-end gap-4">
                    <CalendarClock className="h-6 w-6 text-blue-600 mt-1" aria-hidden="true" />
                    <p className="text-base text-gray-700">
                        {t('announceResultLabel')}
                        <span className="font-semibold">{t('announceResultDate')}</span>.
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};

// Form for attendance registration
const AttendanceRegistrationForm = () => {
    const t = useTranslations('Register');
    const [state, formAction] = useActionState(registerForAttendance, null);
    // const { toast } = useToast();
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (!state) return;
        if (state.success) {
            alert(state.message); // Using alert as a placeholder for toast
            formRef.current?.reset();
            // Open the Google Form in a new tab
            window.open('https://forms.gle/eWMEoPqUEAa9TD6K9', '_blank');
        } else if (state.message) {
            // toast({ title: "Error", description: state.message, variant: "destructive" });
            alert(state.message); // Using alert as a placeholder for toast
        }
    }, [state]);

    return (
        <Card>
            <CardContent className="flex flex-col items-center justify-center text-center h-full space-y-6">
                {/* <p className="text-base text-gray-700">{t('attendanceSubtitle')}</p> */}
                <form ref={formRef} action={formAction} className="space-y-6">
                    <SubmitButton>{t('registerButton')}</SubmitButton>
                    <p className="text-base text-gray-700">{t('scanToRegister')}</p>
                    <div className="flex items-center justify-center">
                        <Image src="/QR.png" alt={t('qrAlt')} width={220} height={220} />
                    </div>
                </form>

            </CardContent>
        </Card>
    );
};

const Register = () => {
    const t = useTranslations('Register');

    return (
        <section id="dang-ky" className="scroll-mt-16 pt-16 bg-[#AFDDFF]">
            <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl uppercase">
                        {t('title')}
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        {t('subtitle')}
                    </p>
                </div>

                <Tabs defaultValue="attendance" className="w-full max-w-7xl mx-auto">
                    <div className="flex justify-center mb-6">
                        <TabsList className="grid w-full max-w-lg grid-cols-2 gap-2 rounded-xl bg-gray-200 p-2">
                            <TabsTrigger value="attendance" className="py-2.5 text-base font-semibold data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg">
                                {t('attendanceTitle')}
                            </TabsTrigger>
                            <TabsTrigger value="report" className="py-2.5 text-base font-semibold data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg">
                                {t('reportTitle')}
                            </TabsTrigger>
                        </TabsList>
                    </div>
                    <TabsContent value="attendance">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-8 lg:gap-8 items-start">
                            <Card className="col-span-3 flex flex-col h-full">
                                <CardContent id="attendance-description" className='space-y-6'>
                                    <p className="mt-4 text-lg text-gray-600 italic">
                                        {t('attendanceDescription')}
                                    </p>
                                    <p className="mt-4 text-lg text-gray-600 font-semibold">
                                        {t('attendanceFeeTitle')}
                                    </p>
                                    <ul className="list-disc pl-5 mt-2 text-gray-600">
                                        <li>{t('attendanceFeeBankAccountName')}</li>
                                        <li>{t('attendanceFeeBankAccountNumber')}</li>
                                        <li>{t('attendanceFeeBankName')}</li>
                                        <li>{t('attendanceFeeSwiftCode')}</li>
                                    </ul>
                                    <p className="mt-4 text-lg text-gray-600 font-semibold">
                                        {t('transferSyntaxTitle')}
                                    </p>
                                    <ul className="list-disc pl-5 mt-2 text-gray-600">
                                        <li>{t('transferSyntax1')}</li>
                                        <li>{t('transferSyntax2')}</li>
                                        <li>{t('transferSyntax3')}</li>
                                    </ul>
                                    <div className="flex items-end gap-4">
                                        <CalendarClock className="h-6 w-6 text-blue-600 mt-1" aria-hidden="true" />
                                        <p className="text-base text-gray-700">
                                            {t('attendanceDeadline')}
                                            <span className="font-semibold">{t('deadlineDate')}</span>.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                            <AttendanceRegistrationForm />
                        </div>
                    </TabsContent>
                    <TabsContent value="report">
                        <ScientificReportForm />
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}

export default Register