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
import AuthNavbar from "./components/AuthNavbar/AuthNavbar";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import IndividualKurti from "./pages/IndividualProduct/IndividualKurti/IndividualKurti";
import IndividualTrouser from "./pages/IndividualTrouser/IndividualTrouser";
import IndividualShirt from "./pages/IndividualShirt/IndividualShirt";
import IndividualKurta from "./pages/IndividualKurta/IndividualKurta";
import IndividualPant from "./pages/IndividualPant/IndividualPant";
import IndividualAcc from "./pages/IndividualAcc/IndividualAcc";
import UserForm from "./components/BillForm/UserForm";
import Bill from "./components/billreceipt/billreceipt";

function App() {
  const [quantity, setQuantity] = useState(0);
  const [isSmall, setIsSmall] = useState(false);
  const [isMedium, setIsMedium] = useState(false);
  const [isLarge, setIsLarge] = useState(false);
  const [id, setId] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState("");
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [kurtiPrice, setKurtiPrice] = useState(0);
  const [trouserPrice, setTrouserPrice] = useState(0);
  const [kurtaPrice, setKurtaPrice] = useState(0);
  const [shirtPrice, setShirtPrice] = useState(0);
  const [pantPrice, setPantPrice] = useState(0);
  const [accPrice, setAccPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const generateTotalPrice = () => {
    if (kurtiPrice !== 0) {
      setTotalPrice(kurtiPrice);
      console.log(totalPrice);
    } else if (kurtaPrice !== 0) {
      setTotalPrice(kurtaPrice);
    } else if (pantPrice !== 0) {
      setTotalPrice(pantPrice);
    } else if (shirtPrice !== 0) {
      setTotalPrice(shirtPrice);
    } else if (accPrice !== 0) {
      setTotalPrice(accPrice);
    }
  };

  const loadUser = (data) => {
    setId(data.id);
    setName(data.name);
    setEmail(data.email);
    setJoined(data.joined);
    setisLoggedIn(true);
  };

  const handleBuyNow = (history) => {
    if (
      kurtiPrice === 0 &&
      trouserPrice === 0 &&
      kurtaPrice === 0 &&
      shirtPrice === 0 &&
      pantPrice === 0 &&
      accPrice === 0
    ) {
      return alert("select an item to buy");
    } else if (
      kurtiPrice !== 0 ||
      trouserPrice !== 0 ||
      kurtaPrice !== 0 ||
      shirtPrice !== 0 ||
      pantPrice !== 0 ||
      accPrice !== 0
    ) {
      generateTotalPrice();
      return history.push("/billingform");
    }
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
      {isLoggedIn ? <AuthNavbar /> : <Navbar />}

      {/* importing homepage route */}
      <Route exact path="/" render={() => <HomePage />} />

      <Route
        exact
        path="/billingform"
        render={() => (
          <UserForm
            quantity={quantity}
            generateTotalPrice={generateTotalPrice}
            totalPrice={totalPrice}
            kurtiPrice={kurtiPrice}
            kurtaPrice={kurtaPrice}
            shirtPrice={shirtPrice}
            pantPrice={pantPrice}
            accPrice={accPrice}
          />
        )}
      />

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
      <Route
        exact
        path="/women/kurtis"
        render={(routeProps) => (
          <WomenKurtis
            updatestate={() => {
              setIsSmall(false);
            }}
          />
        )}
      />
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
            history={routeProps.history}
            handleBuyNow={handleBuyNow}
            kurtiPrice={kurtiPrice}
            setKurtiPrice={setKurtiPrice}
            generateTotalPrice={generateTotalPrice}
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
            history={routeProps.history}
            handleBuyNow={handleBuyNow}
            trouserPrice={trouserPrice}
            setTrouserPrice={setTrouserPrice}
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
            history={routeProps.history}
            handleBuyNow={handleBuyNow}
            isMedium={isMedium}
            shirtPrice={shirtPrice}
            setShirtPrice={setShirtPrice}
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
            kurtaPrice={kurtaPrice}
            setKurtaPrice={setKurtaPrice}
            history={routeProps.history}
            handleBuyNow={handleBuyNow}
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
            history={routeProps.history}
            handleBuyNow={handleBuyNow}
            pantPrice={pantPrice}
            setPantPrice={setPantPrice}
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
            history={routeProps.history}
            handleBuyNow={handleBuyNow}
            accPrice={accPrice}
            setAccPrice={setAccPrice}
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
