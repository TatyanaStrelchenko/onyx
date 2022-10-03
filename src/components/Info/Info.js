import './Info.scss';
import Fade from 'react-reveal/Fade';
import { useEffect, useRef } from 'react';

const Info = () => {
  // const widget = useRef();

  const destroyFunc = useRef();
  const effectCalled = useRef(false);
  const renderAfterCalled = useRef(false);

  if (effectCalled.current) {
    renderAfterCalled.current = true;
  }

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src =
      'https://www.thefinancials.com/Widget.aspx?pid=ONYX&wid=0375808058&mode=js&width=0';
    script.async = true;

    const widgetOne = document.getElementById('widgetOne');
    widgetOne.appendChild(script);

    return () => {
      widgetOne.removeChild(script);
      if (!renderAfterCalled.current) {
        return;
      }
      if (destroyFunc.current) {
        destroyFunc.current();
      }
    };
  }, []);

  useEffect(() => {
    const widget = document.createElement('script');
    widget.type = 'text/javascript';
    widget.src =
      'https://www.thefinancials.com/Widget.aspx?pid=ONYX&wid=0375908060&mode=js&width=0';
    widget.async = true;

    const widgetTwo = document.getElementById('widgetTwo');
    widgetTwo.appendChild(widget);

    return () => {
      widgetTwo.removeChild(widget);
    };
  }, []);

  return (
    <div className="info-page">
      <section className="info-section section">
        <div className="container">
          <div className="rates-holder">
            <Fade duration={5000}>
              <div className="rates-block">
                <h2>PROUDLY CELEBRATING 30 YEARS</h2>
                <h3>RATE INFORMATION IS AT LEAST 15 MINUTES DELAYED.</h3>
                <p>
                  Onyx Funding is changing the way real estate investors connect with capital
                  sources. We work for you, the Borrower, and not for a Lender. This allows for
                  complete transparency, synergy and alignment in our interests.
                </p>
                <p>
                  Since our inception we have helped hundreds of real estate investors achieve their
                  goals by successfully negotiating and securing favorable debt and equity
                  financing.
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
                  <div id="widgetOne" />
                  {/* <div className="row">
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
                  </div> */}
                </div>
                <div className="table-holder">
                  <h3>U.S. TREASURY LIBOR SWAP SOFR SWAP</h3>
                  <div id="widgetTwo" />
                  {/* <div className="row">
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
                  </div> */}
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
              <span className="number">$20BN</span>
              <Fade duration={5000}>
                <p className="text">Loans Closed</p>
              </Fade>
            </div>
            <div className="numbers">
              <span className="number">$8.5BN</span>
              <Fade duration={5000}>
                <p className="text">Units Funded</p>
              </Fade>
            </div>
            <div className="numbers">
              <span className="number">565</span>
              <Fade duration={5000}>
                <p className="text">States</p>
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
              <p>Competitive Rates</p>
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
    </div>
  );
};

export { Info };
