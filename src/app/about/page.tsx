"use client";

import React from "react";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import { infoList, services, cvDownloadUrl } from "@/types/about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-6 pt-20 pb-12 lg:py-16 bg-[#070811] text-slate-100 overflow-hidden box-border"
    >
      <div className="max-w-6xl w-full mx-auto space-y-8 sm:space-y-10 z-10 my-auto">
        {/* TOP ABOUT ME AREA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Description Column */}
          <div className="lg:col-span-7 space-y-4 text-center sm:text-left">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                About <span className="text-[#8b5cf6]">Me</span>
              </h2>
              <p className="text-xs sm:text-sm font-medium text-purple-400 mt-1 uppercase tracking-wider">
                Get To Know More
              </p>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              I&apos;m a passionate Web Developer who loves building beautiful,
              modern, and high-performance web applications. I enjoy turning
              complex ideas into simple, clean, and interactive digital
              products.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              With a strong foundation in both frontend and backend development,
              I focus on writing clean code, maintaining responsive layouts, and
              delivering top-notch user experiences.
            </p>

            <div className="pt-2 flex justify-center sm:justify-start">
              <a
                href={cvDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-linear-to-r from-[#8b5cf6] to-[#7c3aed] hover:from-[#7c3aed] hover:to-[#6d28d9] text-white font-medium text-xs sm:text-sm px-6 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5"
              >
                <span>Download CV</span>
                <FiDownload className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Image Card Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-sm h-75 sm:h-85 bg-[#0d0f1d] border border-slate-800 rounded-2xl p-2.5 overflow-hidden shadow-2xl group">
              {/* Image Frame */}
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-linear-to-b from-purple-900/30 to-[#0b0c16]">
                <Image
                  src="/profile.png"
                  alt="AK Haolader"
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  priority
                />

                {/* Gradient Overlay for Text Visibility */}
                <div className="absolute inset-0 bg-linear-to-t from-[#0b0c16] via-transparent to-transparent opacity-85" />

                {/* Bottom Signature Text on Image */}
                <div className="absolute bottom-3 left-3 z-10">
                  <h3 className="text-lg font-bold tracking-wide text-white drop-shadow-md italic">
                    AK Haolader
                  </h3>
                  <p className="text-xs text-purple-400 font-medium tracking-wider">
                    Web Designer & Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE INFO CARDS BAR */}
        <div className="bg-[#0b0c18] border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {infoList.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-400 font-medium">
                      {item.label}
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-slate-100 mt-0.5 truncate">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM WHAT I DO SECTION */}
        <div className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight text-center sm:text-left">
            What I Do?
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-[#0b0c18] border border-slate-800/80 rounded-2xl p-5 hover:border-purple-500/50 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300 mb-3.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white mb-1.5">
                    {service.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
