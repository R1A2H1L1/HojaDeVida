import { cvData } from "@/data/cv";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const { personal, experience, education, skills, projects, certifications } =
    cvData;

  return (
    <>
      <Navbar name={personal.name} />
      <main>
        <Hero personal={personal} />
        <Experience items={experience} />
        <Education items={education} />
        <Skills groups={skills} />
        <Projects items={projects} />
        <Certifications items={certifications} />
        <Contact personal={personal} />
      </main>
      <Footer name={personal.name} />
    </>
  );
}
