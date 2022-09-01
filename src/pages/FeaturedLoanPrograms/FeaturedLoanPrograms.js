import { Link } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';
import { RecentlyFunded } from '../../components/RecentlyFunded/RecentlyFunded';
import './FeaturedLoanPrograms.scss';
import { Promo } from '../../components/Promo';

import Image1 from '../../assets/icons/card.svg';
import Image2 from '../../assets/icons/clockwise.svg';
import Image3 from '../../assets/icons/home.svg';
import Image4 from '../../assets/icons/money.svg';
import Image5 from '../../assets/icons/сonstruction.svg';
import Image6 from '../../assets/icons/users.svg';
import Image7 from '../../assets/icons/bridge.svg';

import Image8 from '../../assets/image/loan-programs.jpg';
import Image9 from '../../assets/image/home.jpg';
import Image10 from '../../assets/image/img-home3.jpg';
import { ModalComponent } from '../../components/Modal';

const FeaturedLoanPrograms = () => {
  return (
    <div className="loan-programs-page">
      <Header />
      <Hero styles={Image8}>
        <div className="text-holder">
          <h1>Loan Programs </h1>
          <ul className="breadcrumbs">
            <li>
              <Link className="breadcrumbs-link" to="/">
                Home
              </Link>
            </li>
            <li>Loan Programs</li>
          </ul>
        </div>
      </Hero>
      <section className="loan-programs section">
        <div className="container">
          <div className="text-holder">
            <h2>Featured Loan Programs</h2>
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
                  <img src={Image1} alt="" />
                </div>
                <h3>Commercial</h3>
                <p>
                  We are your one-stop solution for all your commercial financing needs. Our unique
                  structure methodology and diverse network of capital sources make us the perfect
                  match to help you secure the funding you need.
                </p>
              </div>
            </div>
            <div className="block">
              <div className="block-wrapper">
                <div className="icon-holder">
                  <img src={Image2} alt="" />
                </div>
                <h3>Fix and Flip</h3>
                <p>
                  For real estate investors interested in acquiring or rehabbing properties, we have
                  the best capital solutions in the market. Our integrated Fix and Flip loan
                  programs are diverse to help you with all types of properties
                </p>
              </div>
            </div>
            <div className="block">
              <div className="block-wrapper">
                <div className="icon-holder">
                  <img src={Image3} alt="" />
                </div>
                <h3>Rental / Refinance</h3>
                <p>
                  Weather you have a single property or a large portfolio, we got you covered.
                  Maximize cash flow and optimize short and long-term strategies with the industry’s
                  most competitive programs in refinance
                </p>
              </div>
            </div>
            <div className="block">
              <div className="block-wrapper">
                <div className="icon-holder">
                  <img src={Image4} alt="" />
                </div>
                <h3>Fix to Rent</h3>
                <p>
                  Weather you have a single property or a large portfolio, we got you covered.
                  Maximize cash flow and optimize short and long-term strategies with the industry’s
                  most competitive programs in refinance.
                </p>
              </div>
            </div>
            <div className="block">
              <div className="block-wrapper">
                <div className="icon-holder">
                  <img src={Image5} alt="" />
                </div>
                <h3>New Construction</h3>
                <p>
                  Our competitive edge comes from our vast experience in structuring construction
                  financing. We offer a customized, best in class solution that matches your project
                  needs for both residential or commercial real estate.
                </p>
              </div>
            </div>
            <div className="block">
              <div className="block-wrapper">
                <div className="icon-holder">
                  <img src={Image6} alt="" />
                </div>
                <h3>Multifamily</h3>
                <p>
                  We offer highly flexible and customizable multifamily financing programs - no
                  matter the size or stage of your property. Our services can help you acquire,
                  renovate, stabilize, or refinance your property.
                </p>
              </div>
            </div>
            <div className="block">
              <div className="block-wrapper">
                <div className="icon-holder">
                  <img src={Image7} alt="" />
                </div>
                <h3>Bridge</h3>
                <p>
                  As a leading mortgage brokerage in the commercial real estate market, Onyx Funding
                  brings skill and creativity to every loan request. We leverage decades of
                  experience to secure loans for all purposes and of all sizes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="property-section section">
        <div className="container">
          <h2 className="property-title">Any Property Type. Any Strategy.</h2>
        </div>
      </section>
      <RecentlyFunded />
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
              <Link className="btn btn-default" to="/about">
                about us
              </Link>
            </div>
          </div>
          <div className="col-right">
            <div className="img-holder">
              <img src={Image10} alt="img" />
            </div>
          </div>
        </div>
      </div>
      <Promo styles={Image9}>
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

export { FeaturedLoanPrograms };
