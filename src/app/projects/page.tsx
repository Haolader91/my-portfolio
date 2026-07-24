"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiInfo } from "react-icons/fi";
import projectsDataRaw from "@/data/projects.json";
import { Project } from "@/types/project";

const projectsData = projectsDataRaw as Project[];
const categories = ["All", "React", "Next.js", "Node.js", "MongoDB"];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter(
          (item) =>
            item.tags.includes(activeCategory) ||
            item.category === activeCategory,
        );

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-6 py-12 lg:py-16 bg-[#070811] text-slate-100 overflow-hidden box-border"
    >
      <div className="max-w-6xl w-full mx-auto space-y-6 lg:space-y-8 z-10 my-auto">
        {/* Section Title */}
        <div className="text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My <span className="text-[#8b5cf6]">Projects</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Some of my recent works and personal projects
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-1.5 scrollbar-none sm:flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-300 shrink-0 ${
                activeCategory === cat
                  ? "bg-[#8b5cf6] text-white shadow-lg shadow-purple-500/30"
                  : "bg-[#0b0c18] text-slate-400 hover:text-white border border-slate-800/80 hover:border-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {filteredProjects.slice(0, 6).map((project) => (
            <div
              key={project.id}
              className="bg-[#0b0c18] border border-slate-800/80 rounded-2xl p-4 flex flex-col justify-between hover:border-purple-500/40 transition-all duration-300 group"
            >
              <div>
                {/* Image Container */}
                <div className="relative w-full h-44 sm:h-48 rounded-xl overflow-hidden bg-slate-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Desktop Hover Overlay */}
                  <div className="hidden md:flex absolute inset-0 bg-[#070811]/80 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center gap-3 p-4">
                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold px-3.5 py-2 rounded-lg border border-slate-600/60 transition-transform duration-200 hover:scale-105"
                    >
                      <FiInfo className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </Link>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold px-3.5 py-2 rounded-lg shadow-md shadow-purple-600/30 transition-transform duration-200 hover:scale-105"
                    >
                      <FiExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>

                {/* Info Text */}
                <div className="mt-3.5 space-y-1">
                  <h3 className="text-base font-bold text-white group-hover:text-purple-400 transition-colors truncate">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-slate-800/60">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-[10px] font-medium bg-slate-800/60 text-slate-300 border border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Mobile Buttons */}
                <div className="flex md:hidden items-center gap-2 mt-3 pt-1">
                  <Link
                    href={`/projects/${project.id}`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 bg-slate-800 text-slate-200 text-xs font-semibold py-2 rounded-lg border border-slate-700 active:scale-95 transition-transform"
                  >
                    <FiInfo className="w-3.5 h-3.5" />
                    <span>Details</span>
                  </Link>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 bg-purple-600 text-white text-xs font-semibold py-2 rounded-lg active:scale-95 transition-transform"
                  >
                    <FiExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
