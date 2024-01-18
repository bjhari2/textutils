import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#0b2b4b'
      document.body.style.color = 'white'
      document.getElementById('myBox').style.background = '#09213a'
      document.getElementById('myBox').style.color = 'white'
      showAlert("Dark mode enabled!", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      document.getElementById('myBox').style.background = 'white'
      document.getElementById('myBox').style.color = 'black'
      showAlert("Light mode enabled!", "success")
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/" element={<TextForm heading="Enter your text to analyze" showAlert={showAlert} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
