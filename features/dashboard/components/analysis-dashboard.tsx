"use client";

import { motion } from "framer-motion";
import { ScoreCircle } from "./score-circle";

type AnalysisDashboardProps = {
  analysisData: any;
};

export function AnalysisDashboard({
  analysisData,
}: AnalysisDashboardProps) {

  const skills = analysisData.skills || [];

  const atsScore =
    analysisData.ats_score || 0;

  const predictedRole =
    analysisData.predicted_role ||
    "Software Engineer";

  const seniority =
    analysisData.seniority ||
    "Unknown";

  const missingSkills =
    analysisData.missing_skills?.length || 0;

  const stats = [
    {
      title: "Matched Skills",
      value: skills.length,
    },
    {
      title: "Missing Skills",
      value: missingSkills,
    },
    {
      title: "Predicted Role",
      value: predictedRole,
    },
    {
      title: "Seniority",
      value: seniority,
    },
  ];

  return (
    <section className="bg-black px-6 py-24 text-white">

      <div className="mx-auto max-w-7xl">

        <div className="mb-14 text-center">

          <h2 className="text-5xl font-bold">
            Resume Analysis
          </h2>

          <p className="mt-4 text-zinc-400">
            AI-powered insights and ATS optimization results
          </p>

        </div>

        <div className="mb-12">

          <ScoreCircle score={atsScore} />

        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat, index) => (

            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >

              <p className="text-sm text-zinc-400">
                {stat.title}
              </p>

              <h3 className="mt-4 text-4xl font-bold break-words">
                {stat.value}
              </h3>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}