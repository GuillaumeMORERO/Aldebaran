import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import YouTube from '@u-wave/react-youtube';

import { Container, Modal } from 'react-bootstrap';

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
  const { showModalVideo, videoToShow } = useSelector(state => state.videos);

  const showModal = (input) => {
    console.log('ça va moder!!', input);
    dispatch(displayModal(input));
  };

  return <Container className="video">
    <button
      type="button"
      className="video-title"
      onClick={() => showModal('teaser')}
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
    </div>

  </Container>

};