import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { Link as LinkScroll } from 'react-scroll';

import './Header.scss';
import Logo from '../../assets/image/logo.svg';

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
          <LinkScroll className="btn" activeClass="active" to="form" offset={50} duration={500}>
            GET STARTED
          </LinkScroll>
        </div>
      </div>
    </header>
  );
};

export { Header };
