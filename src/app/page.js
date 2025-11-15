import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import University from "@/components/University";
import Students from "@/components/Students";
import Why from "@/components/Why";
import Testimonials from "@/components/Testimonials";
import MissionAndVision from "@/components/MissionAndVision";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="bg-white md:pt-0 pt-10 flex justify-center items-center">
        <img src="/aboutus.png" alt="mission and vision" />
      </div>
      {/* <MissionAndVision />
      <div className="bg-white">
        <div className="text-center py-16 md:py-20">
          <h3 className="text-3xl md:text-5xl font-bold text-[#FF9463] tracking-wide">
            WE MAKE CHANGES
          </h3>
        </div>
      </div> */}
      <Why />
      <Students />
      <University />
      <Testimonials />
       <Footer />
    </div>
  );
}
