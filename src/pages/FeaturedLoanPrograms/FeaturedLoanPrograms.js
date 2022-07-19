import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { RecentlyFunded } from '../../components/RecentlyFunded/RecentlyFunded';
import './FeaturedLoanPrograms.scss';

const FeaturedLoanPrograms = () => {
  return (
    <div className="loan-programs-page">
      <Header />
      <section className="loanprograms">
        <div className="container">
          <div className="text-holder">
            <h1>Loan Programs </h1>
            <ul className="loan-menu">
              <li>Home</li>
              <span className="caret"> &gt; </span>
              <li>Loan Programs</li>
            </ul>
          </div>
        </div>
      </section>

      <RecentlyFunded />
      <Footer />
    </div>
  );
};

export { FeaturedLoanPrograms };
