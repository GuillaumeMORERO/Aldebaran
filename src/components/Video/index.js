import React, { useState } from 'react';

import { Container, Modal } from 'react-bootstrap';

import './style.scss';

export default () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return <Container className="video">
    <button
      type="button"
      className="video-title"
      onClick={handleShow}
    >
      Teaser !!
    </button>

    <img
      src="src/data/teaser.PNG"
      alt="Teaser"
      className="video-image"
      onClick={handleShow}
    />
    

    <div>
      <Modal show={show} onHide={handleClose} centered>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/U_6Yv6-gH0E" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </Modal>
    </div>

  </Container>

};