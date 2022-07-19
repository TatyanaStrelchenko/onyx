import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';

const About = () => {
  return (
    <div className="about-page">
      <Header />
      <Hero>
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
      <Footer />
    </div>
  );
};

export { About };
