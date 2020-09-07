import React, { useEffect, useState } from "react";
import TrouserList from "../Lists/TrouserList/TrouserList";
import SearchBox from "../SearchBox/SearchBox";

function WomenTrousers({ updateSmall, updateLarge, updateMedium }) {
  const [trousers, setTrousers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    updateSmall();
    updateLarge();
    updateMedium();
    fetch(
      "http://ec2-15-206-93-116.ap-south-1.compute.amazonaws.com:5000/women/trousers",
      {
        method: "get",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setTrousers(res);
      });
  }, []);

  return (
    <div>
      <SearchBox search={search} setSearch={setSearch} />
      <TrouserList
        search={search}
        trousers={trousers}
        setTrousers={setTrousers}
      />
    </div>
  );
}

export default WomenTrousers;
