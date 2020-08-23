import React, { Component } from "react";

import "./FormPersonalDetails.scss";
export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    if (
      this.props.value.Email === "" ||
      this.props.value.Address === "" ||
      this.props.value.PhoneNumber === ""
    ) {
      alert("Please enter information");
    } else {
      this.props.nextStep();
    }
  };

  render() {
    const { value, handleChange } = this.props;
    return (
      <div class="main">
        <form class="form">
          <p class="head">Enter Receiver's Detail</p>
          <span className="span"></span>

          {/* input */}
          <div className="input-grp">
            <div className="label">
              <label className="label" htmlFor="name">
                Full Name
              </label>
            </div>
            {/* user-icon */}
            <input
              name="Name"
              type="text"
              value={value.Name}
              onChange={handleChange("Name")}
              placeholder="Name"
              className="input"
              required
            />
            {/* label */}
          </div>

          <div className="input-grp">
            <div className="label">
              <label className="label" htmlFor="email">
                Email
              </label>
            </div>
            {/* Email icon */}
            <input
              name="email"
              type="email"
              value={value.Email}
              onChange={handleChange("Email")}
              placeholder="Email"
              className="input"
              required
            />
          </div>

          <div className="input-grp">
            <div className="label">
              <label className="label" htmlFor="Address">
                Address
              </label>
            </div>
            {/* password icon */}
            <input
              name="Address"
              type="Text"
              value={value.Address}
              onChange={handleChange("Address")}
              placeholder="Address"
              className="input"
              required
            />
          </div>
          <div className="input-grp">
            <div className="label">
              <label className="label" htmlFor="City">
                City
              </label>
            </div>
            <input
              name="City"
              type="Text"
              value={value.City}
              onChange={handleChange("City")}
              placeholder="City"
              className="input"
              required
            />
          </div>

          <div className="input-grp">
            <div className="label">
              <label className="label" htmlFor="Number">
                Phone Number
              </label>
            </div>
            {/* password icon */}
            <input
              name="Phone Number"
              type="tel"
              value={value.PhoneNumber}
              onChange={handleChange("PhoneNumber")}
              placeholder="+923001234567"
              className="input"
              maxlength="13"
              pattern="+[0-9]{12}"
              required
            />
          </div>

          <div className="buttons">
            <button onClick={this.continue} className="btn">
              NEXT
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default FormPersonalDetails;
