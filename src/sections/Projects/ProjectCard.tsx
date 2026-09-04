interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  githubUrl: string;
  liveUrl: string;
}

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

const ProjectCard = ({
  project,
  onViewDetails,
}: ProjectCardProps) => {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-2 hover:border-white/20">

      {/* Image */}
      <div className="mb-6 flex h-48 items-center justify-center rounded-xl bg-white/5">
        <span className="text-gray-600">
          Project Preview
        </span>
      </div>

      {/* Category */}
      <p className="text-sm text-gray-500">
        {project.category}
      </p>

      {/* Title */}
      <h3 className="mt-2 text-2xl font-semibold text-white">
        {project.title}
      </h3>

      {/* Description */}
      <p className="mt-4 line-clamp-3 leading-7 text-gray-400">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-md bg-white/5 px-3 py-1.5 text-xs text-gray-400"
          >
            {technology}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="mt-6 flex items-center gap-5">

        <button
          onClick={() => onViewDetails(project)}
          className="text-sm text-white transition hover:text-gray-400"
        >
          View Details →
        </button>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-500 transition hover:text-white"
        >
          GitHub
        </a>

      </div>
    </div>
  );
};

export default ProjectCard;