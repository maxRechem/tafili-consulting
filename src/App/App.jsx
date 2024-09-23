import './App.css';
import React from 'react';
import { HashRouter  as Router, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Mbc from '../Mbc/Mbc';
import Finance from '../Finance/Finance';
import Contact from '../Contact/Contact';
import Team from '../Company/TeamPage';
import PowerBI from '../powerbi/PowerBI';
import Yetoo from '../Yetoo/Yetoo';
import About from '../AboutAndTeam/AboutAndTeam';
import DataAnalyst from '../DataAnalyst/DataAnalyst';

function App() {
  return (
    <div className="App">
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/home" element={<Home/>} />
              <Route path="/website" element={<Home/>} />
              <Route path="/mbc" element={<Mbc/>} />
              <Route path="/financial" element={<Finance/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/team" element={<Team/>} />
              <Route path="/powerbi" element={<PowerBI/>} />
              <Route path="/yetoo" element={<Yetoo/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/dataanalyst" element={<DataAnalyst/>} />
          </Routes>
      
    </div>
  );
}

export default App;
