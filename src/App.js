import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      {/* importing homepage route */}
      <Route exact path="/" render={() => <HomePage />} />
    </div>
  );
}

export default App;
