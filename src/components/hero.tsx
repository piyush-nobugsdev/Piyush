'use client';

import React from 'react';
import { Github, Linkedin, X, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero"
      className="min-h-screen bg-gradient-to-br from-[#1a0a0a] via-[#2d1010] to-[#1a0a0a] text-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-red-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-red-800/5 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      {/* <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a0a0a]/80 backdrop-blur-md border-b border-red-900/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">PP</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium hover:text-red-400 transition">About</a>
            <a href="#experience" className="text-sm font-medium hover:text-red-400 transition">Experience</a>
            <a href="#skills" className="text-sm font-medium hover:text-red-400 transition">Skills</a>
            <a href="#projects" className="text-sm font-medium hover:text-red-400 transition">Projects</a>
            <a href="#contact" className="text-sm font-medium hover:text-red-400 transition">Contact</a>
          </div>
        </div>
      </nav> */}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Welcome badge */}
            <div className="inline-block">
              <div className="px-4 py-2 rounded-full border border-red-500/30 bg-red-500/5 backdrop-blur-sm">
                <span className="text-xs font-bold tracking-widest text-red-400">WELCOME TO MY UNIVERSE</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
                Crafting{' '}
                <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  Digital
                </span>
                <br />
                <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                  Masterpieces
                </span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                I'm <span className="font-bold text-white">Piyush Maurya</span>, a professional{' '}
                <span className="text-red-400 font-semibold">Engineer</span> dedicated to building 
                high-performance, user-centric web applications.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-gray-600 hover:border-red-400 bg-gray-900/50 hover:bg-red-400/10 flex items-center justify-center transition duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-gray-600 hover:border-red-400 bg-gray-900/50 hover:bg-red-400/10 flex items-center justify-center transition duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-gray-600 hover:border-red-400 bg-gray-900/50 hover:bg-red-400/10 flex items-center justify-center transition duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20v-7.5h-2.5V9.5h2.5V7.35c0-2.49 1.52-3.85 3.75-3.85 1.06 0 1.98.08 2.24.11v2.6h-1.54c-1.2 0-1.43.57-1.43 1.4V9.5h2.86l-.37 2.95h-2.49V20" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-gray-600 hover:border-red-400 bg-gray-900/50 hover:bg-red-400/10 flex items-center justify-center transition duration-300"
              >
                <X size={20} />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4 pt-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <span>LET'S COLLABORATE</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
              <button
                className="px-8 py-3 border border-gray-600 hover:border-red-400 text-white font-bold rounded-full transition duration-300 hover:bg-red-400/10 flex items-center gap-2"
              >
                <span>GET RESUME</span>
                <ExternalLink size={16} />
              </button>
            </div>
          </div>

          {/* Right Content - Code Window */}
          <div className="hidden lg:flex justify-center animate-slide-in">
            <div className="w-full max-w-md">
              {/* Window Header */}
              <div className="bg-gray-900 rounded-t-xl border border-gray-800 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs text-red-400 font-mono">Portfolio.ts</span>
              </div>

              {/* Code Content */}
              <div className="bg-[#1e1e1e] rounded-b-xl border border-b border-gray-800 p-6 font-mono text-sm overflow-hidden">
                <div className="space-y-2 text-gray-400">
                  <div>
                    <span className="text-gray-500">01</span>
                    <span className="ml-4">
                      <span className="text-purple-400">const</span>
                      <span className="text-white"> developer</span>
                      <span className="text-white"> = </span>
                      <span className="text-yellow-400">{'{'}</span>
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">02</span>
                    <span className="ml-8">
                      <span className="text-white">name</span>
                      <span className="text-white">: </span>
                      <span className="text-green-400">'Piyush Maurya'</span>
                      <span className="text-white">,</span>
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">03</span>
                    <span className="ml-8">
                      <span className="text-white">focus</span>
                      <span className="text-white">: </span>
                      <span className="text-green-400">'Fullstack Mastery'</span>
                      <span className="text-white">,</span>
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">04</span>
                    <span className="ml-8">
                      <span className="text-white">skills</span>
                      <span className="text-white">: </span>
                      <span className="text-yellow-400">[</span>
                      <span className="text-green-400">'NextJS'</span>
                      <span className="text-white">, </span>
                      <span className="text-green-400">'GSAP'</span>
                      <span className="text-white">, </span>
                      <span className="text-green-400">'AI'</span>
                      <span className="text-yellow-400">]</span>
                      <span className="text-white">,</span>
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">05</span>
                    <span className="ml-8">
                      <span className="text-white">passionate</span>
                      <span className="text-white">: </span>
                      <span className="text-blue-400">true</span>
                      <span className="text-white">,</span>
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">06</span>
                    <span className="ml-8">
                      <span className="text-white">motto</span>
                      <span className="text-white">: </span>
                      <span className="text-green-400">"Build with Purpose"</span>
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">07</span>
                    <span className="ml-4">
                      <span className="text-yellow-400">{'}'};</span>
                    </span>
                  </div>
                  <div className="pt-2">
                    <span className="text-gray-500">08</span>
                    <span className="ml-4"></span>
                  </div>
                  <div>
                    <span className="text-gray-500">09</span>
                    <span className="ml-4">
                      <span className="text-white">developer</span>
                      <span className="text-white">.</span>
                      <span className="text-blue-400">showcase</span>
                      <span className="text-white">();</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-red-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>

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

        @keyframes slide-in {
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

        .animate-slide-in {
          animation: slide-in 0.8s ease-out 0.2s both;
        }
      `}</style>
    </section>
  );
};

export default Hero;