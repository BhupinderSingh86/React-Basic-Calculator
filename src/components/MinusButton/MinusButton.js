import React from "react";
import Total from "../Total/Total";
import {useState} from 'react';


function Minus({value1, value2}) {

const [data, setData] = useState('');

function handleClick() {
  setData(Number(value1) - Number(value2));
  console.log("I was clicked");
}
  
  return(
  <>
  <button onClick={()=>handleClick()}>Minus</button>
  <Total parentToChildMinus={data}/>
  </>
  )
}

export default Minus;