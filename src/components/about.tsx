'use client';

import React from 'react';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="bg-black text-white py-12 sm:py-16 lg:py-20 px-6 sm:px-8 lg:px-12 "
    >
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADER */}
        <div className="mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-3">
            About{" "}
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          {/* Header underline */}
          <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full"></div>
        </div>

        {/* MAIN GRID */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">

  {/* LEFT SIDE IMAGE */}
  <div className="flex justify-center lg:justify-start animate-slide-in-left h-full">
    <div className="relative w-full max-w-sm h-full">

      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-red-900/10 rounded-2xl blur-2xl -z-10 scale-110"></div>

      {/* Image container */}
      <div className="relative rounded-2xl overflow-hidden border border-red-500/30 bg-gradient-to-br from-red-900/20 to-black p-1 h-full">

        <div className="rounded-xl overflow-hidden aspect-square h-full">

          <img
            src="/piyush1.jpeg"
            alt="Piyush Maurya"
            className="w-full h-full object-cover"
          />

        </div>
      </div>
    </div>
  </div>

  {/* RIGHT SIDE INTRO */}
  <div className="animate-slide-in-right flex flex-col justify-between h-full">

    {/* TOP LINE */}
    <div className="border-t border-red-500/20 pt-6">

      {/* INTRO TEXT */}
      <div className="space-y-5">
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
          Hi! I&apos;m{" "}
          <span className="font-bold text-white">Piyush Maurya</span>, a passionate
          developer who enjoys building modern, scalable web applications. I love
          turning ideas into real products that solve meaningful problems and deliver
          great user experiences.
        </p>

        <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
          My curiosity about how digital products work led me to explore development
          more deeply. Today, my interests lie at the intersection of{" "}
          <span className="text-white font-semibold">
            web development, DevOps, and security
          </span>
          , where I enjoy building systems that are both scalable and reliable.
        </p>

        <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
          I approach projects with structure and clarity, believing that{" "}
          <span className="text-white font-semibold">
            good engineering starts with thoughtful planning before execution
          </span>{" "}
          and results in clean, maintainable systems.
        </p>
      </div>

    </div>

    {/* BOTTOM SECTION */}
    <div className="space-y-6">

      <div className="border-b border-red-500/20"></div>

      {/* CTA BUTTON */}
      <div>
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition duration-300 transform hover:scale-105 active:scale-95"
        >
          <span>View My Work</span>

          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </a>
      </div>

    </div>

  </div>
</div>
      </div>

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out 0.1s both;
        }
      `}</style>
    </section>
  );
};

export default About;