'use client';

import { Building, Mail, MapPin, Phone, User } from 'lucide-react';
import { useTranslations } from "next-intl";
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import { useAnimationProps } from '@/lib/useAnimationProps';

const Footer = () => {
    const t = useTranslations('Footer');

    return (
        <footer id="lien-he" className="bg-primary text-white w-full pt-8">
            <div className="container mx-auto px-4 pb-8 grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Column 1: About */}
                    <div className="md:col-span-2">
                        <h3 className="text-xl font-display font-bold mb-2">{t('conferenceName')}</h3>
                        <p className="max-w-md">{t('conferenceDescription')}</p>
                    </div>

                    {/* Column 2: Contact */}
                    <div className="md:col-span-2">
                        <h4 className="font-bold  mb-3">{t('contact')}</h4>
                        <ul className="space-y-2 ">
                            <li className="flex items-center"><User className="mr-2" /> {t('contactPerson')}</li>
                            <li className="flex items-center">
                                <Mail className="mr-2" />
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
            <div className="bg-gray-800 py-4">
                <div className="container mx-auto px-4 text-center text-white text-sm">
                    <p>&copy; {new Date().getFullYear()} {t('copyright')}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer