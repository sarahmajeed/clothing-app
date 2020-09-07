import React, { useEffect } from "react";

import { useState } from "react";

function IndividualAcc({
  id,
  setQuantity,
  handleLarge,
  handleSmall,
  handleMedium,
  isSmall,
  isLarge,
  isMedium,
  quantity,
  handleBuyNow,
  accPrice,
  setAccPrice,
  history,
}) {
  const [indAcc, setIndAcc] = useState([]);
  useEffect(() => {
    fetch(
      `http://ec2-15-206-93-116.ap-south-1.compute.amazonaws.com:5000/accessories/${id}`,
      {
        method: "get",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setIndAcc(res[0]);
      });
  }, [id]);
  const handleRight = () => {
    if (quantity < indAcc.quantity) {
      setQuantity(quantity + 1);
      setAccPrice(parseInt(accPrice) + parseInt(indAcc.accprice));
    }

    console.log("handle right working");
  };
  const handleLeft = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setAccPrice(parseInt(accPrice) - parseInt(indAcc.accprice));
    } else {
      setQuantity(0);
    }
    console.log("handle Left working");
  };
  const handleAccBack = (history) => {
    setQuantity(0);
    setAccPrice(0);
    return history.push("/accessories");
  };
  return (
    <div className="lightbox-blanket">
      <div classNameName="pop-up-container">
        <div className="pop-up-container-vertical">
          <div className="pop-up-wrapper">
            <div className="go-back">
              <i
                onClick={() => handleAccBack(history)}
                className="fa fa-arrow-left"
              ></i>
            </div>
            <div className="product-details">
              <div className="product-left">
                <div className="product-image">
                  <img src={indAcc.accimg} alt="1" />
                </div>
              </div>
              <div className="product-right">
                <div className="product-info">
                  <div className="product-manufacturer">ELEGANT</div>
                  <div className="product-title">{indAcc.tag}</div>
                  <div className="product-price">Rs: {indAcc.accprice}</div>
                </div>
                <div className="product-description">{indAcc.description}</div>
                <div className="product-available">
                  {`${indAcc.quantity} in stock`}
                </div>
                <div className="product-color">
                  <label className="product-color-label">{indAcc.color}</label>
                  {/* <div className="product-color-shades">
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
                  </div> */}
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
                    <i className=""></i>
                    <div className="product-checkout-total-amount">
                      {"RS: " + accPrice}
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

export default IndividualAcc;
