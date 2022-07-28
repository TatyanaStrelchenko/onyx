import { Link } from 'react-router-dom';
import { useState } from 'react';

import './Header.scss';
import Logo from '../../assets/image/logo.svg';

const Header = () => {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);

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
            className={`burger ${isBurgerMenuOpen ? '' : 'open-menu'}`}
            onClick={() => setBurgerMenuOpen(!isBurgerMenuOpen)}
          >
            <span className="burger-button" />
            <div className="spinner3 diagonal part-1"> </div>
            <div className="spinner3 horizontal"> </div>
            <div className="spinner3 diagonal part-2"> </div>
          </button>
          <ul
            className={`nav-menu ${isBurgerMenuOpen ? 'close' : 'open'}`}
            isOpen={isBurgerMenuOpen}
          >
            <li>
              <Link to="/about">ABOUT US</Link>
            </li>
            <li>
              <Link to="/loan-programs">LOAN PROGRAMS</Link>
            </li>
            <li>
              <Link to="/Services">SERVICES</Link>
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
