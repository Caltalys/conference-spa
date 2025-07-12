import Link from "next/link";
import ScrollIndicator from "./ScrollIndicator";
import { Calendar1, LocationEdit } from "lucide-react";

const ConferenceInfo = () => {
  return (
    <section
      id="tong-quan"
      className="relative flex w-full min-h-screen scroll-mt-16 gap-8 p-8">
      <div className="flex flex-col justify-center items-start w-1/2 p-4 rounded-2xl bg-white shadow-lg">
        <p className="mb-2 font-semibold">Tổng quan hội nghị:</p>
        <div className="flex">
          <strong>Tên Hội nghị : </strong> Hội nghị mạng lưới chăm sóc trẻ
          sinh non bằng phương pháp Kangaroo khu vực Châu Á- Châu Đại Dương
          lần thứ 3
        </div>
        <div className="flex">
          <strong>Thời gian : </strong> Ngày 27-28-29/11/2025
        </div>
        <div className="flex">
          <strong>Địa điểm : </strong>
          Trung tâm Kiểm soát Bệnh tật (CDC) thành phố Đà Nẵng, 118 Lê Đình
          Lý, Phường Thạc Gián, Quận Thanh Khê, Thành phố Đà Nẵng, Việt Nam.
        </div>
        <div className="flex">
          <strong>Hình thức tham dự : </strong> Trực tiếp
        </div>
      </div>
      <div className="flex w-1/2 justify-between items-center rounded-2xl bg-white shadow-lg">
        <img src="/map.png" alt="" />
      </div>
    </section>
  );
};

export default ConferenceInfo;
