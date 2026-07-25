"use client";

import React from "react";
import {
  FiBookOpen,
  FiAward,
  FiCalendar,
  FiMapPin,
  FiCheckCircle,
} from "react-icons/fi";
import { educationData } from "@/types/education";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="relative min-h-screen lg:h-screen w-full bg-[#070811] text-slate-100 px-4 sm:px-6 py-6 lg:py-8 flex flex-col justify-between items-center overflow-hidden box-border pt-20 sm:pt-24"
    >
      <div className="max-w-4xl w-full mx-auto space-y-4 sm:space-y-5 z-10 my-auto">
        {/* Header */}
        <div className="text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Educational <span className="text-[#8b5cf6]">Qualification</span>
          </h2>
          <p className="text-[11px] sm:text-xs font-medium text-purple-400 mt-0.5 uppercase tracking-wider">
            My Academic Journey & Background
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-3 sm:space-y-4">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="group relative bg-[#0b0c18] border border-slate-800/80 hover:border-purple-500/40 rounded-xl p-4 sm:p-5 space-y-6 transition-all duration-300 shadow-xl hover:shadow-purple-500/5 overflow-hidden"
            >
              {/* Left Glow Border on Hover */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-[#8b5cf6] transition-all duration-300" />

              {/* Top Row: Title, Institution & Status */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-slate-800/60 pb-2.5">
                <div className="space-y-0.5">
                  <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                    <FiBookOpen className="w-4 h-4 text-[#8b5cf6] shrink-0" />
                    <span>{edu.degree}</span>
                  </h3>
                  <p className="text-xs font-medium text-purple-300 pl-6">
                    {edu.institution}
                  </p>
                </div>

                <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-1.5 pl-6 sm:pl-0">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 text-[11px] font-semibold">
                    <FiCalendar className="w-3 h-3" />
                    {edu.duration}
                  </span>
                  {edu.status && (
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold border ${
                        edu.status.includes("Running") ||
                        edu.status.includes("Present")
                          ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                          : "bg-purple-500/10 text-purple-300 border-purple-500/20"
                      }`}
                    >
                      <FiCheckCircle className="w-2.5 h-2.5" />
                      {edu.status}
                    </span>
                  )}
                </div>
              </div>

              {/* Location & GPA */}
              <div className="space-y-2 pt-0.5">
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 text-[11px] font-semibold text-slate-400">
                  <span className="flex items-center gap-1">
                    <FiMapPin className="w-3 h-3 text-purple-400" />
                    {edu.location}
                  </span>
                  <span className="hidden sm:inline text-slate-700">•</span>
                  <span className="flex items-center gap-1 text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                    <FiAward className="w-3 h-3" />
                    {edu.result}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {edu.description}
                </p>

                {/* Key Focus/Highlights Badges */}
                {edu.highlights && edu.highlights.length > 0 && (
                  <div className="pt-1 flex flex-wrap gap-1.5">
                    {edu.highlights.map((item, i) => (
                      <span
                        key={i}
                        className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded-md bg-slate-800/60 text-slate-300 border border-slate-700/50"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
