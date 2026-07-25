"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiClock, FiCalendar } from "react-icons/fi";
import blogsDataRaw from "@/data/blogs.json";
import { BlogPost } from "@/types/blog";

const blogsData = blogsDataRaw as BlogPost[];

export default function BlogSection() {
  return (
    <section
      id="blog"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-12 sm:py-20 bg-[#070811] text-slate-100 overflow-hidden pt-20 sm:pt-24"
    >
      <div className="max-w-6xl w-full mx-auto space-y-10 z-10">
        {/* Section Header */}
        <div className="text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My <span className="text-[#8b5cf6]">Blog</span>
          </h2>
          <p className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
            Thoughts, tutorials and insights
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogsData.map((blog) => (
            <article
              key={blog.id}
              className="bg-[#0b0c18] border border-slate-800/80 rounded-2xl p-4 flex flex-col justify-between hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 group"
            >
              {/* Blog Thumbnail Image */}
              <div className="relative w-full h-48 rounded-xl overflow-hidden bg-slate-900 mb-4">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text Info */}
              <div className="space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>

                  {/* Meta Details */}
                  <div className="flex items-center gap-3 text-xs text-purple-400/80 mt-2 font-medium">
                    <span className="flex items-center gap-1">
                      <FiCalendar className="w-3 h-3" />
                      {blog.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <FiClock className="w-3 h-3" />
                      {blog.readTime}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mt-3 line-clamp-2">
                    {blog.description}
                  </p>
                </div>

                {/* Read More Button */}
                <div className="pt-4">
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-all duration-200 group-hover:translate-x-1"
                  >
                    <span>Read More</span>
                    <FiArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Posts Button */}
        <div className="flex justify-center pt-4">
          <Link
            href="/blog"
            className="px-8 py-3 rounded-xl bg-[#0b0c18] border border-slate-800 hover:border-purple-500/50 text-slate-300 hover:text-white text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}
