import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { skills } from "../../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen scroll-mt-24 bg-black px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        <SectionTitle
          eyebrow="My Skills"
          title="Technologies I work with"
        />

        <div className="grid gap-6 md:grid-cols-2">

          {/* Frontend */}
          <div className="rounded-2xl border border-white/10 p-8">
            <h3 className="mb-6 text-xl font-semibold text-white">
              Frontend
            </h3>

            <div className="flex flex-wrap gap-3">
              {skills.frontend.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-400 transition hover:border-white/30 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Mobile */}
          <div className="rounded-2xl border border-white/10 p-8">
            <h3 className="mb-6 text-xl font-semibold text-white">
              Mobile
            </h3>

            <div className="flex flex-wrap gap-3">
              {skills.mobile.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-400 transition hover:border-white/30 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="rounded-2xl border border-white/10 p-8">
            <h3 className="mb-6 text-xl font-semibold text-white">
              Backend
            </h3>

            <div className="flex flex-wrap gap-3">
              {skills.backend.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-400 transition hover:border-white/30 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="rounded-2xl border border-white/10 p-8">
            <h3 className="mb-6 text-xl font-semibold text-white">
              Tools
            </h3>

            <div className="flex flex-wrap gap-3">
              {skills.tools.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-400 transition hover:border-white/30 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;