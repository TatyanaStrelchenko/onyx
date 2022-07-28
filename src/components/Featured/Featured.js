// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle';
import './Featured.scss';
import Image1 from '../../assets/icons/card.svg';
import Image2 from '../../assets/icons/clockwise.svg';
import Image3 from '../../assets/icons/home.svg';
import Image4 from '../../assets/icons/money.svg';
import Image5 from '../../assets/icons/сonstruction.svg';
import Image6 from '../../assets/icons/users.svg';
import Image7 from '../../assets/icons/bridge.svg';

const Featured = () => {
  return (
    <section className="featured">
      <div className="container">
        <div className="swiper-holder">
          <h2>Featured Loan Programs</h2>
          <Swiper
            navigation
            slidesPerView={4}
            spaceBetween={20}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            modules={[Autoplay, Navigation]}
            breakpoints={{
              320: {
                // width: 320,
                slidesPerView: 1,
                spaceBetween: 20
              },
              580: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              768: {
                // width: 768,
                slidesPerView: 3,
                spaceBetween: 20
              },
              1280: {
                // width: 768,
                slidesPerView: 4,
                spaceBetween: 32
              }
            }}
          >
            <SwiperSlide>
              <div className="icon-holder">
                <img src={Image1} alt="" />
              </div>
              <h3>Commercial</h3>
              <p>We are your one-stop solution for all your commercial financing needs...</p>
              <p className="info-text">
                We are your one-stop solution for all your commercial financing needs. Our unique
                structure methodology and diverse network of capital sources make us the perfect
                match to help you secure the funding you need. Any type of property. Any size.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <div className="icon-holder">
                <img src={Image2} alt="" />
              </div>
              <h3>Fix and Flip</h3>
              <p>For real estate investors interested in acquiring or rehabbing properties...</p>
              <p className="info-text">
                We are your one-stop solution for all your commercial financing needs. Our unique
                structure methodology and diverse network of capital sources make us the perfect
                match to help you secure the funding you need. Any type of property. Any size.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <div className="icon-holder">
                <img src={Image3} alt="" />
              </div>
              <h3>Rental / Refinance</h3>
              <p>Weather you have a single property or a large portfolio, we got you...</p>
              <p className="info-text">
                We are your one-stop solution for all your commercial financing needs. Our unique
                structure methodology and diverse network of capital sources make us the perfect
                match to help you secure the funding you need. Any type of property. Any size.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <div className="icon-holder">
                <img src={Image4} alt="" />
              </div>
              <h3>Fix to Rent</h3>
              <p>Weather you have a single property or a large portfolio, we got you...</p>
              <p className="info-text">
                We are your one-stop solution for all your commercial financing needs. Our unique
                structure methodology and diverse network of capital sources make us the perfect
                match to help you secure the funding you need. Any type of property. Any size.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <div className="icon-holder">
                <img src={Image5} alt="" />
              </div>
              <h3>New Construction</h3>
              <p>Our competitive edge comes from our vast experience in structuring construction</p>
              <p className="info-text">
                We are your one-stop solution for all your commercial financing needs. Our unique
                structure methodology and diverse network of capital sources make us the perfect
                match to help you secure the funding you need. Any type of property. Any size.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <div className="icon-holder">
                <img src={Image6} alt="" />
              </div>
              <h3>Bridge</h3>
              <p>As a leading mortgage brokerage in the commercial real estate market</p>
              <p className="info-text">
                We are your one-stop solution for all your commercial financing needs. Our unique
                structure methodology and diverse network of capital sources make us the perfect
                match to help you secure the funding you need. Any type of property. Any size.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <div className="icon-holder">
                <img src={Image7} alt="" />
              </div>
              <h3>Bridge</h3>
              <p>As a leading mortgage brokerage in the commercial real estate market</p>
              <p className="info-text">
                We are your one-stop solution for all your commercial financing needs. Our unique
                structure methodology and diverse network of capital sources make us the perfect
                match to help you secure the funding you need. Any type of property. Any size.
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export { Featured };
