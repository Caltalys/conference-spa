import { useTranslations } from "next-intl";
import CommitteeMember from "./CommitteeMember";

const staticMemberData = [
    { imageUrl: '/photo.jpg', social: { linkedin: '#' } },
    { imageUrl: '/photo.jpg', social: { linkedin: '#' } },
    { imageUrl: '/photo.jpg', social: { linkedin: '#' } },
    { imageUrl: '/photo.jpg', social: { linkedin: '#' } },
];

const Committee = () => {
    const t = useTranslations('Committee');
    const membersFromMessages = t.raw('members');

    const committee = Array.isArray(membersFromMessages) ? membersFromMessages.map((member, index) => ({
        ...member,
        ...(staticMemberData[index] || { imageUrl: '/photo.jpg' }) // Merge with static data, provide fallback
    })) : [];

    return (
        <section id="ban-to-chuc" className=" bg-slate-50 p-4 scroll-mt-16">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl uppercase">{t('title')}</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        {t('subtitle')}
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {committee.map((member, index) => (
                        <CommitteeMember key={index} {...member} />
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Committee