import { useEffect } from "react";

const logos = [
  "/logos/JavaScript.png",
  "/logos/React.png",
  "/logos/Node.js.png",
  "/logos/MongoDB.png",
  "/logos/PostgreSQL.png",
  "/logos/MySQL.png",
  "/logos/CSS3.png",
  "/logos/HTML5.png",
  "/logos/Tailwind CSS.png",
  "/logos/Redux.png",
  "/logos/TypeScript.png",
  "/logos/Express.png",
];

export default function TechOrbit() {
  useEffect(() => {
    const items = document.querySelectorAll(".orbit-item");

    items.forEach((item, index) => {
      const angle = (360 / items.length) * index;

      item.style.transform = `rotate(${angle}deg) translate(220px) rotate(-${angle}deg)`;
    });
  }, []);

  return (
    <div className="relative w-[500px] h-[500px] mx-auto">
      {logos.map((logo, i) => (
        <img
          key={i}
          src={logo}
          className="orbit-item absolute w-14 h-14
          animate-spin-slow
          drop-shadow-[0_0_10px_orange]"
        />
      ))}

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">Hi I'm Velubharathi</h1>

          <p className="text-green-400 mt-2">Full Stack Developer</p>
        </div>
      </div>
    </div>
  );
}
