import React from 'react';

import { Container, Form, Row, Col, Button } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';

import './style.scss';

export default () => {
  return <Container className="contact">

    <div className="contact-disclaimer">
      <h1 className="contact-disclaimer_txt">DISCLAIMER !</h1>
      <h2 className="contact-disclaimer_txt">Castellas n'accepte que les paiements en cash et en Dollars ($).</h2>
      <h2 className="contact-disclaimer_txt">En l'absence de Dollars ($), le groupe peut accepter des Euros.</h2>
    </div>

    <Form>

      <fieldset>
        <Form.Group as={Row}>
          <Form.Label as="legend" column sm={2}>
            Motif du contact
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="Proposition de concert"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="Contact de musicien"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="autre motif"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
          </Col>
        </Form.Group>
      </fieldset>

      <Form.Group as={Row} controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formHorizontalMessage">
        <Form.Label column sm={2}>
          Message
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="Message" />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Col sm={{ span: 10, offset: 2 }}>
          <Button variant="none" type="submit" className="bouton">Envoyer</Button>
        </Col>
      </Form.Group>
    </Form>
  </Container>

};