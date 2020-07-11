import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AnimatedImages from './components/AnimatedImages/AnimatedImages';

function App() {
  return (
    <div className="App">
      {/* importing homepage route */}
      <Route exact path="/" render={() => <HomePage />} />
      <AnimatedImages />
    </div>
  );
}

export default App;
