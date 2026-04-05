'use client';

import React from 'react';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white py-20 px-6 sm:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADER */}
        <div className="mb-16 sm:mb-20 lg:mb-24 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          {/* Header underline */}
          <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full"></div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT SIDE IMAGE */}
          <div className="flex justify-center lg:justify-start animate-slide-in-left">
            <div className="relative w-full max-w-sm">

              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-red-900/10 rounded-2xl blur-2xl -z-10 scale-110"></div>

              {/* Image container */}
              <div className="relative rounded-2xl overflow-hidden border border-red-500/30 bg-gradient-to-br from-red-900/20 to-black p-1">

                <div className="rounded-xl overflow-hidden aspect-square">

                  {/* Correct image path */}
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
          <div className="animate-slide-in-right space-y-8">

            {/* TOP LINE */}
            <div className="border-t border-red-500/20 pt-8">

              {/* INTRO TEXT */}
              <div className="space-y-6">
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  Hi! I'm{" "}
                  <span className="font-bold text-white">Piyush Maurya</span>, a
                  passionate full-stack developer who enjoys building modern,
                  scalable web applications. I love turning ideas into real
                  products that solve meaningful problems and deliver great user
                  experiences.
                </p>

                <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                  My journey into tech started with curiosity about how digital
                  products work. Over time it grew into a strong interest in
                  building efficient systems, learning new technologies, and
                  creating clean, maintainable code that scales.
                </p>
              </div>

            </div>

            {/* BOTTOM LINE */}
            <div className="border-b border-red-500/20 pb-8"></div>

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