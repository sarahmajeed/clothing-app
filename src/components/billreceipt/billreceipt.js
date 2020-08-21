import React from "react";
import jspdf from "jspdf";

function billreceipt() {
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

    doc.text(100, 120, "Name: Sarah Majeed");

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
