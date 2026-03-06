
import About from "../components/About";
import Projects from "../components/Projects";

import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Skills from "../components/Skills";
import TechRadar from "../components/TechRadar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div className="bg-black text-white min-h-screen relative">
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

        {/* TechRadar */}
        <section id="skills" className="py-32 text-center">
          <TechRadar />
        </section>
        {/* PROJECTS */}
        <section id="projects" className="py-32 text-center">
          <Projects />
        </section>

        {/* CONTACT */}
        <section>
          <Contact />
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
}

export default Home;
