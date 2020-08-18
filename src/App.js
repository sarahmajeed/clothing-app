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
import IndividualKurti from "./pages/IndividualProduct/IndividualKurti/IndividualKurti";
import IndividualTrouser from "./pages/IndividualTrouser/IndividualTrouser";
import IndividualShirt from "./pages/IndividualShirt/IndividualShirt";
import IndividualKurta from "./pages/IndividualKurta/IndividualKurta";
import IndividualPant from "./pages/IndividualPant/IndividualPant";
import IndividualAcc from "./pages/IndividualAcc/IndividualAcc";

function App() {
  const [quantity, setQuantity] = useState(0);
  const [isSmall, setIsSmall] = useState(false);
  const [isMedium, setIsMedium] = useState(false);
  const [isLarge, setIsLarge] = useState(false);
  const [id, setId] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState("");

  const loadUser = (data) => {
    setId(data.id);
    setName(data.name);
    setEmail(data.email);
    setJoined(data.joined);
  };

  const handleSmall = () => {
    const hidden = document.querySelector(".hid");
    hidden.classList.remove("visible");
    setIsLarge(false);
    setIsMedium(false);
    setIsSmall(true);

    console.log("inside small");
  };
  const handleMedium = () => {
    const hidden = document.querySelector(".hid");
    hidden.classList.remove("visible");
    setIsSmall(false);
    setIsLarge(false);
    setIsMedium(true);
    console.log("inside Medium");
  };
  const handleLarge = () => {
    const hidden = document.querySelector(".hid");
    hidden.classList.remove("visible");
    setIsLarge(true);
    setIsMedium(false);
    setIsSmall(false);
    console.log("inside Large");
  };

  return (
    <div className="App">
      <Navbar />
      {/* importing homepage route */}
      <Route exact path="/" render={() => <HomePage />} />

      <Route
        exact
        path="/signup"
        render={(routeProps) => (
          <Signup loadUser={loadUser} routeProps={routeProps} />
        )}
      />
      <Route
        exact
        path="/signin"
        render={(routeProps) => (
          <Signin loadUser={loadUser} routeProps={routeProps} />
        )}
      />
      <Route exact path="/about" render={() => <About />} />
      <Route exact path="/women/kurtis" render={() => <WomenKurtis />} />
      <Route exact path="/women/trousers" render={() => <WomenTrousers />} />
      <Route exact path="/men/pants" render={() => <MenPants />} />
      <Route exact path="/men/shirts" render={() => <MenShirts />} />
      <Route exact path="/men/kurta" render={() => <MenKurta />} />
      <Route exact path="/accessories" render={() => <Accessories />} />
      <Route
        exact
        path="/women/kurtis/:id"
        render={(routeProps) => (
          <IndividualKurti
            id={routeProps.match.params.id}
            // handleRight={handleRight}
            quantity={quantity}
            // handleLeft={handleLeft}
            setQuantity={setQuantity}
            handleMedium={handleMedium}
            handleLarge={handleLarge}
            handleSmall={handleSmall}
            isSmall={isSmall}
            isLarge={isLarge}
            isMedium={isMedium}
          />
        )}
      />
      <Route
        exact
        path="/women/trousers/:id"
        render={(routeProps) => (
          <IndividualTrouser
            id={routeProps.match.params.id}
            setQuantity={setQuantity}
            quantity={quantity}
            handleMedium={handleMedium}
            handleLarge={handleLarge}
            handleSmall={handleSmall}
            isSmall={isSmall}
            isLarge={isLarge}
            isMedium={isMedium}
          />
        )}
      />
      <Route
        exact
        path="/men/shirts/:id"
        render={(routeProps) => (
          <IndividualShirt
            id={routeProps.match.params.id}
            setQuantity={setQuantity}
            quantity={quantity}
            handleMedium={handleMedium}
            handleLarge={handleLarge}
            handleSmall={handleSmall}
            isSmall={isSmall}
            isLarge={isLarge}
            isMedium={isMedium}
          />
        )}
      />
      <Route
        exact
        path="/men/kurta/:id"
        render={(routeProps) => (
          <IndividualKurta
            id={routeProps.match.params.id}
            setQuantity={setQuantity}
            quantity={quantity}
            handleMedium={handleMedium}
            handleLarge={handleLarge}
            handleSmall={handleSmall}
            isSmall={isSmall}
            isLarge={isLarge}
            isMedium={isMedium}
          />
        )}
      />
      <Route
        exact
        path="/men/pants/:id"
        render={(routeProps) => (
          <IndividualPant
            id={routeProps.match.params.id}
            setQuantity={setQuantity}
            quantity={quantity}
            handleMedium={handleMedium}
            handleLarge={handleLarge}
            handleSmall={handleSmall}
            isSmall={isSmall}
            isLarge={isLarge}
            isMedium={isMedium}
          />
        )}
      />
      <Route
        exact
        path="/accessories/:id"
        render={(routeProps) => (
          <IndividualAcc
            id={routeProps.match.params.id}
            setQuantity={setQuantity}
            quantity={quantity}
            handleMedium={handleMedium}
            handleLarge={handleLarge}
            handleSmall={handleSmall}
            isSmall={isSmall}
            isLarge={isLarge}
            isMedium={isMedium}
          />
        )}
      />

      {/* Footer */}
      <footer className="footer">
        <p className="copyright">Copyright &copy; | Brand | Elegant Clothing</p>
      </footer>
    </div>
  );
}

export default App;
