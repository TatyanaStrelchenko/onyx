import { Link } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';
import { Promo } from '../../components/Promo';
import './Debt.scss';
import Image1 from '../../assets/image/debt.jpg';
import Image2 from '../../assets/image/debt-photo.jpg';
import Image3 from '../../assets/image/promo-debt.jpg';
import { ModalComponent } from '../../components/Modal';

const Debt = () => {
  return (
    <div className="inner-page">
      <Header />
      <Hero styles={Image1}>
        <div className="text-holder">
          <h1>Debt</h1>
          <ul className="breadcrumbs">
            <li>
              <Link className="breadcrumbs-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="breadcrumbs-link" to="/services">
                Services
              </Link>
            </li>
            <li>Debt</li>
          </ul>
        </div>
      </Hero>
      <section className="top-section">
        <div className="container">
          <ul className="tabs-page">
            <li className="tabs-link">
              <Link className="link" to="/services/equity">
                Equity
              </Link>
            </li>
            <li className="tabs-link active">Debt</li>
            <li className="tabs-link">
              <Link className="link" to="/services/investment">
                Investment Sales
              </Link>
            </li>
            <li className="tabs-link">
              <Link className="link" to="/services/advisory">
                Advisory
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="section">
        <div className="right-left-block">
          <div className="container">
            <div className="col-left">
              <div className="objects-text">
                <h2>Find The Services We Offers</h2>
                <p>
                  Using debt as a financing tool for your real estate investments gives you the
                  power to leverage your property and skills to create true wealth. Many different
                  financial instruments allow you to finance your real estate projects and through
                  Onyx Funding you have access to all of them.
                </p>
                <p>
                  You can choose an interest-only loan, an adjustable-rate mortgage, a fixed-rate
                  mortgage, a bridge loan – there are many options and possibilities! Leveraging
                  debt wisely is crucial to ensure your projects profitability.
                </p>
                <p>
                  At Onyx Funding, we understand that maintaining and expanding your real estate
                  business can be time-consuming, stressful and costly. That is why we have made it
                  our mission to secure you the optimal funding solution for your specific needs and
                  facilitate a seamless transaction so you can focus on your business.
                </p>
                <p>
                  Simply put, we take care of the process from A-Z. Our diverse expertise, vast
                  lender relationships, and real estate market experience enable us to customize
                  financing for any loan request.
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
      <section className="numbers-section section">
        <div className="container">
          <h2>How Onyx Funding Works</h2>
          <div className="number-holder">
            <div className="numbers">
              <span className="number">01</span>
              <div className="numbers-text">
                <p className="text">Learn</p>
                <p className="text-bottom">
                  We start with learning and understanding about your business and specific scenario
                  and goals.
                </p>
              </div>
            </div>
            <div className="numbers">
              <span className="number">02</span>
              <div className="numbers-text">
                <p className="text">Compare</p>
                <p className="text-bottom">
                  We will find and negotiate the most competitive offers in the market to unlock the
                  best rates and terms for your scenario.
                </p>
              </div>
            </div>
            <div className="numbers">
              <span className="number">03</span>
              <div className="numbers-text">
                <p className="text">Proccess</p>
                <p className="text-bottom">
                  Onyx Funding provides an end-to-end service, taking care of the entire
                  underwriting process from A-Z.
                </p>
              </div>
            </div>
            <div className="numbers">
              <span className="number">04</span>
              <div className="numbers-text">
                <p className="text">Close</p>
                <p className="text-bottom">
                  We take care of the entire process by seamlessly driving your deal from
                  application to close.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Promo styles={Image3}>
        <div className="text-holder">
          <h2> DON&apos;T SEE THE LOAN PROGRAM YOU ARE LOOKING FOR?</h2>
          <p>
            These are just our featured programs, as industry leaders in CRE financing, we cater to
            any and all real estate investment financing requests. Contact us with your scenario to
            learn how we can help.
          </p>
          <ModalComponent customClass="info-btn" />
        </div>
      </Promo>
      <Footer />
    </div>
  );
};

export { Debt };
