import React, { Component } from "react";

import "./FormPersonalDetails.scss";
export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  previous = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      Name,
      Email,
      Address,
      City,
      PhoneNumber,
      CardNumber,
    } = this.props.value;
    return (
      <div class="main">
        <form class="form">
          <p class="head">Confirm Details</p>
          <span className="span"></span>
          <div className="info">
            <div className="line-info">
              {" "}
              <div className="info-label">NAME</div>
              <div className="info-value">{this.props.value.Name}</div>{" "}
            </div>
            <div className="line-info">
              {" "}
              <div className="info-label">Email</div>
              <div className="info-value">{this.props.value.Email}</div>{" "}
            </div>
            <div className="line-info">
              {" "}
              <div className="info-label">Address</div>
              <div className="info-value">{this.props.value.Address}</div>{" "}
            </div>
            <div className="line-info">
              {" "}
              <div className="info-label">City</div>
              <div className="info-value">{this.props.value.City}</div>{" "}
            </div>
            <div className="line-info">
              {" "}
              <div className="info-label">Phone Number</div>
              <div className="info-value">
                {this.props.value.PhoneNumber}
              </div>{" "}
            </div>
            <div className="line-info">
              {" "}
              <div className="info-label">Card Number</div>
              <div className="info-value">
                {this.props.value.CardNumber}
              </div>{" "}
            </div>
          </div>
          <div className="buttons">
            <button onClick={this.previous} className="btn">
              Back
            </button>
            <button onClick={this.continue} className="btn">
              Confirm
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Confirm;
