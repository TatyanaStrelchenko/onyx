import './Info.scss';
import Fade from 'react-reveal/Fade';
import { ModalComponent } from '../Modal';

const Info = () => {
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
                  <div className="row">
                    <div className="col">SOFR</div>
                    <div className="col">2.28000%</div>
                    <div className="col">2.28000%</div>
                    <div className="col">2.28000%</div>
                    <div className="col">0.05000%</div>
                  </div>
                  <div className="row">
                    <div className="col">30-Day Average SOFR</div>
                    <div className="col">2.28536%</div>
                    <div className="col">2.28536%</div>
                    <div className="col">1.80760%</div>
                    <div className="col">0.05000%</div>
                  </div>
                  <div className="row">
                    <div className="col">90-Day Average SOFR</div>
                    <div className="col">1.82148%</div>
                    <div className="col">1.80440%</div>
                    <div className="col">1.30262%</div>
                    <div className="col">0.04689%</div>
                  </div>
                  <div className="row">
                    <div className="col">1-month Term SOFR</div>
                    <div className="col">2.74750%</div>
                    <div className="col">2.68340%</div>
                    <div className="col">2.30339%</div>
                    <div className="col">0.05199%</div>
                  </div>
                  <div className="row">
                    <div className="col">3-month Term SOFR</div>
                    <div className="col">3.13380%</div>
                    <div className="col">3.06459%</div>
                    <div className="col">2.69280%</div>
                    <div className="col">0.05236%</div>
                  </div>
                </div>
                <div className="table-holder">
                  <h3>U.S. TREASURY LIBOR SWAP SOFR SWAP</h3>
                  <div className="row">
                    <div className="col">1 YEAR</div>
                    <div className="col">3.703%</div>
                    <div className="col">3.642%</div>
                    <div className="col">3.327%</div>
                    <div className="col">0.059%</div>
                  </div>
                  <div className="row">
                    <div className="col">2 YEAR</div>
                    <div className="col">3.583%</div>
                    <div className="col">3.531%</div>
                    <div className="col">3.189%</div>
                    <div className="col">0.175%</div>
                  </div>
                  <div className="row">
                    <div className="col">3 YEAR</div>
                    <div className="col">3.403%</div>
                    <div className="col">3.363%</div>
                    <div className="col">2.971%</div>
                    <div className="col">0.347%</div>
                  </div>
                  <div className="row">
                    <div className="col">5 YEAR</div>
                    <div className="col">3.173%</div>
                    <div className="col">3.150%</div>
                    <div className="col">2.673%</div>
                    <div className="col">0.655%</div>
                  </div>
                  <div className="row">
                    <div className="col">7 YEAR</div>
                    <div className="col">3.085%</div>
                    <div className="col">3.071%</div>
                    <div className="col">2.554%</div>
                    <div className="col">0.864%</div>
                  </div>
                  <div className="row">
                    <div className="col">10 YEAR</div>
                    <div className="col">3.063%</div>
                    <div className="col">3.058%</div>
                    <div className="col">2.525%</div>
                    <div className="col">1.067%</div>
                  </div>
                  <div className="row">
                    <div className="col">15 YEAR</div>
                    <div className="col">3.083%</div>
                    <div className="col">3.086%</div>
                    <div className="col">2.576%</div>
                    <div className="col">1.248%</div>
                  </div>
                  <div className="row">
                    <div className="col">30 YEAR</div>
                    <div className="col">2.814%</div>
                    <div className="col">2.822%</div>
                    <div className="col">2.401%</div>
                    <div className="col">1.359%</div>
                  </div>
                </div>
              </div>
              {/* START theFinancials.com Content – SOFR/Prime */}

              {/* copyright theFinancials.com - All Rights Reserved */}

              {/* Get Help by Calling 1.843.886.3635 */}

              {/* specify the width of this Widget by changing '&width=0' at the end of the installation code. Use '&width=100%' to force the Widget to fill its parent container or leave it as 0 for default width */}

              <script
                type="text/javascript"
                src="https://www.thefinancials.com/Widget.aspx?pid=ONYX&wid=0375808058&mode=js&width=0"
              />

              {/* END theFinancials.com Content */}

              {/* START theFinancials.com Content – Treasuries/Swaps  */}

              {/* copyright theFinancials.com - All Rights Reserved  */}

              {/* Get Help by Calling 1.843.886.3635  */}

              {/* specify the width of this Widget by changing '&width=0' at the end of the installation code. Use '&width=100%' to force the Widget to fill its parent container or leave it as 0 for default width  */}

              <script
                type="text/javascript"
                src="https://www.thefinancials.com/Widget.aspx?pid=ONYX&wid=0375908060&mode=js&width=0"
              />

              {/* END theFinancials.com Content  */}
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
