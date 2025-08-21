import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, BookOpen, CheckSquare, type LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { useAnimationProps } from "@/lib/useAnimationProps";

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Mic,
};

const Agenda = () => {
  const t = useTranslations('Agenda');

  const agendaKeys = ['day1', 'day2', 'day3'] as const;

  const agendaData = agendaKeys.map(key => {
    const items = t.raw(`${key}.items`);
    const description = t.raw(`${key}.description`);
    const iconName = t(`${key}.icon`);
    const IconComponent = iconMap[iconName] || Mic; // Fallback to Mic icon

    return {
      day: t(`${key}.day`),
      date: t(`${key}.date`),
      title: t(`${key}.title`),
      icon: IconComponent,
      description: typeof description === 'string' && description ? description : undefined,
      items: Array.isArray(items) ? items : [],
    };
  });

  return (
    <section id="chuong-trinh" className=" bg-slate-50 lg:py-24">
      <motion.div {...useAnimationProps(staggerContainer)} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeInUp} className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl uppercase">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 h-full w-0.5 bg-blue-200" aria-hidden="true" />
          <div className="space-y-12">
            {agendaData.map((day, index) => (
              <motion.div key={index} variants={fadeInUp} className="relative flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 ring-8 ring-slate-50">
                    <day.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-lg font-bold text-gray-900">{day.day} - <span className="font-medium text-gray-600">{day.date}</span></p>
                  <Card className="mt-4 shadow-lg"><CardHeader><CardTitle>{day.title}</CardTitle></CardHeader><CardContent><div className="space-y-4">{day.description && (<p className="text-gray-600">{day.description}</p>)}<ul className="space-y-3">{day.items.map((item, itemIndex) => (<li key={itemIndex} className="flex items-start gap-3"><CheckSquare className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" /><span className="text-gray-700">{item}</span></li>))}</ul></div></CardContent></Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Agenda;