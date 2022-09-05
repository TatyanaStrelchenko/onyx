import { Link } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';
import './Services.scss';
import Image1 from '../../assets/image/services.jpg';
import Image2 from '../../assets/icons/vector.svg';
import Image3 from '../../assets/icons/chart.svg';
import Image4 from '../../assets/icons/home.svg';
import Image5 from '../../assets/icons/users.svg';
import { ModalComponent } from '../../components/Modal';

const Services = () => {
  return (
    <div className="services-page">
      <Header />
      <Hero styles={Image1}>
        <div className="text-holder">
          <h1>Services </h1>
          <ul className="breadcrumbs">
            <li>
              <Link className="breadcrumbs-link" to="/">
                Home
              </Link>
            </li>
            <li>Services</li>
          </ul>
        </div>
      </Hero>

      <section className="loan-programs section">
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
                <Link to="/services/equity">
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
                <Link to="/services/debt">
                  <input type="submit" className="btn-more" value="learn more" />
                </Link>
              </div>
            </div>
            <div className="block">
              <div className="block-wrapper">
                <div className="icon-holder">
                  <img src={Image4} alt="" />
                </div>
                <h3>Investment Sales</h3>
                <p>
                  Although Onyx Funding does not “list” properties for sale, we have access to
                  hundreds of off and on market deals. Onyx selectively acts as a broker, referral
                  partner, or wholeseller in situations where we can utilize our relationships to
                  facilitate our clients’ acquisition or disposition requirements.
                </p>
                <Link to="/services/investment">
                  <input type="submit" className="btn-more" value="learn more" />
                </Link>
              </div>
            </div>
            <div className="block">
              <div className="block-wrapper">
                <div className="icon-holder">
                  <img src={Image5} alt="" />
                </div>
                <h3>Advisory</h3>
                <p>
                  Onyx Funding provides consulting and advisory services to commercial real estate
                  borrowers, lenders, originators, and investment sales brokers. These assignments
                  can include project feasibility analysis, capital structure optimization, debt and
                  equity restructurings, underwriting, lending guidelines, marketing, business,
                  sales, and operations.
                </p>
                <Link to="/services/advisory">
                  <input type="submit" className="btn-more" value="learn more" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="promo-section section">
        <div className="container">
          <div className="text-holder">
            <h2> HAVE A SCENERIO TO DISCUSS?</h2>
            <p>
              Please reach out below and one of our team members will be in touch as soon as
              possible.
            </p>
            <ModalComponent customClass="info-btn" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export { Services };
