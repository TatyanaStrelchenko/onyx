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
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={Logo} alt="img" />
            <p>
              Onyx Funding is not a lender and only provides brokering services for commercial,
              business purpose loans.
            </p>
            <p>
              Loans are for investment purposes only and not for personal, family, or household use.
              Loan product availability may be limited in certain states
            </p>
            <p>NMLS #1935992</p>
            <p>60DBO-153373 CFL Licensed Broker</p>
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
              <li>
                <Link className="footer-nav" to="/services/investment">
                  Investment Sales
                </Link>
              </li>
              <li>
                <Link className="footer-nav" to="/services/advisory">
                  Advisory
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
                    Partners
                  </Link>
                </li>
                <li>
                  <Link className="footer-nav" to="/privacy">
                    Privacy Policy
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
                <li>Support@onyxfunding.com</li>
                <li>(786) 321-5942</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© Copyright - Onyx - 2022</p>
          <ul className="social">
            <li>
              <span className="img-social">
                <img src={fb} alt="img" />
              </span>
              <span className="social-text">facebook</span>
            </li>
            <li>
              <a
                href="https://instagram.com/onyxfunding?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noreferrer"
              >
                <span className="img-social">
                  <img src={inst} alt="img" />
                </span>
              </a>
              <a
                href="https://instagram.com/onyxfunding?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noreferrer"
              >
                <span className="social-text">Instagram</span>
              </a>
            </li>
            <li>
              <span className="img-social">
                <img src={be} alt="img" />
              </span>
              <span className="social-text">Behance</span>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/onyx-funding/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="img-social">
                  <img src={lin} alt="img" />
                </span>
              </a>
              <a
                href="https://www.linkedin.com/company/onyx-funding/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="social-text">Linkedin</span>
              </a>
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
