import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-4 transition-all duration-300 ${isScrolled ? 'pt-4' : 'pt-6'}`}>
      <nav
        className={`flex items-center justify-between w-full max-w-6xl px-6 py-3 mx-auto border-b border-white/10 rounded-full transition-all duration-300 ${isScrolled
          ? 'bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 shadow-lg'
          : 'bg-transparent border border-transparent'
          }`}
      >
        {/* Left: Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 text-white font-bold text-sm shadow-lg shadow-purple-500/20">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-xl font-bold text-white tracking-wide">Moco AI</span>
        </div>

        {/* Center: Navigation links */}
        <div className="hidden md:flex items-center gap-8">
          {['Home', 'Features', 'Use Cases', 'Pricing'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right: CTA Button */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block px-5 py-2 text-sm font-semibold text-gray-900 transition-all duration-300 rounded-full bg-gradient-to-r from-purple-100 to-indigo-100 hover:brightness-110 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            Try Free
          </button>

          {/* Mobile Menu Icon */}
          <button className="md:hidden text-gray-300 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
