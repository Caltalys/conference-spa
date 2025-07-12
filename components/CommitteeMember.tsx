import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
interface CommitteeMemberProps {
    title: string;
    name: string;
    role: string;
    imageUrl: string;
    social?: {
        linkedin?: string;
    };
}

const CommitteeMember = ({ title, name, role, imageUrl, social }: CommitteeMemberProps) => {
    return (
        <Card className="group bg-white shadow-lg hover:shadow-2xl p-4 rounded-xl text-center transition-all hover:-translate-y-2 duration-300">
            <CardContent>
                <div className="inline-block relative">
                    <Image src={imageUrl} alt={name} 
                    className="mx-auto mb-8 border-2 border-gray-100 group-hover:border-accent/50 rounded-full transition-colors duration-300"
                    width={32} height={48} />
                </div>
                <h6 className="font-semibold text-muted-foreground text-sm">{title}</h6>
                <h4 className="font-bold text-gray-900 text-md group-hover:text-blue-600 md:text-lg transition-colors duration-300">{name}</h4>
                <p className="text-gray-500">{role}</p>
            </CardContent>
        </Card>
        // <div className="group bg-white shadow-lg hover:shadow-2xl p-4 rounded-xl text-center transition-all hover:-translate-y-2 duration-300">
        //     <div className="inline-block relative">
        //         <img
        //             src={imageUrl}
        //             alt={name}
        //             className="mx-auto mb-8 border-2 border-gray-100 group-hover:border-accent/50 rounded-full w-32 h-32 transition-colors duration-300"
        //         />
        //     </div>
        //     <h6 className="font-semibold text-muted-foreground text-sm">{title}</h6>
        //     <h4 className="font-bold text-gray-900 text-md group-hover:text-blue-600 md:text-lg transition-colors duration-300">{name}</h4>
        //     <p className="text-gray-500">{role}</p>
        // </div>
    )
}

export default CommitteeMember