import TechOrbit from "../components/TechOrbit";
import About from "../components/About";
import Projects from "../components/Projects";

import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <div className="bg-black text-white min-h-screen">
        <Navbar />
        {/* HERO */}
        <section
          id="home"
          className="h-screen flex items-center justify-center"
        >
          <Intro />
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="py-32 px-6 flex items-center justify-center"
        >
          <About />
        </section>
        {/* SKILLS */}
        <section id="skills" className="py-32 text-center">
          <Skills />
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-32 text-center">
          <Projects />
        </section>

        {/* CONTACT */}
        <Contact />
      </div>
    </>
  );
}

export default Home;
