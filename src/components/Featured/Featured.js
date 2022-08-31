import Image1 from '../../assets/icons/card.svg';
import Image2 from '../../assets/icons/clockwise.svg';
import Image3 from '../../assets/icons/home.svg';
import Image4 from '../../assets/icons/money.svg';
import Image5 from '../../assets/icons/сonstruction.svg';
import Image6 from '../../assets/icons/users.svg';
import Image7 from '../../assets/icons/bridge.svg';

import './Featured.scss';

const Featured = () => {
  return (
    <div className="featured-page">
      <section className="featured section">
        <div className="loan-programs-info">
          <div className="container">
            <div className="featured-title">
              <h2>what we do</h2>
            </div>
            <div className="block-list">
              <div className="block-holder">
                <div className="block">
                  <div className="block-wrapper">
                    <div className="icon-holder">
                      <img src={Image1} alt="" />
                    </div>
                    <h3>Commercial</h3>
                    <p>
                      We are your one-stop solution for all your commercial financing needs. Our
                      unique structure methodology and diverse network of capital sources make us
                      the perfect match to help you secure the funding you need.
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
                      For real estate investors interested in acquiring or rehabbing properties, we
                      have the best capital solutions in the market. Our integrated Fix and Flip
                      loan programs are diverse to help you with all types of properties
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
                      Maximize cash flow and optimize short and long-term strategies with the
                      industry’s most competitive programs in refinance
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
                      Maximize cash flow and optimize short and long-term strategies with the
                      industry’s most competitive programs in refinance.
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
                      Our competitive edge comes from our vast experience in structuring
                      construction financing. We offer a customized, best in class solution that
                      matches your project needs for both residential or commercial real estate.
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
                      As a leading mortgage brokerage in the commercial real estate market, Onyx
                      Funding brings skill and creativity to every loan request. We leverage decades
                      of experience to secure loans for all purposes and of all sizes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export { Featured };
