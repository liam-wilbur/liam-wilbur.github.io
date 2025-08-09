"use client"

import { useEffect, useState } from "react"

export default function AboutSection() {
  const [lines, setLines] = useState<string[]>([])
  const [currentCommand, setCurrentCommand] = useState("")
  const [isAnimating, setIsAnimating] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const terminalLines = [
    "$ whoami",
    "> Liam Wilbur - Stanford CS Student",
    "",
    "$ cat about.txt",
    "> Stanford student passionate about turning tech into tangible change",
    "> Specializing in full-stack development and creative coding",
    "> Love tackling complex problems and creating human-centered solutions",
    "> When not coding, you'll find me listening to or making music",
    "",
    "$ ls skills/",
    "> Python  Java C C++ JavaScript HTML CSS",
    "> React Google_Cloud  Elasticsearch  PyTorch Firebase Kibana",
    "",
    "$ echo $PASSION",
    "> Building digital experiences that inspire",
    "",
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isAnimating) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const section = document.getElementById("about-section")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [isAnimating])

  useEffect(() => {
    if (!isVisible || isAnimating) return

    setIsAnimating(true)
    let lineIndex = 0

    const processNextLine = () => {
      if (lineIndex >= terminalLines.length) {
        setCurrentCommand("$ ")
        return
      }

      const line = terminalLines[lineIndex]
      const isCommand = line.startsWith("$")

      if (isCommand) {
        // Type out the command character by character
        let charIndex = 0
        setCurrentCommand("")

        const typeCommand = () => {
          if (charIndex < line.length) {
            setCurrentCommand(line.substring(0, charIndex + 1))
            charIndex++
            setTimeout(typeCommand, 80)
          } else {
            // Command finished typing, wait then add to lines
            setTimeout(() => {
              setLines((prev) => [...prev, line])
              setCurrentCommand("")
              lineIndex++
              setTimeout(processNextLine, 200)
            }, 500)
          }
        }
        typeCommand()
      } else {
        // For output lines, just add them immediately
        setLines((prev) => [...prev, line])
        lineIndex++
        setTimeout(processNextLine, 100)
      }
    }

    processNextLine()
  }, [isVisible, isAnimating])

  return (
    <section id="about-section" className="min-h-screen py-20 section-paper relative" style={{ zIndex: -9999 }}>
      <div className="section-content">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-6xl font-bold text-center mb-16"
              style={{
                background: "linear-gradient(45deg, var(--accent-dark), var(--accent-charcoal))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              ABOUT.EXE
            </h2>

            {/* Terminal with proper dark/light contrast */}
            <div className="terminal-window rounded-lg p-8 font-mono shadow-2xl paper-card">
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="ml-4 terminal-header">Terminal - wilbur@portfolio:~</span>
              </div>

              <div className="space-y-2 text-lg">
                {lines.map((line, index) => (
                  <div key={index} className="flex">
                    <span className="terminal-text">{line}</span>
                  </div>
                ))}
                {currentCommand && (
                  <div className="flex items-end">
                    <span className="terminal-text">{currentCommand}</span>
                    <span className="terminal-cursor-underline"></span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
