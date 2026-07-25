"use client";

import React, { useState } from "react";
import { FiSend, FiCheckCircle, FiLoader } from "react-icons/fi";
import { contactDetails, socialLinks } from "@/types/contact";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setIsSent(false), 4000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-12 sm:py-20 bg-[#070811] text-slate-100 overflow-hidden pt-20 sm:pt-24"
    >
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center z-10">
        {/* Left Side: Contact Info & Texts */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
              Get In <span className="text-[#8b5cf6]">Touch</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mt-4 max-w-md">
              Have a project in mind or just want to say hi? Feel free to reach
              out! I&apos;m always open to discussing new projects, creative
              ideas, or opportunities.
            </p>
          </div>

          {/* Contact Details List */}
          <div className="space-y-6 pt-2">
            {contactDetails.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 group-hover:bg-[#8b5cf6] group-hover:text-white transition-colors duration-300 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">
                      {item.label}
                    </p>
                    <p className="text-sm sm:text-base font-semibold text-slate-100 mt-0.5 group-hover:text-purple-300 transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Available for Freelance Badge */}
          <div className="pt-2 border-t border-slate-800/60 max-w-sm">
            <p className="text-xs text-slate-500 font-medium">Available for</p>
            <p className="text-sm font-bold text-slate-100 mt-1">
              Freelance & Full-time Projects
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 pt-2">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 rounded-xl bg-[#0b0c18] border border-slate-800 hover:border-purple-500/50 text-slate-400 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Right Side: Contact Form Card */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="bg-[#0b0c18] border border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-5 backdrop-blur-sm shadow-2xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name Input */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-[#0e1022]/60 border border-slate-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm text-white placeholder:text-slate-600 outline-none transition-all"
                />
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-[#0e1022]/60 border border-slate-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm text-white placeholder:text-slate-600 outline-none transition-all"
                />
              </div>
            </div>

            {/* Subject Input */}
            <div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full px-5 py-4 rounded-xl bg-[#0e1022]/60 border border-slate-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm text-white placeholder:text-slate-600 outline-none transition-all"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message..."
                rows={5}
                required
                className="w-full px-5 py-4 rounded-xl bg-[#0e1022]/60 border border-slate-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm text-white placeholder:text-slate-600 outline-none transition-all resize-none"
              ></textarea>
            </div>

            {/* Send Message Button */}
            <div className="pt-2 flex items-center justify-between">
              {isSent && (
                <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5 animate-fade-in">
                  <FiCheckCircle className="w-4 h-4" /> Message sent
                  successfully!
                </span>
              )}

              <div className="ml-auto">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2.5 bg-linear-to-r from-[#8b5cf6] to-[#7c3aed] hover:from-[#7c3aed] hover:to-[#6d28d9] disabled:opacity-70 text-white font-medium text-sm px-7 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <span>Sending...</span>
                      <FiLoader className="w-4 h-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FiSend className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
