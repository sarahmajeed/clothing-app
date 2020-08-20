import React, { Component } from "react";

import "./Success.scss";
export class Success extends Component {
  render() {
    //const { value } = this.props;
    return (
      <div className="card">
        <div className="icon">
          <i className="checkmark">✓</i>
        </div>
        <h1 className="Success">Success</h1>
        <p className="lines">
          We received your purchase request;
          <br /> we'll be in touch shortly!
        </p>
      </div>
    );
  }
}

export default Success;
