import React from 'react';
import "./Button.css"
const Button = ({ buttonText,  onClick }) => {
  return (
    
    <div className = "Buttons">
        <button onClick={onClick}>   {buttonText}   </button>
    </div>
  );
};

export default Button;
