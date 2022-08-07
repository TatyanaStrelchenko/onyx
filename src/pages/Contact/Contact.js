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
              <ul className="contact-request">
                <li>
                  <p>Fill in the Form</p>
                </li>
                <li>
                  <p>Discuss your request</p>
                </li>
                <li>
                  <p>Submit and close</p>
                </li>
              </ul>
              <p className="bold-text">Visit our office at</p>
              <ul className="info-contact">
                <li>
                  <span>PHONE</span>
                  <Link className="link" to="/">
                    (415) 583-5515
                  </Link>
                </li>
                <li>
                  <span>EMAIL</span>
                  <Link className="link" to="/">
                    support@onyxfunding.us
                  </Link>
                </li>
                <li>
                  <span>ADDRESS</span>
                  <Link className="link" to="/">
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
                <label className="label" htmlFor="a">
                  {' '}
                  <span className="text-control">What`s your name?</span>
                  <input type="text" placeholder="Type your name" id="a" className="form-control" />
                </label>
                <label className="label" htmlFor="a">
                  {' '}
                  <span className="text-control">What`s your email address?</span>
                  <input
                    type="Type your Email Address"
                    placeholder="ann_hateway@gmail.com"
                    className="form-control"
                  />
                </label>
                <label className="label" htmlFor="a">
                  {' '}
                  <span className="text-control">What`s your phone?</span>
                  <input type="phone" placeholder="Type your Phone" className="form-control" />
                </label>
                <label className="label message" htmlFor="a">
                  {' '}
                  <span className="text-control">Message?</span>
                  <input
                    type="message"
                    placeholder="Tell us about you and the world"
                    className="form-control"
                  />
                </label>
                <input type="submit" className="btn btn-primary" value="SEND MESSAGE" />
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
