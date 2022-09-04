import './Info.scss';
import Fade from 'react-reveal/Fade';
// import Bounce from 'react-reveal/Bounce';

const Info = () => {
  return (
    <>
      <section className="info-section section">
        <div className="container">
          <div className="rates-holder">
            <Fade duration={5000}>
              <div className="rates-block">
                <h2>PROUDLY CELEBRATING 30 YEARS</h2>
                <h3>RATE INFORMATION IS AT LEAST 15 MINUTES DELAYED.</h3>
                <p>
                  Onyx Funding is a national, full-service commercial real estate firm with a focus
                  on financing and loan origination. We are dedicated to delivering best-in-class
                  solutions to investors, developers, and operators.
                </p>
                <p>
                  As a relationship-based firm, we always prioritize our clients’ interests ahead of
                  transactions. We believe in providing our clients with the highest standard of
                  service, execution, integrity, and excellence.
                </p>
                <button type="button" className="btn btn-default">
                  Get Started
                </button>
              </div>
            </Fade>
            <Fade duration={5000}>
              <div className="rates-block">
                <div className="table-holder">
                  <h3>LIVE INTEREST RATES</h3>
                  <div className="row">
                    <div className="col">1-MONTH LIBOR</div>
                    <div className="col">2.862%</div>
                    <div className="col">2.940%</div>
                    <div className="col">2.655%</div>
                  </div>
                  <div className="row">
                    <div className="col">SOFR 30-DAY AVG</div>
                    <div className="col">2.862%</div>
                    <div className="col">2.940%</div>
                    <div className="col">2.655%</div>
                  </div>
                  <div className="row">
                    <div className="col">SOFR 30-DAY TERM</div>
                    <div className="col">2.862%</div>
                    <div className="col">2.940%</div>
                    <div className="col">2.655%</div>
                  </div>
                  <div className="row">
                    <div className="col">PRIME RATE</div>
                    <div className="col">2.862%</div>
                    <div className="col">2.940%</div>
                    <div className="col">2.655%</div>
                  </div>
                </div>
                <div className="table-holder">
                  <h3>U.S. TREASURY LIBOR SWAP SOFR SWAP</h3>
                  <div className="row">
                    <div className="col">5-YEAR</div>
                    <div className="col">2.862%</div>
                    <div className="col">2.940%</div>
                    <div className="col">2.655%</div>
                  </div>
                  <div className="row">
                    <div className="col">7-YEAR</div>
                    <div className="col">2.862%</div>
                    <div className="col">2.940%</div>
                    <div className="col">2.655%</div>
                  </div>
                  <div className="row">
                    <div className="col">10-YEAR</div>
                    <div className="col">2.862%</div>
                    <div className="col">2.940%</div>
                    <div className="col">2.655%</div>
                  </div>
                  <div className="row">
                    <div className="col">20-YEAR</div>
                    <div className="col">2.862%</div>
                    <div className="col">2.940%</div>
                    <div className="col">2.655%</div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <section className="number-section">
        <div className="container">
          <div className="number-holder">
            <div className="numbers">
              <span className="number">$250M</span>
              <Fade duration={5000}>
                <p className="text">Loans Funded</p>
              </Fade>
            </div>
            <div className="numbers">
              <span className="number">216</span>
              <Fade duration={5000}>
                <p className="text">Deals Closed</p>
              </Fade>
            </div>
            <div className="numbers">
              <span className="number">250+</span>
              <Fade duration={5000}>
                <p className="text">Lender Relationships</p>
              </Fade>
            </div>
          </div>
          <div className="info-holder">
            <div className="info-block">
              <p>Experience</p>
              <p className="info-text">
                We have partnered with thousands of borrowers to finance investment properties
                across the nation. We leverage our expertise and relationships to deliver you
                outstanding results.
              </p>
            </div>
            <div className="info-block">
              <p>Competitive Terms</p>
              <p className="info-text">
                Our vast lender relationships, and everyday market experience enable us to customize
                unparalleled financing solutions for any type of investment property.
              </p>
            </div>
            <div className="info-block">
              <p>Team Mindset</p>
              <p className="info-text">
                From underwriting to final payoff, Onyx Funding is by your side every step of the
                way. We strive to provide an outstanding experience - Every time. No exceptions.
              </p>
            </div>
          </div>
          <button type="button" className="btn btn-default">
            Get Started
          </button>
        </div>
      </section>
    </>
  );
};

export { Info };
