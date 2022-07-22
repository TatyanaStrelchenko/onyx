import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';
import './About.scss';
import Image1 from '../../assets/image/blank-map-us.svg';
import Image2 from '../../assets/image/img-home1.jpg';
import Image3 from '../../assets/image/img-home2.jpg';
import Image4 from '../../assets/image/img-home3.jpg';

const About = () => {
  return (
    <div className="about-page">
      <Header />
      <Hero />
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
        <div className="building-objects-holder ">
          <div className="col-left">
            <div className="objects-text">
              <p>
                Onyx Funding is a leading, national provider of financing services to the commercial
                real estate industry. Our diverse expertise, vast lender relationships, and real
                estate experience enable us to customize unparalleled financing solutions for any
                type of investment property.
              </p>
              <p>
                We have successfully negotiated favorable debt and equity financing for our wide
                verity of clients. We believe in building long term relationships with our clients
                by providing exceptional service and consistent results.
              </p>
            </div>
            <div className="img-holder">
              <img src={Image3} alt="img" />
            </div>
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
              <img src={Image2} alt="img" />
            </div>
            <div className="objects-text">
              <h2>HOW ONYX FUNDING WORKS</h2>
              <p>
                Onyx Funding is changing the way real estate investors connect with capital sources.
                We work for you, the Borrower, and not for a Lender. This allows for complete
                transparency, synergy and alignment in our interests.
              </p>
              <p>
                Since our inception we have helped hundreds of real estate investors achieve their
                goals by successfully negotiating and securing favorable debt and equity financing
              </p>
            </div>
            <div className="img-holder">
              <img src={Image4} alt="img" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export { About };
