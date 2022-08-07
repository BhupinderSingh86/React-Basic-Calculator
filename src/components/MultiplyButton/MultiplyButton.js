import React from "react";
import Total from "../Total/Total";
import {useState} from 'react';


function Multiply({value1, value2}) {

const [data, setData] = useState('');

function handleClick() {
  setData(Number(value1) * Number(value2));

}

  
  return(
  <>
  <button onClick={()=>handleClick()}>Multiply</button>
  <Total parentToChildMultiply={data}/>
  </>
  )
}

export default Multiply;