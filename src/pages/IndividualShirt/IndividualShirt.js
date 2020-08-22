import React, { useEffect } from "react";

import { useState } from "react";

function IndividualShirt({
  id,
  setQuantity,
  handleLarge,
  handleSmall,
  handleMedium,
  isSmall,
  isLarge,
  isMedium,
  quantity,
  history,
  handleBuyNow,
  setShirtPrice,
  shirtPrice,
}) {
  const [indShirt, setIndShirt] = useState([]);
  useEffect(() => {
    fetch(
      `http://ec2-15-206-93-116.ap-south-1.compute.amazonaws.com:5000//men/shirts/${id}`,
      {
        method: "get",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setIndShirt(res[0]);
      });
  }, [id]);
  const handleRight = () => {
    if (isSmall === true) {
      if (quantity < indShirt.smallquantity) {
        setQuantity(quantity + 1);
        setShirtPrice(parseInt(shirtPrice) + parseInt(indShirt.shirtprice));
      }
    } else if (isMedium === true) {
      if (quantity < indShirt.mediumquantity) {
        setQuantity(quantity + 1);
        setShirtPrice(parseInt(shirtPrice) + parseInt(indShirt.shirtprice));
      }
    } else if (isLarge === true) {
      if (quantity < indShirt.largequantity) {
        setQuantity(quantity + 1);
        setShirtPrice(parseInt(shirtPrice) + parseInt(indShirt.shirtprice));
      }
    } else {
      const hidden = document.querySelector(".hid");
      hidden.classList.add("visible");
    }
    console.log("handle right working");
  };
  const handleLeft = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setShirtPrice(parseInt(shirtPrice) - parseInt(indShirt.shirtprice));
    } else {
      setQuantity(0);
    }
    console.log("handle Left working");
  };

  const handleShirtBack = (history) => {
    setQuantity(0);
    setShirtPrice(0);
    return history.push("/men/shirts");
  };

  return (
    <div className="lightbox-blanket">
      <div classNameName="pop-up-container">
        <div className="pop-up-container-vertical">
          <div className="pop-up-wrapper">
            <div className="go-back">
              <i
                onClick={() => handleShirtBack(history)}
                className="fa fa-arrow-left"
              ></i>
            </div>
            <div className="product-details">
              <div className="product-left">
                <div className="product-info">
                  <div className="product-manufacturer">ELEGANT</div>
                  <div className="product-title">{indShirt.tag}</div>
                  <div className="product-price">
                    Rs: {indShirt.shirtprice}
                    <span className="product-price-cents">00</span>
                  </div>
                </div>
                <div className="product-image">
                  <img src={indShirt.shirtimg} alt="1" />
                </div>
              </div>
              <div className="product-right">
                <div className="product-description">
                  {indShirt.description}
                </div>
                <div className="product-available">
                  {isSmall
                    ? `${indShirt.smallquantity} In stock.`
                    : isLarge
                    ? `${indShirt.largequantity} In stock.`
                    : isMedium
                    ? `${indShirt.mediumquantity} In stock.`
                    : null}
                  {""}
                  <div className="hid">Please Select a size</div>
                </div>
                <div className="product-color">
                  <label className="product-color-label">
                    {indShirt.color}
                  </label>
                  <div className="product-color-shades">
                    <ul>
                      <li onClick={handleSmall} className="red">
                        S
                      </li>
                      <li onClick={handleMedium} className="yellow">
                        M
                      </li>
                      <li onClick={handleLarge} className="green">
                        L
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-quantity">
                  <label
                    for="product-quantity-input"
                    className="product-quantity-label"
                  >
                    Quantity
                  </label>
                  <div className="product-quantity-subtract">
                    <i onClick={handleLeft} className="fa fa-arrow-left"></i>
                  </div>
                  <div>
                    <input
                      type="text"
                      id="product-quantity-input"
                      placeholder="0"
                      value={quantity}
                    />
                  </div>
                  <div className="product-quantity-add">
                    <i onClick={handleRight} className="fa fa-arrow-right"></i>
                  </div>
                </div>
              </div>
              <div className="product-bottom">
                <div className="product-checkout">
                  Total Price
                  <div className="product-checkout-total">
                    <i className="fa fa-usd"></i>
                    <div className="product-checkout-total-amount">
                      {shirtPrice}
                    </div>
                  </div>
                </div>
                <div className="product-checkout-actions">
                  <button onClick={() => handleBuyNow(history)} className="btn">
                    buy now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndividualShirt;
