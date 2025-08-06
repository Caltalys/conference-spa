// import { RiStarSFill } from "react-icons/ri"
import { cn } from "@/lib/utils"

interface PretitleProps {
    text: string;
    center?: boolean;
    starColor?: string;
    textColor?: string;
}

const Pretitle = ({ text, center, starColor = "text-primary", textColor = "text-gray-900" }: PretitleProps) => {
    return (
        <div className={cn(
            "flex items-center gap-3 mb-4",
            center && "justify-center"
        )}>
            {/* <RiStarSFill className={cn("w-6 h-6 mb-1 stroke-width: 1px;", starColor)}/> */}
            <p className={cn("text-3xl font-bold tracking-tight sm:text-4xl uppercase", textColor)}>{text}</p>
            {/* <RiStarSFill className={cn("w-6 h-6 mb-1 stroke-width: 1px;", starColor)} /> */}
        </div>
    )
}

export default Pretitle