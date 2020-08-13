import React from "react";
import "./PictureDiscription.scss";

import dummy from "../../images/1.jpg";

const PictureDiscription = () => {
  return (
    <div className="PictureDiscription">
      <section className="picture">
        <img class="image" src={dummy} alt="dummy" />
      </section>
      <section className="discription">
        <div className="namePrice">
          <h1 className="ItemName">Test Name</h1>
          <h1 className="ItemPrice">PKR 10,000</h1>
        </div>
      </section>
    </div>
  );
};

export default PictureDiscription;
