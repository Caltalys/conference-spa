import { Button } from "@/components/ui/button";
import { AlignJustifyIcon, Atom, AtomIcon, FlagIcon, HamburgerIcon, MoonIcon, MoonStarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
    { id: 1, title: 'Trang chủ', href: '/' },
    { id: 2, title: 'Thông báo', href: '#tong-quan' },
    { id: 3, title: 'Ban tổ chức', href: '#ban-to-chuc' },
    { id: 4, title: 'Hướng dẫn', href: '#huong-dan' },
    { id: 5, title: 'Dịch vụ', href: '#dich-vu' },
    { id: 6, title: 'Liên hệ', href: '#lien-he' }
];

const Header = () => {
    return (
        <>
            <header>
                <div className="flex justify-between items-center w-full lg:px-24 p-4 shadow-lg">
                    {/* Logo section */}
                    <div className="flex items-center gap-2 text-2xl font-bold">
                        <AtomIcon className=" text-blue-500" />
                        <p>VSRNM</p>
                    </div>
                    {/* Menu section */}
                    <div className="hidden lg:block">
                        <ul className="flex justify-between items-center gap-8 font-semibold">
                            {menuItems.map(item => (
                                <li key={item.id}>
                                    <a href={item.href} className="hover:text-primary hover:scale-110 transition-transform duration-300">
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Icon section */}
                    <div className="flex items-center gap-2">
                        <Button variant="destructive" size="icon" className="size-8">
                            VN
                        </Button>
                        <Button variant="outline" size="icon" className="size-8">
                            EN
                        </Button>
                        <Button variant="outline" size="icon" className="size-8">
                            <MoonStarIcon />
                        </Button>
                        {/* Mobile Hamburger icon section  */}
                        <Button variant="outline" size="icon" className="size-8 lg:hidden">
                            <AlignJustifyIcon />
                        </Button>
                    </div>
                </div>




                {/* <Link href="/" className="flex items-center gap-2 mx-6">
                <AtomIcon className="w-12 h-12 text-blue-500" />
            </Link> */}

                {/* <Link href="#dang-ky" className="">
                <Button className="p-4 rounded-xl hover:scale-105 transition-transform duration-300 text-accent-hover">
                    Đăng ký ngay
                </Button>
            </Link> */}
            </header>
            {/* Mobile menu section */}
            {/* <div>

        </div> */}
        </>
    );
};

export default Header;