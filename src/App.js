import React, { useState } from "react";
import { travelData } from "./Dataset";

import "./styles.css";

let travelPlace = Object.keys(travelData);

export default function App() {
  const [selectedRegion, setRegion] = useState("About Uttrakhand");

  function getTravelPlace(region) {
    setRegion(region);
  }

  return (
    <div className="App">
      <h1>
        {" "}
        <strong>Uttrakhand Travel</strong> 🧭
      </h1>
      <h2>The Land of Gods and Home of The Himalayas...! </h2>
      <hr />
      <div className="buttonBlock">
        {travelPlace.map((region) => {
          return (
            <button key={region} onClick={() => getTravelPlace(region)}>
              {region}
            </button>
          );
        })}
      </div>
      {travelData[selectedRegion].map((place) => {
        return (
          <div className="place">
            <div className="image">
              <img src={place.image} className="image" alt="place"></img>
            </div>
            <div className="info">
              <h1 className="name">{place.name}</h1>
              <p className="description">{place.description}</p>
              <h3 className="region">Region : {place.region}</h3>
              <h4 className="time">Best Time : {place.bestTime}</h4>
            </div>
          </div>
        );
      })}

      <footer>
        <small>
          Made with ❤️ by{" "}
          <a href="https://krishportfolio.netlify.app/">Krish</a>
        </small>
      </footer>
    </div>
  );
}
