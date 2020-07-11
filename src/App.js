import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AnimatedImages from './components/AnimatedImages/AnimatedImages';

import Navbar from './components/Navbar/Navbar';
import Slideshow from './components/Slideshow/Slideshow';



function App() {
  return (
    <div className="App">
      <Navbar />
      {/* importing homepage route */}
      <Route exact path="/" render={() => <HomePage />} />
      <Slideshow />
      <AnimatedImages />


    </div>
  );
}

export default App;
