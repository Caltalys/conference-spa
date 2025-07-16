import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Globe, Plane, Phone, Mail, Link as LinkIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Services = () => {
  const t = useTranslations('Services');

  const serviceItems = [
      {
          icon: Briefcase,
          title: t('service1_title'),
          description: t('service1_description')
      },
      {
          icon: Globe,
          title: t('service2_title'),
          description: t('service2_description')
      },
      {
          icon: Plane,
          title: t('service3_title'),
          description: t('service3_description')
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

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                {/* Left side: Company Info */}
                <div className="lg:col-span-3">
                    <h3 className="text-2xl font-bold text-gray-900">
                        {t('companyName')}
                    </h3>
                    <p className="mt-4 text-gray-700">
                        {t('companyDescription')}
                    </p>
                    <ul className="mt-6 space-y-4">
                        {serviceItems.map(item => (
                            <li key={item.title} className="flex items-start gap-4">
                                <item.icon className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                                <p className="text-gray-700"><strong>{item.title}:</strong> {item.description}</p>
                            </li>
                        ))}
                    </ul>
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
                </div>

                {/* Right side: Contact Info */}
                <div className="lg:col-span-2">
                    <Card className="shadow-xl bg-slate-50 sticky top-24">
                        <CardHeader>
                            <CardTitle>{t('contactTitle')}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="font-bold text-gray-800">ASIAN COMPANION TRAVEL</p>
                            <div className="space-y-3 text-gray-700">
                                <div className="flex items-start gap-3">
                                    <Phone className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <p><strong>{t('contactPhone1')}</strong>{t('contactPerson1')}</p>
                                        <p><strong>{t('contactPhone2')}</strong>{t('contactPerson2')}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="h-5 w-5 text-blue-600" />
                                    <a href={`mailto:${t('contactEmail')}`} className="text-blue-600 hover:underline break-all">{t('contactEmail')}</a>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services