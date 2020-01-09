import React from 'react';

import { Nav } from 'react-bootstrap';

import './style.scss';

export default () => {
  return <div className="header">

    <Nav
      className="header-barre"
      activeKey="/home"
      onSelect={selectedKey => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item className="header-barre_objet">
        <Nav.Link href="/home" className="header-barre_objet-lien">Concerts</Nav.Link>
      </Nav.Item>
      <Nav.Item className="header-barre_objet">
        <Nav.Link eventKey="link-1" className="header-barre_objet-lien">Media</Nav.Link>
      </Nav.Item>
      <Nav.Item className="header-barre_objet">
        <Nav.Link eventKey="link-2" className="header-barre_objet-lien">Contact</Nav.Link>
      </Nav.Item>
    </Nav>

  </div>

};