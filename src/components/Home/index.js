import React from 'react';

import { Container } from 'react-bootstrap';

import './style.scss';

export default () => {
  return <Container fluid className="home">

    <img src="src/data/Repet Altherax.png" alt="Rehearsal" className="home-pic"/>

    <div className="home-txts">
      <p className="home-txts_txt">
        Rock live band based in French riviera, covers and original songs + some pop tunes to play everywhere (pubs, festivals, gigs, restaurants private nights).
      </p>
      <p className="home-txts_txt">
        We plays songs from many artists such as Yngwie Malmsteen, Europe, Scorpions, Metallica, Iron Maiden... And be as soft as Queen, Pink Floyd or Eagles !
      </p>
      <p className="home-txts_txt">
        Formed in 2018, Castellas aims to play live in the French Riviera  and to record a first full length album.
      </p>
    </div>

  </Container>

};