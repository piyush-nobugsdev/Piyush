const skills = {
  frontend: ["React", "Next.js", "Tailwind", "HTML", "CSS"],
  backend: ["Node.js", "Express"],
  database: ["MongoDB", "PostgreSQL"],
  programming: ["JavaScript", "TypeScript", "C++"]
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 md:px-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="p-6 bg-white rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold capitalize mb-4">
              {category}
            </h3>

            <div className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-200 rounded-lg text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}