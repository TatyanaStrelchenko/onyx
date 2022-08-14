import { NavLink } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
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
    padding: '0'
  }
};

const Header = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
    console.log('open', modalIsOpen);
  }

  function closeModal() {
    setIsOpen(false);
    console.log('close', modalIsOpen);
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
          <NavLink to="/">
            <img src={Logo} alt="img" />
          </NavLink>
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
              <NavLink className="nav-item nav-link" to="/about" onClick={() => closeMenu()}>
                ABOUT US
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item nav-link" to="/loan-programs">
                LOAN PROGRAMS
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item nav-link" to="/services">
                SERVICES
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item nav-link" to="/partners">
                PARTNERS
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item nav-link" to="/contact">
                CONTACT US
              </NavLink>
            </li>
          </ul>
          <button type="button" className="btn" onClick={openModal}>
            GET STARTED
          </button>
          <Modal
            isOpen={modalIsOpen}
            appElement={document.getElementById('app')}
            style={customStyles}
            contentLabel="Example Modal"
            overlayClassName="Overlay"
            ariaHideApp={false}
          >
            <div className="title-holder">
              <h2>Contact Us</h2>
              <button type="button" className="close-modal" onClick={closeModal}>
                х
              </button>
            </div>
            <Form />
          </Modal>
        </div>
      </div>
    </header>
  );
};

export { Header };
