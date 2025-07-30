import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { type CommitteeMemberProps } from "@/data/committee";

const CommitteeMember = ({ title, name, role, imageUrl }: CommitteeMemberProps) => {
    return (
        <Card className="group bg-white shadow-lg h-full p-0 rounded-3xl">
            {/* On mobile, layout is vertical (flex-col). On medium screens and up, it's horizontal (md:flex-row). */}
            <CardContent className="flex flex-col md:flex-row h-full p-0">
                {/* Image container: full-width on mobile, 1/3 on desktop. Adjusted aspect ratio for mobile. */}
                <div className="relative w-full md:w-1/3 aspect-[4/3] md:aspect-[3/4] flex-shrink-0">
                    <Image
                        src={imageUrl}
                        alt={name}
                        className="object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none"
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                </div>
                {/* Text content container: full-width on mobile, 2/3 on desktop. */}
                <div className="w-full md:w-2/3 flex flex-col p-4">
                    <p className="font-semibold text-gray-900 text-md">{title}</p>
                    <h4 className="font-bold text-xl text-gray-900">{name}</h4>
                    {role.length > 0 && (
                        <ul className="mt-2 list-disc list-inside space-y-1 text-gray-800 text-sm">
                            {role.map((item, index) => (
                                <li key={`${item}-${index}`}>{item}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

export default CommitteeMember;
