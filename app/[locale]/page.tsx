'use client';

import Banner from "@/components/Banner";
import CommitteeV2 from "@/components/CommitteeV2";
import ConferenceInfo from "@/components/ConferenceInfo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhyAttendKMC from "@/components/WhyAttendKMC";
import Register from "@/components/Register";
import Services from "@/components/Services";
import CounterContainer from "@/components/CounterContainer";
import Sponsor from "@/components/Sponsor";
import dynamic from "next/dynamic";

// Tải động component Gallery
const DynamicGallery = dynamic(() => import('@/components/Gallery'), {
  // Hiển thị một khung chờ để tránh xê dịch layout
  loading: () => <div className="h-[500px] w-full bg-primary" />, 
  // Tắt Server-Side Rendering cho component này vì nó có state phía client
  ssr: false 
});

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Banner />
      <CounterContainer />
      <ConferenceInfo />
      <CommitteeV2 />
      <Register />
      <WhyAttendKMC />
      <Services />
      <DynamicGallery />
      <Sponsor />
      <Footer />
    </div>
  );
}
