
import Agenda from "@/components/Agenda";
import Committee from "@/components/Committee";
import ConferenceInfo from "@/components/ConferenceInfo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Register from "@/components/Register";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header /> 
      <Hero />
      <ConferenceInfo />
      <Agenda />
      <Committee />
      <Register />
      <Services />
      <Footer />
    </div>
  );
}
