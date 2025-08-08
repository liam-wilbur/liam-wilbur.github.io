"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    year: "Summer 2025",
    company: "InstaLILY",
    role: "Software Engineer Intern",
    description:
      "Developed production ML models and monitoring infrastructure for a $2B ARR parts distribution platform, fine-tuning search algorithms and building real-time analytics systems serving clients.",
    achievements: ["Deployed fine-tuned transformer based architecture into production for search platform of 2 billion ARR company.", "Architected end-to-end logging pipeline from Google Cloud to Elasticsearch, implementing real-time monitoring dashboards, automated alerting system and visualization tools tracking latency, API performance, and error rates.", "Integrated OpenAI Whisper STT/TTS APIs into Parts Information Database chatbot, implementing auto-correction using vector embeddings and reducing latency through chunking strategies."],
    technologies: ["Python", "GCP", "Elasticsearch", "PyTorch", "Kibana",],
  },
  {
    year: "2024-2025",
    company: "Empowering Education",
    role: "Full-Stack Developer",
    description:
      "Led development of supplementary tools for counselors in Durham County Public School System, aimed at bridging financial aid and college prep knowledge gaps for students in low-income communities",
    achievements: ["Created Financial Aid Comparison Tool, AI Essay Reviewer, and Resume Reviewer", "End-to-end development of a usable and effective product that will change student lives", "Full-stack application to be deployed for use across the Durham County Public School System in 2026"],
    technologies: ["React", "Javascript", "TypeScript", "CSS", "Next.js"],
  },
  {
    year: "2023-2024",
    company: "DataAnnotation",
    role: "AI Data Analyst",
    description: "Performed comprehensive quality assurance on AI model outputs to enhance functionality and optimize performance across diverse applications",
    achievements: ["Evaluated AI-generated code in multiple programming languages, ensuring correctness, clarity, and alignment with best practices", "Wrote in-depth test cases to validate accuracy and performance of code"],
    technologies: ["Python", "Javascript", "C++", "SQL"],
  },
]

export default function ExperienceSection() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <section className="min-h-screen section-paper py-20">
      <div className="section-content">
        <div className="container mx-auto px-4">
          <h2
            className="text-6xl font-bold text-center mb-16"
            style={{
              background: "linear-gradient(45deg, var(--accent-dark), var(--accent-charcoal))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            EXPERIENCE.LOG
          </h2>

                      <div className="max-w-6xl mx-auto">
              {/* Timeline */}
              <div className="relative">
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 hidden md:block"
                  style={{ background: "linear-gradient(to bottom, var(--accent-dark), var(--accent-charcoal))" }}
                ></div>

                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className={`relative flex items-start mb-12 md:mb-16 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-col gap-4 md:gap-0`}
                  >
                  {/* Timeline Node */}
                  <div
                    className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full cursor-pointer z-10 hover:scale-125 transition-transform"
                    onClick={() => setSelectedIndex(index)}
                  />

                  {/* Content Card */}
                  <Card
                    className={`w-full md:w-5/12 paper-card hover:scale-105 transition-all duration-300 cursor-pointer`}
                    onClick={() => setSelectedIndex(index)}
                  >
                    <CardContent className="p-6">
                      <div className="text-purple-400 font-mono text-sm mb-2">{exp.year}</div>
                      <h3 className="text-2xl font-bold text-black mb-1">{exp.role}</h3>
                      <h4 className="text-xl text-pink-400 mb-4">{exp.company}</h4>
                      <p className="text-gray-700 mb-4">{exp.description}</p>

                      <div className="mb-4">
                        <h5 className="text-black font-semibold mb-2">Key Achievements:</h5>
                        <ul className="text-gray-700 text-sm space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-center">
                              <span className="text-green-400 mr-2">▶</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <Badge key={i} variant="outline" className="border-purple-400 text-purple-400">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
