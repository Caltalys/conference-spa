import Link from "next/link";
import CountDown from "./Countdown";

const Hero = () => {
    return (
        <>
            <section className="relative bg-[url(/baby.jpg)] bg-cover bg-no-repeat bg-center">
                <div className="absolute inset-0 bg-gray-700/50" />
                <div className="relative z-10 flex min-h-[600px] w-full items-center justify-center">
                    <div className="flex flex-col items-center justify-center px-8 space-y-4 lg:space-y-8 text-center font-semibold text-white">
                        <p className="text-3xl md:text-4xl lg:text-6xl lg:leading-18 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                            Hội nghị mạng lưới chăm sóc trẻ sinh non bằng phương pháp Kangaroo
                        </p>
                        <p className="text-xl md:text-3xl lg:text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Khu vực Châu Á - Châu Đại Dương lần thứ 3</p>
                        <CountDown />
                        <Link href="#dang-ky" className="inline-block rounded-full bg-destructive px-8 py-3 text-lg font-bold text-primary-foreground transition-transform duration-300 hover:scale-105">
                            Đăng ký ngay
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;