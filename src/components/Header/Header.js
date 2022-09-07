import { NavLink } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
// import Modal from 'react-modal';
// import { Form } from '../Form';

import './Header.scss';
import Logo from '../../assets/image/onyx-white.svg';
import { ModalComponent } from '../Modal';

const Header = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ref = useRef();

  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const toggleMenu = () => {
    setBurgerMenuOpen(!isBurgerMenuOpen);
  };

  const closeMenu = () => {
    setBurgerMenuOpen(!isBurgerMenuOpen);
  };

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
          <ModalComponent customClass="primary" />
        </div>
      </div>
    </header>
  );
};

export { Header };
