import React from "react";
import "./App.scss";
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";

import About from "./pages/About/About";
import PictureDiscription from "./pages/PictureDiscription/PictureDiscription";

import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* importing homepage route */}
      <Route exact path="/" render={() => <HomePage />} />

      <Route exact path="/signup" render={() => <Signup />} />
      <Route exact path="/signin" render={() => <Signin />} />
      <Route exact path="/about" render={() => <About />} />

      {/* Footer */}
      <footer className="footer">
        <p className="copyright">Copyright &copy; | Brand | Clothing App</p>
      </footer>
    </div>
  );
}

export default App;
