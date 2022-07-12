import './Info.scss';

const Info = () => {
  return (
    <section className="info-section">
      <div className="container">
        <div className="rates-holder">
          <div className="rates-block">
            <h2>PROUDLY CELEBRATING 30 YEARS</h2>
            <h3>RATE INFORMATION IS AT LEAST 15 MINUTES DELAYED.</h3>
            <p>
              Onyx Funding is changing the way real estate investors connect with
              <br />
              capital sources. We work for you, the Borrower, and not for a Lender.
              <br /> This allows for complete transparency, synergy and alignment in our
              <br />
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
          <div className="rates-block">
            <div className="table-holder table-rates">
              <h3>LIVE INTEREST RATES</h3>
              <div className="rates-holder">
                <div className="rates-block">1-MONTH LIBOR</div>
                <div className="rates-block">2.862%</div>
                <div className="rates-block">2.940%</div>
                <div className="rates-block">2.655%</div>
              </div>
              <div className="rates-holder">
                <div className="rates-block">SOFR 30-DAY AVG</div>
                <div className="rates-block">2.862%</div>
                <div className="rates-block">2.940%</div>
                <div className="rates-block">2.655%</div>
              </div>
              <div className="rates-holder">
                <div className="rates-block">SOFR 30-DAY TERM</div>
                <div className="rates-block">2.862%</div>
                <div className="rates-block">2.940%</div>
                <div className="rates-block">2.655%</div>
              </div>
              <div className="rates-holder">
                <div className="rates-block">PRIME RATE</div>
                <div className="rates-block">2.862%</div>
                <div className="rates-block">2.940%</div>
                <div className="rates-block">2.655%</div>
              </div>
            </div>
            <div className="table-holder">
              <h3>U.S. TREASURY LIBOR SWAP SOFR SWAP</h3>
              <div className="rates-holder">
                <div className="rates-block">5-YEAR</div>
                <div className="rates-block">2.862%</div>
                <div className="rates-block">2.940%</div>
                <div className="rates-block">2.655%</div>
              </div>
              <div className="rates-holder">
                <div className="rates-block">7-YEAR</div>
                <div className="rates-block">2.862%</div>
                <div className="rates-block">2.940%</div>
                <div className="rates-block">2.655%</div>
              </div>
              <div className="rates-holder">
                <div className="rates-block">10-YEAR</div>
                <div className="rates-block">2.862%</div>
                <div className="rates-block">2.940%</div>
                <div className="rates-block">2.655%</div>
              </div>
              <div className="rates-holder">
                <div className="rates-block">20-YEAR</div>
                <div className="rates-block">2.862%</div>
                <div className="rates-block">2.940%</div>
                <div className="rates-block">2.655%</div>
              </div>
            </div>
          </div>
        </div>
        <div className="number-holder">
          <div className="numbers">
            <span className="number">$20BN</span>
            <p className="text">Loans Closed</p>
          </div>
          <div className="numbers">
            <span className="number">$8.5BN</span>
            <p className="text">Units Funded</p>
          </div>
          <div className="numbers">
            <span className="number">565</span>
            <p className="text">States</p>
          </div>
        </div>
        <div className="info-holder">
          <div className="info-block">
            <p>Experience</p>
            <p className="info-text">
              We have partnered with thousands of borrowers to finance investment properties across
              the nation. We leverage our expertise and relationships to deliver you outstanding
              results.
            </p>
          </div>
          <div className="info-block">
            <p>Competitive Rates</p>
            <p className="info-text">
              Our vast lender relationships, and everyday market experience enable us to customize
              unparalleled financing solutions for any type of investment property.
            </p>
          </div>
          <div className="info-block">
            <p>Team Mindset</p>
            <p className="info-text">
              From underwriting to final payoff, Onyx Funding is by your side every step of the way.
              We strive to provide an outstanding experience - Every time. No exceptions.
            </p>
          </div>
        </div>
        <button type="button" className="btn btn-default">
          Get Started
        </button>
      </div>
    </section>
  );
};

export { Info };
