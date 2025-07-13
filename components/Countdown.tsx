'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

const TimeUnit = ({ value, label }: { value: string; label: string }) => (
    <div className="text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        <div className="text-4xl font-black md:text-6xl">{value}</div>
        <div className="text-sm uppercase md:text-lg">{label}</div>
    </div>
);

const Separator = () => <div className="text-4xl font-light md:text-6xl">:</div>;

const CountDown = () => {
    const t = useTranslations('Countdown');
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        // The deadline is November 27, 2025, as mentioned in ConferenceInfo.tsx
        const deadline = new Date('2025-11-27T00:00:00').getTime();

        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const distance = deadline - now;

            if (distance < 0) {
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
            }

            return {
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            };
        };

        setTimeLeft(calculateTimeLeft());
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const padWithZero = (num: number) => num.toString().padStart(2, '0');

    if (!isMounted) {
        // Render a placeholder on the server to prevent hydration mismatch
        // and to avoid layout shift.
        return <div className="h-[92px] md:h-[116px]" />;
    }

    return (
        <div className="flex items-center justify-center space-x-4 rounded-xl bg-black/50 p-4 text-white md:space-x-8">
            <TimeUnit value={padWithZero(timeLeft.days)} label={t('days')} />
            <Separator />
            <TimeUnit value={padWithZero(timeLeft.hours)} label={t('hours')} />
            <Separator />
            <TimeUnit value={padWithZero(timeLeft.minutes)} label={t('minutes')} />
            <Separator />
            <TimeUnit value={padWithZero(timeLeft.seconds)} label={t('seconds')} />
        </div>
    );
};

export default CountDown;