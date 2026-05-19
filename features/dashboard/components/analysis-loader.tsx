"use client";

import { motion } from "framer-motion";

const steps = [
  "Uploading resume...",
  "Extracting content...",
  "Analyzing ATS compatibility...",
  "Detecting skills...",
  "Generating AI insights...",
];

export function AnalysisLoader() {
  return (
    <section className="bg-black px-6 py-24 text-white">

      <div className="mx-auto max-w-3xl rounded-3xl border border-cyan-400/10 bg-white/5 p-10 backdrop-blur-xl">

        <div className="mb-10 text-center">

          <h2 className="text-4xl font-bold">
            Analyzing Resume
          </h2>

          <p className="mt-4 text-zinc-400">
            Our AI is processing your resume and generating insights
          </p>

        </div>

        <div className="space-y-6">

          {steps.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.4,
              }}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/30 p-5"
            >

              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                }}
                className="h-3 w-3 rounded-full bg-cyan-400"
              />

              <p className="text-zinc-300">
                {step}
              </p>

            </motion.div>
          ))}

        </div>

        <div className="mt-10 h-3 overflow-hidden rounded-full bg-white/10">

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 4,
            }}
            className="h-full rounded-full bg-cyan-400"
          />

        </div>

      </div>

    </section>
  );
}
