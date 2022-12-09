import React from 'react';
import '../styles/tailwind.css';
import BeachWork from '../assets/beach-work.jpeg';

const Tailwind = () => {
  return (
    <div className="m-6">
      <h1 className="text-3xl font-bold underline text-blue-500">Tailwind Components</h1>
      <div className="sources p-4 bg-blue-200">
        <p className="p-4 m-2 bg-gray-100">Tailwind playlist I'll be working through: &nbsp;
          <a className="bg-indigo-500 text-white px-5 py-3 rounded-lg shadow-lg uppercase text-sm" 
            target="_blank" 
            href="https://www.youtube.com/playlist?list=PL5f_mz_zU5eXWYDXHUDOLBE0scnuJofO0" 
            rel="noreferrer">
            Tailwind Playlist
          </a>
        </p>
        <p className="p-4 m-2 bg-orange-300">
          Tailwind CSS Cheat Sheet: &nbsp;
          <a className="bg-indigo-500 text-white px-5 py-3 rounded-lg shadow-lg uppercase text-sm" 
            target="_blank" 
            href="https://nerdcave.com/tailwind-cheat-sheet" 
            rel="noreferrer">
            Tailwind Cheat Sheet
          </a>
        </p>
      </div>
      
      <div className="p-4 text-center">
        <img className="max-w-xs rounded-lg shadow-xl inline" src={BeachWork} alt="" />
        <h1 className="mt-6 text-2xl font-bold text-gray-800">
          You can work from anywhere.
          <span className="text-indigo-400 inline-block">Take advantage of it.</span>
        </h1>
      </div>
      <div className="space-y-4">
        <h2>These items have top margins because of <code>space-y-4</code> class</h2>
        <div className="items bg-red-500 p-4"></div>
        <div className="items bg-red-500 p-4"></div>
        <div className="items bg-red-500 p-4"></div>
        <div className="items bg-red-500 p-4"></div>
        <div className="items bg-red-500 p-4"></div>
        <div className="items bg-red-500 p-4"></div>
      </div>

    </div>
  )
};

export default Tailwind;