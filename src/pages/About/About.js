import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';
import { Promo } from '../../components/Promo';
import './About.scss';
import Image1 from '../../assets/image/blank-map-us.svg';
import Image2 from '../../assets/image/img-home1.jpg';
import Image3 from '../../assets/image/img-home2.jpg';
import Image4 from '../../assets/image/img-home3.jpg';
import Image5 from '../../assets/image/los-angeles2.jpg';
import Image6 from '../../assets/image/skyscraper.jpg';

const About = () => {
  return (
    <div className="about-page">
      <Header />
      <Hero styles={Image5}>
        <div className="text-holder">
          <h1>
            Relationships.
            <br />
            Solutions.
            <br />
            Results
          </h1>
        </div>
      </Hero>
      <section className="map-section">
        <div className="container">
          <div className="map-holder">
            <div className="text-block">
              <h2>$3.05 BILLION2 FINANCED SINCE 2008</h2>
              <p>
                We are seasoned in underwriting commercial real estate business plans, providing
                capital for acquisitions, developments and refinancings across the nation.
              </p>
            </div>
            <div className="map-block">
              <div className="map-info">
                <p>Transactions Closed</p>
                <p>Target MSAs</p>
              </div>
              <img src={Image1} alt="img" />
            </div>
          </div>
        </div>
        <div className="right-left-block">
          <div className="container reverse">
            <div className="col-left">
              <div className="objects-text">
                <p>
                  Onyx Funding is a leading, national provider of financing services to the
                  commercial real estate industry. Our diverse expertise, vast lender relationships,
                  and real estate experience enable us to customize unparalleled financing solutions
                  for any type of investment property.
                </p>
                <p>
                  We have successfully negotiated favorable debt and equity financing for our wide
                  verity of clients. We believe in building long term relationships with our clients
                  by providing exceptional service and consistent results.
                </p>
              </div>
            </div>
            <div className="col-right">
              <div className="img-holder">
                <img src={Image2} alt="img" />
              </div>
            </div>
          </div>
        </div>
        <div className="right-left-block center">
          <div className="container">
            <div className="col-left-center">
              <div className="img-holder">
                <img src={Image3} alt="img" />
              </div>
            </div>
            <div className="col-right-center">
              <div className="objects-text">
                <h2>HOW ONYX FUNDING WORKS</h2>
                <p>
                  Onyx Funding is changing the way real estate investors connect with capital
                  sources. We work for you, the Borrower, and not for a Lender. This allows for
                  complete transparency, synergy and alignment in our interests.
                </p>
                <p>
                  Since our inception we have helped hundreds of real estate investors achieve their
                  goals by successfully negotiating and securing favorable debt and equity financing
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="right-left-block">
          <div className="container reverse">
            <div className="col-left">
              <div className="objects-text">
                <h2>WHY PEOPLE CHOOSE US?</h2>
                <p>
                  Onyx Funding is a trusted name in the commercial real estate finance industry
                  because we deliver results through a proven and comprehensive process.
                </p>
                <p>
                  By choosing to be represented by a strong and experienced industry leader, you are
                  ensuring that you and your projects will demonstrate optimal success.
                </p>
              </div>
            </div>
            <div className="col-right">
              <div className="img-holder">
                <img src={Image4} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="container">
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
            GET STARTED
          </button>
        </div>
      </section>
      <Promo styles={Image6}>
        <div className="text-holder">
          <h2> DON&apos;T SEE THE LOAN PROGRAM YOU ARE LOOKING FOR?</h2>
          <p>
            These are just our featured programs, as industry leaders in CRE financing, we cater to
            any and all real estate investment financing requests. Contact us with your scenario to
            learn how we can help.
          </p>
          <button type="button" className="btn info-btn">
            Get Started
          </button>
        </div>
      </Promo>
      <Footer />
    </div>
  );
};

export { About };
