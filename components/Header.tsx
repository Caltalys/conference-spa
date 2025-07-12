'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AlignJustifyIcon, AtomIcon, MoonStarIcon, XIcon } from "lucide-react";
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
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header className="fixed w-full top-0 z-50 bg-white backdrop-blur-sm">
                <div className="flex justify-between items-center w-full lg:px-24 p-4 shadow-lg">
                    {/* Logo section */}
                    <Link href="/" className="flex items-center gap-2 text-2xl font-bold cursor-pointer">
                        <AtomIcon className=" text-blue-500" />
                        <p>VSRNM</p>
                    </Link>
                    {/* Menu section */}
                    <div className="hidden lg:block">
                        <ul className="flex justify-between items-center gap-8 font-semibold">
                            {menuItems.map(item => (
                                <li key={item.id}>
                                    <a href={item.href} className="hover:text-destructive hover:underline hover:underline-offset-8 hover:scale-110 transition-transform duration-300">
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
                        <Button variant="outline" size="icon" className="size-8 lg:hidden" onClick={toggleMenu}>
                            {isMenuOpen ? <XIcon /> : <AlignJustifyIcon />}
                        </Button>
                    </div>
                </div>
            </header>
            {/* Mobile menu section */}
            <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <div className="flex flex-col items-center p-4 bg-white">
                    <ul className="flex flex-col items-center gap-4 font-semibold w-full">
                        {menuItems.map(item => (
                            <li key={item.id} className="w-full text-center">
                                <a href={item.href} className="block py-2 hover:text-destructive hover:bg-gray-100 rounded-md transition-colors duration-200" onClick={toggleMenu}>
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Header;