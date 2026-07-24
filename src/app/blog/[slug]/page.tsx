"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  FiArrowLeft,
  FiCalendar,
  FiClock,
  FiBookmark,
  FiCheck,
  FiCopy,
  FiShare2,
} from "react-icons/fi";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import blogsDataRaw from "@/data/blogs.json";
import { BlogPost, BlogContentSection } from "@/types/blog";

const blogsData = blogsDataRaw as BlogPost[];

export default function BlogDetailsPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const blogData = blogsData.find((blog) => blog.slug === slug);

  const handleCopyCode = (codeText: string, idx: number) => {
    navigator.clipboard.writeText(codeText);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleShare = (platform: "twitter" | "linkedin" | "facebook") => {
    const url = encodeURIComponent(typeof window !== "undefined" ? window.location.href : "");
    const title = encodeURIComponent(blogData?.title || "");

    let shareUrl = "";
    if (platform === "twitter") {
      shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
    } else if (platform === "linkedin") {
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    } else if (platform === "facebook") {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    }

    if (shareUrl) {
      window.open(
        shareUrl,
        "_blank",
        "width=600,height=400,noopener,noreferrer",
      );
    }
  };

  if (!blogData) {
    return (
      <div className="min-h-screen bg-[#070811] text-slate-100 flex flex-col justify-center items-center px-4">
        <h2 className="text-2xl font-bold text-white mb-2">
          Blog Post Not Found
        </h2>
        <p className="text-slate-400 text-sm mb-6">
          The article you are looking for does not exist or has been removed.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold px-5 py-2.5 rounded-xl bg-[#8b5cf6] text-white hover:bg-[#7c3aed] transition-all"
        >
          <FiArrowLeft className="w-4 h-4" />
          <span>Back to Blogs</span>
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-[#070811] text-slate-100 px-4 sm:px-6 py-12 sm:py-20 flex justify-center overflow-hidden">
      <div className="max-w-4xl w-full mx-auto space-y-10">
        {/* Back Link */}
        <div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-400 hover:text-purple-400 transition-colors group"
          >
            <FiArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Blogs</span>
          </Link>
        </div>

        {/* Header Area */}
        <header className="space-y-6">
          <div className="flex flex-wrap gap-2">
            {blogData.tags.map((tag: string, idx: number) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20"
              >
                #{tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
            {blogData.title}
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            {blogData.subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-800/80 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-purple-500/40 bg-slate-800 shrink-0">
                <Image
                  src={blogData.authorImage}
                  alt={blogData.author}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-white">{blogData.author}</p>
                <p className="text-[11px] text-purple-400">
                  {blogData.authorRole}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate-400">
              <div className="flex items-center gap-1.5">
                <FiCalendar className="w-4 h-4 text-purple-400" />
                <span>{blogData.date}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <FiClock className="w-4 h-4 text-purple-400" />
                <span>{blogData.readTime}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Covered Image */}
        <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden border border-slate-800 bg-[#0b0c18] shadow-2xl">
          <Image
            src={blogData.coverImage}
            alt={blogData.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-slate-300 text-sm sm:text-base leading-relaxed">
          {blogData.content.map((section: BlogContentSection, idx: number) => {
            if (section.type === "paragraph") {
              return (
                <p key={idx} className="leading-7">
                  {section.text}
                </p>
              );
            }
            if (section.type === "heading") {
              return (
                <h2
                  key={idx}
                  className="text-xl sm:text-2xl font-bold text-white pt-4 border-b border-slate-800/60 pb-2"
                >
                  {section.text}
                </h2>
              );
            }
            if (section.type === "code") {
              const isCopied = copiedIndex === idx;
              return (
                <div
                  key={idx}
                  className="relative bg-[#0b0c18] border border-slate-800 rounded-xl p-4 overflow-x-auto font-mono text-xs sm:text-sm text-purple-200 group"
                >
                  <button
                    onClick={() => handleCopyCode(section.code, idx)}
                    className="absolute top-3 right-3 p-1.5 rounded-lg bg-slate-800/80 hover:bg-purple-600 text-slate-300 hover:text-white transition-all text-xs flex items-center gap-1 cursor-pointer"
                    title="Copy Code"
                  >
                    {isCopied ? (
                      <FiCheck className="w-3.5 h-3.5 text-green-400" />
                    ) : (
                      <FiCopy className="w-3.5 h-3.5" />
                    )}
                    <span>{isCopied ? "Copied" : "Copy"}</span>
                  </button>
                  <pre className="pt-2">
                    <code>{section.code}</code>
                  </pre>
                </div>
              );
            }
            return null;
          })}

          {/* Key Takeaways */}
          <div className="bg-[#0b0c18] border border-purple-500/30 rounded-2xl p-6 space-y-4 shadow-lg shadow-purple-500/5">
            <h3 className="text-base font-bold text-purple-400 flex items-center gap-2">
              <FiBookmark className="w-4 h-4" />
              <span>Key Takeaways</span>
            </h3>
            <ul className="space-y-2.5">
              {blogData.keyTakeaways.map((point: string, idx: number) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-xs sm:text-sm text-slate-300"
                >
                  <FiCheck className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Share & Footer */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
              <FiShare2 className="w-4 h-4 text-purple-400" />
              Share Article:
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleShare("twitter")}
                aria-label="Share on Twitter"
                className="p-2.5 rounded-xl bg-[#0b0c18] border border-slate-800 hover:border-purple-500/50 text-slate-300 hover:text-white transition-all cursor-pointer"
              >
                <FaTwitter className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleShare("linkedin")}
                aria-label="Share on LinkedIn"
                className="p-2.5 rounded-xl bg-[#0b0c18] border border-slate-800 hover:border-purple-500/50 text-slate-300 hover:text-white transition-all cursor-pointer"
              >
                <FaLinkedin className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleShare("facebook")}
                aria-label="Share on Facebook"
                className="p-2.5 rounded-xl bg-[#0b0c18] border border-slate-800 hover:border-purple-500/50 text-slate-300 hover:text-white transition-all cursor-pointer"
              >
                <FaFacebook className="w-4 h-4" />
              </button>
            </div>
          </div>

          <Link
            href="/blog"
            className="px-6 py-2.5 rounded-xl bg-[#8b5cf6] hover:bg-[#7c3aed] text-white text-xs font-semibold transition-all shadow-lg shadow-purple-500/20"
          >
            Explore More Articles
          </Link>
        </div>
      </div>
    </article>
  );
}
