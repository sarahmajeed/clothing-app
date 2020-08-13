import React from "react";
import "./App.scss";
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
import WomenKurtis from "./components/WomenKurtis/WomenKurtis";
import WomenTrousers from "./components/WomenTrousers/WomenTrousers";
import MenPants from "./components/MenPants/MenPants";
import MenShirts from "./components/MenShirts/MenShirts";
import MenKurta from "./components/MenKurta/MenKurta";
import Accessories from "./components/Accessories/Accessories";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* importing homepage route */}
      <Route exact path="/" render={() => <HomePage />} />

      <Route exact path="/signup" render={() => <Signup />} />
      <Route exact path="/signin" render={() => <Signin />} />
      <Route exact path="/about" render={() => <About />} />
      <Route exact path="/women/kurtis" render={() => <WomenKurtis />} />
      <Route exact path="/women/trousers" render={() => <WomenTrousers />} />
      <Route exact path="/men/pants" render={() => <MenPants />} />
      <Route exact path="/men/shirts" render={() => <MenShirts />} />
      <Route exact path="/men/kurta" render={() => <MenKurta />} />
      <Route exact path="/accessories" render={() => <Accessories />} />

      {/* Footer */}
      <footer className="footer">
        <p className="copyright">Copyright &copy; | Brand | Clothing App</p>
      </footer>
    </div>
  );
}

export default App;
