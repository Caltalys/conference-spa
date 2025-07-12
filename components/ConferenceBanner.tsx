'use client';

import Image from 'next/image';
import './ConferenceBanner.css';

export default function ConferenceBanner() {
  return (
    <div className="relative bg-[url('/bg-cau-vang.jpg')] bg-cover bg-no-repeat bg-center shadow-xl mx-auto w-full max-w-6xl aspect-[21/9] overflow-hidden">
      
      <div className="absolute inset-0 bg-black/10" />

      {/* Header with logos */}
      <header className="top-3 sm:top-5 right-0 left-0 z-10 absolute flex justify-center items-center space-x-8 sm:space-x-16">
        <Image src="/logo-hoi-y-hoc.png" alt="Logo Hội Y Học Đà Nẵng" width={80} height={80} className="h-12 sm:h-16 md:h-20 object-contain" />
        <Image src="/logo-hoi-nhi-khoa.png" alt="Logo Hội Nhi Khoa Đà Nẵng" width={80} height={80} className="h-12 sm:h-16 md:h-20 object-contain" />
        <Image src="/logo-kangaroo-care.png" alt="Logo Kangaroo Mother Care" width={80} height={80} className="h-12 sm:h-16 md:h-20 object-contain" />
      </header>

      {/* Main content */}
      <main className="z-10 relative flex flex-col justify-center items-center px-4 pt-16 sm:pt-20 md:pt-24 h-full">
        <div className="mx-auto w-full max-w-4xl text-center">
          <h1 className="text-stroke-white font-black text-red-600 text-2xl sm:text-3xl md:text-4xl uppercase leading-tight">
            Hội nghị mạng lưới chăm sóc trẻ sinh non bằng phương pháp Kangaroo Châu Á - Châu Đại Dương Lần thứ 3
          </h1>
          <h2 className="text-stroke-blue mt-2 sm:mt-3 font-bold text-white text-lg sm:text-xl md:text-2xl uppercase">
            The third regional conference of asia-oceania network of kangaroo mother care 2025
          </h2>
        </div>
      </main>

      {/* Bottom left info */}
      <div className="bottom-4 sm:bottom-8 left-4 sm:left-8 z-10 absolute flex items-end space-x-4">
        <div className="hidden sm:block flex-shrink-0 shadow-2xl border-[6px] border-white rounded-full w-36 md:w-48 h-36 md:h-48 overflow-hidden">
          <Image src="/me-va-be.jpg" alt="Mẹ và bé" width={192} height={192} className="w-full h-full object-cover" />
        </div>
        <div className="font-bold text-slate-800 text-center">
          <p className="text-lg sm:text-xl">ĐÀ NẴNG</p>
          <p className="bg-red-600 my-1 px-3 py-1 text-white text-xl sm:text-2xl">27-28-29</p>
          <p className="text-lg sm:text-xl">11/2025</p>
        </div>
      </div>

      {/* Gradient shape on the right */}
      <div className="top-0 right-0 z-0 absolute w-2/5 sm:w-1/4 h-full">
        <div className="top-0 right-0 absolute bg-gradient-to-t from-yellow-400 via-yellow-300 to-yellow-400 opacity-90 w-full h-full shape-clip" />
        <div className="top-0 right-0 absolute bg-[#005BBB] w-full h-full scale-90 shape-clip" />
      </div>

      {/* Right side thumbnails */}
      <div className="top-1/2 right-4 sm:right-6 md:right-8 z-10 absolute flex flex-col space-y-2 sm:space-y-3 -translate-y-1/2">
        {['kangaroo.jpg', 'my-son.jpg', 'cau-rong.jpg'].map((img, i) => (
          <div key={i} className="shadow-lg border-4 border-white rounded-lg w-24 sm:w-32 h-16 sm:h-20 overflow-hidden">
            <Image src={`/${img}`} alt={`Thumbnail ${i}`} width={128} height={80} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
