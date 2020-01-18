import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import YouTube from '@u-wave/react-youtube';

import { Modal, Button } from 'react-bootstrap';

import { displayModal, closeModal } from 'src/store/Videos/actions';

import './style.scss';

export default () => {

  const dispatch = useDispatch();
  const { show } = useSelector(state => state.videos);

  const handleClose = () => { // Function that close the modal
    dispatch(closeModal());
  };

  const show = () => {
    dispatch(displayModal());
  };

  return <Modal show={show} onHide={handleClose}>

    <Modal.Dialog>

      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>

    </Modal.Dialog>

  </Modal>
};