import Link from "next/link";
import CountDown from "./Countdown";

const Hero = () => {
    return (
        <>
            <section className="relative bg-[url(/baby.jpg)] bg-cover bg-no-repeat bg-center">
                <div className="absolute inset-0 bg-gray-700/50" />
                <div className="relative z-10 flex min-h-[600px] w-full items-center justify-center">
                    <div className="flex flex-col items-center justify-center space-y-8 text-center font-semibold text-white">
                        <p className="text-2xl md:text-4xl lg:text-6xl leading-18 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
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
        // <section className="relative w-full min-h-screen">
        //     <Image
        //         src="/bg-hero.jpg"
        //         alt="Hero background"
        //         fill
        //         className="md:pt-15 object-cover"
        //         priority
        //     />
        //     <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-white text-center">
        //         <div className="space-y-6">
        //             {/* <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
        //                 Hội nghị khoa học thường niên lần thứ 26
        //             </h1>
        //             <h3 className="font-semibold text-xl md:text-2xl lg:text-3xl leading-snug">
        //                 Hội nghị mạng lưới chăm sóc trẻ sinh non bằng phương pháp Kangaroo
        //                 <br />
        //                 Khu vực Châu Á - Châu Đại Dương lần thứ 3
        //             </h3> */}
        //             <Link
        //                 href="#dang-ky"
        //                 className="inline-block bg-amber-500 m-6 px-8 py-3 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 hover:bg-accent-hover"
        //             >
        //                 Đăng ký ngay
        //             </Link>
        //         </div>
        //         <ScrollIndicator href="#tong-quan" className="text-white" />
        //     </div>
        // </section>
    );
};

export default Hero;