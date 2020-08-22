import React, { Component } from "react";
import jspdf from "jspdf";
import { Link } from "react-router-dom";

import "./Success.scss";

export class Success extends Component {
  jsPDFGnerator = () => {
    let today = new Date();
    let date =
      today.getDate() + "-" + today.getMonth() + "-" + today.getFullYear();
    // new document
    let doc = new jspdf("p", "pt");

    doc.text(200, 50, "ELEGANT CLOTHING RECEIPT");

    doc.setFont("arial");

    // doc.setFontType("normal");
    doc.text(400, 100, `Date: ${date}`);

    doc.text(100, 150, "Name: Sarah Majeed");
    doc.text(100, 190, `Card Number: ${this.props.value.CardNumber}`);
    doc.text(100, 230, `Address:${this.props.value.Address}`);
    doc.text(100, 270, "Name of item bought:");
    doc.text(100, 310, "Quantity:");
    doc.text(100, 350, "Total Price:");

    doc.save("Receipt.pdf");
  };
  render() {
    //const { value } = this.props;
    return (
      <div className="whole">
        <div className="card-success">
          <div className="icon">
            <Link className="link" to="/">
              <i className="checkmark">✓</i>
            </Link>
          </div>
          <h1 className="Success">Success</h1>
          <p className="lines">
            We received your purchase request;
            <br /> we'll be in touch shortly!
          </p>
          <button className="btn" onClick={this.jsPDFGnerator}>
            GENERATE PDF
          </button>
        </div>
      </div>
    );
  }
}

export default Success;
