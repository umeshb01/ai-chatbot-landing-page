import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Navbar />
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[80vh]">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-center tracking-tight text-gray-900 mb-6 drop-shadow-sm">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">AI-Chatbot</span>
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-10">
          This is a landing page built with React, Vite, and Tailwind CSS. The navbar component has been successfully created.
        </p>
      </main>
    </div>
  );
}

export default App;
