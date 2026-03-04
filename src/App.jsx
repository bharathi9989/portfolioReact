import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AppRouter from "./router/AppRouter";
import CricketIntro from "./components/CricketIntro";

function App() {
  const [started, setStarted] = useState(false);
  const theme = useSelector((state) => state.theme.mode);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      {!started ? (
        <CricketIntro startSite={() => setStarted(true)} />
      ) : (
        <AppRouter />
      )}
    </>
  );
}

export default App;
