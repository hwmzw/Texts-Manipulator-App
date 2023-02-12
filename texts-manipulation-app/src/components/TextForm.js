import React, {useState} from "react";


export default function TextForm(props) {

    const [text, setText]=useState(".")
    
    //fuction to convert to upper case
    const UpperCase = () => {
        const newText=text.toUpperCase()
        setText(newText)
    }

    //function to convert to lowercase
    const LowerCase = () => {
      const newText=text.toLowerCase()
      setText(newText)
  }

      //function to convert to camel case
    //   const CamleCase = () => {
    //     const newText=text.t
    //     setText(newText)
    // }

    //handling event
    const handleOnChange = (event) => {
      setText(event.target.value)
    }

    return (
      <>
    <div>
    <h3 className="mb-3 my-4" >{props.title}</h3>

      <div className="mb-3 my-4">
        <textarea className="form-control my-3" id="myTextBox" rows="8" value={text} onChange={handleOnChange}>
        </textarea>
        <button className= "btn btn-success mx-2" id="uppercase" onClick={UpperCase}>Convert to UpperCase</button>
        <button className= "btn btn-success mx-2" id="uppercase" onClick={LowerCase}>Convert to LowerCase</button>
        {/* <button className= "btn btn-success mx-2" id="uppercase" onClick={CamleCase}>Convert to CamleCase</button> */}
        <button className= "btn btn-success mx-2" id="uppercase" onClick={UpperCase}>button</button>
        <button className= "btn btn-success mx-2" id="uppercase" onClick={UpperCase}>button</button>
        <button className= "btn btn-success mx-2" id="uppercase" onClick={UpperCase}>button</button>
      </div>
    </div>

    <div className="container my-3">
    <h1>Text Summary</h1>
    
    <p>{text.split(" ").length} Words and {text.length} Characters</p>
      
    </div>
    </>
  );
}