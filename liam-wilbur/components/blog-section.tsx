"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export default function BlogSection() {
  const [isWide, setIsWide] = useState(false)

  useEffect(() => {
    const update = () => setIsWide(window.innerWidth >= 700)
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  if (!isWide) return null

  return (
    <section id="blog-section" className="section-paper py-20">
      <div className="section-content">
        <div className="container mx-auto px-4">

          <div className="max-w-4xl mx-auto border-2 border-dashed border-gray-400 dark:border-gray-600 rounded-2xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-lg transition-transform duration-300 hover:scale-105 origin-center">
            <div className="p-6 md:p-10">
              <div className="mb-5 flex items-center justify-between">
                <span className="px-4 py-1.8 rounded-full bg-blue-500/90 text-black font-bold text-base backdrop-blur-sm border border-blue-400">
                  Blog
                </span>
                <span className="font-mono text-xs text-gray-600 dark:text-gray-400">September 2025</span>
              </div>
            
              <div className="mt-4 flex items-center gap-3">
              </div>
              <a
                href="https://liam-wilbur.github.io/blog/fine-tuning-sentence-transformer"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Read: Lessons from Fine-Tuning a Sentence Transformer for Domain Adaptation"
                className="group block rounded-xl p-5 md:p-6 transition-colors hover:bg-gray-900/5 dark:hover:bg-white/5"
              >
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


