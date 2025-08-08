"use client"

import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, Instagram } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact-section" className="pb-20 section-paper" style={{ zIndex: -20 }}>
      <div className="section-content">
        <div className="container mx-auto px-4">
          {/* Simple Social Section */}
          <div className="text-center max-w-2xl mx-auto">
            <h3
              className="text-4xl font-bold mb-6 font-display"
              style={{
                background: "linear-gradient(45deg, var(--accent-dark), var(--accent-charcoal))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Find Me On
            </h3>

            <p className="text-gray-600 mb-12 text-xl font-display">
              Feel free to{" "}
              <span
                style={{
                  background: "linear-gradient(45deg, #e91e63, #9c27b0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontWeight: "600",
                }}
              >
                connect
              </span>{" "}
              with me
            </p>

            {/* Social Icons - Updated to be bigger and black */}
            <div className="flex justify-center space-x-8 mb-16">
              <a
                href="https://github.com/liam-wilbur"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="icon"
                  className="w-14 h-14 rounded-full bg-white hover:bg-gray-50 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                  data-interactive
                >
                  <Github className="!w-5 !h-5 text-black" />
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/liam-wilbur-1b2222236"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="icon"
                  className="w-14 h-14 rounded-full bg-white hover:bg-gray-50 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                  data-interactive
                >
                  <Linkedin className="!w-5 !h-5 text-black" />
                </Button>
              </a>
              <a
                href="https://www.instagram.com/lwilbs_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="icon"
                  className="w-14 h-14 rounded-full bg-white hover:bg-gray-50 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                  data-interactive
                >
                  <Instagram className="!w-5 !h-5 text-black" />
                </Button>
              </a>
            </div>

            {/* Simple Contact Info */}
            <div className="flex justify-center items-center space-x-2 text-gray-600 mb-12 font-display">
              <Mail className="w-5 h-5" />
              <span className="text-lg">liamcwilbur@gmail.com</span>
            </div>

            {/* Simple Footer */}
            <div className="pt-8 border-t border-gray-200">
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
