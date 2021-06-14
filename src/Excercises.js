
import React, { useState } from 'react';
import { FormControl, InputGroup, Form, Button, Row, Col  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
var sana = "sana"

function Excercises() {

    return (
    <div className="Excercises">
     <h1>HARJOITUKSET</h1>
     <h4>Tehtävä 1</h4>

    <Form>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Tehtävä 1. HTML perusteet</Form.Label>
      <Form.Text className="text-muted">
      <div>
      HTML tehtävä. Monta eri vaihtoehtoa erilaisissa otsikoissa on? 1, 3, 5, 6 vai 8?
      </div>
      </Form.Text>
      <Form.Control type="answer" placeholder="Syötä vastaus" />
      
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
      <div>/////////////////////////////////////////////////</div>
      <Form.Label>Tehtävä 2. CSS perusteet</Form.Label>
      <Form.Text className="text-muted">
        
      <div>
      CSS tehtävä.
      </div>
      </Form.Text>
     
    </Form.Group>
    <Form.Group controlId="formBasicCheckbox">
    </Form.Group>

    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        Valitse Valitse oikea vaihtoehto.
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="CSS avulla voidaan muuttaa sivun ulkonäköä"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="CSS avulla voidaan toteuttaa dynaamista toiminnallisuutta"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
       
      </Col>
    </Form.Group>
    <div>/////////////////////////////////////////////////</div>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Tehtävä 3. Javascript perusteet</Form.Label>
      <Form.Text className="text-muted">
      <div>
      Javascript tehtävä. Valitse oikea vaihtoehto.
      </div>
      </Form.Text>

      <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        Valitse
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Javascript avulla voidaan luoda funktioita"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Javascript avulla voidaan toteuttaa dynaamista toiminnallisuutta"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="Kummatkin"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
       
      </Col>
    </Form.Group>

      
    </Form.Group>

    <div>
    <Button variant="primary" type="submit">
      Lähetä vastaukset
    </Button>
    </div>
  </Form>
    </div>
  );
}

export default Excercises;