import SolarSystem from "./SolarSystem";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <SolarSystem />

      <div className="hero-center">
        <h1 className="hero-name">
          Dev <span className="hero-name-accent">Khatri</span>
        </h1>
        <p className="hero-role">
          Data Analyst
          <br />
          Turning complexity into clarity, one chart at a time.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            See the work
          </a>
          <a href="mailto:mr.devnk@gmail.com" className="btn btn-ghost">
            Get in touch
          </a>
        </div>

        <div className="hero-status mono">
          <span className="hero-status-dot" />
          open to Data Analyst roles
        </div>
      </div>

      <a href="#about" className="scroll-cue mono" aria-label="Scroll to About">
        scroll
        <span className="scroll-cue-line" />
      </a>
    </section>
  );
}
