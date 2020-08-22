import React, { Component } from "react";

import "./Confirm.scss";
export class Confirm extends Component {
 constructor()
 {
   super();
 
 this.handleConfirm = this.handleConfirm.bind(this);
 }
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  previous = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  handleConfirm = (event) => {
    event.preventDefault();
    fetch("http://localhost:5000/billingform", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.props.value.Name,
        email: this.props.value.Email,
        address: this.props.value.Address,
        contact: this.props.value.PhoneNumber,
        city: this.props.value.City,
        card: this.props.value.CardNumber
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        if (user) {
          this.props.routeProps.history.push("/");
          this.props.loadUser(user);
          console.log(user);
        }
      });
    
  }
  
  render() {
    //const { value } = this.props;
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
