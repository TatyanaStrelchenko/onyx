import './Footer.scss';
import Logo from '../../assets/image/logo.svg';

const Footer = () => {
  return (
    <footer>
      <div className="footer-holder">
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={Logo} alt="img" />
              <p>
                Onyx Funding is a real estate financing
                <br /> solutions service company. Onyx Funding is not
                <br /> a lender and only provides brokering services
                <br /> for commercial, business purpose loans.
              </p>
              <p>
                Loans are for investment purposes only and
                <br /> not for personal, family, or household use. Loan
                <br /> product availability may be limited in certain
                <br /> states
              </p>
            </div>
            <div className="col">
              <h4>Loan programs</h4>
              {/* <ul>
                  <li><Link to="/">Multifamily</Link>  </li>
                  <li><Link to="/">New Construction</Link></li>
                  <li><Link to="/">Fix and Flip</Link></li>
                  <li><Link to="/">Rental</Link></li>
                  <li><Link to="/">Fix to Rent</Link></li>
                  <li><Link to="/">Commercial</Link></li>
                  <li><Link to="/">Bridge</Link></li>
                </ul> */}
            </div>
            <div className="col">
              <h4>Property Types</h4>
              {/* <ul>
                  <li><Link to="/">Offices</Link></li>
                  <li><Link to="/">Retail</Link></li>
                  <li><Link to="/">Self-Storage</Link></li>
                  <li><Link to="/">Hospitality</Link></li>
                  <li><Link to="/">Inductrial</Link></li>
                  <li><Link to="/">Multifamily</Link></li>
                  <li><Link to="/">Manufacturated Housing</Link></li>
                </ul> */}
            </div>
            <div className="col">
              <h4>Services</h4>
              {/* <ul>
                  <li><Link to="/">Debt</Link></li>
                  <li><Link to="/">Equity</Link></li>
                </ul>  */}
            </div>
            <div className="col">
              <h4>Quick Navigation</h4>
              {/* <ul>
                  <li><Link to="/">About Us</Link></li>
                  <li><Link to="/">Contact Us</Link></li>
                  <li><Link to="/">Blog</Link></li>
                  <li><Link to="/">Partners</Link></li>
                </ul> */}
              <h4>Address</h4>
              <ul>
                <li>2200 NW 2nd Ave, STE 211, Miami, FL 33127</li>
                <li>support@onyxfunding.us</li>
                <li>(415) 583-5515</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© Copyright - Onyx - 2022</p>
            {/* <ol>
                <li><Link to="/">facebook</Link></li>
                <li><Link to="/">Instagram</Link></li>
                <li><Link to="/">Behance</Link></li>
                <li><Link to="/">Linkedin</Link></li>
              </ol> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
