
import Image from "next/image";

const Banner = () => {
    return (
        <section id="banner" className="relative w-full mt-20 scroll-mt-16">
            <Image
                src="/bg-hero.jpg"
                alt="Banner"
                width={2100}
                height={900}
                priority
                className="w-full h-auto object-contain"
                sizes="100vw"
            />
        </section>
    )
}

export default Banner