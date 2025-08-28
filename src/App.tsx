import "./App.css";
import About from "./Components/sections/about/About";
import Hero from "./Components/sections/hero/Hero";
import Navbar from "./Components/common/navbar/Navbar";
import Service from "./Components/sections/services/Service";
import LatestWork from "./Components/sections/latest_work/LatestWork";
import GetInTouch from "./Components/sections/get_in_touch/GetInTouch";
import Footer from "./Components/sections/footer/Footer";

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
        <div>
          <GetInTouch/>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
