import {
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiSupabase,
  SiGit,
  SiGithub,
  SiVercel,
  SiCplusplus
} from "react-icons/si"
type Skill = {
  name: string
  icon: any
  color?: string
  monochrome?: boolean
}
const skills: Record<string, Skill[]> = {
  frontend: [
    { name: "Next.js", icon: SiNextdotjs, monochrome: true },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Framer Motion", icon: SiFramer, color: "#0055FF" }
  ],
  backend: [
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express.js", icon: SiExpress, monochrome: true }
  ],
  database: [
    { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" }
  ],
  tools: [
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, monochrome: true },
    { name: "Vercel", icon: SiVercel, monochrome: true }
  ],
  programming: [
    { name: "C++", icon: SiCplusplus, color: "#00599C" }
  ]
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-20 transition-colors duration-300"
    >
      <h2 className="text-3xl font-bold text-center mb-16 text-lightText dark:text-darkText">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="p-6 rounded-2xl border border-lightCard dark:border-darkCard
            transition-all duration-300 hover:-translate-y-1"
          >
            <h3 className="text-lg font-semibold mb-8 tracking-wide uppercase text-primary">
              {category}
            </h3>

            <div className="grid grid-cols-2 gap-6">
             {items.map((skill) => {
  const Icon = skill.icon

  return (
    <div
      key={skill.name}
      className="flex items-center gap-3
      opacity-80 hover:opacity-100
      transition-all duration-300"
    >
      <div
        className={`text-2xl ${
          skill.monochrome
            ? "text-black dark:text-white"
            : ""
        }`}
        style={!skill.monochrome ? { color: skill.color } : {}}
      >
        <Icon />
      </div>

      <span className="text-sm text-lightText dark:text-darkText">
        {skill.name}
      </span>
    </div>
  )
})}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}