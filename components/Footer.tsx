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
        <footer id="lien-he" className="bg-gray-800 text-gray-300">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Column 1: About */}
                    <div className="md:col-span-2">
                        <h3 className="text-xl font-display font-bold text-white mb-2">{t('conferenceName')}</h3>
                        <p className="text-gray-400 max-w-md">{t('conferenceDescription')}</p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="font-bold text-white mb-3">{t('quickLinks')}</h4>
                        <ul className="space-y-2">
                            {quickLinks.map(link => (
                                <li key={link.id}><Link href={link.href} className="hover:text-accent transition-colors">{link.label}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div className="md:col-span-2">
                        <h4 className="font-bold text-white mb-3">{t('contact')}</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li className="flex items-center"><User className="mr-2" /> {t('contactPerson')}</li>
                            <li className="flex items-center"><Mail className="mr-2" /> 
                                <a href={`mailto:${t('email')}`} className="font-semibold text-white hover:underline">
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
                <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} {t('copyright')}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer