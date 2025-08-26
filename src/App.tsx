import "./App.css";
import About from "./Components/sections/about/About";
import Hero from "./Components/sections/hero/Hero";
import Navbar from "./Components/common/navbar/Navbar";
import Service from "./Components/sections/services/Service";
import LatestWork from "./Components/sections/latest_work/LatestWork";

function App() {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <Hero />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Service />
        </div>
        <div>
          <LatestWork/>
        </div>
      </div>
    </>
  );
}

export default App;
