import HeroSection from "@/sections/Hero";
import Navbar from "./components/navbar";
import TeamsSection from "@/sections/Teams";
import CalendarSection from "@/sections/CalendarSection";
import CurrentClassification from "@/sections/CurrentClassification";
export default function Home() {
  return (
   <div>
    <Navbar/>
    <div className="container">
      <HeroSection/>
      <TeamsSection/>
      <CalendarSection/>
      <CurrentClassification/>
    </div>
   </div>
  );
}
