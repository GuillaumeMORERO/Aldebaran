import React from 'react';

import { Container, Navbar } from 'react-bootstrap';

import './style.scss';

export default () => {
  return <Container fluid className="header">

    <a href="/" className="header-image">
      <img src="src/data/CastellasLOGO.png" alt="CastellasBand" className="header-image"/>
    </a>

    <Navbar expand="lg" variant="dark" bg="none" className="header-barre">
      <Navbar.Brand href="/concerts" className="header-barre_lien">Concerts</Navbar.Brand>
      <Navbar.Brand href="/medias" className="header-barre_lien">Medias</Navbar.Brand>
      <Navbar.Brand href="/contact" className="header-barre_lien">Contact</Navbar.Brand>
    </Navbar>

  </Container>

    {/* return <div className="header">
    <div
      className="header-barre"
    >

      <a href="/" className="header-image">
        <img src="src/data/CastellasBand.jpg" alt="CastellasBand" className="header-image_cast"/>
      </a>

      <div className="header-barre_objet">
        <a href="/concerts" className="header-barre_objet-lien">Concerts</a>
      </div>
      <div className="header-barre_objet">
        <a href="/medias" className="header-barre_objet-lien">Medias</a>
      </div>
      <div className="header-barre_objet">
        <a href="/contact" className="header-barre_objet-lien">Contact</a>
      </div>
    </div> 



  </div>*/}

};