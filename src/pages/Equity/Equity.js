import { Link } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';
import { Promo } from '../../components/Promo';
import './Equity.scss';
import Image1 from '../../assets/image/equity.jpg';
import Image2 from '../../assets/image/services-offers.jpg';
import Image3 from '../../assets/image/promo-equity.jpg';

const Equity = () => {
  return (
    <div className="inner-page">
      <Header />
      <Hero styles={Image1}>
        <div className="text-holder">
          <h1>Equity</h1>
          <ul className="breadcrumbs">
            <Link className="breadcrumbs-link" to="/">
              <li>Home</li>
            </Link>
            <Link className="breadcrumbs-link" to="/services">
              <li>Services</li>
            </Link>
            <li>Equity</li>
          </ul>
        </div>
      </Hero>
      <section className="section">
        <div className="right-left-block">
          <div className="container reverse">
            <div className="col-left">
              <div className="objects-text">
                <h2>Find The Services We Offers</h2>
                <p>
                  Onyx Funding is proud to work with some of the top brokers, agents and real estate
                  professionals in the country. Our Partners Program is built to be a partnership
                  where we all win together.
                </p>
                <p>
                  With diverse solutions, reliable results, consistent communication, and
                  competitive rates for your clients and referrals, you’ll have everything you need
                  to earn more in less time.
                </p>
                <p>
                  Onyx Funding takes care of the process from A-Z. Our diverse expertise, vast
                  lender relationships, and real estate market experience enable us to customize
                  unparalleled financing solutions for any type of investment property.
                </p>
                <p>
                  We can help your clients secure the capital they need to close the transaction
                  fast and smoothly.
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
      </section>
      <section className="numbers-section">
        <div className="container">
          <h2>How Onyx Funding Works</h2>
          <div className="number-holder">
            <div className="numbers">
              <span className="number">01</span>
              <p className="text">Learn</p>
              <p className="text-bottom">
                We start with learning and understanding about your business and specific scenario
                and goals.
              </p>
            </div>
            <div className="numbers">
              <span className="number">02</span>
              <p className="text">Compare</p>
              <p className="text-bottom">
                We will find and negotiate the most competitive offers in the market to unlock the
                best rates and terms for your scenario.
              </p>
            </div>
            <div className="numbers">
              <span className="number">03</span>
              <p className="text">Proccess</p>
              <p className="text-bottom">
                Onyx Funding provides an end-to-end service, taking care of the entire underwriting
                process from A-Z.
              </p>
            </div>
            <div className="numbers">
              <span className="number">04</span>
              <p className="text">Close</p>
              <p className="text-bottom">
                We take care of the entire process by seamlessly driving your deal from application
                to close.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Promo styles={Image3}>
        <div className="text-holder">
          <h2> DON&apos;T SEE THE LOAN PROGRAM YOU ARE LOOKING FOR?</h2>
          <p>
            {' '}
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

export { Equity };
