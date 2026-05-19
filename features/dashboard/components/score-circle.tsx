"use client";

import { motion } from "framer-motion";

type ScoreCircleProps = {
  score: number;
};

export function ScoreCircle({
  score,
}: ScoreCircleProps) {

  const radius = 90;
  const strokeWidth = 12;

  const normalizedRadius =
    radius - strokeWidth * 2;

  const circumference =
    normalizedRadius * 2 * Math.PI;

  const strokeDashoffset =
    circumference -
    (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center">

      <div className="relative flex items-center justify-center">

        <svg
          height={radius * 2}
          width={radius * 2}
          className="-rotate-90"
        >

          <circle
            stroke="rgba(255,255,255,0.08)"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />

          <motion.circle
            stroke="#22d3ee"
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            strokeDasharray={circumference}
            initial={{
              strokeDashoffset: circumference,
            }}
            animate={{
              strokeDashoffset,
            }}
            transition={{
              duration: 1.5,
            }}
          />

        </svg>

        <div className="absolute text-center">

          <h2 className="text-5xl font-bold text-white">
            {score}%
          </h2>

          <p className="mt-2 text-sm text-zinc-400">
            ATS Score
          </p>

        </div>

      </div>

    </div>
  );
}