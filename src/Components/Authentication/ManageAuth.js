import React, { useState } from "react";
import NavBar from "../Navbar";
import Container from "../Container";

const sampleArray = [
  { name: "Alpha" },
  { name: "Gamma" },
  { name: "Beta" },
  { name: "Delta" },
];

const ManageAuth = () => {
  const [filteredArray, setFilteredArray] = useState(sampleArray);

  function handleSort(type) {
    switch (type) {
      case "alphabetical(a-z)":
        setFilteredArray(
          [...filteredArray].sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
          })
        );
      case "xyz":
        setFilteredArray(
          [...filteredArray].sort((a, b) => {
            if (a.name < b.name) return 1;
            if (a.name > b.name) return -1;
            else return 0;
          })
        );
    }
  }

  return (
    <div>
      <NavBar />
      <Container>
        <button onClick={() => handleSort("alphabetical(a-z)")}>
          Sort Alphabetically(a-z)
        </button>
        <button onClick={() => handleSort("xyz")}>
          Sort Alphabetically(z-a)
        </button>
        <div className="mt-8">
          {filteredArray.map((item) => (
            <h1>{item.name}</h1>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ManageAuth;
