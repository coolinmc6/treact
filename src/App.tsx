import React, { useState } from 'react';
import Home from './components/Home'
import Random from './components/Random';
import Tailwind from './components/Tailwind'
import ZustandBasics from './components/ZustandBasics';
import Navigation from './components/Navigation';
import './App.css';


function App() {
  const [nav, setNav] = useState('home');
  const pages = [
    { name: 'Home', active: nav === 'home' },
    { name: 'Random', active: nav === 'random' },
    { name: 'Tailwind', active: nav === 'tailwind' },
    { name: 'Zustand', active: nav === 'zustand' },
  ]
  const handleClick = (nav: string) => setNav(nav.toLowerCase());
  return (
    <div className="App">
      <Navigation pages={pages} handleClick={handleClick} />
      {nav === 'home' && <Home />}
      {nav === 'random' && <Random />}
      {nav === 'tailwind' && <Tailwind />}
      {nav === 'zustand' && <ZustandBasics />}
    </div>
  );
}

export default App;
