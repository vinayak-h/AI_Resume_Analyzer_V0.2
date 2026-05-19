"use client";

import { motion } from "framer-motion";

type AtsInsightsProps = {
  analysisData: any;
};

export function AtsInsights({
  analysisData,
}: AtsInsightsProps) {

  const strengths =
    analysisData.strengths || [];

  const weaknesses =
    analysisData.weaknesses || [];

  const recommendations =
    analysisData.recommendations || [];

  return (
    <section className="bg-black px-6 pb-24 text-white">

      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-8"
        >

          <h3 className="mb-6 text-2xl font-bold text-emerald-400">
            Strengths
          </h3>

          <ul className="space-y-4 text-zinc-300">

            {strengths.map(
              (strength: string, index: number) => (
                <li key={index}>
                  • {strength}
                </li>
              )
            )}

          </ul>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-3xl border border-red-500/20 bg-red-500/10 p-8"
        >

          <h3 className="mb-6 text-2xl font-bold text-red-400">
            Weaknesses
          </h3>

          <ul className="space-y-4 text-zinc-300">

            {weaknesses.map(
              (weakness: string, index: number) => (
                <li key={index}>
                  • {weakness}
                </li>
              )
            )}

          </ul>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-8"
        >

          <h3 className="mb-6 text-2xl font-bold text-cyan-400">
            Recommendations
          </h3>

          <ul className="space-y-4 text-zinc-300">

            {recommendations.map(
              (
                recommendation: string,
                index: number
              ) => (
                <li key={index}>
                  • {recommendation}
                </li>
              )
            )}

          </ul>

        </motion.div>

      </div>

    </section>
  );
}