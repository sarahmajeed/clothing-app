import React from "react";
import { useState } from "react";
import "./PictureDiscription.scss";

import dummy1 from "../../images/1.jpg";
import dummy2 from "../../images/1A.jpg";
import dummy3 from "../../images/2A.jpg";
import dummy4 from "../../images/3A.jpg";

const PictureDiscription = ({data,visible,setVisible}) => {
  const productData = data;

  const GoBack = () => {
    setVisible(false);
  };

  return (
    <body>
      {visible ? (
        <div class="lightbox-blanket">
          <div class="pop-up-container">
            <div class="pop-up-container-vertical">
              <div class="pop-up-wrapper">
                <div class="go-back" onClick={GoBack}>
                  <i class="fa fa-arrow-left"></i>
                </div>
                <div class="product-details">
                  <div class="product-left">
                    <div class="product-info">
                      <div class="product-manufacturer">NOOK</div>
                      <div class="product-title">{productData.title}</div>
                      <div class="product-price">
                        {productData.price}
                        <span class="product-price-cents">00</span>
                      </div>
                    </div>
                    <div class="product-image">
                      <img src={productData.image} alt="1" />
                    </div>
                  </div>
                  <div class="product-right">
                    <div class="product-description">
                      Designer Karim Rashid continues to put his signature spin
                      on all genres of design through various collaborations
                      with top-notch companies. Another one to add to the win
                      column is his work with Italian manufacturer Chateau d’Ax.
                    </div>
                    <div class="product-available">
                      In stock.{" "}
                      <span class="product-extended">
                        <a href="#">Buy Extended Warranty</a>
                      </span>
                    </div>
                    <div class="product-rating">
                      <i class="fa fa-star rating" star-data="1"></i>
                      <i class="fa fa-star rating" star-data="2"></i>
                      <i class="fa fa-star rating" star-data="3"></i>
                      <i class="fa fa-star" star-data="4"></i>
                      <i class="fa fa-star" star-data="5"></i>
                      <div class="product-rating-details">
                        (3.1 - <span class="rating-count">1203</span> reviews)
                      </div>
                    </div>
                    <div class="product-quantity">
                      <label
                        for="product-quantity-input"
                        class="product-quantity-label"
                      >
                        Quantity
                      </label>
                      <div class="product-quantity-subtract">
                        <i class="fa fa-chevron-left"></i>
                      </div>
                      <div>
                        <input
                          type="text"
                          id="product-quantity-input"
                          placeholder="0"
                          value="0"
                        />
                      </div>
                      <div class="product-quantity-add">
                        <i class="fa fa-chevron-right"></i>
                      </div>
                    </div>
                  </div>
                  <div class="product-bottom">
                    <div class="product-checkout">
                      Total Price
                      <div class="product-checkout-total">
                        <i class="fa fa-usd"></i>
                        <div class="product-checkout-total-amount">0.00</div>
                      </div>
                    </div>
                    <div class="product-checkout-actions">
                      <a
                        class="add-to-cart"
                        href="#"
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
      ) : null}
    </body>
  );
};

export default PictureDiscription;
