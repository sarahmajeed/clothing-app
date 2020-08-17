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
      value: { Name, Email, Address, City, PhoneNumber, CardNumber },
    } = this.props;
    return (
      <div class="main">
        <form class="form">
          <p class="head">Confirm Details</p>
          <span className="span"></span>

          <div className="buttons">
            <button onClick={this.continue} className="btn">
              Confirm
            </button>
            <button onClick={this.previous} className="btn">
              Back
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Confirm;
