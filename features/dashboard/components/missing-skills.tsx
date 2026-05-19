"use client";

import { motion } from "framer-motion";

type MissingSkillsProps = {
  analysisData: any;
};

export function MissingSkills({
  analysisData,
}: MissingSkillsProps) {

  const missingSkills =
    analysisData.missing_skills || [];

  return (
    <section className="bg-transparent px-6 pb-24 text-white">

      <div className="mx-auto max-w-6xl">

        <div className="mb-14 text-center">

          <h2 className="text-5xl font-bold tracking-tight">
            Missing Skills Roadmap
          </h2>

          <p className="mt-4 text-lg text-zinc-400">
            Personalized learning recommendations
            generated from your resume analysis
          </p>

        </div>

        <div className="space-y-8">

          {missingSkills.map(
            (item: any, index: number) => (

              <motion.div
                key={item.skill}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="
                  rounded-3xl
                  border border-white/10
                  bg-zinc-900/90
                  p-6 lg:p-7
                  shadow-2xl
                  backdrop-blur-xl
                "
              >

                {/* HEADER */}

                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

                  <div className="max-w-3xl">

                    <div className="flex flex-wrap items-center gap-3">

                      <h3 className="text-3xl font-bold tracking-tight">
                        {item.skill}
                      </h3>

                      <span
                        className={`
                          rounded-full
                          border
                          px-3 py-1
                          text-xs font-semibold
                          tracking-wide
                          ${
                            item.priority === "High"
                              ? "border-red-400/20 bg-red-500/10 text-red-400"
                              : "border-yellow-400/20 bg-yellow-500/10 text-yellow-300"
                          }
                        `}
                      >
                        {item.priority} Priority
                      </span>

                    </div>

                    <p className="mt-5 text-base leading-7 text-zinc-300">
                      {item.overview}
                    </p>

                    <p className="mt-4 text-sm leading-6 text-zinc-500">
                      {item.importance}
                    </p>

                  </div>

                </div>

                {/* CONTENT */}

                <div className="mt-10 grid gap-8 xl:grid-cols-[1.2fr_1fr]">

                  {/* LEFT */}

                  <div>

                    <h4 className="mb-5 text-xl font-semibold text-cyan-400">
                      Learning Resources
                    </h4>

                    <div className="space-y-3">

                      {item.resources.youtube?.map(
                        (link: string) => (
                          <a
                            key={link}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                              flex items-center
                              rounded-xl
                              border border-cyan-400/10
                              bg-cyan-400/5
                              px-4 py-3
                              text-sm text-cyan-300
                              transition
                              hover:border-cyan-400/30
                              hover:bg-cyan-400/10
                            "
                          >
                            YouTube Tutorials
                          </a>
                        )
                      )}

                      {item.resources.coursera?.map(
                        (link: string) => (
                          <a
                            key={link}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                              flex items-center
                              rounded-xl
                              border border-cyan-400/10
                              bg-cyan-400/5
                              px-4 py-3
                              text-sm text-cyan-300
                              transition
                              hover:border-cyan-400/30
                              hover:bg-cyan-400/10
                            "
                          >
                            Coursera Courses
                          </a>
                        )
                      )}

                      {item.resources.udemy?.map(
                        (link: string) => (
                          <a
                            key={link}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                              flex items-center
                              rounded-xl
                              border border-cyan-400/10
                              bg-cyan-400/5
                              px-4 py-3
                              text-sm text-cyan-300
                              transition
                              hover:border-cyan-400/30
                              hover:bg-cyan-400/10
                            "
                          >
                            Udemy Courses
                          </a>
                        )
                      )}

                      {item.resources.documentation?.map(
                        (link: string) => (
                          <a
                            key={link}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                              flex items-center
                              rounded-xl
                              border border-cyan-400/10
                              bg-cyan-400/5
                              px-4 py-3
                              text-sm text-cyan-300
                              transition
                              hover:border-cyan-400/30
                              hover:bg-cyan-400/10
                            "
                          >
                            Official Documentation
                          </a>
                        )
                      )}

                      {item.resources.roadmaps?.map(
                        (link: string) => (
                          <a
                            key={link}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                              flex items-center
                              rounded-xl
                              border border-cyan-400/10
                              bg-cyan-400/5
                              px-4 py-3
                              text-sm text-cyan-300
                              transition
                              hover:border-cyan-400/30
                              hover:bg-cyan-400/10
                            "
                          >
                            roadmap.sh Guide
                          </a>
                        )
                      )}

                    </div>

                  </div>

                  {/* RIGHT */}

                  <div>

                    <h4 className="mb-5 text-xl font-semibold text-violet-400">
                      Career Preparation
                    </h4>

                    <div className="space-y-7">

                      {/* PROJECTS */}

                      <div>

                        <h5 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-400">
                          Practice Projects
                        </h5>

                        <ul className="space-y-2">

                          {item.resources.practice_projects?.map(
                            (
                              project: string,
                              index: number
                            ) => (
                              <li
                                key={index}
                                className="
                                  rounded-xl
                                  border border-white/5
                                  bg-white/[0.03]
                                  px-4 py-3
                                  text-sm text-zinc-300
                                "
                              >
                                {project}
                              </li>
                            )
                          )}

                        </ul>

                      </div>

                      {/* INTERVIEW */}

                      <div>

                        <h5 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-400">
                          Interview Topics
                        </h5>

                        <ul className="space-y-2">

                          {item.resources.interview_topics?.map(
                            (
                              topic: string,
                              index: number
                            ) => (
                              <li
                                key={index}
                                className="
                                  rounded-xl
                                  border border-white/5
                                  bg-white/[0.03]
                                  px-4 py-3
                                  text-sm text-zinc-300
                                "
                              >
                                {topic}
                              </li>
                            )
                          )}

                        </ul>

                      </div>

                      {/* CERTIFICATIONS */}

                      <div>

                        <h5 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-400">
                          Certifications
                        </h5>

                        <ul className="space-y-2">

                          {item.resources.certifications?.map(
                            (
                              cert: string,
                              index: number
                            ) => (
                              <li
                                key={index}
                                className="
                                  rounded-xl
                                  border border-white/5
                                  bg-white/[0.03]
                                  px-4 py-3
                                  text-sm text-zinc-300
                                "
                              >
                                {cert}
                              </li>
                            )
                          )}

                        </ul>

                      </div>

                    </div>

                  </div>

                </div>

              </motion.div>

            )
          )}

        </div>

      </div>

    </section>
  );
}