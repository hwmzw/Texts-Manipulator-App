import React, {useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function TextForm(props) {

    const [text, setText]=useState('')
    
    //fuction to convert to upper case
    const UpperCase = () => {
        const newText=text.toUpperCase()
        setText(newText)
        toast.success("Your texts has been converted to Uppercase")
        success.toast("yo")
    }

    //function to convert to lowercase
    const LowerCase = () => {
      const newText=text.toLowerCase()
      setText(newText)
  }
//to clear text
  const ClearText = () => {
    const newText=('')
    setText(newText)
}

      // function to copy
      const CopyTexts = () => {
        var text= document.getElementById("myTextBox")
        text.select();
        navigator.clipboard.writeText(text.value)
    }
     // function to copy and clear
     const CopyClearTexts = () => {
      ClearText();
      CopyTexts();
  }
  //function to remove extra spaces
  const RemoveExtraSpaces = () =>{
    var newText = text.split(/[ ] + /)
    setText(newText.join(" "))
  }
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
        <button className= "btn btn-success mx-2 my-2" id="uppercase" onClick={UpperCase}>Convert to UpperCase</button>
        <button className= "btn btn-success mx-2 my-2" id="uppercase" onClick={LowerCase}>Convert to LowerCase</button>
        <button className= "btn btn-success mx-2 my-2" id="uppercase" onClick={ClearText}>Clear Text</button>
        <button className= "btn btn-success mx-2 my-2" id="uppercase" onClick={CopyTexts}>Copy Text</button>
        <button className= "btn btn-success mx-2 my-2" id="uppercase" onClick={CopyClearTexts}>Copy and Clear</button>
        <button className= "btn btn-success mx-2 my-2" id="uppercase" onClick={RemoveExtraSpaces}>Remove Extra Spaces</button>
      </div>
    </div>

    <div className="container my-3">
    <h1>Text Summary</h1>
    
    <p><b>{text.split(" ").length} Words and {text.length} Characters</b></p>
     <p>{0.01 * text.split(" ").length} minutes read</p>
     <h2>Preview</h2>
     <p>{text}</p>
    </div>
    </>
  )};
    