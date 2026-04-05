'use client';

import React, { useState } from 'react';
import { Globe, Github, X } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const projects = [
    {
      id: 1,
      name: 'Aegis-Twin',
      tagline: 'Cybersecurity Digital Twin Dashboard',
      summary:
        'A proof-of-concept IoT security platform that simulates an enterprise device fleet, modeling normal traffic behavior with a trained LSTM autoencoder.',
      briefImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
      description:
        'A proof-of-concept IoT security platform that simulates an enterprise device fleet, modeling normal traffic behavior with a trained LSTM autoencoder and detecting anomalies in real-time using reconstruction error and statistical drift analysis.',
      fullImages: [
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1516321318423-f06f70504c11?w=800&h=600&fit=crop',
      ],
      tech: ['Python', 'PyTorch', 'Streamlit', 'Plotly', 'SQLite', 'ReportLab'],
      features: [
        'LSTM autoencoder for anomaly detection on 4 traffic features',
        'Trust Score (0–100) combining deep learning MSE + Jensen-Shannon Divergence',
        'Live scan mode with real-time gauges, radar charts & threat logs',
        'Attack simulation & one-click device remediation',
        'Automated forensic PDF reports emailed on critical alerts',
        'Folium map-based fleet overview with per-device drill-down',
      ],
      github: 'https://github.com/piyush-nobugsdev/aegis-twin',
      demo: 'https://aegis-twin-vrcrvjozmrqdj79n65zxmy.streamlit.app/',
    },
    {
      id: 2,
      name: 'Tutor Platform',
      tagline: 'Two-Sided Tutoring Marketplace',
      summary:
        'An MVP platform connecting parents and tutors in India. Parents post tutoring jobs; tutors pass qualification tests before applying.',
      briefImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      description:
        'An MVP platform connecting parents and tutors in India. Parents post tutoring jobs for their children; tutors must pass subject qualification tests before applying. Clean role-based auth and real-time dashboards keep both sides in sync.',
      fullImages: [
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1552664730-d307ca884979?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=800&h=600&fit=crop',
      ],
      tech: ['Next.js 15', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
      features: [
        'Role-based OAuth (Google & GitHub) with forced account selection',
        'Parents: create child profiles, post jobs, accept tutors',
        'Tutors: pass MCQ qualification tests, browse & apply to jobs',
        'Row Level Security enforced on all Supabase tables',
        'Middleware-based route protection & role-gated dashboards',
        'Fully deployed on Vercel with server components & server actions',
      ],
      github: 'https://github.com/piyush-nobugsdev/tutor-project',
      demo: 'https://tutor-project-smoky.vercel.app/',
    },
  ];

  return (
    <>
      <section id="projects" className="bg-black text-white py-12 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="mb-10 sm:mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-3">
              Featured <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full"></div>
          </div>

          {/* Projects Grid - Compact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 0.15}s` }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Card - Compact */}
                <div className="rounded-xl overflow-hidden border border-gray-800 hover:border-red-600/50 bg-gradient-to-br from-gray-900/50 to-black transition duration-500 flex flex-col h-full hover:shadow-xl hover:shadow-red-600/10">
                  
                  {/* Project Image - Smaller */}
                  <div className="relative h-40 sm:h-48 overflow-hidden bg-gradient-to-br from-gray-800 to-black">
                    <img
                      src={project.briefImage}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-500"></div>
                  </div>

                  {/* Content - Compact */}
                  <div className="flex-1 p-4 sm:p-5 flex flex-col">
                    
                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-black mb-1 group-hover:text-red-400 transition duration-300 line-clamp-1">
                      {project.name}
                    </h3>

                    {/* Tagline */}
                    <p className="text-xs sm:text-sm text-red-400 font-semibold mb-2 line-clamp-1">
                      {project.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-400 mb-3 flex-1 leading-snug line-clamp-2">
                      {project.summary}
                    </p>

                    {/* Tech Stack Tags - Compact */}
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.slice(0, 4).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 text-xs font-semibold bg-gray-800/50 hover:bg-gray-700 text-gray-300 rounded-full border border-gray-700/50 hover:border-red-600/50 transition duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 4 && (
                          <span className="px-2 py-1 text-xs font-semibold bg-red-600/20 text-red-400 rounded-full border border-red-600/50">
                            +{project.tech.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Buttons - Compact */}
                    <div className="flex gap-2 pt-2 border-t border-gray-800/50">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-gray-900/80 hover:bg-gray-800 border border-gray-700 hover:border-red-600/50 text-white font-bold rounded transition duration-300 text-xs sm:text-sm"
                      >
                        <Globe size={14} />
                        <span className="hidden sm:inline">Demo</span>
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-gray-900/80 hover:bg-gray-800 border border-gray-700 hover:border-red-600/50 text-white font-bold rounded transition duration-300 text-xs sm:text-sm"
                      >
                        <Github size={14} />
                        <span className="hidden sm:inline">Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects CTA */}
          <div className="mt-10 sm:mt-12 flex justify-center animate-fade-in-delay">
            <a
              href="#contact"
              className="px-6 sm:px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full text-sm sm:text-base transition duration-300 transform hover:scale-105 active:scale-95 inline-flex items-center gap-2"
            >
              <span>Get In Touch</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
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

          .line-clamp-1 {
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          {/* Modal Close on Background Click */}
          <div
            className="absolute inset-0"
            onClick={() => setSelectedProject(null)}
          ></div>

          {/* Modal Content */}
          <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-black border border-red-600/30 shadow-2xl shadow-red-600/20">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-20 p-2 bg-red-600 hover:bg-red-700 rounded-full text-white transition duration-300"
            >
              <X size={24} />
            </button>

            {/* Modal Content */}
            <div className="p-6 sm:p-10">
              
              {/* Title Section */}
              <div className="mb-8">
                <h2 className="text-3xl sm:text-5xl font-black mb-2 text-white">
                  {selectedProject.name}
                </h2>
                <p className="text-lg text-red-400 font-semibold mb-4">
                  {selectedProject.tagline}
                </p>
                <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-transparent rounded-full"></div>
              </div>

              {/* Full Description */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-3">Overview</h3>
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                  {selectedProject.description}
                </p>
              </div>

              {/* Image Gallery */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Project Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedProject.fullImages.map((image, imageIndex) => (
                    <div
                      key={imageIndex}
                      className="rounded-lg overflow-hidden border border-gray-700 hover:border-red-600/50 transition duration-300"
                    >
                      <img
                        src={image}
                        alt={`${selectedProject.name} ${imageIndex + 1}`}
                        className="w-full h-64 object-cover hover:scale-105 transition duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {selectedProject.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-base">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Stack */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Technology Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-red-600/20 text-red-400 border border-red-600/50 rounded-full font-semibold text-sm hover:bg-red-600/30 transition duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-700/50">
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition duration-300 text-base"
                >
                  <Globe size={20} />
                  <span>Visit Live Demo</span>
                </a>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-700 text-white font-bold rounded-lg transition duration-300 text-base"
                >
                  <Github size={20} />
                  <span>View Source Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;