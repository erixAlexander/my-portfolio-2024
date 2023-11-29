import "./App.scss";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/Parallax/Parallax";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";

function App() {
  return (
    <div>
      <section id="homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="parallax-services">
        <Parallax type={"services"} />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="parallax-portfolio">
        <Parallax type={"portfolio"} />
      </section>
      <section style={{ height: "fit-content" }} id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
