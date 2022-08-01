import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';
import { Promo } from '../../components/Promo';
import './Partners.scss';
import Image1 from '../../assets/image/partners.jpg';
import Image2 from '../../assets/image/program-partners.jpg';
import Image3 from '../../assets/image/img-partners.jpg';
import Image4 from '../../assets/image/clock1.jpg';

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
      <section className="benefits">
        <div className="container">
          <div className="text-holder">
            <h2>Benefits For Our Partner</h2>
          </div>
          <div className="benefits-block">
            <div className="row">
              <div className="col">
                <img src={Image4} alt="img" />
                <h3>CLOSE QUICKLY</h3>
                <p>
                  We understand time is in the essence, with transactions funding within 10 business
                  days you will never miss a closing.
                </p>
              </div>
              <div className="col">
                <h3>FAST ANSWERS</h3>
                <p>
                  Don’t waste time waiting around for answers - You’ll know right away whether or
                  not we can do the deal.
                </p>
              </div>
              <div className="col">
                <h3>Competitive PRICING</h3>
                <p>
                  We will successfully negotiate favorable debt and equity financing for your
                  clients. Rest assured when you work with Onyx Funding your
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h3>ENDLESS CAPITAL SOURCES</h3>
                <p>
                  You’ll never have to wonder whether or not financing is available when you use
                  Onyx Funding. We have extensive relationships and capital sources ensuring that we
                  will always have the right solution for your clients.
                </p>
              </div>
              <div className="col">
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
