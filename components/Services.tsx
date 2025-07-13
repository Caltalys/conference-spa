import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Globe, Plane, Phone, Mail, Link as LinkIcon } from "lucide-react";
import Link from "next/link";

const serviceItems = [
    {
        icon: Briefcase,
        title: "Tour MICE",
        description: "Du lịch kết hợp hội nghị, sự kiện trong và ngoài nước dành cho doanh nghiệp."
    },
    {
        icon: Globe,
        title: "Tour inbound",
        description: "Dành cho khách quốc tế."
    },
    {
        icon: Plane,
        title: "Tour nội địa và outbound",
        description: "Phục vụ du khách Việt Nam khám phá trong và ngoài nước."
    }
];

const Services = () => {
  return (
    <section id="dich-vu" className="scroll-mt-16 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl uppercase">
                    Dịch vụ
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                    Thông tin hỗ trợ di chuyển và lưu trú cho Quý Đại biểu.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                {/* Left side: Company Info */}
                <div className="lg:col-span-3">
                    <h3 className="text-2xl font-bold text-gray-900">
                        CÔNG TY DU LỊCH BẠN ĐỒNG HÀNH CHÂU Á – ASIAN COMPANION TRAVEL
                    </h3>
                    <p className="mt-4 text-gray-700">
                        Là đơn vị chuyên tổ chức các tour du lịch trong nước và quốc tế, với thế mạnh nổi bật ở các dòng sản phẩm:
                    </p>
                    <ul className="mt-6 space-y-4">
                        {serviceItems.map(item => (
                            <li key={item.title} className="flex items-start gap-4">
                                <item.icon className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                                <p className="text-gray-700"><strong>{item.title}:</strong> {item.description}</p>
                            </li>
                        ))}
                    </ul>
                    <p className="mt-6 text-gray-700 italic">
                        Với hơn 15 năm kinh nghiệm, chúng tôi hân hạnh đồng hành cùng Quý Đại biểu trong suốt thời gian tham dự Hội nghị.
                    </p>
                    <p className="mt-4 text-gray-700">
                        Nhằm hỗ trợ nhu cầu đi lại và lưu trú, kính mời Quý Đại biểu chọn các dịch vụ phù hợp dưới đây:
                    </p>
                    <Link href="https://forms.gle/3bQ9ztbrVNMMZzhq9" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block">
                        <Button size="lg" className="text-lg py-6 hover:bg-destructive transition-colors duration-300">
                            <LinkIcon className="mr-2 h-5 w-5" />
                            Đăng ký Dịch vụ
                        </Button>
                    </Link>
                </div>

                {/* Right side: Contact Info */}
                <div className="lg:col-span-2">
                    <Card className="shadow-xl bg-slate-50 sticky top-24">
                        <CardHeader>
                            <CardTitle>Mọi thắc mắc xin vui lòng liên hệ:</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="font-bold text-gray-800">ASIAN COMPANION TRAVEL</p>
                            <div className="space-y-3 text-gray-700">
                                <div className="flex items-start gap-3">
                                    <Phone className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <p><strong>0988 016 000</strong> (Mrs. Trang)</p>
                                        <p><strong>0336 548 705</strong> (Ms. Như)</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="h-5 w-5 text-blue-600" />
                                    <a href="mailto:director@actravel.com.vn" className="text-blue-600 hover:underline break-all">director@actravel.com.vn</a>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services