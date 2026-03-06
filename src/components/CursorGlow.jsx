import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    const glow = document.getElementById("cursor-glow");

    window.addEventListener("mousemove", (e) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    });
  }, []);

  return <div id="cursor-glow"></div>;
}
