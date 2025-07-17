import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Globe, Plane, Phone, Mail, Link as LinkIcon, Facebook } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
    const t = useTranslations('Services');

    const serviceItems = [
        {
            icon: Briefcase,
            title: t('service1_title'),
            description: t('service1_description'),
            imageUrl: '/photo.jpg'
        },
        {
            icon: Globe,
            title: t('service2_title'),
            description: t('service2_description'),
            imageUrl: '/photo.jpg'
        },
        {
            icon: Plane,
            title: t('service3_title'),
            description: t('service3_description'),
            imageUrl: '/photo.jpg'
        }
    ];

    return (
        <section id="dich-vu" className="scroll-mt-16 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl uppercase">
                        {t('title')}
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* <div className="lg:col-span-1 space-y-4">
                        {serviceItems.map(item => (
                            <Card key={item.title} className="shadow-xl bg-slate-50 group">
                                <CardHeader className="text-center">
                                    <CardTitle>{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="relative h-40 w-full overflow-hidden rounded-lg">
                                        <Image
                                            src={item.imageUrl}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                                        />
                                    </div>
                                    <p className="font-bold text-gray-800">{item.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div> */}
                    <div className="lg:col-span-4">
                        <h3 className="text-2xl font-bold text-gray-900">
                            {t('companyName')}
                        </h3>
                        <p className="mt-4 text-gray-700">
                            {t('companyDescription')}
                        </p>
                        <div className="flex w-full items-center justify-center text-center gap-16 py-4 px-24">
                            {serviceItems.map(item => (
                                <div className="flex flex-col w-full items-center justify-between gap-4">
                                    <p className="font-semibold">{item.title}</p>
                                    <div className="relative h-40 w-full overflow-hidden rounded-lg">
                                        <Image
                                            src={item.imageUrl}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                                        />
                                    </div>
                                    <p className="font-bold text-gray-800">{item.description}</p>
                                </div>
                            ))}
                        </div>
                        <p className="mt-6 text-gray-700 italic">
                            {t('experience')}
                        </p>
                        
                        <p className="mt-4 text-gray-700">
                            {t('support')}
                        </p>
                        <Link href="https://forms.gle/3bQ9ztbrVNMMZzhq9" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block">
                            <Button size="lg" className="text-lg py-6 hover:bg-destructive transition-colors duration-300">
                                <LinkIcon className="mr-2 h-5 w-5" />
                                {t('registerButton')}
                            </Button>
                        </Link>
                        <h3 className="text-xl mt-6 mb-2 font-bold text-gray-900">
                            {t('contactTitle')}
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <Phone className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                                <p><strong>{t('contactPhone1')}</strong>{t('contactPerson1')}</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <Phone className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                                <p><strong>{t('contactPhone2')}</strong>{t('contactPerson2')}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-blue-600" />
                                <a href={`mailto:${t('contactEmail')}`} className="text-blue-600 hover:underline break-all">{t('contactEmail')}</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Facebook className="h-5 w-5 text-blue-600" />
                                <a href={`mailto:${t('facebook')}`} className="text-blue-600 hover:underline break-all">{t('contactEmail')}</a>
                            </div>
                        </div>
                        
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Services