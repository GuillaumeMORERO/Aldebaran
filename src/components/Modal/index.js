import React, { useState } from 'react';

import { Modal, Button } from 'react-bootstrap';

import YouTube from '@u-wave/react-youtube';

import './style.scss';

export default () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return <div className="modaltest">

    <img
      src="src/data/teaser.PNG"
      alt="Teaser"
      className="video-image"
      onClick={handleShow}
    />
    
  

    <>
      <Modal show={show} onHide={handleClose} centered>
        {/* <img
          src="src/data/teaser.PNG"
          alt="Teaser"
        /> */}
        <YouTube
          className="customodal-box_player"
          video="U_6Yv6-gH0E"
          height="300"
        />
      </Modal>
    </>

  </div>
};