const About = () => {
  return (
    <section id="about" className="bg-black px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-12">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-500">
            About Me
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-12 md:grid-cols-2">

          {/* Left */}
          <div>
            <p className="text-lg leading-8 text-gray-400">
              I'm a Software Engineer with 3.8+ years of experience building
              responsive, scalable, and user-focused web and mobile
              applications.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              My primary expertise is in React.js, React Native, JavaScript,
              TypeScript, Node.js, and the MERN stack. I build modern web
              applications with React.js and cross-platform mobile
              applications with React Native for both Android and iOS.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              I'm particularly interested in frontend architecture,
              reusable components, state management, API integration,
              performance optimization, and creating smooth experiences
              across web and mobile platforms.
            </p>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-6">

            <div className="rounded-xl border border-white/10 p-6">
              <h3 className="text-4xl font-bold text-white">
                3+
              </h3>

              <p className="mt-2 text-gray-500">
                Years of Experience
              </p>
            </div>

            <div className="rounded-xl border border-white/10 p-6">
              <h3 className="text-4xl font-bold text-white">
                10+
              </h3>

              <p className="mt-2 text-gray-500">
                Projects
              </p>
            </div>

            <div className="rounded-xl border border-white/10 p-6">
              <h3 className="text-4xl font-bold text-white">
                Web + Mobile
              </h3>

              <p className="mt-2 text-gray-500">
                Development
              </p>
            </div>

            <div className="rounded-xl border border-white/10 p-6">
              <h3 className="text-4xl font-bold text-white">
                React Native
              </h3>

              <p className="mt-2 text-gray-500">
                Android & iOS
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;