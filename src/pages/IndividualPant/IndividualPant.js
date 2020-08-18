import React, { useEffect } from "react";

import { useState } from "react";

function IndividualPant({
  id,
  setQuantity,
  handleLarge,
  handleSmall,
  handleMedium,
  isSmall,
  isLarge,
  isMedium,
  quantity,
}) {
  const [indPant, setIndPant] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/men/pants/${id}`, {
      method: "get",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setIndPant(res[0]);
      });
  }, [id]);
  const handleRight = () => {
    if (isSmall === true) {
      if (quantity < indPant.smallquantity) {
        setQuantity(quantity + 1);
      }
    } else if (isMedium === true) {
      if (quantity < indPant.mediumquantity) {
        setQuantity(quantity + 1);
      }
    } else if (isLarge === true) {
      if (quantity < indPant.largequantity) {
        setQuantity(quantity + 1);
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
    } else {
      setQuantity(0);
    }
    console.log("handle Left working");
  };
  return (
    <div className="lightbox-blanket">
      <div classNameName="pop-up-container">
        <div className="pop-up-container-vertical">
          <div className="pop-up-wrapper">
            <div className="go-back">
              <i className="fa fa-arrow-left"></i>
            </div>
            <div className="product-details">
              <div className="product-left">
                <div className="product-info">
                  <div className="product-manufacturer">ELEGANT</div>
                  <div className="product-title">{indPant.tag}</div>
                  <div className="product-price">
                    Rs: {indPant.pantprice}
                    <span className="product-price-cents">00</span>
                  </div>
                </div>
                <div className="product-image">
                  <img src={indPant.pantimg} alt="1" />
                </div>
              </div>
              <div className="product-right">
                <div className="product-description">{indPant.description}</div>
                <div className="product-available">
                  {isSmall
                    ? `${indPant.smallquantity} In stock.`
                    : isLarge
                    ? `${indPant.largequantity} In stock.`
                    : isMedium
                    ? `${indPant.mediumquantity} In stock.`
                    : null}
                  {""}
                  <div className="hid">Please Select a size</div>
                </div>
                <div className="product-color">
                  <label className="product-color-label">{indPant.color}</label>
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
                    <div className="product-checkout-total-amount">0.00</div>
                  </div>
                </div>
                <div className="product-checkout-actions">
                  <a
                    className="add-to-cart"
                    href="www.fb.com"
                    onclick="AddToCart(event);"
                  >
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndividualPant;
