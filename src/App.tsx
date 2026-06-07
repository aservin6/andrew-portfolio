import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NoiseOverlay from "./components/NoiseOverlay";
import Portfolio from "./components/Portfolio/Portfolio.tsx";
import SiteFavicon from "./components/SiteFavicon";

function App() {
  return (
    <>
      <SiteFavicon />
      <Navbar />
      <main className="bg-foreground text-background relative min-h-screen uppercase">
        <Home />
        <Portfolio />
        <Contact />
      </main>
      <NoiseOverlay />
    </>
  );
}

export default App;
