// This interface is shared between Committee and CommitteeMember components.
// Moving it here makes it a single source of truth.
export interface CommitteeMemberProps {
    title: string;
    name: string;
    role: string[];
    imageUrl: string;
}

// Using a dedicated data file is more scalable and maintainable than
// embedding large data structures in translation files.
export const committeeData: Record<string, CommitteeMemberProps[]> = {
    en: [
        {
            title: "MD, PhD, Associate Professor",
            name: "Tran Thi Hoang",
            role: [
                "Deputy Director, Da Nang Hospital for Women and Children, Vietnam",
                "Head of Department of Pediatrics, School of Medicine and Pharmacy, The University of Da nang",
                "Vice Chairman, Vietnam Perinatal-Neonatal Association",
                "IRG member for WPRO on monitoring implementation of the Action Plan for Healthy Newborns",
            ],
            imageUrl: "/committer/TranThiHoang.png",
        },
        {
            title: "MD, Dr",
            name: "Luong Kim Chi",
            role: [
                "Head of Neonatology Department, Long An International General Hospital, Vietnam",
            ],
            imageUrl: "/committer/LuongKimChi.png",
        },
        {
            title: "MD, PhD, Dr",
            name: "Phan Thi Hang",
            role: ["Deputy Director, Hùng Vương Hospital, Vietnam"],
            imageUrl: "/committer/PhanThiHang.png",
        },
        {
            title: "MSc, Specialist Level II, Dr",
            name: "Le Thi Ha",
            role: [
                "Director, Neonatal Center – Vietnam National Children's Hospital",
                "Executive Committee Member, Vietnam Perinatal–Neonatal Association",
            ],
            imageUrl: "/committer/LeThiHa.png",
        },
        {
            title: "Specialist Level II, Dr",
            name: "Bui Thi Thuy Tien",
            role: [
                "Head of Neonatology Department, Hùng Vương Hospital, Ho Chi Minh City, Vietnam",
            ],
            imageUrl: "/committer/BuiThiThuyTien.png",
        },
        {
            title: "M.D., F.A.A.P",
            name: "Larry Ngo",
            role: [
                "Associate Program Director, Neonatal-Perinatal Fellowship Program Co-Director of the Center for Newborn Research",
                "NRP Instructor - American Academy of Pediatrics",
            ],
            imageUrl: "/committer/LarryNgo.png",
        },
        {
            title: "Professor",
            name: "Shashi N. Vani",
            role: [
                "Honorary Professor of Pediatrics and Neonatology, Gujarat, India",
                "Founding Chairperson & Managing Trustee, KMC India Foundation",
                "Member, Technical Committee on Kangaroo Mother Care (KMC), Ministry of Health and Family Welfare, Government of India",
            ],
            imageUrl: "/committer/ShashiNVani.png",
        },
        {
            title: "Dr",
            name: "Socorro De Leon‑Mendoza",
            role: [
                "Co‑Founder & Executive Officer, KMC Asia–Oceania Network",
                "Pediatrician and Neonatologist, Philippines",
            ],
            imageUrl: "/committer/SocorroDeLeonMendoza.png",
        },
        {
            title: "Dr",
            name: "Nathalie Charpak",
            role: [
                "Leading Expert in Kangaroo Mother Care",
                "Founder and Scientific Director, Fundación Canguro, Bogotá, Colombia",
            ],
            imageUrl: "/committer/NathalieCharpak.png",
        },
        {
            title: "Dr",
            name: "Delgermaa Vanya",
            role: [
                "Technical Officer, Maternal Child Health and Quality Safety Division of Health Systems and Services, WHO Regional Office for the Western Pacific (WPRO)",
            ],
            imageUrl: "/committer/DelgermaaVanya.png",
        },
        {
            title: "Professor, Dr",
            name: "Milind R. Shah",
            role: [
                "Head of Department, Obstetrics and Gynecology, Gandhi Natha Medical College",
                "Consultant at Naval Maternity Hospital & Nursing Home, Ashakiran Sperm Bank, Endoscopy & Assisted Reproduction Center, Solapur, India",
            ],
            imageUrl: "/committer/MilindRShah.png",
        },
        {
            title: "Professor",
            name: "Amy Gray",
            role: [
                "Head of Pediatrics Department, University of Melbourne",
                "Consultant Pediatrician, General Pediatrics Department, Royal Children’s Hospital, Melbourne, Australia",
            ],
            imageUrl: "/committer/AmyGray.png",
        },
        {
            title: "Professor",
            name: "Sylvie Nguyen",
            role: [
                "Professor of Pediatrics",
                "Head of Pediatric Neurology Department, University of Lille, France",
                "Former President, French Society of Pediatric Neurology",
            ],
            imageUrl: "/committer/SylvieNguyen.png",
        },
        {
            title: "Professor, MD, PhD",
            name: "Deepa Alay Banker",
            role: [
                "Neonatology Specialist & Kangaroo Care Expert",
                "Former Professor and Head of Pediatrics and Neonatology Department",
                "Member, SVP Institute of Medical Education and Research",
                "Member, UN Mehta Institute of Cardiology and Research Centre",
            ],
            imageUrl: "/committer/DeepaAlayBanker.png",
        },
    ],
    vi: [
        {
            title: "PGS.TS.BS",
            name: "Trần Thị Hoàng",
            role: [
                "Phó giám đốc bệnh viện Phụ sản Nhi Đà Nẵng, Việt Nam",
                "Trưởng Bộ môn Nhi, Trường Y Dược, ĐH Đà Nẵng",
                "Phó trưởng Chi hội Sơ sinh Chu Sinh Việt Nam",
                "Thành viên nhóm chuyên gia đánh giá độc lập tiến trình thực hiện kế hoạch hành động vì trẻ sơ sinh khỏe mạnh của Tổ chức Y tế thế giới khu vực Tây Thái Bình Dương",
            ],
            imageUrl: "/committer/TranThiHoang.png",
        },
        {
            title: "BS",
            name: "Lương Kim Chi",
            role: ["Trưởng khoa sơ sinh Bệnh viện đa khoa quốc tế Long An, Việt Nam"],
            imageUrl: "/committer/LuongKimChi.png",
        },
        {
            title: "TS.BS",
            name: "Phan Thị Hằng",
            role: ["Phó giám đốc Bệnh viện Hùng Vương, Việt Nam"],
            imageUrl: "/committer/PhanThiHang.png",
        },
        {
            title: "ThS.BSCK II",
            name: "Lê Thị Hà",
            role: [
                "Giám đốc Trung tâm Sơ sinh – Bệnh viện Nhi Trung ương, Việt Nam",
                "Ủy viên Ban chấp hành Hội Chu sinh- Sơ sinh Việt Nam",
            ],
            imageUrl: "/committer/LeThiHa.png",
        },
        {
            title: "BSCK II",
            name: "Bùi Thị Thuỷ Tiên",
            role: [
                "Trưởng khoa Sơ sinh - Bệnh viện Hùng Vương, TP. Hồ Chí Minh, Việt Nam",
            ],
            imageUrl: "/committer/BuiThiThuyTien.png",
        },
        {
            title: "BS",
            name: "Larry Ngo",
            role: [
                "Phó giám đốc chương trình Nội trú chuyên ngành Sơ sinh - Chu sinh Đồng giám đốc, Trung tâm Nghiên cứu sơ sinh",
                "Giảng viên Hồi sức sơ sinh của Viện Hàn lâm Nhi khoa Hoa Kỳ",
            ],
            imageUrl: "/committer/LarryNgo.png",
        },
        {
            title: "GS",
            name: "Shashi N. Vani",
            role: [
                "Giáo sư Danh dự Nhi khoa và Sơ sinh học, bang Gujarat, Ấn Độ",
                "Chủ tịch sáng lập và Quản lý Ủy thác, Tổ chức KMC Ấn Độ",
                "Thành viên Ủy ban Kỹ thuật về KMC, Bộ Y tế và Phúc lợi Gia đình Ấn Độ",
            ],
            imageUrl: "/committer/ShashiNVani.png",
        },
        {
            title: "BS",
            name: "Socorro De Leon – Mendoza, Philippines",
            role: [
                "Bs Nhi – Nhi Sơ sinh, Philippines",
                "Đồng sáng lập và điều hành mạng lưới KMC Châu Á- Châu Đại Dương",
            ],
            imageUrl: "/committer/SocorroDeLeonMendoza.png",
        },
        {
            title: "BS",
            name: "Nathalie Charpak",
            role: [
                "Chuyên gia đầu ngành về Chăm sóc Bà mẹ Kangaroo",
                "Sáng lập và Giám đốc khoa học của Fundación Canguro tại Bogotá, Colombia",
            ],
            imageUrl: "/committer/NathalieCharpak.png",
        },
        {
            title: "BS",
            name: "Delgermaa Vanya",
            role: [
                "Cán bộ chuyên trách về sức khỏe Bà mẹ và Trẻ em Tổ chức Y tế Thế giới khu vực Tây Thái Bình Dương",
            ],
            imageUrl: "/committer/DelgermaaVanya.png",
        },
        {
            title: "GS.TS. BS",
            name: "Milind R. Shah",
            role: [
                "Bệnh viện Sản & Viện dưỡng lão Naval, Ngân hàng tinh trùng Ashakiran, Trung tâm Nội soi & Hỗ trợ sinh sản, Solapur, Ấn Độ",
                "Trưởng khoa Sản phụ khoa, Trường Cao đẳng Y Gandhi Natha H",
            ],
            imageUrl: "/committer/MilindRShah.png",
        },
        {
            title: "GS. TS. BS",
            name: "Amy Gray",
            role: [
                "Trưởng bộ môn Nhi, Đại học Melbourne",
                "Chuyên gia Nhi khoa, Bệnh viện Nhi Hoàng gia, Melbourne, Úc",
            ],
            imageUrl: "/committer/AmyGray.png",
        },
        {
            title: "GS.TS.BS",
            name: "Sylvie Nguyễn",
            role: [
                "Giáo sư Nhi khoa",
                "Trưởng khoa thần kinh Nhi, Đại học Lille, Pháp",
                "Trưởng khoa thần kinh Nhi, Đại học Lille, Pháp",
            ],
            imageUrl: "/committer/SylvieNguyen.png",
        },
        {
            title: "GS.BS",
            name: "Deepa Alay Banker",
            role: [
                "Chuyên khoa Sơ sinh & Chuyên gia Chăm sóc Kangaroo",
                "Nguyên Giáo sư & Trưởng Khoa Nhi và Sơ sinh",
                "Thành viên Viện Giáo dục và Nghiên cứu Y khoa SVP",
                "Thành viên Viện Tim mạch và Trung tâm Nghiên cứu UN Mehta",
            ],
            imageUrl: "/committer/DeepaAlayBanker.png",
        },
    ],
};
