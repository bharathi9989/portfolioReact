import React from "react";
import Hero from "../components/HeroScoreboard";
import About from "../components/About";
import Skills from "../components/SkillsStats";
import Projects from "../components/DugoutContact";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;
