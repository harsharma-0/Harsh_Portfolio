"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Skill = {
  name: string;
  icon: string;
  level: number;
};

type SkillCategory = {
  name: string;
  description: string;
  skills: Skill[];
};

const categories: SkillCategory[] = [
  {
    name: "Languages",
    description: "Primary programming and query languages used across backend, systems, and data work.",
    skills: [
      { name: "Python", icon: "Py", level: 94 },
      { name: "C++", icon: "C++", level: 82 },
      { name: "JavaScript", icon: "JS", level: 86 },
      { name: "SQL", icon: "SQL", level: 88 }
    ]
  },
  {
    name: "Backend & APIs",
    description: "API platforms, cloud SDK automation, real-time communication, and low-level network flows.",
    skills: [
      { name: "FastAPI", icon: "API", level: 92 },
      { name: "REST API", icon: "REST", level: 90 },
      { name: "Boto3/aioboto3", icon: "AWS", level: 90 },
      { name: "WebSocket", icon: "WS", level: 82 },
      { name: "UDP/Socket", icon: "UDP", level: 84 }
    ]
  },
  {
    name: "Cloud & DevOps",
    description: "AWS infrastructure services, Linux environments, version control, and cloud pricing workflows.",
    skills: [
      { name: "AWS EC2", icon: "EC2", level: 90 },
      { name: "AWS S3", icon: "S3", level: 88 },
      { name: "AWS EKS", icon: "EKS", level: 80 },
      { name: "Price List API", icon: "$", level: 86 },
      { name: "Git", icon: "Git", level: 88 },
      { name: "Linux", icon: "Tux", level: 86 }
    ]
  },
  {
    name: "Computer Vision & AI",
    description: "Real-time inference, drone telemetry, edge deployment, and multi-stream video processing.",
    skills: [
      { name: "YOLOv8", icon: "AI", level: 88 },
      { name: "GStreamer", icon: "GST", level: 84 },
      { name: "Nvidia DeepStream", icon: "NV", level: 82 },
      { name: "MAVLink", icon: "MAV", level: 84 },
      { name: "MAVSDK", icon: "SDK", level: 86 }
    ]
  },
  {
    name: "Databases",
    description: "Relational database design, querying, and persistence layers for product backends.",
    skills: [
      { name: "MySQL", icon: "My", level: 86 },
      { name: "PostgreSQL", icon: "Pg", level: 86 }
    ]
  },
  {
    name: "Frontend",
    description: "UI implementation skills used to connect backend systems with usable product interfaces.",
    skills: [
      { name: "Angular", icon: "Ng", level: 78 },
      { name: "HTML/CSS", icon: "</>", level: 86 },
      { name: "JavaScript", icon: "JS", level: 86 }
    ]
  },
  {
    name: "Core CS",
    description: "Computer science fundamentals that support reliable design, debugging, and optimization.",
    skills: [
      { name: "DSA", icon: "DSA", level: 90 },
      { name: "OOP", icon: "OOP", level: 88 },
      { name: "OS", icon: "OS", level: 82 },
      { name: "Computer Networks", icon: "NET", level: 86 },
      { name: "DBMS", icon: "DB", level: 84 }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};

export default function SkillsShowcase() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="mt-12">
      <div className="flex gap-2 overflow-x-auto rounded-lg border border-white/10 bg-white/[0.03] p-2">
        {categories.map((category) => {
          const isActive = category.name === activeCategory.name;

          return (
            <button
              key={category.name}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 rounded-md px-4 py-2 text-sm font-semibold transition ${
                isActive
                  ? "bg-cyan text-navy shadow-[0_0_22px_rgba(0,212,255,0.25)]"
                  : "text-muted hover:bg-cyan/10 hover:text-cyan"
              }`}
            >
              {category.name}
            </button>
          );
        })}
      </div>

      <motion.div
        key={activeCategory.name}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-8 rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_40px_rgba(0,212,255,0.07)] backdrop-blur-xl sm:p-8"
      >
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan">
              {activeCategory.name}
            </p>
            <p className="mt-3 max-w-3xl leading-7 text-muted">{activeCategory.description}</p>
          </div>
          <p className="rounded-md border border-cyan/25 bg-cyan/10 px-3 py-1 text-sm font-medium text-cyan">
            {activeCategory.skills.length} skills
          </p>
        </div>

        <motion.div variants={containerVariants} className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {activeCategory.skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="rounded-lg border border-white/10 bg-navy/45 p-4 transition hover:-translate-y-1 hover:border-cyan/40 hover:bg-cyan/[0.06] hover:shadow-glow"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-cyan/35 bg-cyan/10 font-heading text-sm font-semibold text-cyan">
                  {skill.icon}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate font-heading text-lg font-semibold text-white">{skill.name}</h3>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-cyan shadow-[0_0_16px_rgba(0,212,255,0.65)]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
