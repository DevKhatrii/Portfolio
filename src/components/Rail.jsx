import { useEffect, useState } from "react";
import "./Rail.css";

const SECTIONS = [
  { id: "hero", label: "Start" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "visualizations", label: "Visualizations" },
  { id: "contact", label: "Contact" },
];

const SOCIALS = [
  { href: "https://www.linkedin.com/in/dev-khatri007/", label: "LinkedIn" },
  { href: "mailto:mr.devnk@gmail.com", label: "Email" },
];

export default function Rail() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      Boolean
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function go(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  }

  return (
    <>
      <button
        className="rail-toggle"
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle navigation"
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`rail ${open ? "rail-open" : ""}`} aria-label="Section navigation">
        <a href="#hero" className="rail-mark mono" onClick={() => setOpen(false)}>
          DK
        </a>

        <ul className="rail-nodes">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <button
                className={active === s.id ? "rail-node rail-node-active" : "rail-node"}
                onClick={() => go(s.id)}
              >
                <span className="rail-dot" />
                <span className="rail-label mono">{s.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <ul className="rail-socials">
          {SOCIALS.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer" className="rail-social mono">
                {s.label[0]}
                <span className="rail-label">{s.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
