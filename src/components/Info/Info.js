import { useEffect, useRef } from 'react';

import './Info.scss';
import Fade from 'react-reveal/Fade';
import { ModalComponent } from '../Modal';
import loadScriptWidget from '../../helpers/loadScriptWidget';

const Info = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);

  const loadScripts = async () => {
    await loadScriptWidget(
      'https://www.thefinancials.com/Widget.aspx?pid=ONYX&wid=0375808058&mode=js&width=0',
      ref
    );
    await loadScriptWidget(
      'https://www.thefinancials.com/Widget.aspx?pid=ONYX&wid=0375908060&mode=js&width=0',
      ref2
    );
  };

  useEffect(() => {
    loadScripts();
  }, []);

  return (
    <>
      <section className="info-section section">
        <div className="container">
          <div className="rates-holder">
            <Fade duration={5000}>
              <div className="rates-block">
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
                <ModalComponent customClass="btn-default" />
              </div>
            </Fade>
            <Fade duration={5000}>
              <div className="rates-block">
                <div className="table-holder">
                  <h3>LIVE INTEREST RATES</h3>
                  <div ref={ref} />
                </div>
                <div className="table-holder">
                  <h3>U.S. TREASURY LIBOR SWAP SOFR SWAP</h3>
                  <div ref={ref2} />
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
          <ModalComponent customClass="btn-default" />
        </div>
      </section>
    </>
  );
};

export { Info };
