"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedStatCardProps = {
  end: number;
  suffix?: string;
  label: string;
};

export default function AnimatedStatCard({ end, suffix = "", label }: AnimatedStatCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const node = cardRef.current;

    if (!node || hasStarted) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setValue(end);
      return;
    }

    let animationFrame = 0;
    const duration = 1200;
    const startTime = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setValue(Math.round(end * easedProgress));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(animate);
      }
    };

    animationFrame = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [end, hasStarted]);

  return (
    <div
      ref={cardRef}
      className="rounded-lg border border-cyan/20 bg-white/[0.04] p-5 shadow-[0_0_32px_rgba(0,212,255,0.08)]"
    >
      <p className="font-heading text-3xl font-semibold text-cyan">
        {value}
        {suffix}
      </p>
      <p className="mt-2 text-sm leading-5 text-muted">{label}</p>
    </div>
  );
}
