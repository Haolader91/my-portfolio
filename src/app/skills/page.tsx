"use client";

import React from "react";
import { skillCategories } from "@/types/skills";
export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-6 py-8 sm:py-12 bg-[#070811] text-slate-100 overflow-hidden box-border"
    >
      <div className="max-w-6xl w-full mx-auto space-y-5 sm:space-y-6 z-10 my-auto">
        {/* Section Title */}
        <div className="text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My <span className="text-[#8b5cf6]">Skills</span>
          </h2>
          <p className="text-xs sm:text-sm font-medium text-purple-400 mt-1 uppercase tracking-wider">
            Technologies I work with
          </p>
        </div>

        {/* Categories Loop */}
        <div className="space-y-4 sm:space-y-5">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="space-y-2">
              <h3 className="text-xs sm:text-sm font-bold text-purple-400 tracking-wide uppercase">
                {category.title}
              </h3>

              {/* Skill Cards Container */}
              <div className="bg-[#0b0c18] border border-slate-800/80 rounded-2xl p-3.5 sm:p-5">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
                  {category.skills.map((skill, sIdx) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={sIdx}
                        className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-[#0e1022]/60 border border-slate-800/60 hover:border-purple-500/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 group cursor-pointer"
                      >
                        <Icon
                          className={`w-7 h-7 sm:w-8 sm:h-8 ${skill.color} transition-transform duration-300 group-hover:scale-110`}
                        />
                        <span className="text-xs font-semibold text-slate-300 mt-2 text-center group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
