import HeroScoreboard from "../components/HeroScoreboard";
import PitchNavigation from "../components/PitchNavigation";

function Home() {
  return (
    <>
      <HeroScoreboard />

      <PitchNavigation />

      <section id="projects" className="py-40 text-center">
        <h2 className="text-3xl">Projects Section</h2>
      </section>

      <section id="skills" className="py-40 text-center">
        <h2 className="text-3xl">Skills Section</h2>
      </section>

      <section id="contact" className="py-40 text-center">
        <h2 className="text-3xl">Contact Section</h2>
      </section>
    </>
  );
}

export default Home;
