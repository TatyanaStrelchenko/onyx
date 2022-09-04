import CookieConsent from 'react-cookie-consent';
import { Link } from 'react-router-dom';

import Logo from '../../assets/image/logo.svg';
import inst from '../../assets/icons/insta.svg';
import be from '../../assets/icons/be.svg';
import lin from '../../assets/icons/in.svg';
import fb from '../../assets/icons/fb.svg';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={Logo} alt="img" />
            <p>
              Onyx Funding is a real estate financing solutions service company. Onyx Funding is not
              a lender and only provides brokering services for commercial, business purpose loans.
            </p>
            <p>
              Loans are for investment purposes only and not for personal, family, or household use.
              Loan product availability may be limited in certain states
            </p>
          </div>
          <div className="col">
            <h4>LOAN PROGRAMS</h4>
            <ul>
              <li>Multifamily</li>
              <li>New Construction</li>
              <li>Fix and Flip</li>
              <li>Rental</li>
              <li>Fix to Rent</li>
              <li>Commercial</li>
              <li>Bridge</li>
            </ul>
          </div>
          <div className="col">
            <h4>PROPERTY TYPES</h4>
            <ul>
              <li>Offices</li>
              <li>Retail</li>
              <li>Self-Storage</li>
              <li>Hospitality</li>
              <li>Inductrial</li>
              <li>Multifamily</li>
              <li>Manufacturated Housing</li>
            </ul>
          </div>
          <div className="col">
            <h4>SERVICES</h4>
            <ul>
              <li>
                <Link className="footer-nav" to="/services/debt">
                  Debt
                </Link>
              </li>
              <li>
                <Link className="footer-nav" to="/services/equity">
                  Equity
                </Link>
              </li>
            </ul>
          </div>
          <div className="col cell">
            <div className="col">
              <h4>QUCK NAVIGATION</h4>
              <ul>
                <li>
                  <Link className="footer-nav" to="/about">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="footer-nav" to="/contact">
                    Contact Us
                  </Link>
                </li>
                <li>Blog</li>
                <li>
                  <Link className="footer-nav" to="/partners">
                    Partners{' '}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col">
              <h4>ADDRESS</h4>
              <ul>
                <li>
                  2200 NW 2nd Ave, STE
                  <br /> 211, Miami, FL 33127
                </li>
                <li>support@onyxfunding.us</li>
                <li>(415) 583-5515</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© Copyright - Onyx - 2022</p>
          <ul className="social">
            <li>
              <div className="img-social">
                <img src={fb} alt="img" />
              </div>
              <span>facebook</span>
            </li>
            <li>
              <div className="img-social">
                <img src={inst} alt="img" />
              </div>
              <span>Instagram</span>
            </li>
            <li>
              <div className="img-social">
                <img src={be} alt="img" />
              </div>
              <span>Behance</span>
            </li>
            <li>
              <div className="img-social">
                <img src={lin} alt="img" />
              </div>
              <span>Linkedin</span>
            </li>
          </ul>
        </div>
      </div>
      <CookieConsent
        location="bottom"
        style={{ background: '#101010' }}
        buttonStyle={{ background: '#019b1e', color: '#fff', fontSize: '14px' }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </footer>
  );
};

export { Footer };
