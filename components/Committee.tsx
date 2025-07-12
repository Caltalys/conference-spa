import CommitteeMember from "./CommitteeMember";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const committee = [
    { title: 'PGS. TS. BS.', name: 'Nguyễn Trọng Hào', role: 'Chủ tọa đoàn', imageUrl: '/images/member1.jpg', social: { linkedin: '#' } },
    { title: 'GS. TS. BS.', name: 'Nguyên Tấn Bình', role: 'Chủ tọa đoàn', imageUrl: '/images/member2.jpg', social: { linkedin: '#' } },
    { title: 'GS. TS. BS.', name: 'Ngô Minh Xuân', role: 'Chủ tọa đoàn', imageUrl: '/images/member3.jpg', social: { linkedin: '#' } },
    { title: 'GS. TS. BS.', name: 'Nguyên Tấn Bình', role: 'Chủ tọa đoàn', imageUrl: '/images/member2.jpg', social: { linkedin: '#' } },
    { title: 'GS. TS. BS.', name: 'Ngô Minh Xuân', role: 'Chủ tọa đoàn', imageUrl: '/images/member3.jpg', social: { linkedin: '#' } },
    { title: 'GS. TS. BS.', name: 'Nguyên Tấn Bình', role: 'Chủ tọa đoàn', imageUrl: '/images/member2.jpg', social: { linkedin: '#' } },
    { title: 'GS. TS. BS.', name: 'Ngô Minh Xuân', role: 'Chủ tọa đoàn', imageUrl: '/images/member3.jpg', social: { linkedin: '#' } },
];

const Committee = () => {
    return (
        <section id="ban-to-chuc" className="flex flex-col justify-center items-center py-16 w-full min-h-screen scroll-mt-14">
            <div className="mx-auto p-8 container">
                <div className="mb-16 text-center">
                    <h2 className="font-bold text-gray-800 text-2xl md:text-5xl">Chủ tọa đoàn - Báo cáo viên</h2>
                </div>
                <div className="flex flex-wrap justify-center gap-8">
                    {committee.map((member, index) => (
                        <div key={index} className="w-64">
                            <CommitteeMember {...member} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Committee