import './Info.scss';

const Info = () => {
  return (
    <section className="count-section">
      <div className="container">
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

        <button type="button" className="btn">
          Get Started
        </button>
      </div>
    </section>
  );
};

export { Info };
