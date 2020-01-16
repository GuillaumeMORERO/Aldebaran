import React, { useState } from 'react';

import { Container, Form } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';

import * as EmailValidator from 'email-validator';

import './style.scss';

import {
  changeEmail,
  changeMessage
} from 'src/store/Visiteur/actions';

export default () => {

  const dispatch = useDispatch(); // Dispatch Hooks

  const {
    // mettre les states du reducer de state.visiteur
    emailValue,
    messageValue
  } = useSelector((state) => state.visiteur); // Show state from store

  const [isEmailOk, setIsEmailOk] = useState(false);
  const [isMessageOk, setIsMessageOk] = useState(false);

  const handleChange = (e, inputValue) => {// Function that save input change in store
    if (inputValue === 'email') {

      const mailToCheck = e.target.value;
      dispatch(changeEmail(mailToCheck));
      const mailChecked = EmailValidator.validate(mailToCheck);

      if (mailChecked) {
        setIsEmailOk(true);
        console.log( 'mail vérifié', mailChecked)
        console.log( 'isEmailOk', isEmailOk)
      } else {
        console.log( 'mail non vérifié', mailChecked)
        // mettre un message d'erreur
      }
    }

    if (inputValue === 'message') {
      const messageToCheck = e.target.value;
      dispatch(changeMessage(messageToCheck));
      console.log(messageToCheck);
      if (messageToCheck.length > 500) {
        setIsMessageOk(false);
        console.log('troooop loooong!!')
      } else {
        setIsMessageOk(true);
        console.log('message ok');
      }
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (isEmailOk && isMessageOk) {
      console.log('c\'est parti pour un concert !!');
      // dispatch(login()
      // login est une action !!
      //);
    } else {
      console.log('putain d\'échec...')
    }
  };

  return <Container className="contact">

    <div className="contact-disclaimer">
      <h1 className="contact-disclaimer_txt">DISCLAIMER !</h1>
      <h2 className="contact-disclaimer_txt">Castellas n'accepte que les paiements en cash et en Dollars ($).</h2>
      <h2 className="contact-disclaimer_txt">En l'absence de Dollars ($), le groupe peut accepter des Euros.</h2>
    </div>

    <Form className="contact-zone">

      <div className="contact-zone_elm">
        <label className="contact-zone_elm-lab">Email</label>
        <input
          className="contact-zone_elm-area"
          type="email"
          name="email"
          placeholder="Entrez votre Email"
          value={emailValue}
          onChange={(e) => handleChange(e, 'email')}
        />
      </div>

      <div className="contact-zone_elm">
        <label className="contact-zone_elm-lab">Message</label>
        <textarea
          className="contact-zone_elm-area"
          name="message"
          placeholder="Ecrivez votre message - 200 caractères max"
          rows="10"
          value={messageValue}
          onChange={(e) => handleChange(e, 'message')}
          >
        </textarea>
      </div>

      <div className="contact-zone_elm">
        <button
          className="contact-zone_elm-bouton"
          type="button"
          onClick={onSubmit}
          >
          Envoyez !
        </button>
      </div>

    </Form>
  </Container>

};