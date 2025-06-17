import HeroSection from "@/sections/Hero";
import Navbar from "./components/navbar";
export default function Home() {
  return (
   <div>
    <Navbar/>
    <div className="container">
      <HeroSection/>
    </div>
   </div>
  );
}
