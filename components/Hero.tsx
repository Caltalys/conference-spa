import { useTranslations } from "next-intl";
import Link from "next/link";
import CountDown from "./Countdown";

const Hero = () => {
    const t = useTranslations('Hero');
    return (
        <>
            <section id="trang-chu" className="relative h-screen bg-[url('/baby.jpg')] bg-cover bg-no-repeat bg-center">
                {/* This div creates the semi-transparent overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500/50 to-black/50" />
                <div className="relative z-10 flex h-full w-full items-center justify-center pt-16">
                    <div className="flex flex-col items-center justify-center px-8 space-y-4 lg:space-y-8 text-center font-semibold text-white">
                        <p className="text-2xl lg:text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] uppercase">
                            {t('conference')}
                        </p>
                        <p className="text-4xl lg:text-7xl lg:leading-tight drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] uppercase">
                            {t('title')}
                        </p>
                        <p className="text-2xl lg:text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] uppercase">
                            {t('subtitle')}
                        </p>
                        <p className="text-xl lg:text-3xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] uppercase">{t('date')}</p>
                        <CountDown />
                        <Link href="#dang-ky" className="inline-block rounded-full bg-destructive px-8 py-3 text-lg font-bold text-primary-foreground transition-transform duration-300 hover:scale-105">
                            {t('registerNow')}
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;