import { useState } from 'react';
import Modal from 'react-modal';
import { Form } from '../Form';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'var(--white-grey)',
    padding: '0'
  }
};

const ModalComponent = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      {' '}
      <button type="button" className={`btn ${props.customClass}`} onClick={openModal}>
        GET STARTED
      </button>
      <Modal
        isOpen={modalIsOpen}
        // closeTimeoutMS={500}
        // timeout={{ enter: 0, exit: 500 }}
        appElement={document.getElementById('app')}
        style={customStyles}
        contentLabel="Example Modal"
        overlayClassName="Overlay"
        ariaHideApp={false}
      >
        <div className="title-holder">
          <h2>Contact Us</h2>
          <button type="button" className="close-modal" onClick={() => closeModal()}>
            х
          </button>
        </div>
        <Form />
      </Modal>
    </>
  );
};

export { ModalComponent };
