
const About = () => {
  return (
    <section
      id="about"
      className="bg-black px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-12">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-500">
            About Me
          </p>

          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Building Scalable Applications & AI-Powered Solutions
          </h2>
        </div>

        {/* Content */}
        <div className="grid gap-12 md:grid-cols-2">

          {/* Left */}
          <div>
            <p className="text-lg leading-8 text-gray-400">
              I'm a Software Engineer with nearly 4 years of
              experience designing, developing, and deploying
              scalable, responsive, and user-focused web and
              mobile applications.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              My core expertise includes React.js, Next.js,
              JavaScript, TypeScript, React Native, Node.js,
              Express.js, and MongoDB. I enjoy building
              end-to-end applications, developing reusable
              components, integrating RESTful APIs, and
              creating efficient application architectures.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              Alongside full-stack development, I'm actively
              working with Generative AI technologies,
              including Python, Retrieval-Augmented Generation
              (RAG), Large Language Models (LLMs), LangChain,
              LangGraph, and vector databases such as ChromaDB.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              I also work with AI ecosystems such as OpenAI,
              Anthropic Claude, and Google Gemini, exploring
              prompt engineering and building AI-powered
              applications that solve real-world problems.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              I'm passionate about continuous learning,
              engineering scalable solutions, optimizing
              application performance, and combining modern
              software development with emerging AI technologies.
            </p>
          </div>

          {/* Right - Highlights */}
          <div className="grid grid-cols-2 gap-6">

            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-blue-400/40">
              <h3 className="text-4xl font-bold text-white">
                4+
              </h3>
              <p className="mt-2 text-gray-500">
                Years of Experience
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-blue-400/40">
              <h3 className="text-4xl font-bold text-white">
                10+
              </h3>
              <p className="mt-2 text-gray-500">
                Projects Developed
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-blue-400/40">
              <h3 className="text-3xl font-bold text-white">
                MERN
              </h3>
              <p className="mt-2 text-gray-500">
                Full Stack Development
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-blue-400/40">
              <h3 className="text-3xl font-bold text-white">
                AI + RAG
              </h3>
              <p className="mt-2 text-gray-500">
                Generative AI Development
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
