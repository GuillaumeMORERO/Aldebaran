import React from 'react';

import { Container, Navbar, Dropdown } from 'react-bootstrap';

import './style.scss';

export default () => {
  return <Container fluid className="header">

    <a href="/" className="header-image">
      <img src="src/data/CastellasLOGO.png" alt="CastellasBand" className="header-image_logo"/>
    </a>

    <Navbar expand="lg" variant="dark" bg="none" className="header-barre">
      <Navbar.Brand href="/concerts" className="header-barre_lien">Concerts</Navbar.Brand>
      <Navbar.Brand href="/medias" className="header-barre_lien">Medias</Navbar.Brand>
      <Navbar.Brand href="/contact" className="header-barre_lien">Contact</Navbar.Brand>

      <Dropdown className="header-barre_dp">
        <Dropdown.Toggle variant="none" id="dropdown-basic" className="header-barre_dp-tog">
         Medias
        </Dropdown.Toggle>
      
        <Dropdown.Menu className="header-barre_dp-men">
          <Dropdown.Item href="#/action-1" className="header-barre_dp-it">Photos</Dropdown.Item>
          <Dropdown.Item href="#/action-2" className="header-barre_dp-it">Videos</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

    </Navbar>

  </Container>

};