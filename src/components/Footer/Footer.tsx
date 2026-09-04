const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-white/10 bg-black px-6 py-10">
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          {/* Logo / Copyright */}
          <div>
            <button
              onClick={scrollToTop}
              className="text-xl font-bold text-white"
            >
              SN.
            </button>

            <p className="mt-2 text-sm text-gray-500">
              © 2026 Sangram Nandi. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 transition hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 transition hover:text-white"
            >
              Resume
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;