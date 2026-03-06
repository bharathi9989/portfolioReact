function DevStats() {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-10">Skills</h2>

      <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
        <div className="p-6 bg-gray-900 rounded-lg">
          <h3 className="text-2xl font-bold">Frontend</h3>
          <p className="text-gray-400 mt-2">React • JS • CSS</p>
        </div>

        <div className="p-6 bg-gray-900 rounded-lg">
          <h3 className="text-2xl font-bold">Backend</h3>
          <p className="text-gray-400 mt-2">Node • Express</p>
        </div>

        <div className="p-6 bg-gray-900 rounded-lg">
          <h3 className="text-2xl font-bold">Database</h3>
          <p className="text-gray-400 mt-2">MongoDB • PostgresSQL</p>
        </div>
      </div>
    </div>
  );
}

export default DevStats;
