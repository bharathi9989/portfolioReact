import { useState } from "react";
import AppRouter from "./router/AppRouter";
import StadiumIntro from "./components/StadiumIntro";

function App() {
  const [enter, setEnter] = useState(false);

  return (
    <>
      {!enter ? <StadiumIntro onEnter={() => setEnter(true)} /> : <AppRouter />}
    </>
  );
}

export default App;
