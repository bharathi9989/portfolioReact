import TechOrbit from "../components/TechOrbit";
import ScrollLogos from "../components/ScrollLogos";
import DevStats from "../components/DevStats";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <ScrollLogos />

      <section className="h-screen flex items-center justify-center">
        <TechOrbit />
      </section>

      <DevStats />

      <Projects />
    </div>
  );
}
