import React, { useState, useEffect } from "react";
import PantList from "../Lists/PantList/PantList";
import SearchBox from "../SearchBox/SearchBox";

function MenPants() {
  const [pants, setPants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      "http://ec2-15-206-93-116.ap-south-1.compute.amazonaws.com:5000/men/pants",
      {
        method: "get",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setPants(res);
      });
  }, []);
  return (
    <div>
      <SearchBox search={search} setSearch={setSearch} />
      <PantList search={search} pants={pants} setPants={setPants} />
    </div>
  );
}

export default MenPants;
