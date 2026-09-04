import { useState } from "react";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      const sectionTop =
        section.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: sectionTop - 90,
        behavior: "smooth",
      });
    }

    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="text-2xl font-bold text-white"
        >
          SN.
        </button>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">

          <button
            onClick={() => scrollToSection("home")}
            className="text-gray-400 transition hover:text-white"
          >
            Home
          </button>

          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-400 transition hover:text-white"
          >
            About
          </button>

          <button
            onClick={() => scrollToSection("skills")}
            className="text-gray-400 transition hover:text-white"
          >
            Skills
          </button>

          <button
            onClick={() => scrollToSection("experience")}
            className="text-gray-400 transition hover:text-white"
          >
            Experience
          </button>

          <button
            onClick={() => scrollToSection("projects")}
            className="text-gray-400 transition hover:text-white"
          >
            Projects
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-400 transition hover:text-white"
          >
            Contact
          </button>

          

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl text-white md:hidden"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-black px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">

            <button
              onClick={() => scrollToSection("home")}
              className="text-left text-gray-400 hover:text-white"
            >
              Home
            </button>

            <button
              onClick={() => scrollToSection("about")}
              className="text-left text-gray-400 hover:text-white"
            >
              About
            </button>

            <button
              onClick={() => scrollToSection("skills")}
              className="text-left text-gray-400 hover:text-white"
            >
              Skills
            </button>

            <button
              onClick={() => scrollToSection("experience")}
              className="text-left text-gray-400 hover:text-white"
            >
              Experience
            </button>

            <button
              onClick={() => scrollToSection("projects")}
              className="text-left text-gray-400 hover:text-white"
            >
              Projects
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-left text-gray-400 hover:text-white"
            >
              Contact
            </button>

        

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;