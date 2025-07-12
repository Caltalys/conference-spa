'use client';

import Image from "next/image";
import { Building, CalendarDays, MapPin, Users, XIcon } from "lucide-react";
import { useState } from "react";

const infoItems = [
  {
    icon: Building,
    label: "Tên Hội nghị",
    value:
      "Hội nghị mạng lưới chăm sóc trẻ sinh non bằng phương pháp Kangaroo khu vực Châu Á - Châu Đại Dương lần thứ 3",
  },
  {
    icon: CalendarDays,
    label: "Thời gian",
    value: "Ngày 27-28-29/11/2025",
  },
  {
    icon: MapPin,
    label: "Địa điểm",
    value:
      "Trung tâm Kiểm soát Bệnh tật (CDC) thành phố Đà Nẵng, 118 Lê Đình Lý, Phường Thạc Gián, Quận Thanh Khê, Thành phố Đà Nẵng, Việt Nam.",
  },
  {
    icon: Users,
    label: "Hình thức tham dự",
    value: "Trực tiếp",
  },
];

const ConferenceInfo = () => {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);

  return (
    <section id="tong-quan" className="scroll-mt-16 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl bg-white">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Thông tin Hội nghị
            </h2>
            <dl className="space-y-6">
              {infoItems.map((item) => (
                <div key={item.label} className="flex">
                  <dt className="flex-shrink-0">
                    <item.icon
                      className="h-6 w-6 text-blue-600"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd className="ml-4">
                    <p className="text-lg font-semibold leading-6 text-gray-900">
                      {item.label}
                    </p>
                    <p className="mt-1 text-base text-gray-700">{item.value}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mt-12 lg:mt-0">
            <button
              type="button"
              onClick={() => setIsMapModalOpen(true)}
              className="relative block w-full aspect-[16/9] overflow-hidden rounded-2xl shadow-xl"
              aria-label="Xem bản đồ kích thước đầy đủ"
            >
              <Image
                src="/map.png"
                alt="Bản đồ địa điểm tổ chức hội nghị tại CDC Đà Nẵng"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </button>
          </div>
        </div>
      </div>
      {isMapModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIsMapModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            onClick={() => setIsMapModalOpen(false)}
            aria-label="Đóng bản đồ"
          >
            <XIcon className="h-8 w-8" />
          </button>
          <div className="relative w-full h-full max-w-6xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <Image src="/map.png" alt="Bản đồ địa điểm tổ chức hội nghị tại CDC Đà Nẵng" fill className="object-contain" />
          </div>
        </div>
      )}
    </section>
  );
};

export default ConferenceInfo;
