import React, { useState } from 'react';
import "./Counter.css"

import {
    BsFillCaretDownFill,
    BsFillCaretLeftFill,
    BsFillCaretRightFill,
    BsFillCaretUpFill
  } from  "react-icons/bs"
  





const Counter = () => {
  let [count, setCount] = useState(0);

  const incrementByOne = () => {
    setCount(count + 1);
  };

  const decrementByOne = () => {
    setCount(count - 1);
  };

  const incrementByTen = () => {
    setCount(count + 10);
  };

  const decrementByTen = () => {
    setCount(count - 10);
    
  };

  return (
    <div className ="Container">
      <h2> {count}</h2>

      <div  className="up"> 
      <button onClick={incrementByOne}> <BsFillCaretUpFill/> </button>
       </div>
      
      <div className="down"> 
       <button  onClick={decrementByOne}> <BsFillCaretDownFill/></button> 
       </div>

     <div className="left">
        <button  onClick={decrementByTen}> <BsFillCaretLeftFill/> </button>
        </div>

        <div className="right">
        <button  onClick={incrementByTen}> <BsFillCaretRightFill/> </button>
        </div>

       
    </div>
  );
};

export default Counter;
