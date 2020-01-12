import React from 'react';

import { Container, Navbar } from 'react-bootstrap';

import './style.scss';

const FB = <i className="fab fa-facebook-square"></i>;
const YT = <i className="fab fa-youtube"></i>;

export default () => {
  return <Container fluid className="footer">

    <Navbar expand="lg" variant="dark" bg="none" className="footer-barre">
      <Navbar.Brand 
        href="https://www.facebook.com/castellasband/" 
        className="footer-barre_lien-icon">
        { FB }
      </Navbar.Brand>
      <Navbar.Brand 
        href="https://www.youtube.com/channel/UCfJWiiMCyIhUokO69TlF5Ag" 
        className="footer-barre_lien-icon">
        { YT }
      </Navbar.Brand>
      <Navbar.Brand href="/projects" className="footer-barre_lien">Autres projets</Navbar.Brand>
      <Navbar.Brand href="/weAre" className="footer-barre_lien">Qui sommes nous ?</Navbar.Brand>
      <Navbar.Brand href="/contact" className="footer-barre_lien">Contact</Navbar.Brand>
    </Navbar>

  </Container>

};