import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-10 top-0 left-0 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-indigo-600 tracking-tighter">AI-Chatbot</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium">Features</a>
            <a href="#" className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium">Pricing</a>
            <a href="#" className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium">About</a>
            <button className="bg-indigo-600 text-white px-5 py-2 rounded-full font-medium hover:bg-indigo-700 transition-colors duration-200 shadow-md hover:shadow-lg">
              Get Started
            </button>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-700 hover:text-indigo-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
