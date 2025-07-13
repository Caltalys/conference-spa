import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarCheck, CalendarClock, FileText, Link as LinkIcon, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const reportSteps = [
    {
        icon: FileText,
        text: "Gửi tóm tắt bài báo cáo không quá 300 từ bằng tiếng Việt và tiếng Anh.",
    },
    {
        icon: Mail,
        text: (
            <>
                Hạn cuối nhận đăng ký vào 22 giờ ngày 01/09/2025 qua email:{" "}
                <a href="mailto:kmcdanang2025@gmail.com" className="font-semibold text-blue-600 hover:underline">
                    kmcdanang2025@gmail.com
                </a>
            </>
        ),
    },
    {
        icon: CalendarCheck,
        text: "Thời điểm thông báo kết quả xét duyệt của ban tổ chức: 19/09/2025.",
    },
];

const Register = () => {
  return (
    <section id="dang-ky" className="scroll-mt-16 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl uppercase">
                    Đăng ký
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                    Thông tin đăng ký báo cáo và tham dự hội nghị.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Report Registration */}
                <Card className="shadow-xl">
                    <CardHeader>
                        <CardTitle className="text-2xl text-center lg:text-left">1. Đăng ký báo cáo</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-6">
                            {reportSteps.map((step, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                        <step.icon className="h-6 w-6 text-blue-600 mt-1" aria-hidden="true" />
                                    </div>
                                    <p className="text-base text-gray-700">{step.text}</p>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                {/* Attendance Registration */}
                <Card className="shadow-xl">
                    <CardHeader>
                        <CardTitle className="text-2xl text-center lg:text-left">2. Đăng ký tham dự</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                            <p className="text-base text-gray-700 mb-4">
                                Đại biểu đăng ký tham dự qua đường link hoặc quét mã QR bên dưới:
                            </p>
                            <div className="flex flex-col items-center gap-6">
                                <Link href="https://forms.gle/HwQKyftKHxp1srG87" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                    <Button className="w-full text-lg py-6">
                                        <LinkIcon className="mr-2 h-5 w-5" />
                                        Đăng ký ngay
                                    </Button>
                                </Link>
                                <div className="relative h-48 w-48 flex-shrink-0">
                                    <Image
                                        src="/QR.png"
                                        alt="QR Code for registration"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                                <CalendarClock className="h-6 w-6 text-blue-600 mt-1" aria-hidden="true" />
                            </div>
                            <p className="text-base text-gray-700">
                                Hạn cuối nhận đăng ký: <span className="font-semibold">10/11/2025</span>.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    </section>
  )
}

export default Register