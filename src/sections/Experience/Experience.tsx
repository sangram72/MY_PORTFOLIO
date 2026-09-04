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
          <div className="absolute left-3 top-0 hidden h-full w-px bg-white/10 md:block" />

          <div className="space-y-12">
            {experience.map((item) => (
              <div
                key={item.id}
                className="relative md:pl-12"
              >

                {/* Timeline Dot */}
                <div className="absolute left-0 top-2 hidden h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-black md:flex">
                  <div className="h-2 w-2 rounded-full bg-white" />
                </div>

                {/* Experience Card */}
                <div className="rounded-2xl border border-white/10 p-8 transition hover:border-white/20">

                  <div className="flex flex-col justify-between gap-3 sm:flex-row">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">
                        {item.role}
                      </h3>

                      <p className="mt-1 text-gray-500">
                        {item.company}
                      </p>
                    </div>

                    <span className="text-sm text-gray-500">
                      {item.duration}
                    </span>
                  </div>

                  <p className="mt-6 leading-7 text-gray-400">
                    {item.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {item.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg bg-white/5 px-3 py-1.5 text-sm text-gray-400"
                      >
                        {technology}
                      </span>
                    ))}
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