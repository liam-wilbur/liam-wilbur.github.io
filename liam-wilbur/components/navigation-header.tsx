"use client"

import { useState, useEffect } from "react"
import { Globe } from "lucide-react"
import DarkModeToggle from "@/components/dark-mode-toggle"

export default function NavigationHeader() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState<string>("hero")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId === "hero" ? "hero-section" : `${sectionId}-section`)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Intersection Observer to detect active section
  useEffect(() => {
    const sections = [
      "hero-section",
      "about-section",
      "experience-section",
      "skills-section",
      "projects-section",
      "contact-section",
    ]

    let timeoutId: NodeJS.Timeout

    const observer = new IntersectionObserver(
      (entries) => {
        // Debounce the updates to prevent rapid flickering
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
              const sectionId = entry.target.id.replace("-section", "")
              // Map hero to home, and about/experience/skills to about
              if (sectionId === "hero") {
                setActiveSection("home")
              } else if (sectionId === "about" || sectionId === "experience" || sectionId === "skills") {
                setActiveSection("about")
              } else {
                setActiveSection(sectionId)
              }
            }
          })
        }, 50) // 50ms debounce
      },
      {
        threshold: [0.3, 0.7], // Multiple thresholds for better detection
        rootMargin: "-10% 0px -10% 0px", // Reduced margin for more stable detection
      },
    )

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) observer.observe(element)
    })

    return () => {
      clearTimeout(timeoutId)
      observer.disconnect()
    }
  }, [])

  const getButtonStyle = (section: string) => {
    const isActive = activeSection === section
    const isHovered = hoveredItem === section && !isActive

    if (isActive) {
      return {
        background: "rgba(45, 45, 45, 0.25)", // Light mode active
      }
    }

    if (isHovered) {
      return {
        background: "rgba(107, 114, 128, 0.2)", // Light mode hover
      }
    }

    return {
      background: "transparent",
    }
  }

  const getDarkButtonStyle = (section: string) => {
    const isActive = activeSection === section
    const isHovered = hoveredItem === section && !isActive

    if (isActive) {
      return {
        background: "rgba(255, 255, 255, 0.15)", // Dark mode active - more visible
      }
    }

    if (isHovered) {
      return {
        background: "rgba(255, 255, 255, 0.08)", // Dark mode hover - more visible
      }
    }

    return {
      background: "transparent",
    }
  }

  return (
    <div className="hidden xl:block">
      {/* Dark Mode Toggle - Hidden on mobile, visible on larger screens */}
      <div className="absolute top-5 left-10 z-50 hidden min-[1400px]:block z-[100]" style={{ zIndex: 100 }}>
        <DarkModeToggle />
      </div>

      {/* Alternative toggle position for mobile */}
      <div className="absolute top-20 left-10 z-50 block min-[1400px]:hidden z-[100]" style={{ zIndex: 100 }}>
        <DarkModeToggle />
      </div>

      {/* Static Header Content - Only visible on hero section */}
      <div className="absolute top-0 left-0 right-0 z-40 py-4 px-8">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Left Side - Company Info */}
          <div className="text-left">
            <div className="font-mono text-sm font-medium" style={{ color: "var(--text-primary)" }}>
              Made by Liam
            </div>
            <div className="font-mono text-xs" style={{ color: "var(--text-secondary)" }}>
              fixing bugs
            </div>
            <div className="font-mono text-xs" style={{ color: "var(--text-secondary)" }}>
              creating features
            </div>
          </div>

          {/* Right Side - Location Info */}
          <div className="text-right">
            <div className="font-mono text-sm font-medium text-gray-900 dark:text-gray-100">Digital_portfolio</div>
            <div className="flex items-center justify-end gap-2 mt-1">
              <Globe className="w-3 h-3 text-gray-600 dark:text-gray-400" />
              <span className="font-mono text-xs text-gray-600 dark:text-gray-400">Los Angeles, CA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Navigation - Follows user on scroll */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 z-[100]" style={{ zIndex: 100 }}>
        <div className="flex items-center px-3 py-2 rounded-full border-2 border-dashed border-gray-400 dark:border-gray-600 bg-white/40 dark:bg-gray-900/40 backdrop-blur-lg">
          <button
            className={`px-3 py-1 font-mono text-sm font-medium transition-all duration-300 rounded-full ${
              activeSection === "home"
                ? "bg-gray-900/25 dark:bg-white/15 text-gray-900 dark:text-gray-100"
                : "text-gray-700 dark:text-gray-300"
            }`}
            style={
              document.documentElement.classList.contains("dark") ? getDarkButtonStyle("home") : getButtonStyle("home")
            }
            onMouseEnter={() => setHoveredItem("home")}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={() => scrollToSection("hero")}
            data-interactive
          >
            HOME
          </button>
          <button
            className={`px-3 py-1 font-mono text-sm font-medium transition-all duration-300 rounded-full ${
              activeSection === "about"
                ? "bg-gray-900/25 dark:bg-white/15 text-gray-900 dark:text-gray-100"
                : "text-gray-700 dark:text-gray-300"
            }`}
            style={
              document.documentElement.classList.contains("dark")
                ? getDarkButtonStyle("about")
                : getButtonStyle("about")
            }
            onMouseEnter={() => setHoveredItem("about")}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={() => scrollToSection("about")}
            data-interactive
          >
            ABOUT
          </button>
          <button
            className={`px-3 py-1 font-mono text-sm font-medium transition-all duration-300 rounded-full ${
              activeSection === "projects"
                ? "bg-gray-900/25 dark:bg-white/15 text-gray-900 dark:text-gray-100"
                : "text-gray-700 dark:text-gray-300"
            }`}
            style={
              document.documentElement.classList.contains("dark")
                ? getDarkButtonStyle("projects")
                : getButtonStyle("projects")
            }
            onMouseEnter={() => setHoveredItem("projects")}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={() => scrollToSection("projects")}
            data-interactive
          >
            PROJECTS
          </button>
          <button
            className={`px-3 py-1 font-mono text-sm font-medium transition-all duration-300 rounded-full ${
              activeSection === "contact"
                ? "bg-gray-900/25 dark:bg-white/15 text-gray-900 dark:text-gray-100"
                : "text-gray-700 dark:text-gray-300"
            }`}
            style={
              document.documentElement.classList.contains("dark")
                ? getDarkButtonStyle("contact")
                : getButtonStyle("contact")
            }
            onMouseEnter={() => setHoveredItem("contact")}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={() => scrollToSection("contact")}
            data-interactive
          >
            CONTACT
          </button>
        </div>
            </nav>
    </div>
   )
}
