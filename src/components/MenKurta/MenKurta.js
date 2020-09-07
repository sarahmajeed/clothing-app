import React, { useState, useEffect } from "react";
import KurtaList from "../Lists/KurtaList/KurtaList";
import SearchBox from "../SearchBox/SearchBox";

function MenKurta({ updateSmall, updateLarge, updateMedium, updateQuantity }) {
  const [kurtas, setKurtas] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    updateSmall();
    updateLarge();
    updateMedium();
    updateQuantity();
    fetch(
      "http://ec2-15-206-93-116.ap-south-1.compute.amazonaws.com:5000/men/kurta",
      {
        method: "get",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setKurtas(res);
      });
  }, []);
  return (
    <div>
      <SearchBox search={search} setSearch={setSearch} />
      <KurtaList search={search} kurtas={kurtas} setKurtas={setKurtas} />
    </div>
  );
}

export default MenKurta;
