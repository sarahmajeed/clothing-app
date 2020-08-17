import React, { Component } from "react";

import "./FormPersonalDetails.scss";

export class FormBillingDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  previous = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { value, handleChange } = this.props;
    return (
      <div class="main">
        <form class="form">
          <p class="head">Enter Billing Detail</p>
          <span className="span"></span>

          {/* input */}
          <div className="input-grp">
            <div className="label">
              <label className="label" htmlFor="CardNumber">
                Card Number
              </label>
            </div>
            {/* user-icon */}
            <input
              name="CardNumber"
              type="text"
              value={value.CardNumber}
              onChange={handleChange("CardNumber")}
              placeholder="Enter 15 digit Card Number"
              className="input"
              maxlength="15"
              required
            />
          </div>

          <div className="input-grp">
            <div className="label">
              <label className="label" htmlFor="Comments">
                Any Comments
              </label>
            </div>
            {/* Email icon */}
            <textarea
              name="Comments"
              type="Text"
              value={value.Comments}
              onChange={handleChange("Comments")}
              placeholder="Write Any Comments"
              className="input"
              rows="5"
              required
            />
          </div>

          <div className="buttons">
            <button onClick={this.continue} className="btn">
              PREVOIUS
            </button>
            <button onClick={this.previous} className="btn">
              NEXT
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default FormBillingDetails;
