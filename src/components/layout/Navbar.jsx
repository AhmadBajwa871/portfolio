import React, { useState, useEffect } from 'react';
import { Code, Menu, X } from 'lucide-react';
import { NAV_LINKS, PERSONAL_INFO } from '../../utils/constants';
import { scrollToSection, useScrollSpy } from '../../hooks/useScrollSpy';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const activeSection = useScrollSpy(
    NAV_LINKS.map((link) => link.id)
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 right-0 z-[1000] w-full py-4 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/30 backdrop-blur-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-5">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-4">
            <Code className="w-6 h-6 text-primary" />
            <button
              onClick={() =>
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
              className="text-2xl font-bold bg-gradient-to-r from-primary via-primary/50 to-primary/30 bg-clip-text text-transparent"
            >
              {PERSONAL_INFO.name.split(' ')[0]}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-base font-medium transition-all duration-300 ${
                  activeSection === link.id
                    ? 'text-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => handleNavClick('contact')}
              className="px-7 py-3.5 bg-white text-[#212121] font-medium rounded-[17px] hover:bg-white/90 transition-all"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen
              ? 'max-h-[500px] opacity-100 mt-4'
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-5 bg-black/80 backdrop-blur-lg p-6 rounded-xl">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left text-lg font-medium ${
                  activeSection === link.id
                    ? 'text-white'
                    : 'text-white/70'
                }`}
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => handleNavClick('contact')}
              className="mt-3 px-6 py-3 bg-white text-black rounded-xl"
            >
              Hire Me
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;