import Header from "./Components/header";
import Home from "./Home";
import ParticlesBackground from "./Components/ParticlesBackground";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <>
      <NextUIProvider>
        <ParticlesBackground />
        <Header />
        <Home />
      </NextUIProvider>
    </>
  );
}

export default App;
