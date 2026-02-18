const projects = [
  {
    name: "Tutor Platform",
    description: "Two-sided platform connecting parents and tutors.",
    tech: ["Next.js", "MongoDB", "Tailwind"],
    image: "/project1.png",
    link: "#"
  },
  {
    name: "Guitar Tabs App",
    description: "Tool to generate and manage guitar tabs easily.",
    tech: ["React", "Node.js"],
    image: "/project2.png",
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                {project.name}
              </h3>

              <p className="text-gray-600 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-200 text-sm rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}