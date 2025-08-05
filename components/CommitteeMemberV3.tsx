import { CommitteeMemberProps } from "@/data/committee";
import Image from "next/image";
import { motion } from "framer-motion";


export default function CommitteeMemberV3({
    member,
    isCenter = false,
}: {
    member: CommitteeMemberProps;
    isCenter?: boolean;
}) {
    return (
        <motion.div
            className="h-full p-2"
            // Hiệu ứng pop-out
            animate={{ scale: isCenter ? 1 : 0.85, y: isCenter ? -20 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
            <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-lg">
                <Image
                    src={member.imageUrl}
                    alt={`${member.title} ${member.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{member.title} {member.name}</h3>
            <ul className="mt-2 text-sm text-gray-600 list-disc pl-5 space-y-1">
                {member.role.map((r, idx) => (
                    <li key={idx}>{r}</li>
                ))}
            </ul>
        </motion.div>
    );
}