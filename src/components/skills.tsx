'use client';

import React, { useState } from 'react';

const Skills: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const skillCategories = [
    {
      id: 'languages',
      title: 'LANGUAGES',
      skills: [
        { name: 'HTML5', icon: '🔴', color: 'from-red-600 to-orange-600' },
        { name: 'CSS3', icon: '🔵', color: 'from-blue-600 to-cyan-600' },
        { name: 'JavaScript', icon: '⭐', color: 'from-yellow-400 to-yellow-600' },
        { name: 'TypeScript', icon: '🔷', color: 'from-blue-500 to-blue-700' },
        { name: 'PostgreSQL', icon: '🎀', color: 'from-pink-500 to-rose-600' },
        { name: 'Python', icon: '🐍', color: 'from-blue-600 to-yellow-500' },
        { name: 'PHP', icon: '🎵', color: 'from-purple-600 to-purple-800' },
        { name: 'C++', icon: '✨', color: 'from-purple-700 to-indigo-700' },
      ]
    },
    {
      id: 'frameworks',
      title: 'FRAMEWORKS',
      skills: [
        { name: 'Vue.js', icon: '✅', color: 'from-emerald-400 to-teal-600' },
        { name: 'Angular', icon: '🔺', color: 'from-red-600 to-red-700' },
        { name: 'React', icon: '⚛️', color: 'from-cyan-400 to-blue-600' },
        { name: 'Django', icon: '🎯', color: 'from-green-600 to-emerald-700' },
        { name: 'Node.js', icon: '🌿', color: 'from-green-500 to-emerald-600' },
        { name: 'Tailwind', icon: '🔺', color: 'from-cyan-500 to-blue-600' },
        { name: 'Next.js', icon: '⚫', color: 'from-gray-700 to-black' },
      ]
    },
    {
      id: 'tools',
      title: 'TOOLS',
      skills: [
        { name: 'Photoshop', icon: '🎨', color: 'from-blue-600 to-blue-800' },
        { name: 'Bootstrap', icon: '📦', color: 'from-purple-600 to-purple-800' },
        { name: 'Docker', icon: '🐳', color: 'from-blue-500 to-blue-700' },
        { name: 'Git', icon: '🔧', color: 'from-orange-500 to-red-600' },
        { name: 'Figma', icon: '🎭', color: 'from-pink-500 to-red-600' },
        { name: 'Safari', icon: '🧭', color: 'from-orange-400 to-orange-600' },
        { name: 'VS Code', icon: '💬', color: 'from-blue-400 to-blue-600' },
        { name: 'GitHub', icon: '🔶', color: 'from-orange-500 to-red-600' },
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen bg-black text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Heading */}
        <div className="mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 tracking-tight">
            TECHNOLOGIES AND KNOWLEDGE
          </h2>
          
          {/* Single Decorative Line */}
          <div className="h-1 bg-gradient-to-r from-red-600 to-transparent rounded-full w-48 sm:w-64"></div>
        </div>

        {/* Skills Categories */}
        <div className="space-y-10 sm:space-y-14 lg:space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.id} className="animate-fade-in" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
              
              {/* Category Title with Single Line */}
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-wider text-white whitespace-nowrap">
                    {category.title}
                  </h3>
                  <div className="flex-1 h-1 bg-gradient-to-r from-red-600 to-transparent rounded-full"></div>
                </div>
              </div>

              {/* Skills Grid - Compact */}
              <div className="p-4 sm:p-6 rounded-lg border-2 border-red-600/30 hover:border-red-600/60 transition duration-300 bg-gradient-to-br from-red-950/5 to-black">
                <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8 gap-2 sm:gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group relative"
                      onMouseEnter={() => setHoveredCategory(`${category.id}-${skillIndex}`)}
                      onMouseLeave={() => setHoveredCategory(null)}
                    >
                      {/* Skill Card - Smaller */}
                      <div className="flex flex-col items-center gap-1.5 p-2 sm:p-2.5 rounded-lg bg-gray-900/50 hover:bg-gray-800 transition duration-300 cursor-pointer transform hover:scale-110">
                        {/* Icon/Logo Container */}
                        <div className={`w-8 sm:w-10 h-8 sm:h-10 rounded bg-gradient-to-br ${skill.color} flex items-center justify-center text-base sm:text-lg shadow-lg group-hover:shadow-xl group-hover:shadow-red-600/50 transition duration-300`}>
                          {skill.icon}
                        </div>
                        
                        {/* Skill Name */}
                        <p className="text-xs font-bold text-center text-gray-300 group-hover:text-white transition duration-300 line-clamp-2 leading-tight">
                          {skill.name}
                        </p>
                      </div>

                      {/* Tooltip for desktop */}
                      <div className="hidden lg:block absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 bg-red-600 text-white text-xs font-bold rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
                        {skill.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-12 sm:mt-16 flex justify-center animate-fade-in-delay">
          <div className="w-32 sm:w-48 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full"></div>
        </div>
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

        @keyframes fade-in-delay {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-delay {
          animation: fade-in-delay 1.2s ease-out;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Skills;