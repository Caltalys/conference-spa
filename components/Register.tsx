'use client';

import { useFormStatus } from 'react-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CalendarCheck, CalendarClock, FileText, Link as LinkIcon, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useActionState, useEffect, useRef } from 'react';
// Assuming useToast from shadcn/ui is available for user feedback
// import { useToast } from '@/components/ui/use-toast'; 
import { submitScientificReport, registerForAttendance } from '@/app/[locale]/actions';

// A shared submit button component to show pending state
function SubmitButton({ children }: { children: React.ReactNode }) {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" className="w-full text-lg py-6" disabled={pending}>
            {pending ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <LinkIcon className="mr-2 h-5 w-5" />}
            {children}
        </Button>
    );
}

// Form for scientific reports
const ScientificReportForm = () => {
    const t = useTranslations('Register');
    const [state, formAction] = useActionState(submitScientificReport, null);
    // const { toast } = useToast();
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (!state) return;
        if (state.success) {
            // toast({ title: "Success", description: state.message });
            alert(state.message); // Using alert as a placeholder for toast
            formRef.current?.reset();
        } else if (state.message) {
            // toast({ title: "Error", description: state.message, variant: "destructive" });
            alert(state.message); // Using alert as a placeholder for toast
        }
    }, [state]);

    return (
        <Card className="shadow-xl">
            <CardHeader>
                <CardTitle className="text-2xl text-center lg:text-left">{t('reportTitle')}</CardTitle>
            </CardHeader>
            <CardContent>
                <form ref={formRef} action={formAction} className="space-y-6">
                    <div className="flex items-start gap-4">
                        <FileText className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                        <p className="text-base text-gray-700">{t('reportStep1')}</p>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="authorName">{t('authorNameLabel')}</Label>
                        <Input id="authorName" name="authorName" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="reportFile">{t('reportFileLabel')}</Label>
                        <Input id="reportFile" name="reportFile" type="file" required accept=".pdf,.doc,.docx" />
                    </div>
                    <SubmitButton>{t('submitReportButton')}</SubmitButton>
                    <div className="flex items-start gap-4">
                        <CalendarCheck className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                        <p className="text-base text-gray-700">{t('reportStep3')}</p>
                    </div>
                </form>
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
            // toast({ title: "Success", description: state.message });
            alert(state.message); // Using alert as a placeholder for toast
            formRef.current?.reset();
        } else if (state.message) {
            // toast({ title: "Error", description: state.message, variant: "destructive" });
            alert(state.message); // Using alert as a placeholder for toast
        }
    }, [state]);

    return (
        <Card className="shadow-xl">
            <CardHeader>
                <CardTitle className="text-2xl text-center lg:text-left">{t('attendanceTitle')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <p className="text-base text-gray-700">{t('attendanceSubtitleForm')}</p>
                <form ref={formRef} action={formAction} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">{t('nameLabel')}</Label>
                        <Input id="name" name="name" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">{t('emailLabel')}</Label>
                        <Input id="email" name="email" type="email" required />
                    </div>
                    <SubmitButton>{t('registerButton')}</SubmitButton>
                </form>
                <div className="flex items-start gap-4">
                    <CalendarClock className="h-6 w-6 text-blue-600 mt-1" aria-hidden="true" />
                    <p className="text-base text-gray-700">
                        {t('attendanceDeadline')}
                        <span className="font-semibold">{t('deadlineDate')}</span>.
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};

const Register = () => {
  const t = useTranslations('Register');

  return (
    <section id="dang-ky" className="scroll-mt-16 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl uppercase">
                    {t('title')}
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                    {t('subtitle')}
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <ScientificReportForm />
                <AttendanceRegistrationForm />
            </div>
        </div>
    </section>
  )
}

export default Register