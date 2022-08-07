import React from "react";
import Total from "../Total/Total";
import {useState} from 'react';


function Divide({value1, value2}) {

const [data, setData] = useState('');

function handleClick() {

  setData(Number(value1) / Number(value2));

}
  
  return(
    <>
    <button onClick={()=>handleClick()}>Divide</button>
    <Total parentToChildDivide={data}/>
    </>
  )
}

export default Divide;