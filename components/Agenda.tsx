import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, BookOpen, CheckSquare } from "lucide-react";

const agendaData = [
  {
    day: "Ngày 1",
    date: "27/11/2025",
    title: "Tập huấn tiền hội nghị",
    icon: BookOpen,
    description: "Các hội thảo (HT) sẽ được điều hành bởi nhóm chuyên gia về Nhi sơ sinh - phương pháp Kangaroo (KMC) và Sản khoa trong nước và quốc tế. Tham dự viên có cơ hội trao đổi chuyên môn và thực hành lâm sàng. Anh/chị có thể chọn tham gia 2 trong 4 hội thảo sau:",
    items: [
      "HT 1: Chăm sóc trẻ sinh non từ chuyển dạ đến sau sinh: Tư vấn trước sinh, phối hợp Sản-Nhi, kỹ năng đỡ đẻ trẻ sinh non.",
      "HT 2: Hồi sức trẻ sinh non; Hỗ trợ hô hấp liên tục sau sinh; KMC liên hoàn.",
      "HT 3: Kỹ thuật thực hành KMC: LISA, CPAP, đặt đường truyền tĩnh mạch, chiếu đèn, sàng lọc ROP.",
      "HT 4: Theo dõi phát triển lâu dài ở trẻ sinh non; Quản lý chương trình KMC.",
    ],
  },
  {
    day: "Ngày 2",
    date: "28/11/2025",
    title: "Hội nghị ngày 1",
    icon: Mic,
    items: [
      "Phiên 1: Thực hiện KMC tại các quốc gia trong khu vực",
      "Phiên 2: KMC liên tục từ ngay sau sinh",
      "Phiên 3: Các yếu tố thúc đầy và rào cản của KMC",
      "Phiên 4: Phối hợp Sản-Nhi trong KMC",
    ],
  },
  {
    day: "Ngày 3",
    date: "29/11/2025",
    title: "Hội nghị ngày 2",
    icon: Mic,
    items: [
      "Phiên 5: Cập nhật chăm sóc, điều trị tối ưu cho trẻ sinh non",
      "Phiên 6: Theo dõi phát triển lâu dài",
      "Phiên 7: Báo cáo nghiên cứu mới về thực hiện KMC",
      "Phiên 8: Thúc đẩy và duy trì bền vững KMC trong khu vực",
    ],
  },
];

const Agenda = () => {
  return (
    <section id="chuong-trinh" className=" bg-slate-50 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl uppercase">
            Chương trình hội nghị
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Lịch trình chi tiết các ngày diễn ra hội nghị.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 h-full w-0.5 bg-blue-200" aria-hidden="true" />
          <div className="space-y-12">
            {agendaData.map((day, index) => (
              <div key={index} className="relative flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 ring-8 ring-slate-50">
                    <day.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-lg font-bold text-gray-900">{day.day} - <span className="font-medium text-gray-600">{day.date}</span></p>
                  <Card className="mt-4 shadow-lg"><CardHeader><CardTitle>{day.title}</CardTitle></CardHeader><CardContent><div className="space-y-4">{day.description && (<p className="text-gray-600">{day.description}</p>)}<ul className="space-y-3">{day.items.map((item, itemIndex) => (<li key={itemIndex} className="flex items-start gap-3"><CheckSquare className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" /><span className="text-gray-700">{item}</span></li>))}</ul></div></CardContent></Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agenda;