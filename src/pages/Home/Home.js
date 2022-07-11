import { Featured } from '../../components/Featured';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';
import { Info } from '../../components/Info';
import { Map } from '../../components/Map';
import { RecentlyFunded } from '../../components/RecentlyFunded';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <Hero />
      <Info />
      <Featured />
      <RecentlyFunded />
      <Map />
      <Footer />
    </div>
  );
};

export { Home };
