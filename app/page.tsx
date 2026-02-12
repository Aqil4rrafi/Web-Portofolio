import Hero from "../src/modules/hero";
import AboutMe from "@/src/modules/aboutme";
import Project from "@/src/modules/projects";
import FAQ from "@/src/modules/FAQ";
import Contact from "@/src/modules/contact";

export default function Home() {
  return (
    <>
    <Hero />
    <AboutMe />
    <Project />
    <FAQ />
    <Contact />
    </>
  );
};