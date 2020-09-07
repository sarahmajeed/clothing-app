import React, { useState, useEffect } from "react";
import KurtiList from "../Lists/KurtiList/KurtiList";

import SearchBox from "../SearchBox/SearchBox";

function WomenKurtis({ updatestate }) {
  const [kurtis, setKurtis] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    updatestate();
    fetch(
      "http://ec2-15-206-93-116.ap-south-1.compute.amazonaws.com:5000/women/kurtis",
      {
        method: "get",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        // setIsSmall(false);
        // setIsLarge(false);
        // setIsMedium(false);
        setKurtis(res);
      });
  });

  return (
    <div className="all-kurtis">
      <SearchBox search={search} setSearch={setSearch} />
      <KurtiList search={search} kurtis={kurtis} setKurtis={setKurtis} />
    </div>
  );
}

export default WomenKurtis;
