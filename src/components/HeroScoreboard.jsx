import CountUp from "react-countup";

function HeroScoreboard() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-950 via-black to-gray-900">
      <div className="bg-black/60 border border-green-500 p-10 rounded-xl text-center">
        <h1 className="text-5xl font-bold mb-4">Velubharathi</h1>

        <p className="text-xl text-gray-300 mb-8">Full Stack Developer</p>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-gray-400">Matches Played</p>
            <p className="text-green-400 text-2xl">
              <CountUp end={250} duration={2} />+
            </p>
          </div>

          <div>
            <p className="text-gray-400">Strike Rate</p>
            <p className="text-green-400">React | Node | JS</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroScoreboard;
