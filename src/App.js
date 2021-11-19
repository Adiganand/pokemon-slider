import React, { useState } from "react";
import "./App.css";

const PokemonSlider = ({ size = "250px" }) => {
  const [checked, setChecked] = useState(false);
  let root = document.documentElement;
  root.style.setProperty("--length-of-slider", size);
  return (
    <div
      id='checkbox-container'
      onClick={() => {
        setChecked(!checked);
      }}
    >
      <div id='center-bar'>
        <div id='ball' className={checked ? "checked" : "unchecked"}>
          <div id='red-part'></div>
          <div id='center-black-line'>
            <div id='center-white-circle'></div>
          </div>
          <div id='lower-white-part'></div>
        </div>
      </div>
    </div>
  );
};

export default PokemonSlider;
