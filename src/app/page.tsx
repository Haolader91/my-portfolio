"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { FaReact, FaJsSquare, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { learningSteps } from "@/types/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home page",
};

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen lg:h-screen w-full flex flex-col justify-between items-center px-4 sm:px-6 py-4 lg:py-6 overflow-hidden bg-[#070811] text-slate-100"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 -translate-x-1/2 w-75 sm:w-125 lg:w-150 h-75 sm:h-125 lg:h-150 bg-purple-600/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      {/* Top Main Hero Area */}
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center z-10 my-auto">
        {/* Left Content Column */}
        <div className="lg:col-span-6 space-y-4 sm:space-y-5 text-center lg:text-left order-2 lg:order-1">
          {/* Greeting Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/60 border border-slate-700/50 text-xs font-medium text-slate-300">
            <span>👋</span>
            <span>Hi, I&apos;m</span>
          </div>

          {/* Main Headline Name */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Abul kalam <span className="text-[#8b5cf6]">Haolader</span>
          </h1>

          {/* Subtitle / Role */}
          <h2 className="text-lg sm:text-2xl font-semibold text-slate-300">
            Frontend & Web Developer
          </h2>

          {/* Description */}
          <p className="text-slate-400 text-xs sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
            Passionate about crafting modern, responsive, and user-friendly web
            applications using React, Next.js, and modern CSS frameworks with
            clean aesthetic design.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 sm:gap-2.5 bg-linear-to-r from-[#8b5cf6] to-[#7c3aed] hover:from-[#7c3aed] hover:to-[#6d28d9] text-white font-medium text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5"
            >
              <span>Hire Me</span>
              <FiArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 sm:gap-2.5 bg-[#171829]/80 hover:bg-slate-800 text-slate-200 border border-slate-700/60 hover:border-purple-500/50 font-medium text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>View Projects</span>
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Real & Realistic Stats Counter */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-4 sm:pt-6 border-t border-slate-800/80 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
            <div>
              <h3 className="text-xl sm:text-3xl font-extrabold text-white">
                10+
              </h3>
              <p className="text-[11px] sm:text-sm text-slate-400 mt-1">
                Projects Built
              </p>
            </div>
            <div>
              <h3 className="text-xl sm:text-3xl font-extrabold text-white">
                8+
              </h3>
              <p className="text-[11px] sm:text-sm text-slate-400 mt-1">
                Tech Stack
              </p>
            </div>
            <div>
              <h3 className="text-xl sm:text-3xl font-extrabold text-white">
                100%
              </h3>
              <p className="text-[11px] sm:text-sm text-slate-400 mt-1">
                Dedicated Learner
              </p>
            </div>
          </div>
        </div>

        {/* Right Image Column */}
        <div className="lg:col-span-6 flex justify-center items-center relative order-1 lg:order-2 my-2 lg:my-0">
          <div className="relative w-64 h-64 sm:w-95 sm:h-95 lg:w-115 lg:h-115 flex items-center justify-center">
            {/* Glowing Ring */}
            <div className="absolute inset-0 bg-linear-to-tr from-[#7c3aed]/40 to-[#8b5cf6]/20 rounded-full blur-md border border-purple-500/40" />

            {/* Person Profile Image */}
            <div className="relative w-[92%] h-[92%] rounded-full overflow-hidden border-2 border-purple-500/50 z-10 shadow-2xl bg-[#0b0c16]">
              <Image
                src="/profile.png"
                alt="Abul Kalam Haolader"
                fill
                className="object-cover object-top scale-x-[-1]"
                priority
              />
            </div>

            {/* Responsive Floating Tech Badges */}
            <div className="absolute top-2 sm:top-6 left-0 z-20 bg-[#0d0f1d]/90 p-2.5 sm:p-3.5 rounded-full border border-slate-700/80 shadow-xl text-cyan-400 animate-bounce transition-all duration-1000">
              <FaReact className="w-5 h-5 sm:w-7 sm:h-7" />
            </div>

            <div className="absolute bottom-2 sm:bottom-6 left-2 sm:left-6 z-20 bg-[#0d0f1d]/90 p-2.5 sm:p-3.5 rounded-full border border-slate-700/80 shadow-xl text-white">
              <SiNextdotjs className="w-5 h-5 sm:w-7 sm:h-7" />
            </div>

            <div className="absolute top-1/2 -right-2 sm:-right-4 -translate-y-1/2 z-20 bg-[#0d0f1d]/90 p-2.5 sm:p-3.5 rounded-full border border-slate-700/80 shadow-xl text-yellow-400">
              <FaJsSquare className="w-5 h-5 sm:w-7 sm:h-7" />
            </div>

            <div className="absolute top-2 sm:top-4 right-4 sm:right-8 z-20 bg-[#0d0f1d]/90 p-2.5 sm:p-3.5 rounded-full border border-slate-700/80 shadow-xl text-green-500">
              <FaNodeJs className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Skill Growth Roadmap */}
      <div className="max-w-6xl w-full mx-auto z-10 shrink-0 mt-1">
        <div className="bg-[#0b0c18]/80 border border-slate-800/80 rounded-xl p-3 sm:p-4 backdrop-blur-sm">
          {/* Header Badge */}
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
            <h3 className="text-xs sm:text-sm font-bold text-white tracking-wide">
              Learning Roadmap & Growth
            </h3>
          </div>

          {/* Timeline Nodes Container */}
          <div className="relative flex flex-row items-center justify-between gap-1 sm:gap-4">
            {/* Horizontal Connecting Line */}
            <div className="absolute top-4 sm:top-5 left-[6%] right-[6%] h-[1.5px] border-b border-dashed border-slate-700/80 z-0" />

            {learningSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="relative z-10 flex flex-col items-center text-center group p-1 rounded-lg flex-1"
                >
                  {/* Icon Circle */}
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border ${step.color} shadow-md ${step.glow} transition-transform duration-300 group-hover:scale-110 bg-[#0b0c18]`}
                  >
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>

                  {/* Phase & Title */}
                  <span className="mt-1 text-[10px] sm:text-xs font-semibold text-purple-400">
                    {step.phase}
                  </span>
                  <span className="mt-0.5 text-[10px] sm:text-xs font-bold text-slate-200 truncate max-w-full">
                    {step.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
