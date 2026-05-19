"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.15),transparent_40%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl text-center"
      >

        <h1 className="text-6xl font-bold leading-tight md:text-7xl">
          Analyze Your Resume
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            {" "}
            With AI
          </span>
        </h1>

        <p className="mt-6 text-lg text-zinc-400">
          Get ATS scores, skill-gap analysis, AI recommendations,
          and resume optimization insights instantly.
        </p>

        <div className="mt-10 flex justify-center gap-4">

            <button
            onClick={() => {
                document.getElementById("upload-section")?.scrollIntoView({
                    behavior: "smooth",
                });
            }} className="rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:scale-105"
            > Upload Resume
        </button>

          <button className="rounded-xl border border-white/20 px-6 py-3 transition hover:bg-white/10">
            View Demo
          </button>

        </div>

      </motion.div>

    </section>
  );
}