import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Slideshow from './components/SildeShow/Slideshow';


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* importing homepage route */}
      <Slideshow />


    </div>
  );
}

export default App;
