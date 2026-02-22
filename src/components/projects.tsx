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
    <section
  id="projects"
  className="py-20 px-6 md:px-20 
  bg-lightBg dark:bg-darkBg 
  transition-colors duration-300"
>
  <h2
    className="text-3xl font-bold text-center mb-12 
    text-lightText dark:text-darkText"
  >
    Projects
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {projects.map((project) => (
      <div
        key={project.name}
        className="bg-lightCard dark:bg-darkCard 
        rounded-2xl shadow-md overflow-hidden 
        hover:scale-105 transition 
        duration-300"
      >
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-48 object-cover"
        />

        <div className="p-6">
          <h3
            className="text-xl font-semibold mb-2 
            text-lightText dark:text-darkText"
          >
            {project.name}
          </h3>

          <p
            className="mb-4 
            text-lightText/80 dark:text-darkText/80"
          >
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 
                bg-lightBg dark:bg-darkBg 
                text-lightText dark:text-darkText 
                text-sm rounded-lg 
                transition-colors duration-300"
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