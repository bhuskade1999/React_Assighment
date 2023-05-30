
import React, { useState } from 'react';
import './Quotes.css'

const quotes = [

  "Success is No Accident",
  "Don’t Count the Days, Make the Days Count",
  "Don’t Wait for Opportunity, Create it",
  "Either Run the Day or the Day Runs You",
  "When You Feel Like Quitting, Remember Why You Started",
  "Great Things Never Come From Comfort Zones",
  "The Real Risk is Doing Nothing",
  "Success is Walking from Failure to Failure",
  "Action is the Foundational Key to Success",
  "In the End We Only Regret the Chances We Didn’t Take",
  "Success is Where Preparation & Opportunity Meet"

];

const Quotes = () => {
  const [randomQuote, setRandomQuote] = useState('');

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    setRandomQuote(quote);
    //alert(randomQuote)
  };

  return (
    <div className = "container">
      <h2>Random Quote Generator</h2>
      <button onClick={generateRandomQuote}>Generate Quote</button>
      {/* {randomQuote && <p>{randomQuote}</p>} */}
      <p>{randomQuote}</p>
    </div>
  );
};

export default Quotes;
