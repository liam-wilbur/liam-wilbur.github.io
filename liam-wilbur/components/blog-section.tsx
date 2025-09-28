"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export default function BlogSection() {
  const [showSection, setShowSection] = useState(false)

  useEffect(() => {
    const updateVisibility = () => {
      if (typeof window !== "undefined") {
        setShowSection(window.innerWidth > 700)
      }
    }
    updateVisibility()
    window.addEventListener("resize", updateVisibility)
    return () => window.removeEventListener("resize", updateVisibility)
  }, [])

  if (!showSection) return null

  return (
    <section id="blog-section" className="section-paper py-16">
      <div className="section-content">
        <div className="container mx-auto px-2">

          <div className="max-w-4xl mx-auto rounded-2xl ">
            <div className="p-6 md:p-10 hover:scale-[1.02]">
              <a
                href="https://liam-wilbur.github.io/blog/fine-tuning-sentence-transformer"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Read: Lessons from Fine-Tuning a Sentence Transformer for Domain Adaptation"
                className="group block border-2 border-dashed border-gray-400 dark:border-gray-600 rounded-2xl p-5 md:p-6 transform transition-transform duration-300 ease-out hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="px-4 py-1.5 rounded-full bg-black text-black dark:bg-white dark:text-black border border-gray-400 dark:border-gray-500 font-bold text-base shadow-sm ring-1 ring-black/10 dark:ring-white/20">
                    Blog
                  </span>
                  <span className="font-mono text-xs text-gray-600 dark:text-gray-400">September 2025</span>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <div className="min-w-0">
                    <h3 className="text-2xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100">
                      Lessons from Fine-Tuning a Sentence Transformer for Domain Adaptation
                    </h3>
                    <p className="mt-2 text-md md:text-base text-gray-700 dark:text-gray-300 max-w-3xl">
                      Multi-phase fine-tuning for a 2-stage retrieval system improved encoder recall and delivered
                      2–6% downstream gains in surfacing performance while preserving general semantic ability.
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                    </div>
                  </div>
                  <div className="shrink-0">
                    <div className="relative overflow-hidden">
                        <Image
                        src={"/images/transformer-thumbnail.jpg"}
                        alt={"Thumbnail: Fine-tuning a Sentence Transformer"}
                        width={266}
                        height={200}
                        className="w-full h-48 object-cover"
                        />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


