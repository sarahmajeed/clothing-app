import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* importing homepage route */}

    </div>
  );
}

export default App;
