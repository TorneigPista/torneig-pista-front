import HeroSection from "@/sections/Hero";
import Navbar from "./components/navbar";
import TeamsSection from "@/sections/Teams";
export default function Home() {
  return (
   <div>
    <Navbar/>
    <div className="container">
      <HeroSection/>
      <TeamsSection/>
    </div>
   </div>
  );
}
