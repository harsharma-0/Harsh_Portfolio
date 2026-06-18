"use client";

import Image from "next/image";
import { useState } from "react";

const stack = ["Python", "YOLOv8", "MAVSDK", "GStreamer", "MAVLink", "Nvidia Jetson"];

const highlights = [
  "Distributed edge-computing with Python and MAVSDK across Jetson and Raspberry Pi nodes.",
  "Multi-stream computer vision pipeline with GStreamer, Nvidia DeepStream, RTSP feeds, and NvDCF tracking.",
  "10Hz UDP bridge for MAVLink velocity vectors with async timeout-to-hover failsafes."
];

export default function FeaturedProjectCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <article className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] shadow-[0_0_40px_rgba(0,212,255,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan/45 hover:shadow-glow">
        <div className="relative aspect-[16/7] overflow-hidden border-b border-white/10 bg-navy">
          <Image
            src="/drone-ai-tracking-banner.svg"
            alt="Drone tracking system banner with edge AI and radar visualization"
            fill
            sizes="(min-width: 1280px) 1216px, calc(100vw - 48px)"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 rounded-md border border-cyan/35 bg-navy/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan backdrop-blur">
            Featured Project
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-5">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan">
                2024 - 2025
              </p>
              <h2 className="mt-3 max-w-3xl font-heading text-3xl font-semibold text-white">
                Distributed Multi-Drone AI Tracking System
              </h2>
            </div>
            <a
              href="https://github.com/harsharma-0"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-cyan/40 px-4 py-2 text-sm font-semibold text-cyan transition hover:bg-cyan hover:text-navy"
            >
              GitHub
            </a>
          </div>

          <p className="mt-5 max-w-4xl leading-7 text-muted">
            A distributed autonomous tracking platform combining edge AI inference, real-time video
            processing, and flight-control bridges for coordinated drone behavior.
          </p>

          <div className="mt-6 grid gap-3 lg:grid-cols-3">
            {highlights.map((item) => (
              <p key={item} className="rounded-lg border border-white/10 bg-navy/45 p-4 text-sm leading-6 text-muted">
                {item}
              </p>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {stack.map((item) => (
              <span key={item} className="rounded-md bg-cyan/10 px-3 py-1 text-xs font-medium text-cyan">
                {item}
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="mt-8 rounded-md bg-cyan px-5 py-3 text-sm font-semibold text-navy transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-cyan focus:ring-offset-2 focus:ring-offset-navy"
          >
            View Details
          </button>
        </div>
      </article>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[80] grid place-items-center bg-navy/85 px-4 py-8 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-lg border border-cyan/25 bg-[#081120] p-6 shadow-glow sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan">
                  Project Details
                </p>
                <h2 id="project-modal-title" className="mt-3 font-heading text-3xl font-semibold text-white">
                  Distributed Multi-Drone AI Tracking System
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-md border border-white/10 px-3 py-2 text-sm font-semibold text-muted transition hover:border-cyan/45 hover:text-cyan"
                aria-label="Close project details"
              >
                Close
              </button>
            </div>

            <div className="mt-7 space-y-5 text-sm leading-7 text-muted">
              <p>
                Built a distributed edge-computing system using Python and MAVSDK, with YOLOv8
                inference running on Nvidia Jetson hardware and Raspberry Pi nodes handling
                autonomous flight-control responsibilities.
              </p>
              <p>
                Designed a multi-stream computer vision pipeline using GStreamer and Nvidia
                DeepStream to process multiple 1280x960 RTSP feeds, with NvDCF pixel tracking for
                target continuity across real-time video streams.
              </p>
              <p>
                Implemented a 10Hz UDP bridge that transmitted PID-calculated velocity vectors via
                MAVLink, backed by async state machines and timeout-to-hover failsafes for safer
                autonomous behavior.
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
