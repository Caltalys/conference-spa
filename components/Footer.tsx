import Link from "next/link"
import { Mail, Phone, MapPin, User } from 'lucide-react';
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Column 1: About */}
                    <div className="md:col-span-2">
                        <h3 className="text-xl font-display font-bold text-white mb-2">VSRNM 2025</h3>
                        <p className="text-gray-400 max-w-md">Hội nghị mạng lưới chăm sóc trẻ sinh non bằng phương pháp
                            Kangaroo khu vực Châu Á- Châu Đại Dương lần thứ 3.</p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="font-bold text-white mb-3">Liên kết nhanh</h4>
                        <ul className="space-y-2">
                            <li><Link href="#trang-chu" className="hover:text-accent transition-colors">Trang chủ</Link></li>
                            <li><Link href="#chuong-trinh" className="hover:text-accent transition-colors">Chương trình</Link></li>
                            <li><Link href="#dang-ky" className="hover:text-accent transition-colors">Đăng ký</Link></li>
                            <li><Link href="#dich-vu" className="hover:text-accent transition-colors">Dịch vụ</Link></li>
                            <li><Link href="#ban-to-chuc" className="hover:text-accent transition-colors">Ban tổ chức</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h4 className="font-bold text-white mb-3">Liên hệ</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li className="flex items-center"><User className="mr-2" /> ThS.BS. Huỳnh Thị Lệ</li>
                            <li className="flex items-center"><Mail className="mr-2" /> 
                                <a href="mailto:kmcdanang2025@gmail.com" className="font-semibold text-white hover:underline">
                                    kmcdanang2025@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center"><Phone className="mr-2" /> (+84) 0905.662.186</li>
                            <li className="flex items-center"><MapPin className="mr-2" /> 118 Lê Đình Lý, TP Đà Nẵng, Việt Nam</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-gray-900 py-4">
                <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} KMC Danang. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer