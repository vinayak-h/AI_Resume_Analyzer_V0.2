"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer
      className="
        border-t border-zinc-800
        bg-zinc-950
        px-6 py-14
        text-white
      "
    >
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          gap-12
          md:grid-cols-4
        "
      >
        {/* BRAND */}

        <div>
          <h2 className="text-2xl font-bold">ResumeAI</h2>

          <p className="mt-4 text-sm leading-6 text-zinc-400">
            AI-powered resume analysis platform for ATS optimization, skill-gap
            analysis, and career growth recommendations.
          </p>
        </div>

        {/* PRODUCT */}

        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            Product
          </h3>

          <div className="space-y-3 text-sm text-zinc-400">
            <Link href="#" className="block transition hover:text-white">
              Resume Analysis
            </Link>

            <Link href="#" className="block transition hover:text-white">
              ATS Optimization
            </Link>

            <Link href="#" className="block transition hover:text-white">
              Skill Gap Analysis
            </Link>

            <Link href="#" className="block transition hover:text-white">
              AI Recommendations
            </Link>
          </div>
        </div>

        {/* RESOURCES */}

        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            Resources
          </h3>

          <div className="space-y-3 text-sm text-zinc-400">
            <a
              href="https://roadmap.sh"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition hover:text-white"
            >
              roadmap.sh
            </a>

            <a
              href="https://www.coursera.org"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition hover:text-white"
            >
              Coursera
            </a>

            <a
              href="https://www.udemy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition hover:text-white"
            >
              Udemy
            </a>

            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition hover:text-white"
            >
              YouTube Learning
            </a>
          </div>
        </div>

        {/* SOCIAL */}

        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            Connect
          </h3>

          <div className="space-y-3 text-sm text-zinc-400">
            <a
              href="https://github.com/vinayak-h"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/vinayak-hegde-5b5b77255/"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}

      <div
        className="
          mx-auto
          mt-14
          flex
          max-w-7xl
          flex-col
          items-center
          justify-between
          gap-4
          border-t border-zinc-800
          pt-6
          text-sm text-zinc-500
          md:flex-row
        "
      >
        <p className="flex items-center gap-2">
          Built by
          <a
            href="https://www.linkedin.com/in/vinayak-hegde-5b5b77255/"
            target="_blank"
            rel="noopener noreferrer"
            className="
      font-medium
      text-cyan-400
      transition
      hover:text-cyan-300
      hover:underline
    "
          >
            Vinayak Hegde
          </a>
          • AI Resume-Analyzer
        </p>
      </div>
    </footer>
  );
}
