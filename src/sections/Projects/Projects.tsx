import { useState } from "react";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

import { projects } from "../../data/projects";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [searchValue, setSearchValue] = useState("");

  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null);

  const categories = [
    "All",
    "Frontend",
    "Full Stack",
    "Mobile",
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" ||
      project.category === selectedCategory;

    const matchesSearch =
      project.title
        .toLowerCase()
        .includes(searchValue.toLowerCase()) ||
      project.technologies.some((technology) =>
        technology
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  return (
    <section
  id="projects"
  className="min-h-screen bg-black px-6 pt-12 pb-24"
>
      <div className="mx-auto max-w-7xl">

        <SectionTitle
          eyebrow="My Work"
          title="Featured Projects"
        />

        {/* Search */}
        <div className="mb-8">
          <input
            type="text"
            value={searchValue}
            onChange={(event) =>
              setSearchValue(event.target.value)
            }
            placeholder="Search projects..."
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-white outline-none placeholder:text-gray-600 focus:border-white/30 md:max-w-md"
          />
        </div>

        {/* Categories */}
        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-lg px-5 py-2.5 text-sm transition ${
                selectedCategory === category
                  ? "bg-white text-black"
                  : "border border-white/10 text-gray-400 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects */}
        {filteredProjects.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onViewDetails={setSelectedProject}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-gray-500">
              No projects found.
            </p>
          </div>
        )}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;