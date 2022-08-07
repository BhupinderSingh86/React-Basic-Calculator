import React from "react";

function CalculatorScreenOne({ value, setValue }) {
  function handleChange(e) {
    // extract value from event
    // keep value in state
    const newValue = e.target.value;
    setValue(newValue);
  }

  return (
    <>
      <input
        size="100"
        value={value}
        onChange={handleChange}
        placeholder="enter a number"
      />
      <button onClick={() => setValue("")}>clear input</button>
    </>
  );
}

export default CalculatorScreenOne;
