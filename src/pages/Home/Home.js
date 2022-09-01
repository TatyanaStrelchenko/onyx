import { Featured } from '../../components/Featured';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
// import { Hero } from '../../components/Hero';
import { Info } from '../../components/Info';
import { Contacts } from '../../components/Contacts';
import './Home.scss';
import { RecentlyFunded } from '../../components/RecentlyFunded';
import { Video } from '../../components/Video';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <Video />
      <Info />
      <Featured />
      <section className="property-section section">
        <div className="container">
          <h2 className="property-title">Any Property Type. Any Strategy.</h2>
        </div>
      </section>
      <RecentlyFunded />
      <Contacts />
      <Footer />
    </div>
  );
};

export { Home };
