import React from "react";
import "./styles.css";
import { useState } from "react";

var carDB = {
  offRoader: [
    {
      name: "Mahindra Thar 2020",
      rating: "4/5",
      description:
        "Thar is a Mahindra's flagship vehicle with the most promising 2020 upgrade since its inception"
    },
    {
      name: "Maruti Suzuki Gimny",
      rating: "3.5/5",
      description:
        "Gimny is an upcoming Maruti suv cum off roader with 5 and 7 seater variants"
    },
    {
      name: "Maruti Suzuki Gypsy",
      rating: "4/5",
      description:
        "Maruti Suzuki Gypsy is a discontinued vehicle by the Maruti and Suzuki jv"
    }
  ],

  compactSuv: [
    {
      name: "Hyundai Creta",
      rating: "5/5",
      description:
        "Hyundai Creta is a top performer in sales in compact SUV segment"
    },
    {
      name: "Kia Seltos",
      rating: "3.5/5",
      description:
        "Kia made its debut in India with its Seltos model. Major concerns with Kia cars in India includes use of log grade metal in manufacturing"
    },
    {
      name: "Tata Nexon",
      rating: "5/5",
      description:
        "Tata amazes with its tough build quality and better on road presence through vehicles like Nexon and Harrier"
    }
  ],
  suv: [
    {
      name: "Mahindra Scorpio",
      rating: "2/5",
      description:
        "Scorpio range has been a top performer in sales due to its value for money and aggressive on road presence. However, safety is a big concern for potential buyers of Scorpio"
    },
    {
      name: "Tata Safari",
      rating: "5/5",
      description:
        "The new Safari 2021 announced in 2020 is expected to come with the same Range Rover acrchitecture which hosts Tata Harrier."
    },
    {
      name: "Toyota Fortuner",
      rating: "5/5",
      description:
        "Fortuner has been an undisputed king in king-size SUV segment having competition with Ford's Endeavour"
    }
  ]
};

export default function App() {
  var [selectedCat, setCat] = useState("offRoader");

  const catClickHandler = (cat) => {
    setCat(cat);
  };

  return (
    <div className="App">
      <h1> Global NCAP Ratings </h1>
      <p style={{ fontSize: "smaller", fontWeight: "bold" }}>
        {" "}
        Checkout NCAP ratings of your favourite car. Select a build category to
        get started{" "}
      </p>

      <div>
        {Object.keys(carDB).map((cat) => (
          <button onClick={() => catClickHandler(cat)}>{cat}</button>
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
              <div style={{ fontSize: "smaller" }}> {e.description} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
