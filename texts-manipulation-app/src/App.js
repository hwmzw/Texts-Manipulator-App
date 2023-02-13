// import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  // const [darkMode, setdarkMode] = useState(false)
  return (
    <>
      <Navbar title= "Text Manipulation App"  aboutText="About Us"/>
        <div className="container">
          <TextForm title= "Write/Paste your texts to manipulate"/>
        </div>
    </>
  );
}

export default App;
