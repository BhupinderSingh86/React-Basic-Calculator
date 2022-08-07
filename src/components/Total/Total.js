import React from "react";


function Total({parentToChildPlus, parentToChildDivide, parentToChildMinus, parentToChildMultiply}) {
  
// if (parentToChildPlus || parentToChildDivide || parentToChildMinus || parentToChildMultiply === ''){
//   return <p>Total: <span>0</span></p>
// } else {
//   <Total/>
// }


  return (<p>Total: <span>{parentToChildPlus}{parentToChildDivide}{parentToChildMinus}{parentToChildMultiply}</span></p>);
}

export default Total;