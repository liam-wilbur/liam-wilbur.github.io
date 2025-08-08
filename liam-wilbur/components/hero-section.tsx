"use client"

import { useEffect, useState } from "react"
import NavigationHeader from "@/components/navigation-header"

export default function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0)
  const titles = ["FULL STACK DEVELOPER", "UI/UX DESIGNER", "CREATIVE TECHNOLOGIST", "MUSICIAN"]

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [titles.length])

  return (
    <section className="hero-section" id="hero-section">
      <NavigationHeader />
      <div className="hero-content">
        {/* Organic lines positioned to avoid title area */}
        <div className="organic-lines">
          <svg className="line-drawing line-1" viewBox="0 0 300 200" fill="none">
            <path d="M50 100 Q100 50 200 80 T280 90" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3" />
          </svg>
          <svg className="line-drawing line-2" viewBox="0 0 250 300" fill="none">
            <path
              d="M125 50 Q175 120 75 200 T125 280"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              opacity="0.25"
            />
          </svg>
          <svg className="line-drawing line-3" viewBox="0 0 200 150" fill="none">
            <path
              d="M30 75 Q100 30 170 75 Q200 120 120 120 T30 75"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              opacity="0.2"
            />
          </svg>
          <div className="sketch-face sketch-face-1">◉ ‿ ◉</div>
          <div className="sketch-face sketch-face-2">◕ ◡ ◕</div>
          <div className="sketch-face sketch-face-3">⊙﹏⊙</div>
        </div>

        <h1 className="hero-name">
          <span className="name-first">LIAM</span>
          <span className="name-last">WILBUR</span>
        </h1>

        <div className="hero-title-container">
          <h2 className="hero-title">{titles[titleIndex]}</h2>
        </div>

        <p className="hero-subtitle">
          Crafting digital experiences that solve problems
          <br />
          and writing code that matters
        </p>

        

        <div className="scroll-indicator relative z-50">
          <span>SCROLL TO EXPLORE</span>
          <div className="scroll-arrow relative z-50"></div>
        </div>
      </div>

    </section>
  )
}
