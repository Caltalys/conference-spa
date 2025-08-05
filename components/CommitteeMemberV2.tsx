'use client';

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { type CommitteeMemberProps } from "@/data/committee";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CommitteeMemberV2Props extends CommitteeMemberProps {
    isActive: boolean;
    onInfoClick: () => void;
    onCardClick: () => void;
}

const CommitteeMemberV2 = ({ title, name, imageUrl, isActive, onInfoClick, onCardClick }: CommitteeMemberV2Props) => {
    const handleLocalInfoClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        onInfoClick();
    };

    return (
        <motion.div
            className="h-full p-2 cursor-pointer"
            // Hiệu ứng pop-out
            animate={{ scale: isActive ? 1 : 0.85, y: isActive ? -20 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={onCardClick}
        >
            <Card className={cn(
                "h-full overflow-hidden transition-all duration-500 ease-in-out",
                // Thẻ active sẽ nổi bật hơn
                isActive ? "shadow-3xl bg-white" : "shadow-lg bg-gray-100"
            )}>
                <CardContent className="flex flex-col items-center justify-start p-0 h-full">
                    <div className={cn("relative h-50 w-50 overflow-hidden rounded-full border-4 border-white",
                        isActive ? "shadow-2xl" : "shadow-lg"
                    )}>
                        <Image
                            src={imageUrl}
                            alt={name}
                            fill
                            className={cn(
                                "object-cover transition-all duration-500",
                                // Thẻ inactive sẽ có màu xám
                                //isActive ? "grayscale-0" : "grayscale"
                            )}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
                        />
                    </div>
                    {/* Thông tin chỉ hiển thị cho thẻ active */}
                    <div
                        className={cn("p-4 text-center w-full transition-all duration-300")}
                        onClick={handleLocalInfoClick}
                    >
                        <p className="font-semibold text-primary text-md">{title}</p>
                        <h4 className="font-bold text-xl text-gray-900">{name}</h4>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default CommitteeMemberV2;