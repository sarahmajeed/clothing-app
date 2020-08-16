import React, { useEffect } from 'react';

import { useState } from 'react';

function IndividualShirt({ id }) {
  const [indShirt, setIndShirt] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/men/shirts/${id}`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setIndShirt(res)
      })
  }, [id])
  return (
    <div className="lightbox-blanket">

      <div classNameName="pop-up-container">
        <div className="pop-up-container-vertical">
          <div className="pop-up-wrapper">
            <div className="go-back">
              <i className="fa fa-arrow-left">

              </i>
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
                  <img
                    src=
                    {indShirt.shirtimg}

                    alt="1"
                  />
                </div>
              </div>
              <div className="product-right">
                <div className="product-description">
                  {indShirt.description}
                </div>
                <div className="product-available">
                  In stock.
            </div>
                <div className="product-color">
                  <label
                    className="product-color-label"
                  >
                    {indShirt.color}
                  </label>
                  <div className="product-color-shades">
                    <ul>
                      <li className="red">S</li>
                      <li className="yellow">M</li>
                      <li className="green">L</li>
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
                    <i className="fa fa-arrow-left">

                    </i>
                  </div>
                  <div>
                    <input
                      type="text"
                      id="product-quantity-input"
                      placeholder="0"
                      value="0"
                    />
                  </div>
                  <div className="product-quantity-add">
                    <i className="fa fa-arrow-right">
                    </i>
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
  )
}

export default IndividualShirt