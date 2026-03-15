const projects = [
  {
    name: "Aegis-Twin",
    tagline: "Cybersecurity Digital Twin Dashboard",
    summary:
      "A proof-of-concept IoT security platform that simulates an enterprise device fleet, modeling normal traffic behavior with a trained LSTM autoencoder and detecting anomalies in real-time using reconstruction error and statistical drift analysis.",
    tech: ["Python", "PyTorch", "Streamlit", "Plotly", "SQLite", "ReportLab"],
    features: [
      "LSTM autoencoder for anomaly detection on 4 traffic features",
      "Trust Score (0–100) combining deep learning MSE + Jensen-Shannon Divergence",
      "Live scan mode with real-time gauges, radar charts & threat logs",
      "Attack simulation & one-click device remediation",
      "Automated forensic PDF reports emailed on critical alerts",
      "Folium map-based fleet overview with per-device drill-down",
    ],
    github: "https://github.com/piyush-nobugsdev/aegis-twin",
    demo: "https://aegis-twin-vrcrvjozmrqdj79n65zxmy.streamlit.app/", // Replace with your actual deployment link
  },
  {
    name: "Tutor Platform",
    tagline: "Two-Sided Tutoring Marketplace",
    summary:
      "An MVP platform connecting parents and tutors in India. Parents post tutoring jobs for their children; tutors must pass subject qualification tests before applying. Clean role-based auth and real-time dashboards keep both sides in sync.",
    tech: ["Next.js 15", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Vercel"],
    features: [
      "Role-based OAuth (Google & GitHub) with forced account selection",
      "Parents: create child profiles, post jobs, accept tutors",
      "Tutors: pass MCQ qualification tests, browse & apply to jobs",
      "Row Level Security enforced on all Supabase tables",
      "Middleware-based route protection & role-gated dashboards",
      "Fully deployed on Vercel with server components & server actions",
    ],
    github: "https://github.com/piyush-nobugsdev/tutor-project",
    demo: "https://tutor-project-smoky.vercel.app/", // Replace with your actual deployment link
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-20 transition-colors duration-300"
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-lightText dark:text-darkText">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-118 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.name}
            className="rounded-2xl shadow-md overflow-hidden hover:scale-[1.02] transition duration-300 flex flex-col"
          >
            {/* Header */}
            <div className="p-6 pb-4 border-b border-lightText/10 dark:border-darkText/10">
              <div className="flex items-start justify-between gap-4 mb-1">
                <h3 className="text-2xl font-bold text-lightText dark:text-darkText leading-tight">
                  {project.name}
                </h3>
                {/* GitHub icon link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} on GitHub`}
                  className="shrink-0 mt-1 text-lightText/50 dark:text-darkText/50 hover:text-lightText dark:hover:text-darkText transition-colors duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.382 1.236-3.222-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.654 1.652.243 2.873.12 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.804 5.625-5.476 5.92.43.372.814 1.103.814 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.697.825.578C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              </div>
              <p className="text-sm font-medium text-lightText/50 dark:text-darkText/50 uppercase tracking-widest mb-3">
                {project.tagline}
              </p>
              <p className="text-lightText/80 dark:text-darkText/80 text-sm leading-relaxed">
                {project.summary}
              </p>
            </div>

            {/* Features */}
            <div className="p-6 pb-4 flex-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-lightText/40 dark:text-darkText/40 mb-3">
                Key Features
              </p>
              <ul className="space-y-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-lightText/80 dark:text-darkText/80"
                  >
                    <span className="mt-[5px] shrink-0 w-1.5 h-1.5 rounded-full bg-lightText/30 dark:bg-darkText/30" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="px-6 pb-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-lightText/40 dark:text-darkText/40 mb-3">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText text-sm rounded-lg transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Live Demo Button */}
            <div className="px-6 pb-6 pt-2">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-lightText/20 dark:border-darkText/20 text-sm font-medium text-lightText/70 dark:text-darkText/70 hover:text-lightText dark:hover:text-darkText hover:border-lightText/50 dark:hover:border-darkText/50 transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}