import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-screen pt-32 pb-24 overflow-hidden bg-[#050505] flex flex-col items-center">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 w-full flex flex-col items-center gap-16">

        {/* Top Content */}
        <div className="w-full flex flex-col items-center text-center mt-8">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-[1.2] tracking-tight mb-6 max-w-4xl">
            Instantly Engage Customers with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Smart AI Chatbots</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl">
            Automate conversations, boost sales, and provide 24/7 support with intelligent chatbot solutions tailored for your business.
          </p>

          {/* Input + Button Container */}
          <div className="w-full max-w-lg relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative flex flex-col sm:flex-row items-center bg-[#121212] border border-white/10 rounded-3xl sm:rounded-full p-1.5 focus-within:border-purple-500/50 transition-colors gap-2 sm:gap-0">
              <input
                type="email"
                placeholder="Enter your business email"
                className="w-full bg-transparent text-white px-5 py-3 rounded-full outline-none placeholder-gray-500 text-sm sm:text-base text-center sm:text-left"
              />
              <button className="w-full sm:w-auto whitespace-nowrap bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-400 hover:to-indigo-400 text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 rounded-full transition-all duration-300 shadow-lg shadow-purple-500/25">
                Get your AI Agent
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Image Mockup */}
        <div className="w-full relative flex justify-center mt-4 mb-10">

          {/* Main Image Container */}
          <div className="relative w-full max-w-3xl rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 z-20">
            {/* Bottom Gradient overlay so it blends softly */}
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent z-10 pointer-events-none"></div>
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop"
              alt="Woman smiling while holding and looking at her mobile phone"
              className="w-full h-auto object-cover aspect-[4/3] md:aspect-[21/9] opacity-80"
            />
          </div>

          {/* Floating Message 1 (Left Side) */}
          <div className="absolute left-2 sm:left-10 md:-left-8 top-10 sm:top-16 bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/10 rounded-2xl rounded-tr-sm p-3 sm:p-4 shadow-2xl z-30 animate-[bounce_3s_ease-in-out_infinite] max-w-[180px] sm:max-w-[240px]">
            <div className="flex gap-3 items-start sm:items-center">
              <img src="https://i.pravatar.cc/100?img=5" alt="User Profile" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/20 shrink-0" />
              <div>
                <p className="text-[11px] sm:text-sm text-gray-200">How do I integrate this chatbot on my site?</p>
              </div>
            </div>
          </div>

          {/* Floating Message 2 (Right Side) */}
          <div className="absolute right-2 sm:right-10 md:-right-8 bottom-20 sm:bottom-24 bg-gradient-to-r from-purple-500/90 to-indigo-500/90 backdrop-blur-xl border border-white/20 rounded-2xl rounded-tl-sm p-3 sm:p-4 shadow-2xl z-30 animate-[bounce_4s_ease-in-out_infinite_1s] max-w-[200px] sm:max-w-[260px]">
            <div className="flex gap-3 items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center shadow-lg shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <div>
                <p className="text-[11px] sm:text-sm font-medium text-white shadow-sm">It takes 2 minutes! Plus, I provide 24/7 support.</p>
              </div>
            </div>
          </div>

          {/* Status Badge (Bottom Left) */}
          <div className="absolute left-6 sm:left-16 md:left-4 bottom-10 sm:bottom-12 bg-[#121212]/90 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 shadow-2xl z-30 flex items-center gap-2">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-[10px] sm:text-xs font-semibold text-gray-200 uppercase tracking-wider">Agent Ready</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
