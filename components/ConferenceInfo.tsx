import Link from "next/link";
import { ScrollText } from "lucide-react";
import ScrollIndicator from "./ScrollIndicator";

const ConferenceInfo = () => {
  return (
    <section id="tong-quan"
      className="relative flex flex-col w-full h-screen scroll-mt-14">
      <h2 className="mt-16 font-bold text-3xl md:text-5xl text-center">
        Thông báo
      </h2>
      <div className="px-20">
        <p className="mb-4 font-semibold">Kính gửi:</p>
        <ul className="space-y-1 mb-4 pl-4 list-disc list-inside">
          <li>Ban Giám đốc các Bệnh viện Nhi, Sản-Nhi;</li>
          <li>
            Ban Giám hiệu các Trường Đại học, Học viện, Cao đẳng Y Dược;
          </li>
          <li>
            Ban giám đốc các Trung tâm Kiểm soát bệnh tật tỉnh/thành phố;
          </li>
          <li>Ban lãnh đạo khoa Sản, khoa Nhi các bệnh viện đa khoa;</li>
        </ul>

        <p className="mb-4">
          Được sự đồng ý của UBND TP. Đà Nẵng, Hội Y học thành phố Đà Nẵng
          phối hợp cùng Hội Nhi khoa thành phố Đà Nẵng tổ chức Hội nghị mạng
          lưới chăm sóc trẻ sinh non bằng phương pháp Kangaroo khu vực Châu Á-
          Châu Đại Dương lần thứ 3.
        </p>
        <p className="mb-2 font-semibold">Thông tin chi tiết về hội nghị:</p>
        <ul className="space-y-2 pl-4 list-disc list-inside">
          <li>
            <strong>Tên Hội nghị:</strong> Hội nghị mạng lưới chăm sóc trẻ
            sinh non bằng phương pháp Kangaroo khu vực Châu Á- Châu Đại Dương
            lần thứ 3
          </li>
          <li>
            <strong>Thời gian và địa điểm:</strong> Ngày 27-28-29/11/2025 tại
            Trung tâm Kiểm soát Bệnh tật (CDC) thành phố Đà Nẵng, 118 Lê Đình
            Lý, Phường Thạc Gián, Quận Thanh Khê, Thành phố Đà Nẵng, Việt Nam.
          </li>
          <li>
            <strong>Hình thức tham dự:</strong> Trực tiếp
          </li>
          <li>
            <strong>Chương trình hội nghị:</strong> Chương trình sẽ được tổ
            chức trong 3 ngày, bao gồm 1 ngày hội thảo tập huấn tiền hội nghị
            (27/11/2025) và 2 ngày hội nghị (28-29/11/2025), cụ thể như phụ lục
            đính kèm (phụ lục 1).
          </li>
        </ul>
        <p className="mt-4 mb-2 font-semibold">Thông báo và phụ lục</p>
        <ul className="space-y-2 pl-4 list-disc list-inside">
          <li>
            <Link href="/submit.docx" className="underline">
              Thông báo 1
            </Link>
          </li>
          <li>
            <Link href="/phu-luc.docx" className="underline">
              Phụ lục 1
            </Link>
          </li>
        </ul>
      </div>
      <ScrollIndicator href="#ban-to-chuc" />
      {/* <div className="flex justify-center items-center bg-white shadow-lg p-6 rounded-lg w-full text-gray-500">
        <div className="bg-white shadow-lg rounded-lg w-full md:w-1/2 h-96 overflow-hidden">
          <MapComponent />
        </div>
      </div> */}

    </section>
  );
};

export default ConferenceInfo;
