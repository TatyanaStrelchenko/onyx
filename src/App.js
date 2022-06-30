import './App.scss';
import Logo from './assets/image/logo.svg';
import { Featured } from './components/Featured';
import { Info } from './components/Info';

function App() {
  return (
    <div className="App">
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
      <section className="banner">
        <div className="container">
          <div className="text-holder">
            <h1>
              Relationships.
              <br />
              Solutions.
              <br />
              Results
            </h1>
            <p>
              Comprehensive financing solutions for commercial,
              <br /> multifamily and residential investment real estate.
            </p>
          </div>
        </div>
      </section>
      <section className="info-section">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>PROUDLY CELEBRATING 30 YEARS</h2>
              <h3>RATE INFORMATION IS AT LEAST 15 MINUTES DELAYED.</h3>
              <p>
                Onyx Funding is changing the way real estate investors connect with
                <br />
                capital sources. We work for you, the Borrower, and not for a Lender.
                <br /> This allows for complete transparency, synergy and alignment in our<br/>
                interests.
              </p>
              <p>
                Since our inception we have helped hundreds of real estate investors
                <br />
                achieve their goals by successfully negotiating and securing favorable
                <br /> debt and equity financing.
              </p>
              <button type="button" className="btn btn-default">
                Get Started
              </button>
            </div>
            <div className="col">
              <div className="table-holder table-rates">
                <h3>LIVE INTEREST RATES</h3>
                <div className="row row-cell">
                  <div className="col">1-MONTH LIBOR</div>
                  <div className="col">2.862%</div>
                  <div className="col">2.940%</div>
                  <div className="col">2.655%</div>
                </div>
                <div className="row row-cell">
                  <div className="col">SOFR 30-DAY AVG</div>
                  <div className="col">2.862%</div>
                  <div className="col">2.940%</div>
                  <div className="col">2.655%</div>
                </div>
                <div className="row row-cell">
                  <div className="col">SOFR 30-DAY TERM</div>
                  <div className="col">2.862%</div>
                  <div className="col">2.940%</div>
                  <div className="col">2.655%</div>
                </div>
                <div className="row row-cell">
                  <div className="col">PRIME RATE</div>
                  <div className="col">2.862%</div>
                  <div className="col">2.940%</div>
                  <div className="col">2.655%</div>
                </div>
              </div>
              <div className="table-holder">
                <h3>U.S. TREASURY LIBOR SWAP SOFR SWAP</h3>
                <div className="row row-cell">
                  <div className="col">5-YEAR</div>
                  <div className="col">2.862%</div>
                  <div className="col">2.940%</div>
                  <div className="col">2.655%</div>
                </div>
                <div className="row row-cell">
                  <div className="col">7-YEAR</div>
                  <div className="col">2.862%</div>
                  <div className="col">2.940%</div>
                  <div className="col">2.655%</div>
                </div>
                <div className="row row-cell">
                  <div className="col">10-YEAR</div>
                  <div className="col">2.862%</div>
                  <div className="col">2.940%</div>
                  <div className="col">2.655%</div>
                </div>
                <div className="row row-cell">
                  <div className="col">20-YEAR</div>
                  <div className="col">2.862%</div>
                  <div className="col">2.940%</div>
                  <div className="col">2.655%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Info />
      <Featured />
      <footer>
        <div className="footer-holder">
          <div className="container">
            <div className="row">
              <div className="col">
                  <img src={Logo} alt="img" />
                  <p>Onyx Funding is a real estate financing<br/> solutions service company. Onyx Funding is not<br/> a lender and only provides brokering services<br/> for commercial, business purpose loans.</p> 
                  <p>Loans are for investment purposes only and<br/> not for personal, family, or household use. Loan<br/> product availability may be limited in certain<br/> states</p>
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
            <div className='footer-bottom'>
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
      

      
    </div>
  );
}

export default App;
