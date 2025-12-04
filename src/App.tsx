import { Nav } from "./components/layout/Nav";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Tastings } from "./components/sections/Tastings";
import { Gallery } from "./components/sections/Gallery";
import { Info } from "./components/sections/Info";
import { Footer } from "./components/layout/Footer";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Tastings />
        <Gallery />
        <Info />
      </main>
      <Footer />
    </>
  );
}

export default App;
