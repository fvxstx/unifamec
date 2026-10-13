import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CourseTypes from "@/components/CourseTypes";
import Highlight from "@/components/Highlight";
import CampusExperience from "@/components/CampusExperience";
import Gallery from "@/components/Gallery";
import SocialFeed from "@/components/SocialFeed";
import Footer from "@/components/Footer";
import { noiseStyle } from "@/utils/noise";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CourseTypes />
        <Highlight />

        {/* Background */}
        <div className="relative bg-pattern bg-contain bg-center py-16 md:py-24">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[3px]"></div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={noiseStyle}
          />  
          <CampusExperience />
          <Gallery />
        </div>
        
        <SocialFeed />
      </main>
      <Footer />
    </>
  );
}
