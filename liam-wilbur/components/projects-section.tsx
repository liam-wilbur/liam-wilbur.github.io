"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Mango Moon",
    description: "Retro 70s-style arcade game in C for embedded RISC-V systems, featuring voice-controlled thrusters and physical rotary encoder controls for spaceship rotation",
    image: "/images/projects/Mango-Moon-title-screen.jpg",
    technologies: ["C", "Assembly", "RISC-V"],
    category: "Full Stack",
    featured: true,
    liveUrl: "https://liam-wilbur.github.io/Mango-Moon/", // Replace with actual URL
    githubUrl: "https://github.com/liam-wilbur/Mango-Moon", // Replace with actual repo
  },
  {
    title: "Empowering Education",
    description: "Financial aid comparison tool, AI essay reviewer, and resume reviewer designed for counselors in Durham County Public School System",
    image: "/images/projects/empowering-education.jpg",
    technologies: ["React", "Javascript", "CSS", "OpenAI"],
    category: "Creative",
    featured: true,
    liveUrl: "https://empowering-education.vercel.app/", // Replace with actual URL
    githubUrl: "https://github.com/liam-wilbur/Empowering-Education", // Replace with actual repo
  },
  {
    title: "Music Emporium",
    description: "A community-driven music review platform, allowing users to share stream-of-consciousness experiences about albums and artists they love",
    image: "/images/projects/music-emporium.jpg",
    technologies: ["React", "Javascript", "CSS"],
    category: "Frontend",
    featured: false,
    liveUrl: "https://muemporium.com", // Replace with actual URL
    githubUrl: "https://github.com/liam-wilbur/Music-Emporium", // Replace with actual repo
  },
]

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  return (
    <section id="projects-section" className="min-h-screen section-paper pt-20">
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
            PROJECTS.GALLERY
          </h2>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`group cursor-pointer transition-all duration-300 hover:scale-105 paper-card ${
                  project.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
                onClick={() => setSelectedProject(project)}
                data-interactive
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/images/projects/placeholder.jpg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-2">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Live
                          </Button>
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-black"
                        >
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-white text-white dark:text-black hover:bg-white hover:text-black dark:hover:text-black bg-transparent"
                          >
                            <Github className="w-4 h-4 mr-1 text-current" />
                            Code
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm" style={{ color: "var(--text-secondary)" }}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-yellow-400 text-yellow-400 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/80 dark:bg-black/80 flex items-center justify-center z-50 p-4"
            style={{ zIndex: 99999 }}
            onClick={() => setSelectedProject(null)}
          >
            <Card
              className="max-w-2xl w-full border-yellow-400 bg-white dark:bg-gray-900"
              style={{ zIndex: 99999 }}
              onClick={(e) => e.stopPropagation()}
            >
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
                  {selectedProject.title}
                </h3>
                <Image
                  src={selectedProject.image || "/images/projects/placeholder.jpg"}
                  alt={selectedProject.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-yellow-400 text-yellow-400">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live
                    </Button>
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  </a>
                  <Button
                    variant="ghost"
                    onClick={() => setSelectedProject(null)}
                    className="ml-auto"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Close
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}
