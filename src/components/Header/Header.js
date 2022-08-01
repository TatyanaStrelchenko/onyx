import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';

import './Header.scss';
import Logo from '../../assets/image/logo.svg';

const Header = () => {
  const ref = useRef();

  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const toggleMenu = () => {
    setBurgerMenuOpen(!isBurgerMenuOpen);
  };

  const closeMenu = () => {
    console.log('test', isBurgerMenuOpen);
    setBurgerMenuOpen(!isBurgerMenuOpen);
  };

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
            <span className="burger-button" />
            <div className="spinner3 diagonal part-1"> </div>
            <div className="spinner3 horizontal"> </div>
            <div className="spinner3 diagonal part-2"> </div>
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
            <li>PARTNERS</li>
            <li>CONTACT US</li>
          </ul>
          <button type="button" className="btn">
            GET STARTED
          </button>
        </div>
      </div>
    </header>
  );
};

export { Header };
