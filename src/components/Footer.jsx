import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#050505] relative overflow-hidden mt-10">
      {/* Top Border with glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none"></div>

      {/* CTA Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 lg:pt-32 lg:pb-24 border-b border-white/5">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            <span className="text-xs text-gray-300 font-medium uppercase tracking-widest">Get Started Today</span>
          </div>
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Ready to transform your <br className="hidden md:block" /> customer experience?
          </h2>
          <p className="text-gray-400 text-base md:text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of modern teams building next-generation AI chatbots. Start for free today and see the value in minutes, not months.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3.5 rounded-xl bg-[#a78bfa] text-gray-900 font-semibold hover:bg-[#b096fa] transition-all shadow-[0_0_20px_rgba(167,139,250,0.3)] hover:shadow-[0_0_30px_rgba(167,139,250,0.5)]">
              Start Building Free
            </button>
            <button className="px-8 py-3.5 rounded-xl bg-white/5 text-white font-medium border border-white/10 hover:bg-white/10 transition-colors">
              Talk to Sales
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 lg:pr-8">
            <a href="#" className="flex items-center gap-2 mb-6 inline-flex group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#a78bfa] to-indigo-600 flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(167,139,250,0.5)] transition-shadow">
                <svg className="w-5 h-5 text-zinc-900" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              </div>
              <span className="text-white font-bold text-xl tracking-wide group-hover:text-[#a78bfa] transition-colors">ChatAI</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              The all-in-one AI chatbot platform for forward-thinking support, sales, and marketing teams. Empower your business with intelligent automation.
            </p>
            {/* Socials */}
            <div className="flex gap-4">
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" aria-label="GitHub" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="mt-4 md:mt-0">
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 text-sm hover:text-[#a78bfa] transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-[#a78bfa] transition-colors">Integrations</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-[#a78bfa] transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-[#a78bfa] transition-colors">Changelog</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-[#a78bfa] transition-colors flex items-center gap-2 group">Docs <span className="bg-white/10 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider group-hover:bg-[#a78bfa]/20 group-hover:text-[#a78bfa] transition-colors">New</span></a></li>
            </ul>
          </div>

          {/* Use Cases */}
          <div className="mt-4 md:mt-0">
            <h4 className="text-white font-semibold mb-6">Use Cases</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 text-sm hover:text-[#a78bfa] transition-colors">Customer Support</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-[#a78bfa] transition-colors">E-commerce</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-[#a78bfa] transition-colors">Lead Generation</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-[#a78bfa] transition-colors">SaaS Platforms</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-[#a78bfa] transition-colors">Healthcare</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="mt-4 md:mt-0">
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 text-sm hover:text-[#a78bfa] transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-[#a78bfa] transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-[#a78bfa] transition-colors flex items-center gap-2 group">Careers <span className="bg-[#a78bfa]/20 text-[#a78bfa] px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider">Hiring</span></a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-[#a78bfa] transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-[#a78bfa] transition-colors">Partners</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ChatAI Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="text-gray-500 text-sm hover:text-[#a78bfa] transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-sm hover:text-[#a78bfa] transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 text-sm hover:text-[#a78bfa] transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
