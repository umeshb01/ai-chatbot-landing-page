import React from 'react';

const FeaturesVisual = () => {
  return (
    <section className="w-full py-20 lg:py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center">
        {/* Header */}
        <div className="text-center max-w-[600px] mb-16 lg:mb-20">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Build Your AI Chatbot, Your Way
          </h2>
          <p className="text-gray-400 text-base md:text-lg mx-auto">
            Create powerful, custom AI experiences tailored perfectly to your business needs, with tools designed for every step of the journey.
          </p>
        </div>

        {/* Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Card 1: A/B Testing */}
          <div className="group bg-white/5 border border-white/10 rounded-3xl p-6 lg:p-8 hover:scale-[1.03] hover:border-purple-500/30 transition-all duration-300 flex flex-col shadow-xl">
            <div className="h-56 w-full relative mb-8 flex items-center justify-center bg-black/40 rounded-2xl border border-white/5 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-50"></div>
              
              {/* Circular UI */}
              <div className="relative w-36 h-36 rounded-full border border-dashed border-purple-500/30 flex items-center justify-center">
                 {/* Decorative outer ring */}
                 <div className="absolute inset-2 rounded-full border border-purple-500/10 animate-[spin_10s_linear_infinite]"></div>
                 {/* Glow element */}
                 <div className="absolute inset-0 bg-purple-500/5 rounded-full blur-xl mix-blend-screen"></div>

                 {/* Center Label */}
                 <div className="relative z-10 w-24 h-24 rounded-full bg-purple-900/40 backdrop-blur-md border border-purple-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(167,139,250,0.2)]">
                   <span className="text-purple-200 text-sm font-semibold tracking-wide text-center leading-tight shadow-sm">A/B<br/>testing</span>
                 </div>
              </div>

              {/* Stats badges */}
              <div className="absolute left-6 bottom-6 px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20 shadow-lg backdrop-blur-sm">
                <span className="text-green-400 text-[10px] font-bold uppercase tracking-wider block mb-0.5">Win Rate A</span>
                <span className="text-white text-sm font-semibold">68%</span>
              </div>
              <div className="absolute right-6 top-6 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 shadow-lg backdrop-blur-sm">
                <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider block mb-0.5">Win Rate B</span>
                <span className="text-gray-200 text-sm font-semibold">32%</span>
              </div>
            </div>
            <h3 className="text-white text-xl font-semibold mb-3 tracking-tight">A/B Testing & Optimization</h3>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">
              Continuously experiment with different conversation flows and responses to maximize engagement and conversion rates.
            </p>
          </div>

          {/* Card 2: Visual Chatbot Builder */}
          <div className="group bg-white/5 border border-white/10 rounded-3xl p-6 lg:p-8 hover:scale-[1.03] hover:border-purple-500/30 transition-all duration-300 flex flex-col shadow-xl">
            <div className="h-56 w-full relative mb-8 flex items-center justify-center bg-black/40 rounded-2xl border border-white/5 overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-transparent opacity-50"></div>
               
               {/* Flow Diagram */}
               <div className="relative w-full h-full flex flex-col items-center justify-center">
                 {/* Top Node */}
                 <div className="px-5 py-2.5 bg-zinc-800/80 backdrop-blur-md border border-white/10 rounded-xl text-xs text-gray-200 font-medium shadow-md z-10">User Intent</div>
                 
                 {/* Connections */}
                 <div className="w-px h-8 bg-gradient-to-b from-white/20 to-indigo-500/50 my-1"></div>
                 
                 <div className="w-32 h-px bg-white/10 relative">
                   <div className="absolute left-0 top-0 w-px h-6 bg-white/10 pb-6"></div>
                   <div className="absolute right-0 top-0 w-px h-6 bg-white/10 pb-6"></div>
                 </div>
                 
                 {/* Bottom Nodes */}
                 <div className="flex w-full justify-center gap-8 mt-5 z-10">
                   <div className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-xs text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.1)] backdrop-blur-md font-medium">Condition</div>
                   <div className="px-4 py-2 bg-purple-500/20 border border-purple-500/40 rounded-xl text-xs text-purple-200 shadow-[0_0_20px_rgba(167,139,250,0.2)] backdrop-blur-md font-semibold">Set response</div>
                 </div>

                 {/* Decorative arrows */}
                 <svg className="absolute w-4 h-4 text-indigo-500/50 top-1/2 left-[calc(50%-4.5rem)] -translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                 <svg className="absolute w-4 h-4 text-purple-500/50 top-1/2 right-[calc(50%-4.5rem)] -translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
               </div>
            </div>
            <h3 className="text-white text-xl font-semibold mb-3 tracking-tight">Visual Chatbot Builder</h3>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">
              Design complex logic with a simple, intuitive drag-and-drop interface. No coding required to build smart conversational flows.
            </p>
          </div>

          {/* Card 3: All-in-One Integrations */}
          <div className="group bg-white/5 border border-white/10 rounded-3xl p-6 lg:p-8 hover:scale-[1.03] hover:border-purple-500/30 transition-all duration-300 flex flex-col shadow-xl">
            <div className="h-56 w-full relative mb-8 flex items-center justify-center bg-black/40 rounded-2xl border border-white/5 overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-bl from-pink-500/10 via-transparent to-transparent opacity-50"></div>
               
               <div className="relative w-full h-full flex items-center justify-center">
                 {/* Hub Connection Rings */}
                 <div className="absolute inset-0 m-auto w-24 h-24 border border-white/5 rounded-full"></div>
                 <div className="absolute inset-0 m-auto w-40 h-40 border border-white/5 rounded-full border-dashed opacity-50"></div>
                 <div className="absolute inset-0 m-auto w-56 h-56 border border-white/5 rounded-full opacity-30"></div>
                 
                 {/* Center Hub */}
                 <div className="relative z-10 w-20 h-20 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center shadow-[0_0_25px_rgba(255,255,255,0.05)] backdrop-blur-xl">
                    <span className="text-gray-200 text-[11px] font-bold tracking-widest uppercase">Integration</span>
                 </div>

                 {/* Orbiting Icons */}
                 <div className="absolute z-20 w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 backdrop-blur-md flex items-center justify-center -translate-y-20 shadow-lg group-hover:scale-110 transition-transform duration-500">
                   <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
                 </div>
                 <div className="absolute z-20 w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md flex items-center justify-center translate-x-16 translate-y-10 shadow-lg group-hover:scale-110 transition-transform duration-500 delay-75">
                   <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M12 5l7 7-7 7" /></svg>
                 </div>
                 <div className="absolute z-20 w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 backdrop-blur-md flex items-center justify-center -translate-x-16 translate-y-10 shadow-lg group-hover:scale-110 transition-transform duration-500 delay-150">
                   <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                 </div>
               </div>
            </div>
            <h3 className="text-white text-xl font-semibold mb-3 tracking-tight">All-in-One Integrations</h3>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">
              Connect effortlessly with your favorite CRM, messaging platforms, and internal tools in just a few clicks.
            </p>
          </div>

          {/* Card 4: Real-Time Analytics & Insights */}
          <div className="group bg-white/5 border border-white/10 rounded-3xl p-6 lg:p-8 hover:scale-[1.03] hover:border-purple-500/30 transition-all duration-300 flex flex-col shadow-xl">
            <div className="h-56 w-full relative mb-8 flex flex-col justify-end bg-black/40 rounded-2xl border border-white/5 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 via-transparent to-transparent opacity-50"></div>
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
              
              {/* Stats Overlay */}
              <div className="absolute top-6 left-6 right-6 z-20 flex justify-between">
                <div className="bg-zinc-900/80 border border-white/10 rounded-lg px-3 py-2 shadow-lg backdrop-blur-md">
                  <span className="text-gray-500 block text-[9px] uppercase tracking-widest font-bold mb-0.5">Total Chats</span>
                  <span className="text-white font-semibold text-lg leading-none">12,492</span>
                </div>
                <div className="bg-zinc-900/80 border border-white/10 rounded-lg px-3 py-2 shadow-lg backdrop-blur-md text-right">
                  <span className="text-gray-500 block text-[9px] uppercase tracking-widest font-bold mb-0.5">Avg Time</span>
                  <div className="flex items-center gap-1 justify-end">
                    <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>
                    <span className="text-emerald-400 font-semibold text-sm leading-none">+14%</span>
                  </div>
                </div>
              </div>

              {/* Chart line SVG */}
              <div className="relative z-10 w-full h-32 pt-12">
                <svg viewBox="0 0 300 100" className="w-full h-full overflow-visible drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="lineGradient" x1="0" x2="1" y1="0" y2="0">
                      <stop offset="0%" stopColor="rgba(52,211,153,0.2)" />
                      <stop offset="50%" stopColor="rgba(52,211,153,1)" />
                      <stop offset="100%" stopColor="rgba(52,211,153,0.4)" />
                    </linearGradient>
                    <linearGradient id="fillGradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="rgba(52,211,153,0.2)" />
                      <stop offset="100%" stopColor="rgba(52,211,153,0)" />
                    </linearGradient>
                  </defs>
                  
                  {/* The filled area under the line */}
                  <path d="M0,80 C40,70 70,90 120,40 C170,-10 220,60 300,20 L300,100 L0,100 Z" fill="url(#fillGradient)" stroke="none" />
                  
                  {/* The stroke line */}
                  <path d="M0,80 C40,70 70,90 120,40 C170,-10 220,60 300,20" fill="none" stroke="url(#lineGradient)" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                  
                  {/* Highlight Point */}
                  <g className="translate-x-[120px] translate-y-[40px]">
                    <circle cx="0" cy="0" r="12" fill="rgba(52,211,153,0.2)" className="animate-ping" />
                    <circle cx="0" cy="0" r="5" fill="#34d399" className="shadow-[0_0_15px_#34d399]" />
                    <circle cx="0" cy="0" r="2" fill="#fff" />
                    
                    {/* Tooltip dot */}
                    <path d="M-1,15 L1,15 L1,35 L-1,35 Z" fill="rgba(52,211,153,0.3)" />
                  </g>
                </svg>
              </div>

            </div>
            <h3 className="text-white text-xl font-semibold mb-3 tracking-tight">Real-Time Analytics & Insights</h3>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">
              Monitor bot performance, track user sentiment, and uncover actionable insights with highly visual dashboards.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesVisual;
