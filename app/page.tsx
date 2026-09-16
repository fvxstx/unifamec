import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CourseTypes from "@/components/CourseTypes";
import Highlight from "@/components/Highlight";
import CampusExperience from "@/components/CampusExperience";
import Gallery from "@/components/Gallery";
import SocialFeed from "@/components/SocialFeed";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CourseTypes />
        <Highlight />
        <CampusExperience />
        <Gallery />
        <SocialFeed />
      </main>
      <Footer />
    </>
  );
}
