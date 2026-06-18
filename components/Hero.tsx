"use client";

import { useEffect, useState } from "react";

const roles = [
  "Backend Engineer",
  "AWS Specialist",
  "Distributed Systems Builder",
  "Founding Engineer"
];

const particles = [
  { left: "8%", top: "18%", delay: "0s" },
  { left: "18%", top: "72%", delay: "1.2s" },
  { left: "31%", top: "28%", delay: "2.4s" },
  { left: "46%", top: "78%", delay: "0.7s" },
  { left: "58%", top: "15%", delay: "3.2s" },
  { left: "73%", top: "63%", delay: "1.7s" },
  { left: "84%", top: "26%", delay: "2.9s" },
  { left: "92%", top: "82%", delay: "0.4s" }
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/harsharma-0",
    icon: (
      <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49v-1.9c-2.78.62-3.37-1.22-3.37-1.22-.46-1.19-1.12-1.51-1.12-1.51-.91-.64.07-.63.07-.63 1.01.07 1.54 1.06 1.54 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.25 9.25 0 0 1 12 6.94c.85 0 1.7.12 2.5.34 1.9-1.32 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.78-4.57 5.04.36.32.68.94.68 1.9v2.83c0 .27.18.59.69.49A10.12 10.12 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
    )
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/harsh-vishwakarma-0a4482218",
    icon: (
      <path d="M6.94 8.98H3.75V20h3.19V8.98ZM5.35 4a1.85 1.85 0 1 0 0 3.7 1.85 1.85 0 0 0 0-3.7ZM20.25 13.68c0-3.15-1.68-4.62-3.92-4.62-1.81 0-2.62 1-3.07 1.7V8.98h-3.19c.04 1.03 0 11.02 0 11.02h3.19v-6.16c0-.33.02-.66.12-.89.26-.66.86-1.34 1.86-1.34 1.31 0 1.83 1.01 1.83 2.49V20h3.18v-6.32Z" />
    )
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/harsh6341/",
    icon: (
      <path d="M13.66 4.1 6.42 11.34a3.76 3.76 0 0 0 0 5.32l1.13 1.13a3.76 3.76 0 0 0 5.32 0l1.75-1.75-1.84-1.84-1.75 1.75a1.16 1.16 0 0 1-1.64 0l-1.13-1.13a1.16 1.16 0 0 1 0-1.64l7.24-7.24-1.84-1.84Zm.98 5.24H9.5v2.6h5.14v-2.6Zm2.94-1.99-1.84 1.84 2 2a1.16 1.16 0 0 1 0 1.64l-2.9 2.9 1.84 1.84 2.9-2.9a3.76 3.76 0 0 0 0-5.32l-2-2Z" />
    )
  },
  {
    label: "Email",
    href: "mailto:harsharma109@gmail.com",
    icon: (
      <path d="M4.75 5.75h14.5c.97 0 1.75.78 1.75 1.75v9c0 .97-.78 1.75-1.75 1.75H4.75A1.75 1.75 0 0 1 3 16.5v-9c0-.97.78-1.75 1.75-1.75Zm.48 2 6.18 5.1c.34.28.84.28 1.18 0l6.18-5.1H5.23Zm13.77 2.08-5.27 4.35a2.69 2.69 0 0 1-3.46 0L5 9.83v6.42h14V9.83Z" />
    )
  }
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const isWordComplete = !isDeleting && characterCount === currentRole.length;
    const isWordCleared = isDeleting && characterCount === 0;
    const delay = isWordComplete ? 1200 : isDeleting ? 45 : 80;

    const timeout = window.setTimeout(() => {
      if (isWordComplete) {
        setIsDeleting(true);
        return;
      }

      if (isWordCleared) {
        setIsDeleting(false);
        setRoleIndex((index) => (index + 1) % roles.length);
        return;
      }

      setCharacterCount((count) => count + (isDeleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [characterCount, isDeleting, roleIndex]);

  const typedRole = roles[roleIndex].slice(0, characterCount);

  return (
    <section id="hero" className="hero-fade-in relative isolate flex min-h-[calc(100svh-88px)] scroll-mt-24 items-center overflow-hidden px-6 py-20 lg:px-8">
      <div className="absolute inset-0 -z-20 bg-navy" />
      <div className="hero-grid absolute inset-0 -z-10 opacity-60" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_30%,rgba(0,212,255,0.18),transparent_34rem)]" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        {particles.map((particle) => (
          <span
            key={`${particle.left}-${particle.top}`}
            className="hero-particle"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay
            }}
          />
        ))}
      </div>

      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-4xl">
          <p className="inline-flex min-h-10 items-center rounded-full border border-cyan/30 bg-cyan/10 px-4 py-2 font-mono text-sm font-medium text-cyan shadow-glow">
            <span>{typedRole}</span>
            <span className="typing-cursor ml-1 h-5 w-px bg-cyan" />
          </p>

          <h1 className="mt-7 font-heading text-5xl font-bold tracking-normal sm:text-7xl lg:text-8xl">
            <span className="bg-gradient-to-r from-cyan via-sky-300 to-electric bg-clip-text text-transparent">
              Harsh Vishwakarma
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-balance text-xl leading-8 text-ink sm:text-2xl">
            Building high-performance cloud systems at scale
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#experience"
              className="rounded-md bg-cyan px-5 py-3 text-sm font-semibold text-navy shadow-glow transition hover:bg-white"
            >
              View My Work
            </a>
            <a
              href="/harsh-vishwakarma-resume.pdf"
              download
              className="rounded-md border border-cyan/45 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan hover:bg-cyan/10 hover:text-cyan"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="grid h-11 w-11 place-items-center rounded-md border border-white/10 bg-white/[0.04] text-muted transition hover:border-cyan/60 hover:bg-cyan/10 hover:text-cyan"
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
              >
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 fill-current"
                  viewBox="0 0 24 24"
                >
                  {link.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
