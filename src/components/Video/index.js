import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import YouTube from '@u-wave/react-youtube';

import { Container } from 'react-bootstrap';

// import '~video-react/dist/video-react.css';
// @import '~video-react/styles/scss/video-react';
// import "node_modules/video-react/dist/video-react.css";
import './style.scss';

export default () => {

  const dispatch = useDispatch();

  const showModal = (input) => {
    console.log('ça va moder!!', input);
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
      onClick={() => showModal('teaser')}
    />

    {/* <YouTube
      className="video-player"
      video="U_6Yv6-gH0E"
      autoplay="false"
        width="560"
        height="315"
    /> */}

  </Container>

};