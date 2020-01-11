import React from 'react';

import { Container, Navbar } from 'react-bootstrap';

import './style.scss';

export default () => {
  return <Container fluid className="footer">

    {/* <a href="/" className="footer-image">
      <img src="src/data/pierre.jpg" alt="CastellasBand" className="footer-image_logo"/>
    </a> */}

    <Navbar expand="lg" variant="dark" bg="none" className="footer-barre">
      <Navbar.Brand href="/projects" className="footer-barre_lien">Autres projets</Navbar.Brand>
      <Navbar.Brand href="/weAre" className="footerr-barre_lien">Qui sommes nous ?</Navbar.Brand>
      <Navbar.Brand href="/contact" className="footer-barre_lien">Contact</Navbar.Brand>
    </Navbar>

  </Container>

};