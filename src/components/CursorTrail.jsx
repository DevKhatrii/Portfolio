import { useEffect, useRef } from "react";
import "./CursorTrail.css";

export default function CursorTrail() {
  const canvasRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!isFinePointer || reduceMotion) return;

    document.documentElement.classList.add("cursor-none");

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width, height;
    let points = [];
    let raf;
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const dot = { x: mouse.x, y: mouse.y };
    let hovering = false;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    function onMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      points.push({ x: e.clientX, y: e.clientY, t: performance.now() });
      const target = e.target;
      hovering = !!(
        target &&
        target.closest &&
        target.closest('a, button, [role="button"], input, textarea')
      );
    }
    window.addEventListener("pointermove", onMove);

    function loop() {
      const now = performance.now();
      points = points.filter((p) => now - p.t < 450);

      ctx.clearRect(0, 0, width, height);
      for (const p of points) {
        const age = (now - p.t) / 450;
        const alpha = (1 - age) * 0.32;
        const r = 1.5 + (1 - age) * 2.6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(79, 209, 255, ${alpha})`;
        ctx.fill();
      }

      dot.x += (mouse.x - dot.x) * 0.28;
      dot.y += (mouse.y - dot.y) * 0.28;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dot.x}px, ${dot.y}px, 0) translate(-50%, -50%) scale(${hovering ? 1.9 : 1})`;
      }

      raf = requestAnimationFrame(loop);
    }
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.classList.remove("cursor-none");
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="cursor-trail-canvas" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
