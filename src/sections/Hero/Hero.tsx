
const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-black px-6 pt-24"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/[0.08] blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-500/[0.05] blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="max-w-5xl">

          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-8xl">
            Sangram
            <br />
            <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
              Nandi.
            </span>
          </h1>

          {/* Professional Title */}
          <h2 className="mt-7 text-2xl font-semibold text-white sm:text-3xl">
            Software Engineer
          </h2>

          <p className="mt-3 text-lg font-medium text-blue-400 sm:text-xl">
            Full Stack Development | Generative AI
          </p>

          {/* Description */}
          <p className="mt-7 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg">
            Software Engineer with nearly 4 years of experience building
            scalable web applications, SaaS platforms, and AI-powered
            solutions. Experienced in React.js, Next.js, Node.js,
            Python, and modern Generative AI technologies, including
            RAG, LLMs, LangChain, and LangGraph.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="rounded-lg bg-white px-7 py-3.5 font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-gray-200"
            >
              Explore My Work
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-white/20 px-7 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-white/50 hover:bg-white/10"
            >
              Let's Connect
            </a>

          </div>

          {/* Social Links */}
          <div className="mt-12 flex flex-wrap items-center gap-7">

            <a
              href="https://github.com/sangram72"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-500 transition hover:text-white"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/sangram-nandi-2831ba180/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-500 transition hover:text-white"
            >
              LinkedIn ↗
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-500 transition hover:text-white"
            >
              Download Resume ↗
            </a>

          </div>

          {/* Experience Highlight */}
          <div className="mt-14 flex flex-wrap gap-10 border-t border-white/10 pt-8">

            <div>
              <h3 className="text-3xl font-bold text-white">4+</h3>
              <p className="mt-1 text-sm text-gray-500">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">Full Stack</h3>
              <p className="mt-1 text-sm text-gray-500">
                Web & Mobile Development
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">AI / RAG</h3>
              <p className="mt-1 text-sm text-gray-500">
                Generative AI Development
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-500 transition hover:text-white md:flex"
      >
        <span className="text-xs uppercase tracking-widest">
          Scroll to explore
        </span>
        <span className="animate-bounce text-xl">↓</span>
      </a>
    </section>
  );
};

export default Hero;
