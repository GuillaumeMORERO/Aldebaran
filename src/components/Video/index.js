import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import YouTube from '@u-wave/react-youtube';

import { Container, Modal, Button } from 'react-bootstrap';

import { displayModal } from 'src/store/Videos/actions';

// import '~video-react/dist/video-react.css';
// @import '~video-react/styles/scss/video-react';
// import "node_modules/video-react/dist/video-react.css";
import './style.scss';

export default () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const showModal = () => {
    console.log('ça va moder!!');
    dispatch(displayModal());
  };

  return <Container className="video">
    <button
      type="button"
      className="video-title"
      onClick={() => showModal()}
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
      <Modal
        show={show}
        onHide={handleClose}
        closeButton
        centered
        bsPrefix="customodal"
      >

        <Modal.Body className="customodal-box">
          blabla
          {/* <YouTube
            className="customodal-box_player"
            video="U_6Yv6-gH0E"
            autoplay='false'
          /> */}
        </Modal.Body>

      </Modal>
    </div>

    {/* <YouTube
      className="video-player"
      video="U_6Yv6-gH0E"
      autoplay="false"
        width="560"
        height="315"
    /> */}

  </Container>

};