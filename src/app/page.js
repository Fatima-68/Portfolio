import React from 'react';
import About from './components/About';
import Welcomepage from './components/Welcomepage';
import Portfolio from './components/Portfolio';
import Portfolioshowcase from './components/Portfolioshowcase';
import Endpage from './components/Endpage';


export default function HomePage() {
  return (
  <div className="min-h-screen bg-[#0b1120] text-white flex flex-col items-center justify-center px-4">
    <nav className="w-full flex justify-between items-center py-6 px-8 text-sm fixed top-0 left-0 bg-[#121e3d] z-50 shadow-md">
        <div className="font-bold text-lg">FATIMA SALEEM</div>
        <div className="space-x-6">
        <a href="#Home" className="hover:text-pink-400">Home</a>
        <a href="#About" className="hover:text-pink-400">About</a>
        <a href="#Portfolio" className="hover:text-pink-400">Portfolio</a>
        <a href="#Contact" className="hover:text-pink-400">Contact</a>
        </div>
      </nav>
    {/* Sections */}
    <div id="Home" >
        <Welcomepage />
      </div>

      <div id="About" >
        <About />
      </div>

      <div id="Portfolio" >
        <Portfolio />
      </div>

      <div id="Portfolioshowcase" >
        <Portfolioshowcase />
      </div>

      <div id="Contact" >
        <Endpage />
      </div>

    </div>
  );
}