import { Link } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';
import { Promo } from '../../components/Promo';
import './Partners.scss';
import Image1 from '../../assets/image/partners.jpg';
import Image2 from '../../assets/image/program-partners.jpg';
import Image3 from '../../assets/image/img-partners.jpg';
import Image4 from '../../assets/icons/clock1.svg';
import Image5 from '../../assets/icons/timer.svg';
import Image6 from '../../assets/icons/dolar.svg';
import Image7 from '../../assets/icons/clock2.svg';
import Image8 from '../../assets/icons/shield-check.svg';
import { ModalComponent } from '../../components/Modal';

const Partners = () => {
  return (
    <div className="partners-page">
      <Header />
      <Hero styles={Image1}>
        <div className="text-holder">
          <h1>Partners</h1>
          <ul className="breadcrumbs">
            <li>
              <Link className="breadcrumbs-link" to="/">
                Home
              </Link>
            </li>
            <li>Partners</li>
          </ul>
        </div>
      </Hero>
      <section className="partners-section section">
        <div className="right-left-block">
          <div className="container">
            <div className="col-left">
              <div className="objects-text">
                <h2>EARN MORE FOR YOU AND YOUR CLIENTS</h2>
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
                <img src={Image3} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="benefits-section section">
        <div className="container">
          <div className="text-holder">
            <h2>BENEFITS FOR OUR PARTNER</h2>
          </div>
          <div className="benefits-block">
            <div className="row">
              <div className="col">
                <img className="hourglass" src={Image4} alt="img" />
                <h3>CLOSE QUICKLY</h3>
                <p>
                  We understand time is in the essence, with transactions funding within 10 business
                  days you will never miss a closing.
                </p>
              </div>
              <div className="col">
                <img className="alarm" src={Image5} alt="img" />
                <h3>FAST ANSWERS</h3>
                <p>
                  Don’t waste time waiting around for answers - You’ll know right away whether or
                  not we can do the deal.
                </p>
              </div>
              <div className="col">
                <img className="dollar" src={Image6} alt="img" />
                <h3>COMPETITIVE PRICING</h3>
                <p>
                  We will successfully negotiate favorable debt and equity financing for your
                  clients. Rest assured when you work with Onyx Funding your
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <img className="timer" src={Image7} alt="img" />
                <h3>ENDLESS CAPITAL SOURCES</h3>
                <p>
                  You’ll never have to wonder whether or not financing is available when you use
                  Onyx Funding. We have extensive relationships and capital sources ensuring that we
                  will always have the right solution for your clients.
                </p>
              </div>
              <div className="col">
                <img className="shield" src={Image8} alt="img" />
                <h3>YOU ARE PROTECTED</h3>
                <p>
                  In the event your client contacts us directly, we will notify you to let you know.
                  This will enable you to get in touch with your client. If they would like to work
                  directly with us, we will share revenue of every loan your borrower originates
                  with us for the first year.
                </p>
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
      <Promo styles={Image2}>
        <div className="text-holder">
          <h2>HAVE A SCENERIO TO DISCUSS?</h2>
          <p>
            Please reach out below and one of our team members will be in touch as soon as possible.
          </p>
          <ModalComponent customClass="info-btn" />
        </div>
      </Promo>
      <Footer />
    </div>
  );
};

export { Partners };
