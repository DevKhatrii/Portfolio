import { useEffect, useRef } from "react";
import "./GridReveal.css";

const TILE = 52; // px, square tile size
const GAP = 4; // px, gap between tiles
const RADIUS = 190; // px, how far the reveal glow reaches
const LIFT_RADIUS = 34; // px, how close = "directly under the cursor"

export default function GridReveal() {
  const containerRef = useRef(null);
  const tilesRef = useRef([]);
  const dimsRef = useRef({ cols: 0 });
  const pendingRef = useRef(false);
  const posRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!isFinePointer || reduceMotion) return;

    const container = containerRef.current;
    const step = TILE + GAP;

    function buildGrid() {
      const cols = Math.ceil(window.innerWidth / step) + 1;
      const rows = Math.ceil(window.innerHeight / step) + 1;
      dimsRef.current = { cols };

      container.style.gridTemplateColumns = `repeat(${cols}, ${TILE}px)`;
      container.style.gridAutoRows = `${TILE}px`;
      container.style.gap = `${GAP}px`;
      container.innerHTML = "";

      const frag = document.createDocumentFragment();
      const tiles = [];
      const total = cols * rows;
      for (let i = 0; i < total; i++) {
        const el = document.createElement("div");
        el.className = "grid-tile";
        frag.appendChild(el);
        tiles.push(el);
      }
      container.appendChild(frag);
      tilesRef.current = tiles;
    }
    buildGrid();

    function update() {
      pendingRef.current = false;
      const { x, y } = posRef.current;
      const { cols } = dimsRef.current;
      const tiles = tilesRef.current;

      for (let i = 0; i < tiles.length; i++) {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const cx = col * step + TILE / 2;
        const cy = row * step + TILE / 2;
        const dist = Math.hypot(cx - x, cy - y);
        const el = tiles[i];

        if (dist < RADIUS) {
          const t = 1 - dist / RADIUS;
          el.style.opacity = String(Math.min(t * 0.85, 0.85));
          if (dist < LIFT_RADIUS) {
            el.style.transform = "scale(1.16) translateY(-4px)";
            el.style.boxShadow = "0 10px 26px rgba(79, 209, 255, 0.35)";
            el.style.borderColor = "rgba(130, 215, 255, 0.85)";
            el.style.background =
              "linear-gradient(135deg, rgba(79,209,255,0.4), rgba(155,107,255,0.28))";
          } else {
            el.style.transform = "";
            el.style.boxShadow = "";
            el.style.borderColor = "";
            el.style.background = "";
          }
        } else if (el.style.opacity !== "0") {
          el.style.opacity = "0";
          el.style.transform = "";
          el.style.boxShadow = "";
          el.style.borderColor = "";
          el.style.background = "";
        }
      }
    }

    function schedule() {
      if (!pendingRef.current) {
        pendingRef.current = true;
        requestAnimationFrame(update);
      }
    }

    function onMove(e) {
      posRef.current = { x: e.clientX, y: e.clientY };
      schedule();
    }
    function onLeave() {
      posRef.current = { x: -9999, y: -9999 };
      schedule();
    }

    let resizeTimer;
    function onResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(buildGrid, 150);
    }

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", onResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return <div className="grid-reveal" ref={containerRef} aria-hidden="true" />;
}
