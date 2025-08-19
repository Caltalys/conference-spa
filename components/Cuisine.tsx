'use client';

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock } from "lucide-react";
import Pretitle from "./Pretitle";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const CuisineItem = ({ name, address, hours }: { name: string, address: string, hours: string }) => (
    <div className="py-3 border-b border-gray-200 last:border-b-0">
        <h4 className="font-semibold text-gray-800">{name}</h4>
        <div className="mt-1.5 flex items-start gap-2 text-sm text-gray-600">
            <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-blue-600" />
            <span>{address}</span>
        </div>
        <div className="mt-1 flex items-center gap-2 text-sm text-gray-600">
            <Clock className="h-4 w-4 flex-shrink-0 text-blue-600" />
            <span>{hours}</span>
        </div>
    </div>
);

const Cuisine = () => {
    const t = useTranslations('Cuisine');

    const categories = [
        {
            key: 'halal',
            title: t('halal_title'),
            items: [
                { name: t('halal_1_name'), address: t('halal_1_address'), hours: t('halal_1_hours') },
                { name: t('halal_2_name'), address: t('halal_2_address'), hours: t('halal_2_hours') },
                { name: t('halal_3_name'), address: t('halal_3_address'), hours: t('halal_3_hours') },
            ]
        },
        {
            key: 'vegetarian',
            title: t('vegetarian_title'),
            items: [
                { name: t('vegetarian_1_name'), address: t('vegetarian_1_address'), hours: t('vegetarian_1_hours') },
                { name: t('vegetarian_2_name'), address: t('vegetarian_2_address'), hours: t('vegetarian_2_hours') },
                { name: t('vegetarian_3_name'), address: t('vegetarian_3_address'), hours: t('vegetarian_3_hours') },
            ]
        },
        {
            key: 'specialty',
            title: t('specialty_title'),
            items: [
                { name: t('specialty_1_name'), address: t('specialty_1_address'), hours: t('specialty_1_hours') },
                { name: t('specialty_2_name'), address: t('specialty_2_address'), hours: t('specialty_2_hours') },
                { name: t('specialty_3_name'), address: t('specialty_3_address'), hours: t('specialty_3_hours') },
            ]
        }
    ];

    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="py-16"
        >
            <motion.div variants={fadeInUp} className="text-center mb-12">
                <Pretitle text={t('title')} center starColor="text-primary" textColor="text-primary" />
                <p className="mt-4 text-lg text-gray-600">{t('subtitle')}</p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {categories.map((category) => (
                    <motion.div key={category.key} variants={fadeInUp}>
                        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <CardHeader>
                                <CardTitle className="text-xl font-bold text-primary">{category.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {category.items.map((item, itemIndex) => (
                                    <CuisineItem key={itemIndex} {...item} />
                                ))}
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Cuisine;
