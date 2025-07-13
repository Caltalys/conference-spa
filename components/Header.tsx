'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { AlignJustifyIcon, AtomIcon, MoonStarIcon, XIcon } from "lucide-react";
import Link from "next/link";

const menuItems = [
    { id: 1, title: 'Trang chủ', href: '/' },
    { id: 2, title: 'Thông tin', href: '#tong-quan' },
    { id: 3, title: 'Chương trình', href: '#chuong-trinh' },
    { id: 4, title: 'Ban tổ chức', href: '#ban-to-chuc' },
    { id: 5, 'title': 'Đăng ký', href: '#dang-ky' },
    { id: 6, title: 'Dịch vụ', href: '#dich-vu' },
    { id: 7, title: 'Liên hệ', href: '#lien-he' }
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm">
                <div className="flex justify-between items-center w-full lg:px-24 p-4 shadow-lg">
                    {/* Logo section */}
                    <Link href="/" className="flex items-center gap-2 text-2xl font-bold cursor-pointer">
                        <AtomIcon className=" text-blue-500" />
                        <p>VSRNM</p>
                    </Link>
                    {/* Menu section */}
                    <nav className="hidden lg:block">
                        <ul className="flex justify-between items-center gap-8 font-semibold">
                            {menuItems.map(item => (
                                <li key={item.id}>
                                    <Link href={item.href} className="hover:text-destructive hover:underline hover:underline-offset-8 hover:scale-110 transition-transform duration-300">
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    {/* Icon section */}
                    <div className="flex items-center gap-2">
                        <Button variant="destructive" size="icon" className="size-8">
                            VN
                        </Button>
                        <Button variant="outline" size="icon" className="size-8" >
                            EN
                        </Button>
                        <Button variant="outline" size="icon" className="size-8">
                            <MoonStarIcon />
                        </Button>
                        {/* Mobile Hamburger icon section  */}
                        <Button variant="outline" size="icon" className="size-8 lg:hidden" onClick={toggleMenu} aria-controls="mobile-menu" aria-expanded={isMenuOpen}>
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? <XIcon /> : <AlignJustifyIcon />}
                        </Button>
                    </div>
                </div>
                {/* Mobile menu section */}
                <div id="mobile-menu" className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
                    <nav className="flex flex-col items-center p-4 bg-white border-t border-gray-200">
                        <ul className="flex flex-col items-center gap-4 font-semibold w-full">
                            {menuItems.map(item => (
                                <li key={item.id} className="w-full text-center">
                                    <Link href={item.href} className="block py-2 hover:text-destructive hover:bg-gray-100 rounded-md transition-colors duration-200" onClick={toggleMenu}>
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;