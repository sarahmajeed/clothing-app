import React from "react";
import jspdf from "jspdf";

function billreceipt() {
  const jsPDFGnerator = () => {
    // new document
    var doc = new jspdf("p", "pt");

    doc.text(20, 20, "This is default text");

    doc.setFont("courier");

    // doc.setFontType("normal");

    doc.text(20, 30, "This is text with font");

    doc.save("generated.pdf");
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
