
import './App.scss';
import Logo from './assets/image/logo.svg';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
      <header className='header'>
          <div className='container'>
            <div className="header-holder">
              <div className="logo">
                <img src={Logo} />
              </div>
              <ul className="nav-menu">
                <li>About Us</li>
                <li>Loan Programs</li>
                <li>Services</li>
                <li>Partners</li>
                <li>Contact Us</li>
              </ul>
              <button className="btn">Get Started</button>
            </div>
          </div>
      </header>
      <section className="banner">
        <div className="container">
          <div className='text-holder'>
            <h1>Relationships.<br/>Solutions.<br/>Results</h1>
            <p>Comprehensive financing solutions for commercial,<br/> multifamily and residential investment real estate.</p>
          </div>
        </div>
      </section>
      <section className='info-section'>
        <div className="container">
          <div className='row'>
            <div className="col">
              <h2>PROUDLY CELEBRATING 30 YEARS</h2>
              <h3>Rate information is at least 15 minutes delayed.</h3>
              <p>Onyx Funding is changing the way real estate investors connect with<br/>capital sources. We work for you, the Borrower, and not for a Lender.<br/> This allows for complete transparency, synergy and alignment in our interests.</p>  
              <p>Since our inception we have helped hundreds of real estate investors<br/>achieve their goals by successfully negotiating and securing favorable<br/> debt and equity financing.</p>
              <button className='btn'>Get Started</button>
            </div>
            <div className='col'>
              <h3>LIVE INTEREST RATES</h3>
              <div className='row'>
                <div className='col'>1-MONTH LIBOR</div>
                <div className='col'>2.862%</div>
                <div className='col'>2.940%</div>
                <div className='col'>2.655%</div>
              </div>
              <div className='row'>
                <div className='col'>SOFR 30-DAY AVG</div>
                <div className='col'>2.862%</div>
                <div className='col'>2.940%</div>
                <div className='col'>2.655%</div>
              </div>
              <div className='row'>
                <div className='col'>SOFR 30-DAY TERM</div>
                <div className='col'>2.862%</div>
                <div className='col'>2.940%</div>
                <div className='col'>2.655%</div>
              </div>
              <div className='row'>
                <div className='col'>PRIME RATE</div>
                <div className='col'>2.862%</div>
                <div className='col'>2.940%</div>
                <div className='col'>2.655%</div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      <Info />
    </div>
  );
}

export default App;
