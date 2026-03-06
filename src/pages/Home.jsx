import TechOrbit from "../components/TechOrbit";
import About from "../components/About";
import Projects from "../components/Projects";
import DevStats from "../components/DevStats";
import Navbar from "../components/Navbar";
import StadiumIntro from "../components/Intro";

function Home() {
  return (
    <>
      <div className="bg-black text-white min-h-screen">
        <Navbar />
        {/* HERO */}
        <section
          id="hero"
          className="h-screen flex items-center justify-center"
        >
          <StadiumIntro />
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
          <DevStats />
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-32 text-center">
          <Projects />
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-32 text-center">
          <h2 className="text-4xl font-bold mb-8">Contact</h2>

          <p className="text-gray-400 mb-8">
            Interested in working together? Let's connect.
          </p>

          <div className="flex justify-center gap-6">
            <a
              href="mailto:yourmail@gmail.com"
              className="px-6 py-3 border border-green-400 rounded-lg hover:bg-green-500 hover:text-black transition"
            >
              Email
            </a>

            <a
              href="https://github.com"
              className="px-6 py-3 border border-green-400 rounded-lg hover:bg-green-500 hover:text-black transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com"
              className="px-6 py-3 border border-green-400 rounded-lg hover:bg-green-500 hover:text-black transition"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
