'use client';

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import Image from "next/image";
import { X, Link as LinkIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";

// Define the type for a single service item
export interface ServiceItem {
    title: string;
    description: string;
    detail: string;
    imageUrl: string;
    label: string;
    url: string;
}

interface ServiceDetailModalProps {
    service: ServiceItem | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ServiceDetailModal({ service, isOpen, onClose }: ServiceDetailModalProps) {
    if (!service) {
        return null;
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[650px] p-0 overflow-hidden">
                <motion.div
                    key={service.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <DialogHeader className="p-6 pb-4 relative">
                        <DialogTitle className="text-2xl font-bold text-primary pr-10">{service.title}</DialogTitle>
                        <Button variant="ghost" size="icon" onClick={onClose} className="absolute right-2 top-2 h-8 w-8 rounded-full">
                            <X className="h-4 w-4" />
                            <span className="sr-only">Close</span>
                        </Button>
                    </DialogHeader>
                    <div className="px-6 pb-6 space-y-4 max-h-[70vh] overflow-y-auto">
                        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                             <Image
                                src={service.imageUrl}
                                alt={service.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <DialogDescription className="text-base text-gray-700 text-justify whitespace-pre-line">
                            {service.detail}
                        </DialogDescription>
                    </div>
                    <DialogFooter className="bg-gray-50 p-4 border-t">
                        <Button asChild size="lg" className="text-lg hover:bg-destructive transition-colors duration-300">
                            <Link href={service.url} target="_blank" rel="noopener noreferrer">
                                <LinkIcon className="mr-2 h-5 w-5" />
                                {service.label}
                            </Link>
                        </Button>
                    </DialogFooter>
                </motion.div>
            </DialogContent>
        </Dialog>
    );
}
