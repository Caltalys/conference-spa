import Committee from "@/components/Committee";
import ConferenceInfo from "@/components/ConferenceInfo";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header /> 
      <Hero />
      <ConferenceInfo />
      <Committee />
    </div>
  );
}
