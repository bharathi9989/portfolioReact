import About from "../components/About";
import Projects from "../components/Projects";

import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Skills from "../components/Skills";
import TechRadar from "../components/TechRadar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Certifications from "../components/Certifications";

function Home() {
  return (
    <>
      <div className="bg-black text-white min-h-screen relative">
        <Navbar />
        {/* HERO */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center px-4"
        >
          <Intro />
        </section>

        <section
          id="about"
          className="py-16 md:py-24 lg:py-32 px-4 md:px-6 flex items-center justify-center"
        >
          <About />
        </section>

        <section
          id="skills"
          className="py-16 md:py-24 lg:py-32 px-4 text-center"
        >
          <Skills />
        </section>

        <section
          id="certifications"
          className="py-16 md:py-24 lg:py-32 px-4 text-center"
        >
          <Certifications />
        </section>

        <section
          id="tech-radar"
          className="py-16 md:py-24 lg:py-32 px-4 text-center"
        >
          <TechRadar />
        </section>

        <section
          id="projects"
          className="py-16 md:py-24 lg:py-32 px-4 text-center"
        >
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
