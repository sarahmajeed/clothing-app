import React from "react";
import jspdf from "jspdf";

function billreceipt({ quantity }) {
  const jsPDFGnerator = () => {
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
    doc.text(100, 190, "Card Number: 29472894923");
    doc.text(100, 230, "Address:");
    doc.text(100, 270, "Name of item bought:");
    doc.text(100, 310, `Quantity:${quantity}`);
    doc.text(100, 350, "Total Price:");

    doc.save("Receipt.pdf");
  };
  return (
    <div>
      <button className="btn" onClick={jsPDFGnerator}>
        Generate PDF
      </button>
    </div>
  );
}

export default billreceipt;
