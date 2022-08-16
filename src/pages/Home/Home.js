import Fade from 'react-reveal/Fade';
import { Featured } from '../../components/Featured';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';
import { Info } from '../../components/Info';
import { Contacts } from '../../components/Contacts';
import './Home.scss';
import { RecentlyFunded } from '../../components/RecentlyFunded';

import HeroBg from '../../assets/image/los-angeles.jpg';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <Hero styles={HeroBg}>
        <div className="text-holder">
          <Fade top duration={2000}>
            <h1>
              We
              <br />
              Make Deals
              <br />
              Come True.
            </h1>
            <p>
              Comprehensive financing solutions for commercial,
              <br /> multifamily and residential investment real estate.
            </p>
          </Fade>
        </div>
      </Hero>
      <Info />
      <Featured />
      <RecentlyFunded />
      <Contacts />
      <Footer />
    </div>
  );
};

export { Home };
