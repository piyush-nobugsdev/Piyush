const skills = {
  frontend: ["React", "Next.js", "Tailwind", "HTML", "CSS"],
  backend: ["Node.js", "Express"],
  database: ["MongoDB", "PostgreSQL"],
  programming: ["JavaScript", "TypeScript", "C++"]
};

export default function Skills() {
  return (
   <section
  id="skills"
  className="py-20 px-6 md:px-20 
   
  transition-colors duration-300"
>
  <h2 className="text-3xl font-bold text-center mb-12 
  text-lightText dark:text-darkText">
    Skills
  </h2>

  <div className="grid md:grid-cols-2 gap-10">
    {Object.entries(skills).map(([category, items]) => (
      <div
        key={category}
        className="p-6 
        
        rounded-2xl shadow-md 
        transition-colors duration-300"
      >
        <h3 className="text-xl font-semibold capitalize mb-4 
        text-lightText dark:text-darkText">
          {category}
        </h3>

        <div className="flex flex-wrap gap-3">
          {items.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 
              bg-lightBg dark:bg-darkBg 
              text-lightText dark:text-darkText 
              rounded-lg text-sm 
              transition-colors duration-300"
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