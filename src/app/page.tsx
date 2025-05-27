import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import SocialIcons from "@/components/SocialIcons";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navigation />
      {/* <SocialIcons /> */}
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
}
