import React from 'react';

const Features = () => {
  const messages = [
    "Check my order status",
    "How can I change my billing address?",
    "How can I modify my client's pending order?",
    "Can you cancel my order?"
  ];

  return (
    <section id="features" className="relative w-full py-20 lg:py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Subtle Purple Glow Accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none translate-y-1/2"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col gap-24 lg:gap-32">

        {/* =========================================
            BLOCK 1: Chatbot UI Left, Text Right
            ========================================= */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left Side: Chatbot UI Card */}
          <div className="w-full lg:w-1/2 flex justify-center">

            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 shadow-[0_0_30px_rgba(167,139,250,0.05)] backdrop-blur-xl group hover:border-purple-500/30 transition-all duration-500 hover:scale-[1.03] flex flex-col items-center justify-center w-[280px] sm:w-[320px] aspect-square">

              {/* Inner Gradient border glow illusion */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#a78bfa]/10 to-transparent rounded-2xl pointer-events-none opacity-50"></div>

              <div className="relative z-10 flex flex-col space-y-2.5 sm:space-y-3 w-full">
                {messages.map((text, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 sm:gap-3 bg-zinc-900 border border-white/5 rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 hover:bg-zinc-800 transition-colors duration-300 w-full group/item cursor-pointer shadow-sm">
                    {/* Left: Avatar/Icon */}
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#a78bfa]/20 to-indigo-500/20 flex items-center justify-center border border-white/10 shrink-0 shadow-inner group-hover/item:border-[#a78bfa]/30 transition-colors">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#a78bfa]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    </div>
                    {/* Center: Text */}
                    <p className="flex-1 text-gray-200 text-[11px] sm:text-xs font-medium leading-tight tracking-wide">
                      {text}
                    </p>
                    {/* Right: Rounded Square Button */}
                    <button className="w-6 h-6 sm:w-7 sm:h-7 bg-white/5 border border-white/10 rounded-md flex items-center justify-center hover:bg-[#a78bfa] hover:border-[#a78bfa] hover:text-gray-900 text-gray-400 transition-all shrink-0">
                      <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight lg:leading-snug max-w-sm">
              Smarter Conversations with AI Assistance
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mt-5 lg:mt-6 leading-relaxed max-w-lg font-medium">
              Discover how intelligent chatbots transform customer experiences across industries, business functions, and more.
            </p>
            <button className="mt-8 lg:mt-10 rounded-full bg-[#a78bfa] text-gray-900 font-semibold px-8 py-3.5 transition-all duration-300 hover:bg-[#b096fa] hover:shadow-[0_0_25px_rgba(167,139,250,0.5)]">
              Sign up free
            </button>
          </div>

        </div>

        {/* =========================================
            BLOCK 2: Text Left, UI Scanner Right
            ========================================= */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left Side: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight lg:leading-snug max-w-lg">
              Scanning with AI Assist
            </h2>
            <p className="text-gray-400 text-base sm:text-base mt-4 lg:mt-6 leading-relaxed max-w-md font-medium">
              Turn conversations into conversions. Suggest relevant products, recover abandoned carts, and guide customers to purchase with intelligent, real-time recommendations — all in real time.
            </p>
            <button className="mt-8 lg:mt-8 rounded-full bg-[#a78bfa] text-gray-900 font-semibold px-8 py-3.5 transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_25px_rgba(167,139,250,0.4)]">
              Sign up free
            </button>
          </div>

          {/* Right Side: Scanner UI Card */}
          <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">

            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 shadow-[0_0_30px_rgba(167,139,250,0.05)] backdrop-blur-xl group hover:border-purple-500/30 transition-all duration-500 hover:scale-[1.03] flex flex-col items-center justify-center w-[280px] sm:w-[320px] aspect-square">

              {/* Inner Gradient border glow illusion */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#a78bfa]/10 to-transparent rounded-2xl pointer-events-none opacity-50"></div>

              {/* Radar Container */}
              <div className="relative w-48 h-48 flex items-center justify-center mt-2">

                {/* Concentric Circles */}
                <div className="absolute inset-0 border border-white/10 rounded-full"></div>
                <div className="absolute inset-6 border border-white/10 rounded-full"></div>
                <div className="absolute inset-12 border border-white/10 rounded-full"></div>

                {/* Center Icon */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-[#a78bfa]/30 to-indigo-600/30 border border-[#a78bfa]/50 flex items-center justify-center shadow-[0_0_20px_rgba(167,139,250,0.5)]">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>

                {/* Scanning Animation Arc */}
                <div className="absolute inset-0 rounded-full overflow-hidden animate-[spin_3s_linear_infinite] opacity-50">
                  <div className="w-1/2 h-1/2 bg-gradient-to-br from-[#a78bfa]/50 to-transparent origin-bottom-right"></div>
                </div>

                {/* Floating Icons */}
                <div className="absolute -top-1 right-6 w-7 h-7 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center animate-pulse z-20 shadow-md">
                  <svg className="w-3.5 h-3.5 text-purple-300" fill="currentColor" viewBox="0 0 20 20"><path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2h-2.5l-3.5 3.5v-3.5H4a2 2 0 01-2-2V5z" /></svg>
                </div>

                <div className="absolute bottom-6 -right-2 w-7 h-7 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center animate-[pulse_2s_infinite] z-20 shadow-md">
                  <svg className="w-3.5 h-3.5 text-emerald-300" fill="currentColor" viewBox="0 0 20 20"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" /></svg>
                </div>

                <div className="absolute bottom-2 -left-1 w-7 h-7 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center animate-[pulse_3s_infinite] z-20 shadow-md">
                  <svg className="w-3.5 h-3.5 text-blue-300" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                </div>

              </div>

              {/* Bottom Label */}
              <div className="mt-8 inline-flex items-center gap-2 bg-black/60 border border-white/5 rounded-full px-4 py-1.5 z-10 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#a78bfa] animate-pulse"></span>
                <span className="text-xs text-gray-300 font-medium tracking-wide">Scanning requests...</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Features;
