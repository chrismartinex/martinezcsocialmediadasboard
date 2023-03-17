import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Header from './Components/HeaderComponent';
import Main from './Components/MainComponent';
import LowerMain from './Components/LowerMainComponent';
import { Container } from 'react-bootstrap';
import practice from './Components/Switch';
import Practice from './Components/Switch';
import Switch from './Components/Switch';
import Lights from './Components/LightsComponent';
import "./Components/darkMode.css";


export default function App() {
  const [theme, setTheme] = useState(false);
  const handleClick = () => {
    setTheme(!theme)
  }
  const backgroundColor = theme ? "white" : "navy";
  return (
    
    <div style={{backgroundColor}}>
      <Header handleClick={handleClick} />
      <Main/>
      <LowerMain/>
      <Lights/>
    </div>
  );
}

