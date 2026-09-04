interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  githubUrl: string;
  liveUrl: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({
  project,
  onClose,
}: ProjectModalProps) => {
  if (!project) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl border border-white/10 bg-zinc-950 p-8"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-xl text-gray-500 hover:text-white"
        >
          ✕
        </button>

        <p className="text-sm text-gray-500">
          {project.category}
        </p>

        <h2 className="mt-2 text-3xl font-bold text-white">
          {project.title}
        </h2>

        <p className="mt-6 leading-7 text-gray-400">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md bg-white/5 px-3 py-2 text-sm text-gray-400"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-8 flex gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/10 px-5 py-3 text-sm text-white hover:bg-white/10"
          >
            GitHub
          </a>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-white px-5 py-3 text-sm font-medium text-black hover:bg-gray-200"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;