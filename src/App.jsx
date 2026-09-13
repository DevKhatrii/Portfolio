import NetworkField from "./components/NetworkField";
import "./components/NetworkField.css";
import GridReveal from "./components/GridReveal";
import CursorTrail from "./components/CursorTrail";
import Rail from "./components/Rail";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Visualizations from "./components/Visualizations";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <NetworkField />
      <GridReveal />
      <div className="vignette" />
      <CursorTrail />
      <Rail />
      <main className="main-content">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Visualizations />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
