import React from 'react';

import { Container, Form, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';

import './style.scss';

export default () => {
  return <Container className="contact">

    <div className="contact-disclaimer">
      <h1 className="contact-disclaimer_txt">DISCLAIMER !</h1>
      <h2 className="contact-disclaimer_txt">Castellas n'accepte que les paiements en cash et en Dollars ($).</h2>
      <h2 className="contact-disclaimer_txt">En l'absence de Dollars ($), le groupe peut accepter des Euros.</h2>
    </div>

    <Form className="contact-zone">

      <div className="contact-zone_elm">
        <label className="contact-zone_elm-lab">Email</label>
        <input className="contact-zone_elm-area" type="email" name="email" placeholder="Entrez votre Email"/>
      </div>

      <div className="contact-zone_elm">
        <label className="contact-zone_elm-lab">Message</label>
        <textarea
          className="contact-zone_elm-area"
          name="message"
          placeholder="Ecrivez votre message - 200 caractères max"
          >
        </textarea>
      </div>

      <div className="contact-zone_elm">
        <button
          className="contact-zone_elm-bouton"
          type="button">
          Envoyez !
        </button>
      </div>

    </Form>
  </Container>

};

// Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore assumenda dolorem atque, dolor optio consectetur odio sint? Modi ipsam molestiae recusandae accusamus blanditiis, rerum et facilis impedit, quo est expedita. Voluptatibus quidem perspiciatis numquam odit debitis, atque quaerat assumenda beatae quas consequuntur placeat aliquid modi fugiat quam iste excepturi odio aspernatur, laudantium explicabo asperiores ea. Corporis molestiae sit adipisci amet laborum provident beatae alias minus qui eius quas cum illo itaque laboriosam earum, dolorum veritatis libero, nihil voluptate velit esse reprehenderit! Laudantium hic ab corporis nisi dignissimos esse eligendi perferendis cumque reiciendis vero nam magnam quae minima deleniti, nihil ipsa repellat non pariatur placeat et! Autem quibusdam excepturi adipisci sapiente fugiat nostrum sit placeat, rem architecto ut consectetur voluptate magni similique odio aspernatur praesentium delectus quidem iure esse labore ea consequuntur odit. Natus deleniti debitis voluptatem culpa modi? Veniam facere magnam velit obcaecati. Sint illum doloribus rem dicta sapiente deserunt, fugiat sed dignissimos facilis ex. A, voluptatibus doloribus saepe, omnis ab non illo nobis adipisci sint unde debitis impedit nam. Tempore magnam illo quidem nihil sit dolorem ullam, placeat ut dolores maiores deleniti vero vitae fuga mollitia ipsam ab fugit aut voluptatibus optio praesentium. Commodi consectetur repellat neque ut laudantium.