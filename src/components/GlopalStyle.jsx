import { THEME } from "../styles/theme";

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@400;500&family=Barlow:wght@300;400;500;600;700&family=Barlow+Condensed:wght@400;600;700;900&display=swap');

    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      background: ${THEME.dark};
      color: ${THEME.cream};
      font-family: 'Barlow', sans-serif;
      overflow-x: hidden;
      cursor: none;
    }
    a { text-decoration: none; color: inherit; }

    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: ${THEME.dark}; }
    ::-webkit-scrollbar-thumb { background: ${THEME.gold}; border-radius: 3px; }

    /* Font Utilities */
    .font-bebas     { font-family: 'Bebas Neue', sans-serif; }
    .font-condensed { font-family: 'Barlow Condensed', sans-serif; }
    .font-mono      { font-family: 'DM Mono', monospace; }

    /* Keyframe Animations */
    @keyframes fadeUp   { from { opacity:0; transform:translateY(32px) } to { opacity:1; transform:translateY(0) } }
    @keyframes fadeLeft { from { opacity:0; transform:translateX(32px) } to { opacity:1; transform:translateX(0) } }
    @keyframes spinBall { to { transform: rotate(360deg) } }
    @keyframes float    { 0%,100% { transform:translateY(0) } 50% { transform:translateY(-12px) } }
    @keyframes ticker   { 0% { transform:translateX(0) } 100% { transform:translateX(-50%) } }
    @keyframes flyBall  {
      0%   { opacity:0; transform:translate(0,0) rotate(0deg) }
      10%  { opacity:1 }
      90%  { opacity:1 }
      100% { opacity:0; transform:translate(var(--dx),var(--dy)) rotate(720deg) }
    }
    @keyframes shimmer      { 0% { background-position:200% 0 } 100% { background-position:-200% 0 } }
    @keyframes pulseGlow    {
      0%,100% { box-shadow: 0 0 20px rgba(240,192,64,0.3) }
      50%     { box-shadow: 0 0 40px rgba(240,192,64,0.6) }
    }
  `}</style>
);

export default GlobalStyles;
