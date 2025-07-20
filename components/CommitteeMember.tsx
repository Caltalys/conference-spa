'use client';

import { Card, CardContent } from "@/components/ui/card"; // ✅ sửa đúng cách
import Image from "next/image";
import { CommitteeMemberProps } from "./Committee";

const CommitteeMember = ({ title, name, role, imageUrl }: CommitteeMemberProps) => {
    return (
        <Card className="group bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
            <CardContent className="p-4 flex items-center gap-4">
                <div className="relative h-48 w-36 flex-shrink-0">
                    <Image
                        src={imageUrl}
                        alt={name}
                        className="rounded-2xl object-cover border-2 border-gray-100 group-hover:border-blue-500/50 transition-colors duration-300"
                        fill
                    />
                </div>
                <div className="text-left">
                    <p className="font-semibold text-muted-foreground text-sm">{title}</p>
                    <h4 className="font-bold text-gray-900 text-base group-hover:text-blue-600 md:text-lg transition-colors duration-300">{name}</h4>
                    <p className="text-gray-500 text-sm">{role}</p>
                </div>
            </CardContent>
        </Card>
    );
};

export default CommitteeMember;
