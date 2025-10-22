import React, { useEffect, useRef } from "react";

export default function CursorLight() {
  const lightRef = useRef(null);
  const ropeRef = useRef(null);
  const lastMove = useRef(Date.now());

  useEffect(() => {
    const light = lightRef.current;
    const rope = ropeRef.current;

    const lightRadius = 200; // half of 200px
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const current = { x: target.x, y: target.y };
    const easing = 0.12;

    function updateRope(x1, y1, x2, y2) {
      const dx = x2 - x1;
      const dy = y2 - y1;
      const angle = Math.atan2(dy, dx);
      const length = Math.hypot(dx, dy);

      rope.style.width = `${length}px`;
      rope.style.left = `${x1}px`;
      rope.style.top = `${y1}px`;
      rope.style.transform = `rotate(${angle}rad)`;
    }

    function animate() {
      // move light smoothly toward cursor
      current.x += (target.x - current.x) * easing;
      current.y += (target.y - current.y) * easing;

      // position light centered on current coords
      light.style.left = `${current.x - lightRadius}px`;
      light.style.top = `${current.y - lightRadius}px`;

      // draw rope from light center to cursor
      updateRope(current.x, current.y, target.x, target.y);

      // fade if idle
      const inactive = Date.now() - lastMove.current > 800;
      const opacity = inactive ? "0" : "1";
      light.style.opacity = opacity;
      rope.style.opacity = opacity;

      requestAnimationFrame(animate);
    }

    function handleMove(e) {
      target.x = e.clientX;
      target.y = e.clientY;
      lastMove.current = Date.now();
    }

    window.addEventListener("mousemove", handleMove);
    requestAnimationFrame(animate);

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      {/* glowing light */}
      <div
        ref={lightRef}
        style={{
          zIndex: 9999,
          position: "fixed",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(160,200,255,0.15), rgba(150,200,255,0.03) 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          mixBlendMode: "screen",
          willChange: "left, top, opacity",
          opacity: 0,
          transition: "opacity 0.6s ease",
        }}
      />

      {/* rope */}
      <div
        ref={ropeRef}
        style={{
          zIndex: 9998,
          position: "fixed",
          height: "2px",
          background: "rgba(255,255,255,0.15)",
          transformOrigin: "0 0",
          pointerEvents: "none",
          willChange: "left, top, transform, width, opacity",
          opacity: 0,
          transition: "opacity 0.6s ease",
        }}
      />
    </>
  );
}
