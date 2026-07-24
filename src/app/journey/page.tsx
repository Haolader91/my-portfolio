"use client";

import React from "react";
import { FiCalendar, FiBriefcase } from "react-icons/fi";
import { journeyData } from "@/types/journey";

export default function JourneySection() {
  return (
    <section
      id="journey"
      className="relative min-h-screen lg:h-screen w-full flex flex-col justify-center items-center px-4 sm:px-6 py-8 lg:py-12 bg-[#070811] text-slate-100 overflow-hidden box-border"
    >
      <div className="max-w-4xl w-full mx-auto space-y-6 lg:space-y-8 z-10 my-auto">
        {/* Section Header */}
        <div className="text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Web Development <span className="text-[#8b5cf6]">Journey</span>
          </h2>
          <p className="text-xs sm:text-sm font-medium text-purple-400 mt-1 uppercase tracking-wider">
            How I evolved as a developer
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative border-l-2 border-purple-500/20 ml-3 sm:ml-6 space-y-5 sm:space-y-6 pl-5 sm:pl-8">
          {journeyData.map((item, index) => (
            <div key={index} className="relative group">
              {/* Timeline Node Dot (Positioning Fixed) */}
              <div className="absolute -left-6.75 sm:-left-8.25 top-2 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#070811] border-2 border-purple-500 group-hover:bg-[#8b5cf6] transition-all duration-300 shadow-[0_0_12px_rgba(139,92,246,0.6)] group-hover:scale-125 shrink-0 z-10" />

              {/* Timeline Card */}
              <div className="bg-[#0b0c18] border border-slate-800/80 rounded-2xl p-4 sm:p-5 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 space-y-2 sm:space-y-2.5">
                {/* Header inside Card */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2">
                  <div className="flex items-center gap-2">
                    <FiBriefcase className="w-4 h-4 text-purple-400 shrink-0" />
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 w-max shrink-0">
                    <FiCalendar className="w-3 h-3 text-purple-400" />
                    {item.duration}
                  </span>
                </div>

                {/* Subtitle */}
                <p className="text-xs font-medium text-slate-400">
                  {item.subTitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
