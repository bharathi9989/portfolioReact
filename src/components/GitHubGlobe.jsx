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
          size: c.count,
          color: "#22c55e",
        }));
        setData(commits);
      });
  }, []);

  return (
    <div
      style={{
        width: "600px",
        height: "500px",
        margin: "60px auto",
      }}
    >
      <Globe
        backgroundColor="rgba(0,0,0,0)"
        pointsData={data}
        pointAltitude="size"
        pointColor="color"
        pointRadius={0.3}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      />
    </div>
  );
}
