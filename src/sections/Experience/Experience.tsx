
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { experience } from "../../data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="scroll-mt-24 bg-black px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">

        <SectionTitle
          eyebrow="Experience"
          title="My professional journey"
        />

        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-3 top-0 hidden h-full w-px bg-gradient-to-b from-blue-500/60 via-white/10 to-transparent md:block" />

          <div className="space-y-10">

            {experience.map((item) => (
              <div
                key={item.id}
                className="relative md:pl-12"
              >

                {/* Timeline Dot */}
                <div className="absolute left-0 top-8 hidden h-7 w-7 items-center justify-center rounded-full border border-blue-400/40 bg-black md:flex">
                  <div className="h-2.5 w-2.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.8)]" />
                </div>

                {/* Experience Card */}
                <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-blue-400/30 hover:bg-white/[0.04] sm:p-8">

                  {/* Role and Company */}
                  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">

                    <div>
                      <h3 className="text-2xl font-semibold text-white transition-colors group-hover:text-blue-400">
                        {item.role}
                      </h3>

                      <p className="mt-2 text-base font-medium text-gray-400">
                        {item.company}
                      </p>
                    </div>

                    <span className="w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-400">
                      {item.duration}
                    </span>

                  </div>

                  {/* Description */}
                  <p className="mt-6 text-base leading-8 text-gray-400">
                    {item.description}
                  </p>

                  {/* Responsibilities */}
                  {item.responsibilities && (
                    <ul className="mt-5 space-y-3">
                      {item.responsibilities.map((point, index) => (
                        <li
                          key={index}
                          className="flex gap-3 text-sm leading-7 text-gray-400"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Technologies */}
                  <div className="mt-7">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                      Technologies
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-gray-400 transition hover:border-blue-400/40 hover:text-white"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
