/**
 * Imports de dépendances
 */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

/**
 * Imports locaux
 */
// Composants React
import Header from 'src/components/Header';
import Concerts from 'src/components/Concerts';
import Media from 'src/components/Media';
import Contact from 'src/components/Contact';
import Home from 'src/components/Home';
import Video from 'src/components/Video';
import Modal from 'src/components/Modal';
import Footer from 'src/components/Footer';
// Données
// Styles et assets
import './app.scss';

/**
 * Code
 */
const App = () => {
  return (<Router>
    <div id="app">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/modal">
          <Modal />
        </Route>
        <Route exact path="/concerts">
          <Concerts />
        </Route>
        <Route exact path="/medias">
          <Media />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/videos">
          <Video />
        </Route>
      </Switch>
      <Footer />
    </div>;
  </Router>);
}

/**
 * Export
 */
export default App;
