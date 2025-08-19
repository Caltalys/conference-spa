// This interface is shared between Committee and CommitteeMember components.
// Moving it here makes it a single source of truth.
export interface CommitteeMemberProps {
    title: string;
    name: string;
    role: string[];
    imageUrl: string;
    order?: number;
}

// Using a dedicated data file is more scalable and maintainable than
// embedding large data structures in translation files.
export const committeeData: Record<string, CommitteeMemberProps[]> = {
    en: [
        {
            order: 1,
            title: "Dr",
            name: "Dr. Nathalie Charpak",
            role: [
                "Pioneering and leading the way in Kangaroo Mother Care (1989–2025)",
                "Leading global expert in Kangaroo Mother Care with KMC training of 217 teams from 47 countries, 108 internationals and 109 from Colombia (1994-2025)",
                "Founder and Director, Fundación Canguro, Bogotá, Colombia (1994-2025)",
                "Scientific Director, Integral Kangaroo Mother Care program (PMCI), San Ignacio Teaching Hospital, Javeriana University (2001-2025)",
            ],
            imageUrl: "/committer/NathalieCharpak.webp",
        },
        {
            order: 2,
            title: "Dr",
            name: "Dr. Socorro De Leon‑Mendoza",
            role: [
                "Founder & Chairperson, Kangaroo Mother Care Foundation, Philippines Inc.",
                "Lead Convenor Asia-Oceania Kangaroo Mother Care Network",
                "Neonatologist & Pediatrician, Philippines",
            ],
            imageUrl: "/committer/SocorroDeLeonMendoza.webp",
        },
        {
            order: 3,
            title: "Professor",
            name: "Professor Shashi N. Vani",
            role: [
                "Honorary Professor of Pediatrics and Neonatology, Gujarat, India",
                "Founding Chairperson & Managing Trustee, KMC India Foundation",
                "Member, Technical Committee on Kangaroo Mother Care (KMC), Ministry of Health and Family Welfare, Government of India",
            ],
            imageUrl: "/committer/ShashiNVani.webp",
        },
        {
            order: 4,
            title: "Dr, MD, PhD",
            name: "Dr. Delgermaa Vanya, MD, PhD",
            role: [
                "Technical Officer, Maternal Child Health and Quality Safety Division of Health Systems and Services, WHO Regional Office for the Western Pacific (WPRO)",
            ],
            imageUrl: "/committer/DelgermaaVanya.webp",
        },
        {
            order: 5,
            title: "Professor, MD, PhD",
            name: "Professor Deepa Alay Banker",
            role: [
                "Neonatology Specialist & Kangaroo Care Expert",
                "Former Professor and Head of Pediatrics and Neonatology Department",
                "Member, SVP Institute of Medical Education and Research",
                "Member, UN Mehta Institute of Cardiology and Research Centre",
            ],
            imageUrl: "/committer/DeepaAlayBanker.webp",
        },
        {
            order: 6,
            title: "Professor, Dr",
            name: "Professor Milind R. Shah",
            role: [
                "Head of Department, Obstetrics and Gynecology, Gandhi Natha Medical College",
                "Consultant at Naval Maternity Hospital & Nursing Home, Ashakiran Sperm Bank, Endoscopy & Assisted Reproduction Center, Solapur, India",
            ],
            imageUrl: "/committer/MilindRShah.webp",
        },
        {
            order: 7,
            title: "Dr",
            name: "Dr. Alyson Skinner MD, MEd, MSc in Clinical Nutrition, DCH, FRCP, FRCPCH",
            role: [
                "Honorary Consultant Neonatologist with special interests in medical education and nutrition",
                "Walsall Manor Hospital, West Midlands, UK",
                "Former Senior Clinical Lecturer, University of Birmingham, UK",
                "Former Senior College Tutor, Royal College of Pediatrics and Child Health",
                "RCPCH examiner for membership examination, Diploma in Child Health and START assessment (RCPCH)",
                "Newborn Life Support Course director, GIC instructor",
                "Former Associate Professor, Department of Pediatrics, University of Dubai",
                "Member of British Association of Perinatal Medicine",
            ],
            imageUrl: "/committer/AlysonSkinner.webp",
        },
        {
            order: 8,
            title: "Professor, MD, PhD",
            name: "Professor Sylvie Nguyen The Tich",
            role: [
                "Professor of Pediatrics",
                "Head of Pediatric Neurology Department, University of Lille, France",
                "Former President, French Society of Pediatric Neurology",
            ],
            imageUrl: "/committer/SylvieNguyen.webp",
        },
        {
            order: 9,
            title: "Professor, MD, PhD",
            name: "Professor Amy Gray",
            role: [
                "Stevenson Chair and Head of Department of Pediatrics, The University of Melbourne",
                "Consultant Pediatrician, General Pediatrics Department, Royal Children’s Hospital, Melbourne, Australia",
                "Consultant with WHO, UNICEF, Save the Children and the ADB",
                "Led redesign of national child health training programs such as IMNCI and WHO Pocketbook in Lao PDR ",
                "Co-Chair of Melbourne Children’s Global Health",
            ],
            imageUrl: "/committer/AmyGray.webp",
        },
        {
            "order": 10,
            "title": "Dr",
            "name": "Dr. Maria Esterlita V. Uy",
            "role": [
                "Research professor, Institute of Child health and Human development",
                "National Institutes of Health",
                "University of the Philippines Manila",
                "President, Kangaroo Mother Care Foundation, Philippines, Inc."
            ],
            "imageUrl": "/committer/MariaEsterlita.webp"
        },
        {
            "order": 11,
            "title": "Dr",
            "name": "Dr. Daisy Evangeline C. Garcia, MD",
            "role": [
                "Neonatologist",
                "Board Member Kangaroo Mother Care Foundation, Philippines",
                "Fellowship Training Neonatal Perinatal Medicine Wayne State University/Children’s Hospital of Michigan, Michigan, USA"
            ],
            "imageUrl": "/committer/DaisyEvangeline.webp"
        },
        {
            "order": 12,
            "title": "Dr",
            "name": "Dr Bouasengnignom Phrasithideth",
            "role": [
                "Neonatologist",
                "Mahosot hospital, Lao PDR",
                "National EENC - KMC in Lao PDR"
            ],
            "imageUrl": "/committer/BouasengnignomPhrasithideth.webp"
        },
        {
            order: 13,
            title: "Dr",
            name: "Dr. Tao Xu, MD, PhD",
            role: [
                "Director of Children's Healthcare Department, Maternal and Child Health Care, Chinese Disease Prevention and Control Center",
                "Associate research fellow, National Center for Women and Children’s Health, National Health Commission",
                "IRG member for WPRO, monitoring the implementation of the Action Plan for Healthy Newborns",
            ],
            imageUrl: "/committer/TaoXu.webp",
        },
        {
            order: 14,
            title: "M.D., F.A.A.P",
            name: "Larry Ngo, M.D., F.A.A.P.",
            role: [
                "Associate Program Director, Neonatal-Perinatal Fellowship Program",
                "Co-Director of the Center for Newborn Research",
                "Clinical Director of NICU QI, Division of Neonatology, Department of Pediatrics Loma Linda University Children's Hospital",
                "NRP Instructor - American Academy of Pediatrics",
            ],
            imageUrl: "/committer/LarryNgo.webp",
        },
        {
            "order": 15,
            "title": "BS",
            "name": "Professor Abdul Mannan, MD, PhD",
            "role": [
                "Chairman, Department of Neonatology, Bangladesh Medical University",
                "Co-Investigator & Clinical Lead, iKMC project",
                "Master Mentor, KMC Training",
                "Secretary General, Bangladesh Perinatal Society",
                "Vice President, Bangladesh Neonatal Forum",
                "Member, National Technical Working Committee on Newborn Health Bangladesh"
            ],
            "imageUrl": "/committer/AbdulMannan.png"
        },
        {
            order: 16,
            title: "MD",
            name: "Dr. Luong Kim Chi, MD",
            role: [
                "Head of Neonatology Department, Tan An International General Hospital, Vietnam",
                "Senior neonatologist and clinical expert in Kangaroo Mother Care",
                "KMC Instructor for colleagues from provinces in Vietnam and other countries",
            ],
            imageUrl: "/committer/LuongKimChi.webp",
        },
        {
            order: 17,
            title: "MD, PhD, Associate Professor",
            name: "Associate Professor Tran Thi Hoang, MD, PhD",
            role: [
                "Deputy Director, Da Nang Hospital for Women and Children, Vietnam",
                "Head of Department of Pediatrics, School of Medicine and Pharmacy, The University of Da nang",
                "Vice Chairman, Vietnam Perinatal-Neonatal Association",
                "IRG member for WPRO on monitoring implementation of the Action Plan for Healthy Newborns",
                "Instructor for Early Essential Newborn Care, Kangaroo Mother Care and Neonatal Resuscitation for both national and international colleagues",
            ],
            imageUrl: "/committer/TranThiHoang.webp",
        },
        {
            order: 18,
            title: "MD, PhD, Dr",
            name: "Dr. Phan Thi Hang, MD, PhD",
            role: [
                "Consultant Obstetrician",
                "Deputy Director, Hùng Vương Hospital, Vietnam",
            ],
            imageUrl: "/committer/PhanThiHang.webp",
        },
        {
            order: 19,
            title: "MSc, Specialist Level II, Dr",
            name: "Dr. Le Thi Ha, MMed, Specialist Level II",
            role: [
                "Director, Neonatal Center – Vietnam National Children's Hospital",
                "Executive Committee Member, Vietnam Perinatal–Neonatal Association",
                "Instructor of neonatal care for colleagues from provincial hospitals",
            ],
            imageUrl: "/committer/LeThiHa.webp",
        },
        {
            order: 20,
            title: "Specialist Level II, Dr",
            name: "Dr. Bui Thi Thuy Tien, Specialist Level II ",
            role: [
                "Head of Neonatology Department, Hùng Vương Hospital, Ho Chi Minh City, Vietnam",
                "Lecturer at Pham Ngoc Thach University of Medicine",
            ],
            imageUrl: "/committer/BuiThiThuyTien.webp",
        },
        {
            order: 21,
            title: "Dr",
            name: "Dr Huynh Thi Le, MD, MMed",
            role: [
                "Head of NICU, Da Nang Hospital for Women and Children, Viet Nam",
                "Deputy Head of General Nursing Department, Faculty of Nursing, Da Nang University of Medical Technology and Pharmacy",
                "Executive Committee Member, Viet Nam Perinatal & Neonatal Association",
                "Instructor for Early Essential Newborn Care, Kangaroo Mother Care and Neonatal Resuscitation for both national and international colleagues",
            ],
            imageUrl: "/committer/HuynhThiLe.webp",
        },
    ],
    "vi": [
        {
            "order": 1,
            "title": "BS",
            "name": "BS Nathalie Charpak",
            "role": [
                "Người tiên phong và dẫn đầu trong Chăm sóc Bà mẹ Kangaroo (1989–2025)",
                "Chuyên gia hàng đầu thế giới về Chăm sóc Bà mẹ Kangaroo, đã huấn luyện 217 nhóm đến từ 47 quốc gia, bao gồm 108 nhóm quốc tế và 109 nhóm từ Colombia (1994–2025)",
                "Nhà sáng lập và Giám đốc của Fundación Canguro, Bogotá, Colombia (1994–2025)",
                "Giám đốc Khoa học của Chương trình Chăm sóc Bà mẹ Kangaroo toàn diện (PMCI), Bệnh viện Đại học San Ignacio, Đại học Javeriana (2001–2025)"
            ],
            "imageUrl": "/committer/NathalieCharpak.webp"
        },
        {
            "order": 2,
            "title": "BS",
            "name": "BS Socorro De Leon – Mendoza, Philippines",
            "role": [
                "Nhà sáng lập & Chủ tịch, Quỹ Kangaroo Mother Care Philippines Inc.",
                "Điều phối viên chính Mạng lưới Kangaroo Mother Care Châu Á - Châu Đại Dương",
                "Bác sĩ chuyên khoa Sơ sinh & Nhi khoa, Philippines"
            ],
            "imageUrl": "/committer/SocorroDeLeonMendoza.webp"
        },
        {
            "order": 3,
            "title": "GS",
            "name": "GS. Shashi N. Vani",
            "role": [
                "Giáo sư Danh dự Nhi khoa và Sơ sinh học, bang Gujarat, Ấn Độ",
                "Chủ tịch sáng lập và Quản lý Ủy thác, Tổ chức Kangaroo Mother Care Ấn Độ",
                "Thành viên Ủy ban Kỹ thuật về KMC, Bộ Y tế và Phúc lợi Gia đình Ấn Độ"
            ],
            "imageUrl": "/committer/ShashiNVani.webp"
        },
        {
            "order": 4,
            "title": "TS.BS",
            "name": "TS.BS Delgermaa VANYA",
            "role": [
                "Cán bộ chuyên trách về sức khỏe Bà mẹ và Trẻ em",
                "Tổ chức Y tế Thế giới khu vực Tây Thái Bình Dương"
            ],
            "imageUrl": "/committer/DelgermaaVanya.webp"
        },
        {
            "order": 5,
            "title": "GS.BS",
            "name": "GS.BS. Deepa Alay Banker",
            "role": [
                "Chuyên khoa Sơ sinh & Chuyên gia Chăm sóc Kangaroo",
                "Nguyên Giáo sư & Trưởng Khoa Nhi và Sơ sinh",
                "Thành viên Viện Giáo dục và Nghiên cứu Y khoa SVP",
                "Thành viên Viện Tim mạch và Trung tâm Nghiên cứu UN Mehta"
            ],
            "imageUrl": "/committer/DeepaAlayBanker.webp"
        },
        {
            "order": 6,
            "title": "GS.TS. BS",
            "name": "GS.TS. BS. Milind R. Shah",
            "role": [
                "Trưởng khoa Sản phụ khoa, Trường Cao đẳng Y Gandhi Natha H",
                "Bệnh viện Sản & Viện dưỡng lão Naval, Ngân hàng tinh trùng Ashakiran, Trung tâm Nội soi & Hỗ trợ sinh sản, Solapur, Ấn Độ"
            ],
            "imageUrl": "/committer/MilindRShah.webp"
        },
        {
            "order": 7,
            "title": "TS.BS",
            "name": "TS.BS. Alyson Skinner",
            "role": [
                "Bác sĩ chuyên ngành Sơ sinh với quan tâm đặc biệt đến giáo dục y khoa và dinh dưỡng, Bệnh viện Walsall Manor, West Midlands, Vương quốc Anh",
                "Nguyên Giảng viên cao cấp lâm sàng, Đại học Birmingham, Vương quốc Anh",
                "Nguyên Giảng viên cao cấp của Hiệp hội Nhi khoa Hoàng gia (RCPCH)",
                "Giám khảo cho kỳ thi thành viên (membership), Chứng chỉ Nhi khoa (DCH) và đánh giá START của RCPCH",
                "Giám đốc khóa học Hồi sức Sơ sinh (Newborn Life Support), giảng viên đào tạo người hướng dẫn",
                "Nguyên Phó Giáo sư, Bộ môn Nhi, Đại học Dubai",
                "Thành viên của Hiệp hội Y học Chu sinh Anh Quốc (British Association of Perinatal Medicine)"
            ],
            "imageUrl": "/committer/AlysonSkinner.webp"
        },
        {
            "order": 8,
            "title": "GS.TS.BS",
            "name": "GS.TS.BS. Sylvie Nguyễn",
            "role": [
                "Giáo sư Nhi khoa",
                "Trưởng khoa thần kinh Nhi, Đại học Lille, Pháp",
                "Nguyên chủ tịch của Hiệp hội Thần kinh Nhi, CH Pháp"
            ],
            "imageUrl": "/committer/SylvieNguyen.webp"
        },
        {
            "order": 9,
            "title": "GS. TS. BS",
            "name": "GS.TS.BS. Amy Gray",
            "role": [
                "Trưởng bộ môn Nhi, Đại học Melbourne",
                "Chuyên gia Nhi khoa, Bệnh viện Nhi Hoàng gia, Melbourne, Úc",
                "Chuyên gia cho WHO, UNICEF, Save the Children và ADB",
                "Đóng vai trò chủ chốt trong việc thiết kế lại các chương trình đào tạo sức khỏe trẻ em quốc gia như IMNCI và Sổ tay WHO tại Lào.",
                "Đồng Chủ tịch Chương trình Sức khỏe trẻ em Toàn cầu Melbourne"
            ],
            "imageUrl": "/committer/AmyGray.webp"
        },
        {
            "order": 10,
            "title": "GS.TS",
            "name": "GS.TS. Maria Esterlita V. Uy",
            "role": [
                "Viện sức khỏe trẻ em và phát triển con người",
                "Viện nghiên cứu sức khỏe quốc gia",
                "Đại học Philippines Manila",
                "Chủ tịch Hội Chăm sóc bà mẹ Kangaroo Philippines"
            ],
            "imageUrl": "/committer/MariaEsterlita.webp"
        },
        {
            "order": 11,
            "title": "Dr",
            "name": "Dr. Daisy Evangeline C. Garcia, MD",
            "role": [
                "Bác sĩ chuyên khoa Nhi sơ sinh",
                "Thành viên hội đồng Hội chăm sóc Bà mẹ Kangaroo Philippines",
                "Bác sĩ thực hành chương trình Fellowship Chu sinh-Sơ sinh tại Bệnh viện Nhi Michigan, trường đại học Wayne State, Michigan, Mỹ"
            ],
            "imageUrl": "/committer/DaisyEvangeline.webp"
        },
        {
            "order": 12,
            "title": "Dr",
            "name": "Dr Bouasengnignom Phrasithideth",
            "role": [
                "Bác sĩ chuyên sâu Sơ sinh",
                "Bệnh viện Mahosot, CHDCND Lào",
                "Giảng viên quốc gia về EENC - KMC tại CHDCND Lào"
            ],
            "imageUrl": "/committer/BouasengnignomPhrasithideth.webp"
        },
        {
            "order": 13,
            "title": "TS.BS",
            "name": "TS.BS. Tao Xu",
            "role": [
                "Trưởng khoa Chăm sóc Sức khỏe Trẻ em, Trung tâm Kiểm soát Bệnh tật Trung Quốc",
                "Nghiên cứu viên, Trung tâm Quốc gia về Sức khỏe Phụ nữ và Trẻ em, Ủy ban Y tế Quốc gia",
                "Thành viên nhóm chuyên gia đánh giá độc lập tiến trình thực hiện kế hoạch hành động vì trẻ sơ sinh khỏe mạnh của Tổ chức Y tế thế giới khu vực Tây Thái Bình Dương"
            ],
            "imageUrl": "/committer/TaoXu.webp"
        },
        {
            "order": 14,
            "title": "BS",
            "name": "BS Larry Ngo",
            "role": [
                "Phó giám đốc chương trình Nội trú chuyên ngành Sơ sinh - Chu sinh Đồng giám đốc, Trung tâm Nghiên cứu sơ sinh",
                "Giảng viên Hồi sức sơ sinh của Viện Hàn lâm Nhi khoa Hoa Kỳ",
                "Giám đốc lâm sàng Cải tiến Chất lượng đơn vị hồi sức tích cực sơ sinh, Bệnh viện Nhi, Đại học Loma Linda, Hoa Kỳ"
            ],
            "imageUrl": "/committer/LarryNgo.webp"
        },
        {
            "order": 15,
            "title": "BS",
            "name": "GS.TS.BS. Abdul Mannan",
            "role": [
                "Trưởng khoa Sơ sinh, Đại học Y khoa Bangladesh",
                "Đồng trưởng nhóm nghiên cứu và lâm sàng dự án iKMC",
                "Cố vấn cao cấp chương trình đào tạo KMC",
                "Tổng Thư ký Hội Chu sinh Bangladesh",
                "Phó Chủ tịch Diễn đàn Sơ sinh Bangladesh",
                "Thành viên Ủy ban Kỹ thuật Quốc gia về Sức khỏe Trẻ sơ sinh Bangladesh."
            ],
            "imageUrl": "/committer/AbdulMannan.png"
        },
        {
            "order": 16,
            "title": "BS",
            "name": "BS. Lương Kim Chi",
            "role": [
                "Trưởng khoa Sơ sinh, Bệnh viện đa khoa quốc tế Tân An, Việt Nam",
                "Bác sĩ chuyên khoa Nhi sơ sinh và Chuyên gia Chăm sóc Bà mẹ Kangaroo",
                "Huấn luyện chương trình Chăm sóc Bà mẹ Kangaroo cho đồng nghiệp trong nước và quốc tế"
            ],
            "imageUrl": "/committer/LuongKimChi.webp"
        },
        {
            "order": 17,
            "title": "PGS.TS.BS",
            "name": "PGS.TS.BS. Trần Thị Hoàng",
            "role": [
                "Phó giám đốc bệnh viện Phụ sản-Nhi Đà Nẵng",
                "Trưởng Bộ môn Nhi, Trường Y Dược, Đại học Đà Nẵng",
                "Phó trưởng Chi hội Chu Sinh & Sơ sinh Việt Nam",
                "Thành viên nhóm chuyên gia đánh giá độc lập tiến trình thực hiện kế hoạch hành động vì trẻ sơ sinh khỏe mạnh của Tổ chức Y tế thế giới khu vực Tây Thái Bình Dương",
                "Giảng viên chương trình Chăm sóc sơ sinh thiết yếu sớm, Chăm sóc Bà mẹ Kangaroo, Hồi sức sơ sinh cho đồng nghiệp trong nước và quốc tế"
            ],
            "imageUrl": "/committer/TranThiHoang.webp"
        },
        {
            "order": 18,
            "title": "TS.BS",
            "name": "TS.BS. Phan Thị Hằng",
            "role": [
                "Phó giám đốc Bệnh viện Hùng Vương, Việt Nam",
                "Bác sĩ Sản phụ khoa"
            ],
            "imageUrl": "/committer/PhanThiHang.webp"
        },
        {
            "order": 19,
            "title": "ThS.BSCK II",
            "name": "ThS.BS.CK II Lê Thị Hà",
            "role": [
                "Giám đốc Trung tâm Sơ sinh, Bệnh viện Nhi Trung ương",
                "Ủy viên Ban chấp hành Chi Hội Chu sinh & Sơ sinh Việt Nam",
                "Giảng viên về chăm sóc điều trị sơ sinh cho các bệnh viện tuyến tỉnh"
            ],
            "imageUrl": "/committer/LeThiHa.webp"
        },
        {
            "order": 20,
            "title": "BSCK II",
            "name": "BS.CK II Bùi Thị Thuỷ Tiên",
            "role": [
                "Trưởng khoa Sơ sinh - Bệnh viện Hùng Vương, TP. Hồ Chí Minh, Việt Nam",
                "Giảng viên thỉnh giảng Đại học Y khoa Phạm Ngọc Thạch"
            ],
            "imageUrl": "/committer/BuiThiThuyTien.webp"
        },
        {
            "order": 21,
            "title": "ThS.BS",
            "name": "ThS.BS. Huỳnh Thị Lệ",
            "role": [
                "Trưởng khoa Sơ sinh Hồi sức Tích cực và Bệnh lý, Bệnh viện Phụ sản-Nhi Đà Nẵng",
                "Phó Trưởng Bộ môn Điều dưỡng, Đại học Kỹ thuật Y Dược Đà Nẵng",
                "Ủy viên Ban chấp hành Chi Hội Chu sinh & Sơ sinh Việt Nam",
                "Giảng dạy chương trình Chăm sóc sơ sinh thiết yếu sớm, Chăm sóc Bà mẹ Kangaroo, Hồi sức sơ sinh cho đồng nghiệp trong nước và quốc tế"
            ],
            "imageUrl": "/committer/HuynhThiLe.webp"
        }
    ]
};
