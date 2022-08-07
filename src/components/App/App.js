import React from "react";
import CalculatorButtons from "../CalculatorButtons/CalculatorButtons";
import CalculatorScreenOne from "../CalculatorScreen1/CalculatorScreen1";
import Add from "../AddButton/AddButton";
import Divide from "../DivideButton/DivideButton";
import Minus from "../MinusButton/MinusButton";
import Multiply from "../MultiplyButton/MultiplyButton";
import { useState } from "react";
import "./App.css";

function App() {
  const [value1, setValueInput1] = useState("");
  const [value2, setValueInput2] = useState("");
  console.log({ value1 });
  console.log({ value2 });

  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <div>
      <h1>Basic Calculator On React</h1>
      <br/>
      <CalculatorScreenOne value={value1} setValue={setValueInput1} />
      <br />
      <br />
      <CalculatorScreenOne value={value2} setValue={setValueInput2} />
      <br />
      <br />
      <CalculatorButtons value={number[0]} />
      <CalculatorButtons value={number[1]} />
      <CalculatorButtons value={number[2]} />
      <br />
      <CalculatorButtons value={number[3]} />
      <CalculatorButtons value={number[4]} />
      <CalculatorButtons value={number[5]} />
      <br />
      <CalculatorButtons value={number[6]} />
      <CalculatorButtons value={number[7]} />
      <CalculatorButtons value={number[8]} />
      <br />
      <CalculatorButtons value={number[9]} />
      <br />
      <br />
      <Add value1={value1} value2={value2} />
      <Divide value1={value1} value2={value2} />
      <Minus value1={value1} value2={value2} />
      <Multiply value1={value1} value2={value2} />
      <br />
    </div>
  );
}

export default App;
