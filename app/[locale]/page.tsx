
import Banner from "@/components/Banner";
import Committee from "@/components/Committee";
import ConferenceInfo from "@/components/ConferenceInfo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Reason from "@/components/Reason";
import Register from "@/components/Register";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <ConferenceInfo />
      {/* <Agenda /> */}
      <Banner />
      <Committee />
      <Register />
      <Reason />
      <Services />
      <Footer />
    </div>
  );
}
