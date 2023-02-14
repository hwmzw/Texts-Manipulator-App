import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = 'darkgrey'
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
      <Navbar title= "Text Manipulation App"  aboutText="About Us" toggleMode={toggleMode} mode={mode}/>
        <div className="container">
          <TextForm title= "Write/Paste your texts to manipulate"/>
        </div>
    </>
  );
}

export default App;
