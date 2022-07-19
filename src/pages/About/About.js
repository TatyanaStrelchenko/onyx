import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';
import './About.scss';
import Image1 from '../../assets/image/blank-map-us.svg';
import Image2 from '../../assets/image/img-home1.jpg';

const About = () => {
  return (
    <div className="about-page">
      <Header />
      <Hero />
      <section className="map-section">
        <div className="container">
          <div className="rates-holder">
            <div className="rates-block">
              <h2>$3.05 BILLION2 FINANCED SINCE 2008</h2>
              <p>
                We are seasoned in underwriting commercial real estate business plans, providing
                <br />
                capital for acquisitions, developments and refinancings across the nation.
              </p>
            </div>
            <div className="rates-block">
              <img src={Image1} alt="img" />
            </div>
            <div className="rates-block">
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
            <div className="rates-block">
              <img src={Image2} alt="img" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export { About };
