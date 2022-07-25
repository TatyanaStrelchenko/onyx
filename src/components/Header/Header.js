import { Link } from 'react-router-dom';

import './Header.scss';
import Logo from '../../assets/image/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-holder">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="img" />
            </Link>
          </div>
          <ul className="nav-menu">
            <li>
              <Link to="/about">ABOUT US</Link>
            </li>
            <li>
              <Link to="/loan-programs">LOAN PROGRAMS</Link>
            </li>
            <li>SERVICES</li>
            <li>PARTNERS</li>
            <li>CONTACT US</li>
          </ul>

          <button type="button" className="btn">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export { Header };
