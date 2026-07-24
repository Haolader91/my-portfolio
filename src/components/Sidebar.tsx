"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { navItems, socialLinks, cvDownloadUrl } from "@/types/sidebar";

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  return (
    <>
      {/* Mobile Top Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-[#0b0c16]/95 backdrop-blur-md border-b border-slate-800/80 px-4 flex items-center justify-between z-40">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-black text-2xl tracking-tighter text-[#8b5cf6]">
            AK
          </span>
          <span className="h-4 w-0.5 bg-[#8b5cf6]/40 rounded-full"></span>
          <span className="text-xs font-bold tracking-[0.2em] text-[#a78bfa] uppercase">
            HAWLADER
          </span>
        </Link>

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="p-2.5 rounded-xl bg-[#171829] text-slate-200 border border-slate-800 hover:text-purple-400 transition-colors cursor-pointer"
        >
          {isOpen ? (
            <FiX className="w-5 h-5" />
          ) : (
            <FiMenu className="w-5 h-5" />
          )}
        </button>
      </header>

      {/* Overlay Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity"
        />
      )}

      {/* Main Sidebar Container */}
      <aside
        className={`w-64 h-screen bg-[#0b0c16] text-slate-300 flex flex-col justify-between p-6 fixed left-0 top-0 border-r border-slate-800/50 z-50 overflow-y-auto transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Top Section: Logo & Nav */}
        <div>
          {/* Logo Link (Desktop View) */}
          <div className="mb-6 px-1 flex items-center justify-between">
            <Link href="/" className="inline-block group">
              <div className="flex items-center gap-2.5">
                <div className="font-black text-3xl tracking-tighter text-[#8b5cf6] group-hover:text-[#a78bfa] transition-colors">
                  AK
                </div>
                <div className="h-6 w-0.5 bg-[#8b5cf6]/40 rounded-full"></div>
                <span className="text-md font-bold tracking-[0.2em] text-[#a78bfa] group-hover:text-[#c4b5fd] transition-colors uppercase">
                  HAWLADER
                </span>
              </div>
            </Link>

            {/* Close Button inside Sidebar for Mobile */}
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden text-slate-400 hover:text-white p-1 cursor-pointer"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group ${
                    isActive
                      ? "bg-[#8b5cf6]/15 text-[#a78bfa] font-semibold border border-[#8b5cf6]/20"
                      : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/50"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 transition-colors ${
                      isActive ? "text-[#8b5cf6]" : "group-hover:text-[#a78bfa]"
                    }`}
                  />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Section: CV, Socials & Copyright */}
        <div className="space-y-5 pt-4 border-t border-slate-800/40">
          {/* Download CV Button */}
          <a
            href={cvDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#171829] hover:bg-[#8b5cf6]/20 text-slate-200 border border-slate-700/60 hover:border-[#8b5cf6]/50 text-xs font-semibold py-2.5 px-4 rounded-xl transition-all duration-300 w-full shadow-sm"
          >
            <span>Download CV</span>
            <FiDownload className="w-4 h-4" />
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-3 px-1 text-slate-400">
            {socialLinks.map((social, idx) => {
              const SocialIcon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="p-2 rounded-lg bg-slate-900/60 hover:bg-slate-800 hover:text-purple-400 border border-slate-800 transition-all"
                >
                  <SocialIcon className="w-4 h-4" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="text-[11px] text-slate-500 leading-tight px-1">
            © {new Date().getFullYear()} AK Haolader. All rights reserved.
          </p>
        </div>
      </aside>
    </>
  );
}
