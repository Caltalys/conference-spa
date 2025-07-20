import { useTranslations } from "next-intl";
import CommitteeMember, { type CommitteeMemberProps } from "./CommitteeMember";

const Committee = () => {
    const t = useTranslations('Committee');
    const members = t.raw('members') as CommitteeMemberProps[];

    // A type guard to ensure that the data from the translation file is a valid array.
    // This prevents runtime errors if the translation key is missing or malformed.
    if (!Array.isArray(members)) {
        // In a production environment, you might want to log this error to a monitoring service.
        console.error("Committee members data is not a valid array:", members);
        return null; // Render nothing if the data is invalid
    }

    return (
        <section id="ban-to-chuc" className="scroll-mt-16 pt-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl uppercase">{t('title')}</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        {t('subtitle')}
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {members.map((member) => (
                        <CommitteeMember key={member.name} {...member} />
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Committee