
import Banner from "@/components/Banner";
import Committee from "@/components/Committee";
import ConferenceInfo from "@/components/ConferenceInfo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import WhyAttendKMC from "@/components/WhyAttendKMC";
import Register from "@/components/Register";
import Services from "@/components/Services";
import CounterContainer from "@/components/CounterContainer";
import Sponsor from "@/components/Sponsor";
import FlyerImage from "@/components/FlyerImage";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      {/* <Hero /> */}
      <Banner />
      <CounterContainer />
      <ConferenceInfo />
      {/* <Agenda /> */}
      <Committee />
      <FlyerImage />
      <Register />
      <WhyAttendKMC />
      <Services />
      <Gallery />
      <Sponsor />
      <Footer />
    </div>
  );
}
