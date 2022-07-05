import './Header.scss';
import Logo from '../../assets/image/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-holder">
          <div className="logo">
            <img src={Logo} alt="img" />
          </div>
          <ul className="nav-menu">
            <li>ABOUT US</li>
            <li>LOAN PROGRAMS</li>
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
