import { useEffect, useRef } from "react";
import "./SolarSystem.css";

const RINGS = [
  {
    rx: 320,
    ry: 120,
    duration: 26,
    reverse: false,
    items: [
      { src: "images/Python.png", label: "Python" },
      { src: "images/sql1.png", label: "SQL" },
      { src: "images/HTML.png", label: "HTML" },
    ],
  },
  {
    rx: 430,
    ry: 170,
    duration: 34,
    reverse: true,
    items: [
      { src: "images/CSS.png", label: "CSS" },
      { src: "images/PHP.png", label: "PHP" },
      { src: "images/PI.png", label: "Power BI" },
      { src: "images/t.png", label: "Tableau" },
    ],
  },
  {
    rx: 540,
    ry: 220,
    duration: 42,
    reverse: false,
    items: [
      { src: "images/C (1).png", label: "C" },
      { src: "images/C++ (CPlusPlus).png", label: "C++" },
      { src: "images/mysql.png", label: "MySQL" },
      { src: "images/Git.png", label: "Git" },
    ],
  },
  {
    rx: 650,
    ry: 270,
    duration: 50,
    reverse: true,
    items: [
      { src: "images/AWS.png", label: "AWS" },
      { src: "images/Jenkins.png", label: "Jenkins" },
      { src: "images/jeera.png", label: "Jira" },
    ],
  },
  {
    rx: 760,
    ry: 320,
    duration: 60,
    reverse: false,
    items: [
      { src: "images/vscode.png", label: "VS Code" },
      { src: "images/pycharm.png", label: "PyCharm" },
      { src: "images/jn.png", label: "Jupyter" },
    ],
  },
];

function getScale() {
  const w = window.innerWidth;
  if (w >= 1300) return 1;
  if (w >= 1000) return 0.8;
  if (w >= 720) return 0.6;
  return 0.42;
}

export default function SolarSystem() {
  const itemRefs = useRef([]);
  const trackRefs = useRef([]);
  itemRefs.current = [];
  trackRefs.current = [];

  function registerItemRef(el) {
    if (el) itemRefs.current.push(el);
  }
  function registerTrackRef(el) {
    if (el) trackRefs.current.push(el);
  }

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let raf;
    let scale = getScale();
    const start = performance.now();

    function applyTrackSizes() {
      RINGS.forEach((ring, i) => {
        const track = trackRefs.current[i];
        if (track) {
          track.style.width = `${ring.rx * scale * 2}px`;
          track.style.height = `${ring.ry * scale * 2}px`;
        }
      });
    }

    function onResize() {
      scale = getScale();
      applyTrackSizes();
    }

    function place(now) {
      const elapsed = (now - start) / 1000;
      let idx = 0;
      for (const ring of RINGS) {
        const dir = ring.reverse ? -1 : 1;
        const baseAngle = ((elapsed / ring.duration) * Math.PI * 2) * dir;
        const count = ring.items.length;
        for (let i = 0; i < count; i++) {
          const angle = baseAngle + (Math.PI * 2 * i) / count;
          const x = Math.cos(angle) * ring.rx * scale;
          const y = Math.sin(angle) * ring.ry * scale;
          const el = itemRefs.current[idx];
          if (el) {
            el.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
          }
          idx++;
        }
      }
      if (!reduceMotion) raf = requestAnimationFrame(place);
    }

    applyTrackSizes();
    place(start);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="solar-system" aria-hidden="true">
      <div className="solar-glow" />
      {RINGS.map((ring, ri) => (
        <div className="solar-orbit-track" key={ri} ref={registerTrackRef} />
      ))}
      {RINGS.flatMap((ring, ringIndex) =>
        ring.items.map((item) => (
          <div
            className={`solar-item ring-${ringIndex}`}
            key={item.label}
            ref={registerItemRef}
          >
            <div className="solar-item-inner">
              <img src={item.src} alt={item.label} />
            </div>
          </div>
        ))
      )}
    </div>
  );
}
