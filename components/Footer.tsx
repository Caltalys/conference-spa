import { useTranslations } from "next-intl";
import Link from "next/link"
import { Mail, Phone, MapPin, User, Building } from 'lucide-react';

const Footer = () => {
    const t = useTranslations('Footer');
    const tHeader = useTranslations('Header');

    const quickLinks = [
        { id: 'home', href: '#trang-chu', label: tHeader('home') },
        { id: 'agenda', href: '#chuong-trinh', label: tHeader('agenda') },
        { id: 'register', href: '#dang-ky', label: tHeader('register') },
        { id: 'services', href: '#dich-vu', label: tHeader('services') },
        { id: 'committee', href: '#ban-to-chuc', label: tHeader('committee') },
    ];

    return (
        <footer id="lien-he" className="bg-[url('/layered-waves-haikei.svg')] bg-contain bg-no-repeat">
            <div className="text-center font-semibold py-8">
                    <p className="text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                        Hẹn gặp bạn tại Trung Tâm Kiểm Soát Bệnh Tật Đà Nẵng
                    </p>
                    <p className="text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                        Ngày 27-29 tháng 11, 2025
                    </p>
                </div>
            <div className="container mx-auto px-4 py-12">
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Column 1: About */}
                    <div className="md:col-span-2">
                        <h3 className="text-xl font-display font-bold mb-2">{t('conferenceName')}</h3>
                        <p className="max-w-md">{t('conferenceDescription')}</p>
                    </div>

                    {/* Column 2: Quick Links */}
                    {/* <div>
                        <h4 className="font-bold text-white mb-3">{t('quickLinks')}</h4>
                        <ul className="space-y-2">
                            {quickLinks.map(link => (
                                <li key={link.id}><Link href={link.href} className="hover:text-accent transition-colors">{link.label}</Link></li>
                            ))}
                        </ul>
                    </div> */}

                    {/* Column 3: Contact */}
                    <div className="md:col-span-2">
                        <h4 className="font-bold  mb-3">{t('contact')}</h4>
                        <ul className="space-y-2 ">
                            <li className="flex items-center"><User className="mr-2" /> {t('contactPerson')}</li>
                            <li className="flex items-center"><Mail className="mr-2" />
                                <a href={`mailto:${t('email')}`} className="font-semibold hover:underline">
                                    {t('email')}
                                </a>
                            </li>
                            <li className="flex items-center"><Phone className="mr-2" /> {t('phone')}</li>
                            <li className="flex items-center"><Building className="mr-2" /> {t('department')}</li>
                            <li className="flex items-center"><MapPin className="mr-2" /> {t('address')}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-gray-900 py-4">
                <div className="container mx-auto px-4 text-center text-white text-sm">
                    <p>&copy; {new Date().getFullYear()} {t('copyright')}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer