import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
// import { Link as LinkScroll } from 'react-scroll';
import Modal from 'react-modal';
import { Form } from '../Form';

import './Header.scss';
import Logo from '../../assets/image/logo.svg';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'var(--white-grey)',
    padding: '40px'
  }
};

const Header = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }

  function closeModal() {
    setIsOpen(false);
  }

  const ref = useRef();

  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const toggleMenu = () => {
    setBurgerMenuOpen(!isBurgerMenuOpen);
  };

  const closeMenu = () => {
    setBurgerMenuOpen(!isBurgerMenuOpen);
  };

  // const Button    = Scroll.Button;
  return (
    <header className="header">
      <div className="header-holder">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="img" />
          </Link>
        </div>
        <div className="header-info">
          <button
            type="button"
            className={`burger ${isBurgerMenuOpen ? 'open-menu' : ''}`}
            onClick={toggleMenu}
          >
            <div className="burger-line"> </div>
            <div className="burger-line"> </div>
            <div className="burger-line"> </div>
          </button>
          <ul ref={ref} className={`nav-menu ${isBurgerMenuOpen ? 'open' : 'close'}`}>
            <li>
              <Link to="/about" onClick={() => closeMenu()}>
                ABOUT US
              </Link>
            </li>
            <li>
              <Link to="/loan-programs">LOAN PROGRAMS</Link>
            </li>
            <li>
              <Link to="/services">SERVICES</Link>
            </li>
            <li>
              <Link to="/partners">PARTNERS</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT US</Link>
            </li>
          </ul>
          {/* <LinkScroll className="btn" activeClass="active" to="form" offset={50} duration={500}>
            GET STARTED
          </LinkScroll> */}
          <div className="modal-form">
            <button type="button" className="btn" onClick={openModal}>
              GET STARTED
            </button>
            <Modal
              isOpen={modalIsOpen}
              // onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
              overlayClassName="Overlay"
            >
              <div className="title-holder">
                <h2>Contact Us</h2>
                <button type="button" className="close-modal" onClick={closeModal}>
                  &#10006;
                </button>
              </div>
              <Form />
            </Modal>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
