import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
      <Navbar title="Text Manipulation App" aboutText="About Us" toggleMode={toggleMode} mode={mode} />
      <Alert alert="Welcome to the app" />
      <div className="container">
        <TextForm title="Paste your texts to manipulate" mode={mode} />
      </div>

    </>
  );
}

export default App;
