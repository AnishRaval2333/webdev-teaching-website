import { Button, Card, Carousel  } from 'react-bootstrap';
import React, { useState } from 'react';
import Basics from "./Basics"
import Excercises from "./Excercises"
import Navbar from './Navbar';
import { Link } from "react-scroll";

import "bootstrap/dist/css/bootstrap.css";
import './App.css';

function App() {
    return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <h2 className="h_All">TERVETULOA TUTUSTUMAAN WEBKEHITYKSEN SALOIHIN</h2>
        <p>Haluatko tietää mitä tarkoittavat JavaScript, HTML ja CSS?</p>
    
        <Link
        to="Basics"
        spy={true}
        smooth={true}
        offset={-40}
        duration={500}>     
        <Button variant="outline-light">Klikkaa tutustuaksesi</Button>{' '} 
        </Link>
    
      </header>

     
      <Basics id='Basics'/> 
      <Excercises id='Excercises'/>
    </div>
  );
}

export default App;
