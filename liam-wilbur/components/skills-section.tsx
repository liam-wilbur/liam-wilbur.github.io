"use client"
import type { IconType } from "react-icons"
import { 
  SiPython,
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiGit,
  SiSlack,
  SiGooglecloud,
  SiElasticsearch,
  SiPytorch,
  SiVercel,
  SiKibana,
} from "react-icons/si"
import { 
  FaJava,
} from "react-icons/fa"
import {
  SiC,
} from "react-icons/si"
import {
  RiNextjsFill
} from "react-icons/ri"

interface Skill {
  name: string
  icon: IconType
}

const technologies: Skill[] = [
  { name: "Python", icon: SiPython },
  { name: "C++", icon: SiCplusplus },
  { name: "React", icon: SiReact },
  { name: "Java", icon: FaJava },
  { name: "C", icon: SiC },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Next.js", icon: RiNextjsFill },
]

const tools: Skill[] = [
  { name: "Git", icon: SiGit },
  { name: "Slack", icon: SiSlack },
  { name: "GCP", icon: SiGooglecloud },
  { name: "Elasticsearch", icon: SiElasticsearch },
  { name: "PyTorch", icon: SiPytorch },
  { name: "Kibana", icon: SiKibana },
]

const SkillCard = ({ skill }: { skill: Skill }) => (
  <div className="group relative flex flex-col items-center justify-center p-6 paper-card rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl aspect-video">
    <div className="text-accent-dark dark:text-accent-dark transition-colors duration-300">
      <skill.icon className="w-10 h-10 md:w-12 md:h-12" />
    </div>
    <p
      className="absolute bottom-4 font-mono text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bottom-6"
      style={{ color: "var(--text-primary)" }}
    >
      {skill.name}
    </p>
  </div>
)

export default function SkillsSection() {
  return (
    <section id="skills-section" className="min-h-screen section-paper py-20">
      <div className="section-content container mx-auto px-4">
        <h2
          className="text-6xl font-bold text-center mb-16"
          style={{
            background: "linear-gradient(45deg, var(--accent-dark), var(--accent-charcoal))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          SKILLS.LAB
        </h2>

        <div className="max-w-6xl mx-auto">
          {/* Technologies */}
          <div className="mb-16">
            <h3
              className="text-3xl font-bold text-center mb-8 font-display"
              style={{ color: "var(--text-secondary)" }}
            >
              Technologies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {technologies.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3
              className="text-3xl font-bold text-center mb-8 font-display"
              style={{ color: "var(--text-secondary)" }}
            >
              Tools
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {tools.map((tool) => (
                <SkillCard key={tool.name} skill={tool} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
