export default function DevStats() {
  return (
    <section className="py-28 bg-black text-white">
      <h2 className="text-center text-4xl font-bold mb-16">Developer Stats</h2>

      <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto text-center">
        <div className="p-6 border border-green-500 rounded-xl">
          <h3 className="text-3xl text-green-400">250+</h3>
          <p>Problems Solved</p>
        </div>

        <div className="p-6 border border-green-500 rounded-xl">
          <h3 className="text-3xl text-green-400">10+</h3>
          <p>Technologies</p>
        </div>

        <div className="p-6 border border-green-500 rounded-xl">
          <h3 className="text-3xl text-green-400">5+</h3>
          <p>Projects Built</p>
        </div>

        <div className="p-6 border border-green-500 rounded-xl">
          <h3 className="text-3xl text-green-400">MERN</h3>
          <p>Stack Developer</p>
        </div>
      </div>
    </section>
  );
}
