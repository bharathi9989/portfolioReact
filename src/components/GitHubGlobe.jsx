import Globe from "react-globe.gl";
import { useEffect, useState } from "react";

export default function GitHubGlobe() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://github-contributions-api.jogruber.de/v4/bharathi9989")
      .then((res) => res.json())
      .then((res) => {
        const commits = res.contributions.map((c) => ({
          lat: Math.random() * 180 - 90,
          lng: Math.random() * 360 - 180,
          size: Math.max(c.count * 0.05, 0.2),
          color: "#22c55e",
        }));

        setData(commits);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="w-full flex justify-center mt-16 px-4">
      <div className="w-full max-w-[600px] h-[300px] sm:h-[400px] md:h-[500px]">
        <Globe
          width={600}
          height={500}
          backgroundColor="rgba(0,0,0,0)"
          pointsData={data}
          pointAltitude="size"
          pointColor="color"
          pointRadius={0.3}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        />
      </div>
    </div>
  );
}
