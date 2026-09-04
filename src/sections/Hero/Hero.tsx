const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-black px-6 pt-24"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-8xl">
            Sangram
            <br />
            <span className="text-gray-500">Nandi.</span>
          </h1>

          <h2 className="mt-6 text-2xl font-medium text-gray-300 sm:text-3xl">
            Software Engineer
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            I build responsive, scalable, and user-focused web applications
            using React.js, TypeScript, Node.js, and modern web technologies.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-white/20 px-6 py-3 font-medium text-white transition hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-gray-500 transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href="#"
              className="text-sm text-gray-500 transition hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="text-sm text-gray-500 transition hover:text-white"
            >
              Resume
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-500 md:flex"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <span className="text-lg">↓</span>
      </a>
    </section>
  );
};

export default Hero;