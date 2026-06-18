"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import SectionHeading from "@/components/SectionHeading";

const slides = [
  {
    label: "Native Services EC2 Inventory",
    caption:
      "EC2 fleet view with instance status, vCPU, memory, disk, network, region, MTD cost, runtime, hourly pricing, and connect/register actions.",
    image: "/native_services1.png"
  },
  {
    label: "Native Services Catalog",
    caption:
      "AWS service catalog summarizing services, ARNs, regions, MTD cost, filters, card/table modes, and CSV export support.",
    image: "/native_services2.png"
  },
  {
    label: "Cost Analytics Overview",
    caption:
      "Billing dashboard with month-to-date spend, forecasted cost, top services, anomaly status, and optimization savings.",
    image: "/cost_explorer1.png"
  },
  {
    label: "Cost Explorer Drivers",
    caption:
      "Cost explorer view ranking top cost drivers, biggest increases, fastest-growing services, and service/region/account chart breakdowns.",
    image: "/cost_explorer2.png"
  },
  {
    label: "Notes Detail Workspace",
    caption:
      "Tenant notes interface with searchable note list, rich content preview, S3-backed attachment links, timestamps, and edit/delete controls.",
    image: "/Notes1.png"
  },
  {
    label: "Notes Creation Flow",
    caption:
      "Create-note workflow with rich text editing, drag-and-drop attachments, additional links, supported file-type guidance, and 25 MB upload limits.",
    image: "/Notes2.png"
  }
];

export default function ShowcaseSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeSlide = slides[activeIndex];

  const peekSlides = useMemo(() => {
    const previous = slides[(activeIndex - 1 + slides.length) % slides.length];
    const next = slides[(activeIndex + 1) % slides.length];

    return { previous, next };
  }, [activeIndex]);

  const goToPrevious = () => {
    setActiveIndex((index) => (index - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setActiveIndex((index) => (index + 1) % slides.length);
  };

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const interval = window.setInterval(goToNext, 3500);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        goToPrevious();
      }

      if (event.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="showcase" className="scroll-mt-24 border-y border-white/10 bg-white/[0.02] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Work Showcase"
          title="Product screenshots from CloudLaminate modules."
          description="A focused carousel of Native Services, Cost Explorer, and Documentation Module work from the cloud-management platform."
        />
      </div>

      <div
        className="relative mt-12 overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="pointer-events-none absolute left-0 top-0 z-10 hidden h-full w-[18vw] bg-gradient-to-r from-navy to-transparent lg:block" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 hidden h-full w-[18vw] bg-gradient-to-l from-navy to-transparent lg:block" />

        <div className="mx-auto flex max-w-[96rem] items-center justify-center gap-4 px-3 sm:px-6 lg:px-8">
          <div className="relative hidden aspect-[16/9] w-[10%] shrink-0 overflow-hidden rounded-lg border border-white/10 opacity-35 xl:block">
            <Image
              src={peekSlides.previous.image}
              alt=""
              fill
              sizes="160px"
              className="object-cover"
            />
          </div>

          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-cyan/20 bg-navy shadow-glow sm:aspect-[16/8] lg:aspect-[16/7] xl:w-[88%]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.image}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={activeSlide.image}
                  alt={activeSlide.label}
                  fill
                  sizes="(min-width: 1536px) 1350px, (min-width: 1024px) calc(100vw - 220px), calc(100vw - 24px)"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy via-navy/75 to-transparent p-5 pt-20 sm:p-7 sm:pt-24">
                  <p className="font-heading text-2xl font-semibold text-white sm:text-3xl">
                    {activeSlide.label}
                  </p>
                  <p className="mt-2 max-w-3xl text-sm leading-6 text-muted sm:text-base">
                    {activeSlide.caption}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              type="button"
              aria-label="Previous showcase slide"
              onClick={goToPrevious}
              className="absolute left-3 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-cyan/35 bg-navy/80 text-cyan shadow-glow backdrop-blur transition hover:bg-cyan hover:text-navy sm:left-5"
            >
              <span aria-hidden="true">{"<"}</span>
            </button>
            <button
              type="button"
              aria-label="Next showcase slide"
              onClick={goToNext}
              className="absolute right-3 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-cyan/35 bg-navy/80 text-cyan shadow-glow backdrop-blur transition hover:bg-cyan hover:text-navy sm:right-5"
            >
              <span aria-hidden="true">{">"}</span>
            </button>

            <div className="absolute bottom-4 right-5 z-20 flex gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.image}
                  type="button"
                  aria-label={`Go to ${slide.label}`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition ${
                    index === activeIndex
                      ? "w-8 bg-cyan shadow-[0_0_12px_rgba(0,212,255,0.8)]"
                      : "w-2.5 bg-white/45 hover:bg-cyan/70"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="relative hidden aspect-[16/9] w-[10%] shrink-0 overflow-hidden rounded-lg border border-white/10 opacity-35 xl:block">
            <Image
              src={peekSlides.next.image}
              alt=""
              fill
              sizes="160px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
