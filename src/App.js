import { Button, Card, Carousel  } from 'react-bootstrap';
import React, { useState } from 'react';
import Basics from "./Basics"
import Navbar from './Navbar';

import "bootstrap/dist/css/bootstrap.css";
import './App.css';

function App() {
    return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <h2 className="h_All">TERVETULOA TUTUSTUMAAN WEBKEHITYKSEN SALOIHIN</h2>
        <p>Haluatko tietää mitä tarkoittavat JavaScript, HTML ja CSS?</p>

        <Button variant="outline-light">Klikkaa tutustuaksesi</Button>{' '}
        
        
      </header>
      <Basics/> 
    </div>
  );
}

export default App;
