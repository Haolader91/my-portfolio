"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiHome, FiArrowLeft, FiAlertTriangle } from "react-icons/fi";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#070811] text-slate-100 flex flex-col justify-center items-center px-6 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-87.5 sm:w-125 h-87.5 sm:h-125 bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-50 h-50 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Content Card */}
      <div className="relative z-10 max-w-lg w-full text-center space-y-8 bg-[#0b0c18]/80 border border-slate-800/80 p-8 sm:p-12 rounded-3xl backdrop-blur-md shadow-2xl">
        {/* Warning Icon Badge */}
        <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
          <FiAlertTriangle className="w-10 h-10 animate-bounce" />
        </div>

        {/* Big 404 Text */}
        <div className="space-y-2">
          <h1 className="text-7xl sm:text-8xl font-black tracking-widest text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-indigo-300 to-purple-600">
            404
          </h1>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Page Not Found
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mx-auto">
            Oops! The page you are looking for might have been removed, had its
            name changed, or is temporarily unavailable.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          {/* Back to Home Button */}
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-linear-to-r from-[#8b5cf6] to-[#7c3aed] hover:from-[#7c3aed] hover:to-[#6d28d9] text-white font-medium text-xs sm:text-sm px-6 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5"
          >
            <FiHome className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          {/* Go Back Previous Button */}
          <button
            onClick={() => router.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0e1022] hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 font-medium text-xs sm:text-sm px-6 py-3 rounded-xl transition-all duration-300"
          >
            <FiArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
        </div>
      </div>

      {/* Subtle Footer Note */}
      <p className="relative z-10 text-[11px] text-slate-600 mt-8">
        Designed for AK Haolader Portfolio
      </p>
    </div>
  );
}
