import { Featured } from '../../components/Featured';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';
import { Info } from '../../components/Info';
import { Contacts } from '../../components/Contacts';
import 'animate.css';
import './Home.scss';

import { RecentlyFunded } from '../../components/RecentlyFunded';

import HeroBg from '../../assets/image/los-angeles.jpg';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <Hero styles={HeroBg}>
        <div className="text-holder">
          <h1 className="animate__animated animate__fadeInDown">
            Relationships.
            <br />
            Solutions.
            <br />
            Results
          </h1>
          <p className="animate__animated animate__fadeInDown">
            Comprehensive financing solutions for commercial,
            <br /> multifamily and residential investment real estate.
          </p>
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
