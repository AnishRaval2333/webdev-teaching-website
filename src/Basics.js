
import React, { useState } from 'react';
import { Button, Card, CardGroup, CardDeck  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-scroll";
var sana = "sana"

function Basics() {
  const [newColor, setnewColor] = useState("white");

  const handleColor = () => {
    if (newColor === "#4844a3") {
      setnewColor("white")
    }
    else {
    setnewColor("#4844a3")
    }
    
  }

    return (
    <div className="Basics">
      <div className="Basics-header">
      <h1>HTML, CSS & JAVASCRIPT?</h1>
      <p className="smallText">JavaScript, HTML ja CSS ovat yksinkertaisuudessaan web-kehityksen työkaluja. </p>
<CardGroup>
        <Card className="cardStyles" bg="dark">
          <Card.Body>
            <Card.Title><h3>HTML</h3></Card.Title>
            <Card.Text className="smallerText">
              HTML eli Hypertext Markup Language on merkintäkieli, jonka avulla voidaan toteuttaa erilaisia otsikoita, kokonaisuuksia sekä linkkejä.
               Esimerkiksi:
              {'\n'+" <h1>Moikka!</h1>"}
              avulla saadaan suuri otsikko:
              {' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <h1>Moikka!</h1>
          </Card.Footer>
        </Card>

        <Card className="cardStyles" bg="dark">
          <Card.Body>
            <Card.Title><h3>CSS</h3></Card.Title>
            <Card.Text className="smallerText">
              CSS eli Cascading Style Sheets on kieli, jota käytetään verkkosivujen tyylien lisäämiseen. CSS yhdistetään sivun HTML-elementteihin. 
              Esimerkiksi HTML-kohdan {" <h1>Moikka!</h1>"} avulla voidaan lisätä väriä:
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          {<h1 style ={{color: "#4844a3"}}>
                Moikka!</h1>}
          </Card.Footer>
        </Card>
        
        <Card className="cardStyles" bg="dark">
          <Card.Body>
            <Card.Title><h3>JAVASCRIPT</h3></Card.Title>
            <Card.Text className="smallerText">
            JavaScriptin avulla voidaan lisätä verkkosivulle dynaamista toiminnallisuutta. Esimerkiksi klikkaamalla alla olevaa nappia, voidaan muuttaa h1- otsikon värin. { } 
            <div><Button variant="outline-light" onClick={handleColor}>Vaihda väriä klikkaamalla</Button>
            </div>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          {<h1 style ={{color: newColor}}>
                Moikka!</h1>}
          </Card.Footer>
        </Card>
        </CardGroup>
    <p>Voimme siis huomata, että JavaScript, HTML ja CSS tekevät tiivistä yhteistyötä!</p>
   
   
    <Link
        to="Excercises"
        spy={true}
        smooth={true}
        offset={-40}
        duration={500}>     
        <Button variant="outline-light">Klikkaa itsesi harjoituksiin!</Button>
        </Link>
      </div>
    </div>
  );
}

export default Basics;