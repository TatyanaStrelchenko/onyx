import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Map } from '../../components/Map';

import './Contact.scss';

const Contact = () => {
  return (
    <div className="contact-page">
      <Header />
      <Map />
      <section className="section">
        <div className="container">
          <div className="contact-info">
            <div className="text-holder">
              <h2>Secure the Funding You Need</h2>
              <p>
                Onyx Funding will find the best financing solutions for your deals under a clear and
                straightforward execution.
              </p>
              <ul>
                <li>Fill in the Form</li>
                <li>Discuss your request</li>
                <li>Submit and close</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export { Contact };
