import React from 'react';

import './style.scss';

export default () => {
  return <div className="header">

    <div
      className="header-barre"
    >
      <div className="header-pic">
        <a href="/">
          <img src="src/data/CastellasBand" alt="CastellasBand"/>
        </a>
      </div>
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

  </div>

};