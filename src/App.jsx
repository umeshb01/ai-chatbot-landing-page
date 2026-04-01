import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import FeaturesVisual from './components/FeaturesVisual';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <FeaturesVisual />
      </main>
      <Footer />
    </div>
  );
}

export default App;
