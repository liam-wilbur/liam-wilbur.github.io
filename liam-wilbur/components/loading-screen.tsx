"use client"

import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [loadingText, setLoadingText] = useState("Initializing...")
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Only use JavaScript for the percentage counter display
    const duration = 2500 // Match CSS animation duration
    const interval = 50
    const increment = 100 / (duration / interval)
    
    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = Math.min(prev + increment, 100)
        if (newProgress >= 100) {
          clearInterval(timer)
          return 100
        }
        return newProgress
      })
    }, interval)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-logo">
          <div className="logo-shape"></div>
        </div>
        <h1 className="loading-title">LIAM WILBUR</h1>
        <div className="loading-progress">
          <div className="progress-bar">
            <div className="progress-fill-css"></div>
          </div>
          <span className="progress-text">{Math.floor(progress)}%</span>
        </div>
        <p className="loading-status">{loadingText}</p>
      </div>
      
      <style jsx>{`
        .progress-fill-css {
          height: 100%;
          background: linear-gradient(90deg, var(--accent-dark), var(--accent-charcoal));
          width: 0%;
          animation: fillProgress 2.5s ease-out forwards;
        }
        
        @keyframes fillProgress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}
