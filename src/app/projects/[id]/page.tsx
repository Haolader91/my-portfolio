"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import projectsDataRaw from "@/data/projects.json";
import { Project } from "@/types/project";
import {
  FiArrowLeft,
  FiExternalLink,
  FiUser,
  FiClock,
  FiUsers,
  FiLayers,
  FiCheckCircle,
  FiAlertCircle,
  FiTarget,
  FiSearch,
  FiPenTool,
  FiCode,
  FiCheckSquare,
  FiCloud,
  FiImage,
  FiX,
  FiServer,
  FiTerminal,
} from "react-icons/fi";

const projectsData = projectsDataRaw as Project[];

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "features", label: "Features" },
  { id: "techstack", label: "Case Study" },
  { id: "challenges", label: "Challenges" },
  { id: "gallery", label: "Gallery" },
];

export default function ProjectDetailsPage() {
  const params = useParams();
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projectId = parseInt(params?.id as string, 10);
  const project = projectsData.find((item) => item.id === projectId);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const formatImagePath = (path: string) => {
    if (!path) return "/placeholder.png";
    return path.startsWith("/public/") ? path.replace("/public", "") : path;
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-[#070811] text-white flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Project Not Found</h1>
        <Link
          href="/#projects"
          className="text-purple-400 hover:underline text-sm flex items-center gap-2"
        >
          <FiArrowLeft /> Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070811] text-slate-100 px-4 sm:px-8 py-10 font-sans">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Back Button */}
        <div>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-400 hover:text-purple-400 transition-colors font-medium"
          >
            <FiArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              {project.title}
            </h1>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-purple-500/20 active:scale-95"
                >
                  <FiExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}

              {/* Client Code Link */}
              {project.clientGithub && (
                <a
                  href={project.clientGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0b0c18] hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all active:scale-95"
                >
                  <FiTerminal className="w-4 h-4 text-purple-400" />
                  <span>Client Code</span>
                </a>
              )}

              {/* Server Code Link (Dynamically Renders only if exists) */}
              {project.serverGithub && (
                <a
                  href={project.serverGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0b0c18] hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all active:scale-95"
                >
                  <FiServer className="w-4 h-4 text-emerald-400" />
                  <span>Server Code</span>
                </a>
              )}
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              {project.description}
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {project.tags?.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-medium bg-[#0b0c18] text-slate-300 border border-slate-800/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Banner Image */}
          <div className="lg:col-span-6">
            <div
              onClick={() => setSelectedImage(formatImagePath(project.image))}
              className="relative w-full h-60 sm:h-80 rounded-2xl overflow-hidden border border-slate-800 bg-[#0b0c18] shadow-2xl cursor-pointer group"
            >
              <Image
                src={formatImagePath(project.image)}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </div>

        {/* NAVIGATION TABS */}
        <div className="sticky top-4 z-30 bg-[#0b0c18]/90 backdrop-blur-md border border-slate-800/80 rounded-2xl p-2 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto scrollbar-none shadow-xl">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap shrink-0 ${
                activeTab === tab.id
                  ? "bg-[#8b5cf6] text-white shadow-md shadow-purple-500/20"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* SECTION 1: OVERVIEW */}
        <section id="overview" className="space-y-6 pt-4 scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Project Overview
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="bg-[#0b0c18] border border-slate-800/80 rounded-2xl p-4 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
                  <FiUser className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-medium">Role</p>
                  <p className="text-xs font-bold text-white">{project.role}</p>
                </div>
              </div>

              <div className="bg-[#0b0c18] border border-slate-800/80 rounded-2xl p-4 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
                  <FiClock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-medium">
                    Duration
                  </p>
                  <p className="text-xs font-bold text-white">
                    {project.duration}
                  </p>
                </div>
              </div>

              <div className="bg-[#0b0c18] border border-slate-800/80 rounded-2xl p-4 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
                  <FiUsers className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-medium">
                    Team Size
                  </p>
                  <p className="text-xs font-bold text-white">
                    {project.teamSize}
                  </p>
                </div>
              </div>

              <div className="bg-[#0b0c18] border border-slate-800/80 rounded-2xl p-4 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
                  <FiLayers className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-medium">
                    Project Type
                  </p>
                  <p className="text-xs font-bold text-white">
                    {project.projectType}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: FEATURES */}
        <section id="features" className="space-y-6 pt-6 scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Key Features
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.features?.map((feat, idx) => (
              <div
                key={idx}
                className="bg-[#0b0c18] border border-slate-800/80 rounded-2xl p-5 space-y-3 hover:border-purple-500/30 transition-all"
              >
                <div className="p-2.5 w-max rounded-xl bg-purple-500/10 text-purple-400">
                  <FiCheckCircle className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white">{feat.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: CASE STUDY */}
        <section id="techstack" className="space-y-6 pt-6 scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Project Case Study
          </h2>

          <div className="bg-[#0b0c18] border border-slate-800/80 rounded-2xl p-6 overflow-x-auto scrollbar-none">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 min-w-162.5">
              <div className="space-y-3 text-center">
                <div className="w-10 h-10 mx-auto rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold border border-purple-500/20">
                  <FiTarget className="w-5 h-5" />
                </div>
                <p className="text-xs font-bold text-white">1. Problem</p>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Identifying user pain points and feature requirements.
                </p>
              </div>

              <div className="space-y-3 text-center">
                <div className="w-10 h-10 mx-auto rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold border border-purple-500/20">
                  <FiSearch className="w-5 h-5" />
                </div>
                <p className="text-xs font-bold text-white">2. Research</p>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Analyzing user journeys and state management models.
                </p>
              </div>

              <div className="space-y-3 text-center">
                <div className="w-10 h-10 mx-auto rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold border border-purple-500/20">
                  <FiPenTool className="w-5 h-5" />
                </div>
                <p className="text-xs font-bold text-white">3. Design</p>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Crafting dark aesthetic responsive UI interfaces.
                </p>
              </div>

              <div className="space-y-3 text-center">
                <div className="w-10 h-10 mx-auto rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold border border-purple-500/20">
                  <FiCode className="w-5 h-5" />
                </div>
                <p className="text-xs font-bold text-white">4. Development</p>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Building scalable frontend architecture with React/Next.js.
                </p>
              </div>

              <div className="space-y-3 text-center">
                <div className="w-10 h-10 mx-auto rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold border border-purple-500/20">
                  <FiCheckSquare className="w-5 h-5" />
                </div>
                <p className="text-xs font-bold text-white">5. Testing</p>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Testing responsiveness and component performance.
                </p>
              </div>

              <div className="space-y-3 text-center">
                <div className="w-10 h-10 mx-auto rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold border border-purple-500/20">
                  <FiCloud className="w-5 h-5" />
                </div>
                <p className="text-xs font-bold text-white">6. Deployment</p>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Live deployment on Vercel platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: CHALLENGES & SOLUTIONS */}
        <section id="challenges" className="space-y-6 pt-6 scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Challenges & Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0b0c18] border border-slate-800/80 rounded-2xl p-6 space-y-4">
              <h3 className="text-sm font-bold text-red-400 flex items-center gap-2">
                <FiAlertCircle className="w-4 h-4 shrink-0" />
                <span>Challenges</span>
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                {project.challenges?.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-red-400 font-bold">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#0b0c18] border border-slate-800/80 rounded-2xl p-6 space-y-4">
              <h3 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                <FiCheckCircle className="w-4 h-4 shrink-0" />
                <span>Solutions</span>
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                {project.solutions?.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 5: GALLERY */}
        <section id="gallery" className="space-y-6 pt-6 scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <FiImage className="w-5 h-5 text-purple-400" />
            <span>Project Gallery</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery?.map((imgSrc, idx) => {
              const cleanSrc = formatImagePath(imgSrc);
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(cleanSrc)}
                  className="relative h-48 rounded-2xl overflow-hidden border border-slate-800 bg-[#0b0c18] group cursor-pointer hover:border-purple-500/50 transition-all"
                >
                  <Image
                    src={cleanSrc}
                    alt={`Preview ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full h-[80vh] flex items-center justify-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-purple-400 p-2 transition-colors"
            >
              <FiX className="w-8 h-8" />
            </button>
            <div className="relative w-full h-full">
              <Image
                src={selectedImage}
                alt="Enlarged preview"
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
