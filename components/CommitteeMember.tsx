import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { type CommitteeMemberProps } from "@/data/committee";

const CommitteeMember = ({ title, name, role, imageUrl }: CommitteeMemberProps) => {
    return (
        <Card className="group bg-white shadow-lg h-full">
            <CardContent className="flex h-full">
                <Image
                    src={imageUrl}
                    alt={name}
                    className="w-1/3 object-cover aspect-[3/4] flex-shrink-0"
                    width={300}  // Sử dụng giá trị có tỷ lệ 3:4
                    height={400} // để khớp với class aspect-[3/4]
                />
                <div className="w-2/3 flex flex-col justify-center p-4">
                    <p className="font-semibold text-gray-900 text-md">{title}</p>
                    <h4 className="font-bold text-xl text-gray-900">{name}</h4>
                    {role.length > 0 && (
                        <ul className="mt-2 list-disc list-inside space-y-1 text-gray-800">
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
