import HeroSection from "@/sections/Home/Hero";
import Navbar from "./components/navbar";
import TeamsSection from "@/sections/Home/Teams";
import CalendarSection from "@/sections/Home/CalendarSection";
import CurrentClassification from "@/sections/Home/CurrentClassification";
export default function Home() {
  return (
   <>
    <Navbar/>
    <div className="body-main ">
      <main className="body-container p-4 sm:p-0">
        <HeroSection/>
        <TeamsSection/>
        <CalendarSection/>
        <CurrentClassification/>
      </main>
    </div>
   </>
  );
}
