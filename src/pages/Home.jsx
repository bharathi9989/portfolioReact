import HeroScoreboard from "../components/HeroScoreboard";
import PitchNavigation from "../components/PitchNavigation";

import TechOrbit from "../components/TechOrbit";
import ScrollLogos from "../components/ScrollLogos";
import DevStats from "../components/DevStats";
import Projects from "../components/Projects";

function Home() {
  return (
    <div className="bg-black text-white min-h-screen relative overflow-x-hidden">
      {/* Floating tech particles */}
      <ScrollLogos />

      {/* Cricket hero scoreboard */}
      <HeroScoreboard />

      {/* Cricket pitch navigation */}
      <PitchNavigation />

      {/* Tech orbit intro */}
      <section id="intro" className="h-screen flex items-center justify-center">
        <TechOrbit />
      </section>

      {/* Projects section */}
      <section id="projects" className="py-40 text-center">
        <Projects />
      </section>

      {/* Skills / Developer stats */}
      <section id="skills" className="py-40 text-center">
        <DevStats />
      </section>

      {/* Contact section */}
      <section id="contact" className="py-40 text-center">
        <h2 className="text-3xl font-bold mb-10">Contact</h2>

        <p className="text-gray-400">
          Reach out for collaborations or opportunities.
        </p>

        <div className="mt-8 flex justify-center gap-6">
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
  );
}

export default Home;
