import { Link } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Map } from '../../components/Map';

import './Contact.scss';

const Contact = () => {
  return (
    <div className="contact-page">
      <Header />
      <section className="section-contact-us">
        <div className="container">
          <p className="text-contact-us">
            We can <span>cover all your financing needs</span> across all property types and real
            estate investment strategies.
          </p>
          <h2>
            <span>Contact Us</span>
          </h2>
        </div>
      </section>
      <Map />
      <section className="section-form-contact">
        <div className="container">
          <div className="contact-holder">
            <div className="contact-info-block">
              <div className="text-holder">
                <h2>Secure the Funding You Need</h2>
              </div>
              <p>
                Onyx Funding will find the best financing solutions for your deals under a clear and
                straightforward execution.
              </p>
              <ul>
                <li>Fill in the Form</li>
                <li>Discuss your request</li>
                <li>Submit and close</li>
              </ul>
              <p className="bold-text">Visit our office at</p>
              <ul>
                <li>
                  PHONE
                  <Link to="/">(415) 583-5515</Link>
                </li>
                <li>
                  EMAIL
                  <Link to="/">support@onyxfunding.us</Link>
                </li>
                <li>
                  ADDRESS
                  <Link to="/">
                    2200 NW 2nd Ave, STE 211, Miami, FL 33127, United States of America
                  </Link>
                </li>
              </ul>
            </div>
            <div className="contact-form-block">
              <div className="text-holder">
                <h2>Submit Online Inquiry</h2>
              </div>
              <form action="" className="contact-form">
                <label htmlFor="a">
                  {' '}
                  <span className="text-control">Name</span>
                  <input type="text" placeholder="Ann Hateway" id="a" className="form-control" />
                </label>
                <label htmlFor="a">
                  {' '}
                  <span className="text-control">Email</span>
                  <input
                    type="email"
                    placeholder="ann_hateway@gmail.com"
                    className="form-control"
                  />
                </label>
                <label htmlFor="a">
                  {' '}
                  <span className="text-control">Phone</span>
                  <input type="phone" placeholder="+380635865432" className="form-control" />
                </label>
                <label htmlFor="a">
                  {' '}
                  <span className="text-control">Message</span>
                  <textarea
                    name="text"
                    cols="30"
                    rows="10"
                    className="form-control"
                    placeholder="Your message"
                  />
                </label>
                <input type="submit" className="btn btn-primary" value="Send a Request" />
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export { Contact };
