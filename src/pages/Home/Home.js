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
      <RecentlyFunded />
      <Contacts />
      <Footer />
    </div>
  );
};

export { Home };
