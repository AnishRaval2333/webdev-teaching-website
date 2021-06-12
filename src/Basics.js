
import React, { useState } from 'react';
import { Button, Card, CardGroup, CardDeck  } from 'react-bootstrap';
var sana = "sana"

function Basics() {
  const [newColor, setnewColor] = useState("white");

  const handleColor = () => {
    if (newColor === "rgba(140, 200, 255, 0.788)") {
      setnewColor("white")
    }
    else {
    setnewColor("rgba(140, 200, 255, 0.788)")
    console.log(newColor)
    }
    
  }

    return (
    <div className="Basics">
      <div className="Basics-header">
      <h1>Mitä termit tarkoittavat?</h1>
      <p>JavaScript, HTML ja CSS ovat yksinkertaisuudessaan web-kehityksen työkaluja. </p>
      <CardGroup>
  <Card bg="dark">
    <Card.Body>
      <Card.Title>HTML</Card.Title>
      <Card.Text>
        HTML eli Hypertext Markup Language on puolestaan merkintäkieli, jonka avulla toteuttaa erilaisia otsikoita, linkkejä.
        Esimerkiksi:  
        {" <h1>Moikka!</h1>"}
        avulla saadaan suuri otsikko: <h1>Moikka!</h1>
        {' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card bg="dark">
    <Card.Body>
      <Card.Title>CSS</Card.Title>
      <Card.Text>
        CSS eli Cascading Style Sheets on kieli, jota käytetään verkkosivujen tyylien lisäämiseen. CSS yhdistetään sivun HTML-elementteihin. 
        Esimerkiksi HTML-kohdan {" <h1>Moikka!</h1>"} voidaan lisätä väri:
        {<h1 style ={{color: "rgba(140, 200, 255, 0.788)"}}>
          Moikka!</h1>}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card bg="dark">
    <Card.Body>
      <Card.Title>JavaScript</Card.Title>
      <Card.Text>
       JavaScriptin avulla voidaan lisätä verkkosivulle dynaamista toiminnallisuutta. Esimerkiksi klikkaamalla alla olevaa nappia, voidaan muuttaa h1- otsikon värin. { } 
      <Button onClick={handleColor}>Vaihda väriä klikkaamalla</Button>
      {<h1 style ={{color: newColor}}>
          Moikka!</h1>}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
<p>Voimme siis huomata, että JavaScript, HTML ja CSS tekevät tiivistä yhteistyötä!</p>
      </div>
    </div>
  );
}

export default Basics;