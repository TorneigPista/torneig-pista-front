import HeroSection from "@/sections/Hero";
import Navbar from "./components/navbar";
import TeamsSection from "@/sections/Teams";
import CalendarSection from "@/sections/CalendarSection";
export default function Home() {
  return (
   <div>
    <Navbar/>
    <div className="container">
      <HeroSection/>
      <TeamsSection/>
      <CalendarSection/>
    </div>
   </div>
  );
}
