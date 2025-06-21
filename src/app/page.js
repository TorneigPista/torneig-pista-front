import HeroSection from "@/sections/Hero";
import Navbar from "./components/navbar";
import TeamsSection from "@/sections/Teams";
import CalendarSection from "@/sections/CalendarSection";
import CurrentClassification from "@/sections/CurrentClassification";
import Footer from "./components/Footer";
export default function Home() {
  return (
   <>
    <Navbar/>
    <div className="body-main">
      <main className="body-container">
        <HeroSection/>
        <TeamsSection/>
        <CalendarSection/>
        <CurrentClassification/>
      </main>
    </div>
     <Footer/>
   </>
  );
}
