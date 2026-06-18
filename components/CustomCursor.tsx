"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -32, y: -32 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px) and (pointer: fine)");
    const updateMode = () => setIsDesktop(mediaQuery.matches);
    const updatePosition = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    updateMode();
    mediaQuery.addEventListener("change", updateMode);
    window.addEventListener("mousemove", updatePosition);

    return () => {
      mediaQuery.removeEventListener("change", updateMode);
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  if (!isDesktop) {
    return null;
  }

  return (
    <span
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[90] h-3 w-3 rounded-full bg-cyan shadow-[0_0_18px_rgba(0,212,255,0.95)] transition-transform duration-75 ease-out"
      style={{
        transform: `translate3d(${position.x - 6}px, ${position.y - 6}px, 0)`
      }}
    />
  );
}
