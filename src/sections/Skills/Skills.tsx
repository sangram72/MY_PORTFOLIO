
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { skills } from "../../data/skills";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: skills.frontend,
  },
  {
    title: "Mobile Development",
    skills: skills.mobile,
  },
  {
    title: "Backend Development",
    skills: skills.backend,
  },
  {
    title: "AI & Generative AI",
    skills: skills.aiAndGenerativeAI,
  },
  {
    title: "Databases & Storage",
    skills: skills.databasesAndStorage,
  },
  {
    title: "Tools & Platforms",
    skills: skills.toolsAndPlatforms,
  },
];

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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.04]"
            >
              <h3 className="mb-6 text-xl font-semibold text-white transition-colors group-hover:text-blue-400">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-400 transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-400/10 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;
