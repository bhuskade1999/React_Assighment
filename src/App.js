 import React from "react"
import './App.css';
import MultipleInputs from "./components/forms/MultipleInputs";


function App() {
  // let [text, settext] = useState("")
  
  // const handleChange = (e)=>{
  //   settext(e.target.value)
  // }
  return (
    // <div className="App">
    //   <div className ="textarea">
    //    <textarea className = "area" type="text"  value={text} onChange ={handleChange}></textarea>
    //    </div>

    //    <button className ="button" onClick={()=>{
    //     let newText = text
    //     settext(newText.toUpperCase())
    //    }}> 
    //    Submit
    //    </button>
       
    //    <div>
    //     <p>{text}</p>
    //     </div>
      
    // </div>
<div>
  <MultipleInputs />
</div>

    
  );
}

export default App;
