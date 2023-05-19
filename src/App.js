import React from 'react';
import Button from './Button';
import "./App.css"
const App = () => {
  const handleButtonClick1 = () => {
    alert('I am Button 1 clicked');
  };

  const handleButtonClick2 = () => {
    alert('I am Button 2 clicked');
  };

  const buttonStyle1 = {
    color: 'white',
    background: 'red',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const buttonStyle2 = {
    color: 'white',
    background: 'blue',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  

  

  return (
    <div className = "Buttons">
      <Button  className= "style1"
        buttonText="Button 1"
         buttonStyle={buttonStyle1}
        onClick={handleButtonClick1}
      />

      <Button 
        buttonText="Button 2"
         buttonStyle={buttonStyle2}
        onClick={handleButtonClick2}
        className="buttonStyle2"
      />
    </div>
  );
};

export default App;
