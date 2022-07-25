import { Featured } from '../../components/Featured';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';
import { Info } from '../../components/Info';
import { Map } from '../../components/Map';
import { RecentlyFunded } from '../../components/RecentlyFunded';

import HeroBg from '../../assets/image/los-angeles.svg';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <Hero styles={HeroBg}>
        <div className="text-holder">
          <h1>
            Relationships.
            <br />
            Solutions.
            <br />
            Results
          </h1>
          <p>
            Comprehensive financing solutions for commercial,
            <br /> multifamily and residential investment real estate.
          </p>
        </div>
      </Hero>
      <Info />
      <Featured />
      <RecentlyFunded />
      <Map />
      <Footer />
    </div>
  );
};

export { Home };
