import { useEffect, useRef } from "react";

// The persistent atmospheric background for the whole site: a dense field
// of twinkling stars, a sparser constellation layer with connecting lines
// that reacts to the pointer, and occasional shooting stars.
export default function NetworkField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width, height, dpr;
    let stars = [];
    let nodes = [];
    let meteors = [];
    let pointer = { x: -9999, y: -9999 };
    let raf;
    let nextMeteorAt = 0;
    let t = 0;

    const STAR_BASE = 260;
    const NODE_BASE = 55;
    const LINK_DIST = 140;
    const POINTER_RADIUS = 180;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const area = width * height;
      const scale = area / (1440 * 900);

      const starCount = Math.min(520, Math.max(140, Math.round(scale * STAR_BASE)));
      stars = Array.from({ length: starCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.1 + 0.3,
        phase: Math.random() * Math.PI * 2,
        speed: 0.6 + Math.random() * 1.2,
      }));

      const nodeCount = Math.min(180, Math.max(44, Math.round(scale * NODE_BASE)));
      nodes = Array.from({ length: nodeCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.4 + 0.6,
      }));
    }

    function spawnMeteor() {
      const fromLeft = Math.random() < 0.5;
      const startX = fromLeft ? Math.random() * width * 0.4 : width * 0.6 + Math.random() * width * 0.4;
      meteors.push({
        x: startX,
        y: -20,
        vx: (fromLeft ? 1 : -1) * (3.2 + Math.random() * 2.2),
        vy: 5 + Math.random() * 2.5,
        len: 90 + Math.random() * 60,
        life: 1,
      });
    }

    function step(timestamp) {
      t = timestamp / 1000;
      ctx.clearRect(0, 0, width, height);

      // dense twinkling star field
      for (const s of stars) {
        const alpha = 0.35 + 0.5 * (0.5 + 0.5 * Math.sin(t * s.speed + s.phase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(210, 224, 255, ${alpha})`;
        ctx.fill();
      }

      // constellation nodes, drifting + pointer reactive
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        const dx = n.x - pointer.x;
        const dy = n.y - pointer.y;
        const d = Math.hypot(dx, dy);
        if (d < POINTER_RADIUS) {
          const f = (1 - d / POINTER_RADIUS) * 0.6;
          n.x += (dx / (d || 1)) * f;
          n.y += (dy / (d || 1)) * f;
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i],
            b = nodes[j];
          const dx = a.x - b.x,
            dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK_DIST) {
            const alpha = (1 - dist / LINK_DIST) * 0.14;
            ctx.strokeStyle = `rgba(120, 170, 255, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(160, 195, 255, 0.6)";
        ctx.fill();
      }

      // shooting stars
      if (!reduceMotion && timestamp > nextMeteorAt) {
        spawnMeteor();
        nextMeteorAt = timestamp + 3500 + Math.random() * 5500;
      }

      meteors = meteors.filter((m) => m.life > 0 && m.y < height + 100);
      for (const m of meteors) {
        m.x += m.vx * 4;
        m.y += m.vy * 4;
        m.life -= 0.012;

        const tailX = m.x - m.vx * m.len * 0.12;
        const tailY = m.y - m.vy * m.len * 0.12;
        const grad = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255, 255, 255, ${0.9 * m.life})`);
        grad.addColorStop(0.4, `rgba(160, 210, 255, ${0.5 * m.life})`);
        grad.addColorStop(1, "rgba(160, 210, 255, 0)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(m.x, m.y, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${m.life})`;
        ctx.fill();
      }

      if (!reduceMotion) raf = requestAnimationFrame(step);
    }

    function onPointerMove(e) {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
    }
    function onPointerLeave() {
      pointer.x = -9999;
      pointer.y = -9999;
    }

    resize();
    if (reduceMotion) {
      step(0);
    } else {
      nextMeteorAt = performance.now() + 1500;
      raf = requestAnimationFrame(step);
    }

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerleave", onPointerLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="network-field" aria-hidden="true" />;
}
