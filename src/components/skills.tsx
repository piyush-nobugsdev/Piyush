'use client';

import React from "react";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiExpress,
  SiNodedotjs,
  SiPython,
  SiCplusplus,
  SiGit,
  SiGithub,
  SiVercel,
  SiSupabase
} from "react-icons/si";

const skillCategories = [
  {
    title: "LANGUAGES",
    skills: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "Python", icon: SiPython },
      { name: "C++", icon: SiCplusplus }
    ]
  },
  {
    title: "FRONTEND",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind", icon: SiTailwindcss }
    ]
  },
  {
    title: "BACKEND",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Supabase", icon: SiSupabase }
    ]
  },
  {
    title: "DEVOPS & TOOLS",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Vercel", icon: SiVercel }
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="h-[calc(100vh-80px)] max-h-[900px] bg-black text-white px-12 py-1 flex items-start scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto w-full">

        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-3">
            TECHNOLOGIES & SKILLS
          </h2>

          <div className="h-1 bg-gradient-to-r from-red-600 to-transparent w-56 sm:w-64 rounded-full"></div>
        </div>

        {/* Skill Categories */}
        <div className="space-y-6">
          {skillCategories.map((category, i) => (
            <div key={i}>

              {/* Category Title */}
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-lg sm:text-xl font-bold tracking-wider whitespace-nowrap">
                  {category.title}
                </h3>
                <div className="flex-1 h-[2px] bg-gradient-to-r from-red-600 to-transparent"></div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-2">

                {category.skills.map((skill, index) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-1 p-2 rounded-md bg-gray-900 hover:bg-gray-800 transition duration-300 transform hover:scale-105"
                    >
                      <Icon className="text-xl text-red-500" />

                      <p className="text-[11px] sm:text-xs font-semibold text-gray-300 text-center">
                        {skill.name}
                      </p>
                    </div>
                  );
                })}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;