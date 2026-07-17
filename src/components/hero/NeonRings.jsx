import { useRef, useEffect, useState } from "react";

const SIZE = 520;
const CENTER = SIZE / 2;

export default function NeonRings() {
  const canvasRef = useRef(null);
  const frameRef = useRef(0);

  const hoverRef = useRef(false);

  const waveRef = useRef({
    angle: 0,
    length: 0,
    grow: true,
  });

  const [, setHover] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = SIZE * dpr;
      canvas.height = SIZE * dpr;

      canvas.style.width = SIZE + "px";
      canvas.style.height = SIZE + "px";

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    window.addEventListener("resize", resize);

    // ---------- Drawing ----------

    function drawRing(radius) {
      ctx.beginPath();

      ctx.arc(
        CENTER,
        CENTER,
        radius,
        0,
        Math.PI * 2
      );

      ctx.strokeStyle = "rgba(255,255,255,.10)";
      ctx.lineWidth = 2;

      ctx.shadowBlur = 0;

      ctx.stroke();
    }

    function render() {
      ctx.clearRect(0, 0, SIZE, SIZE);

      // background glow
      const glow = ctx.createRadialGradient(
        CENTER,
        CENTER,
        80,
        CENTER,
        CENTER,
        260
      );

      glow.addColorStop(0, "rgba(139,92,246,.12)");
      glow.addColorStop(.6, "rgba(99,102,241,.06)");
      glow.addColorStop(1, "rgba(0,0,0,0)");

      ctx.fillStyle = glow;

      ctx.beginPath();
      ctx.arc(
        CENTER,
        CENTER,
        260,
        0,
        Math.PI * 2
      );

      ctx.fill();

      // OUTER
      drawRing(215);

      // INNER
      drawRing(185);

      frameRef.current =
        requestAnimationFrame(render);
    }

    render();

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener(
        "resize",
        resize
      );
    };
  }, []);

  return (
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-auto"
      onMouseEnter={() => {
        hoverRef.current = true;
        setHover(true);
      }}
      onMouseLeave={() => {
        hoverRef.current = false;
        setHover(false);
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute"
      />
    </div>
  );
}