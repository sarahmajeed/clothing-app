import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Signup from './components/Signup/Signup';
import Signin from './components/Signin/Signin'

function App() {
  return (
    <div className="App">
      {/* importing homepage route */}
      <Route exact path="/" render={() => <HomePage />} />
      <Route exact path="/signup" render={() => <Signup />} />
      <Route exact path="/signin" render={() => <Signin />} />
    </div>
  );
}

export default App;
