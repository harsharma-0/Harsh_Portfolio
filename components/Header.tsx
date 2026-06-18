"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { id: "about", href: "#about", label: "About" },
  { id: "experience", href: "#experience", label: "Experience" },
  { id: "showcase", href: "#showcase", label: "Showcase" },
  { id: "projects", href: "#projects", label: "Projects" },
  { id: "skills", href: "#skills", label: "Skills" },
  { id: "publications", href: "#publications", label: "Publications" },
  { id: "achievements", href: "#achievements", label: "Achievements" },
  { id: "contact", href: "#contact", label: "Contact" }
];

const sectionIds = ["hero", ...navItems.map((item) => item.id)];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75]
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
        <Link href="#hero" onClick={handleNavClick} className="shrink-0 font-heading text-lg font-semibold text-white">
          Harsh<span className="text-cyan">.</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-cyan/10 text-cyan shadow-[0_0_18px_rgba(0,212,255,0.12)]"
                    : "text-muted hover:bg-white/[0.04] hover:text-cyan"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            onClick={handleNavClick}
            className="rounded-md border border-cyan/40 px-4 py-2 text-sm font-semibold text-cyan transition hover:bg-cyan hover:text-navy"
          >
            Hire Me
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-md border border-white/10 text-cyan transition hover:border-cyan/45 hover:bg-cyan/10 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-5 bg-current transition ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        className={`border-t border-white/10 bg-navy/95 px-5 transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-[520px] py-4 opacity-100" : "max-h-0 overflow-hidden py-0 opacity-0"
        }`}
      >
        <div className="mx-auto grid max-w-7xl gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-md px-3 py-3 text-sm font-medium transition ${
                  isActive ? "bg-cyan/10 text-cyan" : "text-muted hover:bg-white/[0.04] hover:text-cyan"
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={handleNavClick}
            className="mt-2 rounded-md border border-cyan/40 px-3 py-3 text-center text-sm font-semibold text-cyan transition hover:bg-cyan hover:text-navy"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}
