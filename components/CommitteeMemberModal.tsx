"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { type CommitteeMemberProps } from "@/data/committee";
import Image from "next/image";
import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X, } from "lucide-react";
import { motion, type PanInfo } from "framer-motion";
import { Button } from "./ui/button";

interface CommitteeMemberModalProps {
    member: CommitteeMemberProps | null;
    isOpen: boolean;
    onClose: () => void;
    onNext: () => void;
    onPrevious: () => void;
    hasNext: boolean;
    hasPrevious: boolean;
}

export default function CommitteeMemberModal({ member, isOpen, onClose, onNext, onPrevious, hasNext, hasPrevious }: CommitteeMemberModalProps) {
    useEffect(() => {
        // Chỉ thêm listener khi modal đang mở
        if (!isOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowLeft') {
                onPrevious();
            } else if (event.key === 'ArrowRight') {
                onNext();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        // Dọn dẹp listener khi component unmount hoặc khi modal đóng
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onPrevious, onNext]);

    if (!member) {
        return null;
    }

    // Logic for swipe gesture navigation
    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const handleDragEnd = (
        e: MouseEvent | TouchEvent | PointerEvent,
        info: PanInfo
    ) => {
        const power = swipePower(info.offset.x, info.velocity.x);

        if (power < -swipeConfidenceThreshold) {
            onNext(); // Swipe left for next member
        } else if (power > swipeConfidenceThreshold) {
            onPrevious(); // Swipe right for previous member
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden">
                {hasPrevious && (
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={onPrevious}
                        className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full z-20 bg-background/80 backdrop-blur-sm hover:bg-background md:left-4"
                        aria-label="Previous member"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </Button>
                )}
                {hasNext && (
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={onNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full z-20 bg-background/80 backdrop-blur-sm hover:bg-background md:right-4"
                        aria-label="Next member"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </Button>
                )}
                <motion.div
                    key={member.order} // Re-trigger animation when member changes
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    // Enable horizontal drag and swipe gesture
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.5}
                    onDragEnd={handleDragEnd}
                >
                    <DialogHeader className="p-6 pb-0 relative">
                        <DialogTitle className="text-2xl font-bold text-primary pr-10">{`${member.title} ${member.name}`}</DialogTitle>
                        <Button variant="ghost" size="icon" onClick={onClose} className="absolute right-2 top-2 h-8 w-8 rounded-full">
                            <X className="h-4 w-4" />
                            <span className="sr-only">Close</span>
                        </Button>
                    </DialogHeader>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 max-h-[80vh] overflow-y-auto">
                        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg shadow-lg">
                            <Image
                                src={member.imageUrl}
                                alt={`${member.title} ${member.name}`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <DialogDescription asChild>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 md:text-base">
                                    {member.role.map((roleItem, index) => (
                                        <li key={index}>{roleItem}</li>
                                    ))}
                                </ul>
                            </DialogDescription>
                        </div>
                    </div>
                </motion.div>
            </DialogContent>
        </Dialog>
    );
}