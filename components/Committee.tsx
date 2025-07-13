import CommitteeMember from "./CommitteeMember";

const committee = [
    { title: 'PGS. TS. BS.', name: 'Nguyễn Trọng Hào', role: 'Chủ tọa đoàn', imageUrl: '/photo.jpg', social: { linkedin: '#' } },
    { title: 'GS. TS. BS.', name: 'Nguyên Tấn Bình', role: 'Chủ tọa đoàn', imageUrl: '/photo.jpg', social: { linkedin: '#' } },
    { title: 'GS. TS. BS.', name: 'Ngô Minh Xuân', role: 'Chủ tọa đoàn', imageUrl: '/photo.jpg', social: { linkedin: '#' } },
    { title: 'GS. TS. BS.', name: 'Nguyên Tấn Bình', role: 'Chủ tọa đoàn', imageUrl: '/photo.jpg', social: { linkedin: '#' } },
];

const Committee = () => {
    return (
        <section id="ban-to-chuc" className=" bg-slate-50 p-4 scroll-mt-16">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl uppercase">Chủ tọa đoàn - Báo cáo viên</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Những chuyên gia đầu ngành sẽ có mặt tại hội nghị.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {committee.map((member, index) => (
                        <CommitteeMember key={index} {...member} />
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Committee