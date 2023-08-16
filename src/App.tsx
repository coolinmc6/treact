import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Random from './components/Random';
import SICFitness from './components/SICFitness';
import SpeakIt from './components/SpeakIt';
import SwipeableParent from './components/Swipeable';
import Tailwind from './components/Tailwind'
import ZustandBasics from './components/ZustandBasics';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  const [nav, setNav] = useState('home');
  const pages = [
    { name: 'Home', path: '/' },
    { name: 'Random', path: '/random' },
    { name: 'SICFitness', path: '/sicfitness' },
    { name: 'SpeakIt', path: '/speakit'},
    { name: 'Swipeable', path: '/swipeable' },
    { name: 'Tailwind', path: '/tailwind' },
    { name: 'Zustand', path: '/zustand' },
  ]
  const handleClick = (nav: string) => {
    console.log(nav);
    setNav(nav.toLowerCase())
  };
  return (
    <BrowserRouter basename="/treact">
      <div className="App">
      <Navigation pages={pages} />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/random" Component={Random} />
          <Route path="/sicfitness" Component={SICFitness} />
          <Route path="/speakit" Component={SpeakIt} />
          <Route path="/swipeable" Component={SwipeableParent} />
          <Route path="/tailwind" Component={Tailwind} />
          <Route path="/zustand" Component={ZustandBasics} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
