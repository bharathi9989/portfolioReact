import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AppRouter from "./router/AppRouter";

function App() {
  const theme = useSelector((state) => state.theme.mode);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return <AppRouter />;
}

export default App;
