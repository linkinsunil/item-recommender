import React from "react";
import "./styles.css";
import { useState } from "react";

var carDB = {
  offRoader: [
    { name: "Mahindra Thar 2020", rating: "4/5" },
    { name: "Maruti Suzuki Gimny", rating: "3.5/5" }
  ],

  compactSuv: [
    {
      name: "Hyundai Creta",
      rating: "5/5"
    },
    {
      name: "Kia Seltos",
      rating: "3.5/5"
    }
  ],
  suv: [
    {
      name: "Mahindra Scorpio",
      rating: "2/5"
    },
    {
      name: "Tata Harrier",
      rating: "5/5"
    }
  ]
};

export default function App() {
  var [selectedCat, setCat] = useState("offRoader");
  function catClickHandler(cat) {
    setCat(cat);
  }
  return (
    <div className="App">
      <h1> NCAP ratings </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout NCAP ratings of your favourite car. Select a build category to
        get started{" "}
      </p>

      <div>
        {Object.keys(carDB).map((cat) => (
          <button
            onClick={() => catClickHandler(cat)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {cat}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {carDB[selectedCat].map((e) => (
            <li
              key={e.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {e.name} </div>
              <div style={{ fontSize: "smaller" }}> {e.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
