import { Link } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';
import './Services.scss';
import Image1 from '../../assets/image/services.jpg';
import Image2 from '../../assets/icons/vector.svg';
import Image3 from '../../assets/icons/chart.svg';

const Services = () => {
  return (
    <div className="services-page">
      <Header />
      <Hero styles={Image1}>
        <div className="text-holder">
          <h1>Services </h1>
          <ul className="breadcrumbs">
            <li>Home</li>
            <li>Services</li>
          </ul>
        </div>
      </Hero>

      <section className="loan-programs">
        <div className="container">
          <div className="text-holder">
            <h2>Find The Services We Offers</h2>
            <p>
              Tailored financing solutions for all investment property types. Our fully integrated
              approach allows us to provide industry-leading all-encompassing services to our
              clients.
            </p>
          </div>
          <div className="block-list">
            <div className="block">
              <div className="block-wrapper">
                <div className="icon-holder">
                  <img src={Image2} alt="" />
                </div>
                <h3>Equity</h3>
                <p>
                  In situations where certain lenders prohibit mezzanine debt to lever a property,
                  an equity position can be beneficial to reach an LTV ratio of &gt; 90%. Onyx
                  Funding negotiates aggressively on your behalf to achieve your property goals
                </p>
                <Link to="/equity">
                  <input type="submit" className="btn-more" value="learn more" />
                </Link>
              </div>
            </div>
            <div className="block">
              <div className="block-wrapper">
                <div className="icon-holder">
                  <img src={Image3} alt="" />
                </div>
                <h3>Debt</h3>
                <p>
                  You can choose an interest-only loan, an adjustable-rate mortgage, a fixed-rate
                  mortgage, a bridge loan – there are many options and possibilities! Leveraging
                  debt wisely is crucial to ensure your projects profitability.
                </p>
                <Link to="/debt">
                  <input type="submit" className="btn-more" value="learn more" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="promo-section">
        <div className="container">
          <div className="text-holder">
            <h2> DON&apos;T SEE THE LOAN PROGRAM YOU ARE LOOKING FOR?</h2>
            <p>
              {' '}
              These are just our featured programs, as industry leaders in CRE financing, we cater
              to any and all real estate investment financing requests. Contact us with your
              scenario to learn how we can help.
            </p>
            <button type="button" className="btn info-btn">
              Get Started
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export { Services };
