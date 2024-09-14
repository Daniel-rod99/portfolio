import "./Global.css";
import Header from "./Components/header";
import Home from "./Home";
import ParticlesBackground from "./Components/ParticlesBackground";

function App() {
  return (
    <>
      <ParticlesBackground></ParticlesBackground>
      <Header />
      <Home />
    </>
  );
}

export default App;
