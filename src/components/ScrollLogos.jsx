import { useEffect } from "react";

export default function ScrollLogos() {
  useEffect(() => {
    const handleScroll = () => {
      const logos = document.querySelectorAll(".floating-logo");

      logos.forEach((logo, i) => {
        const speed = (i + 1) * 0.2;

        logo.style.transform = `translateY(${window.scrollY * speed}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <img
        src="/logos/React.png"
        className="floating-logo absolute top-20 left-10 w-12"
      />
      <img
        src="/logos/Node.js.png"
        className="floating-logo absolute top-60 right-10 w-12"
      />
      <img
        src="/logos/MongoDB.png"
        className="floating-logo absolute bottom-40 left-40 w-12"
      />
    </div>
  );
}
