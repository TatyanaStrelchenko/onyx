import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';
import { Promo } from '../../components/Promo';
import './Partners.scss';
import Image1 from '../../assets/image/partners.jpg';
import Image2 from '../../assets/image/program-partners.jpg';
import Image3 from '../../assets/image/img-partners.jpg';

const Partners = () => {
  return (
    <div className="partners-page">
      <Header />
      <Hero styles={Image1}>
        <div className="text-holder">
          <h1>Partners</h1>
          <ul className="breadcrumbs">
            <li>Home</li>
            <li>Partners</li>
          </ul>
        </div>
      </Hero>
      <section className="partners-section">
        <div className="building-objects-holder">
          <div className="col-left">
            <div className="objects-text">
              <h2>EARN MORE FOR YOU AND YOUR CLIENTS</h2>
              <p>
                Onyx Funding is proud to work with some of the top brokers, agents and real estate
                professionals in the country. Our Partners Program is built to be a partnership
                where we all win together.
              </p>

              <p>
                With diverse solutions, reliable results, consistent communication, and competitive
                rates for your clients and referrals, you’ll have everything you need to earn more
                in less time.
              </p>

              <p>
                Onyx Funding takes care of the process from A-Z. Our diverse expertise, vast lender
                relationships, and real estate market experience enable us to customize unparalleled
                financing solutions for any type of investment property.
              </p>

              <p>
                We can help your clients secure the capital they need to close the transaction fast
                and smoothly.
              </p>
            </div>
          </div>
          <div className="col-right">
            <div className="img-holder">
              <img src={Image3} alt="img" />
            </div>
          </div>
        </div>
      </section>
      <Promo styles={Image2}>
        <div className="text-holder">
          <h2> LOOKING FOR A QUOTE?</h2>
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

export { Partners };
