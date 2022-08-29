import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';

import Image1 from '../../assets/icons/card.svg';
import Image2 from '../../assets/icons/clockwise.svg';
import Image3 from '../../assets/icons/home.svg';
import Image4 from '../../assets/icons/money.svg';
import Image5 from '../../assets/icons/сonstruction.svg';
import Image6 from '../../assets/icons/users.svg';
import Image7 from '../../assets/icons/bridge.svg';

import 'swiper/css';
import 'swiper/css/bundle';
import './Featured.scss';

const Featured = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="featured-page">
      <section className="featured">
        <div className="container">
          <div className="swiper-holder">
            <div className="swiper-title">
              <h2>Loan Programs what we do</h2>
              <div className="nav-holder">
                <div className="swiper-button-prev" ref={prevRef} />
                <div className="swiper-button-next" ref={nextRef} />
              </div>
            </div>
            <Swiper
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              slidesPerView={4}
              spaceBetween={20}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false
              }}
              modules={[Autoplay, Navigation]}
              breakpoints={{
                0: {
                  // width: 0,
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                320: {
                  // width: 320,
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                580: {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                768: {
                  // width: 768,
                  slidesPerView: 3,
                  spaceBetween: 20
                },
                1280: {
                  // width: 1280,
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
                <p>
                  Our competitive edge comes from our vast experience in structuring construction
                </p>
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
                <h3>Multifamily</h3>
                <p>We offer highly flexible and customizable multifamily financing</p>
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
        <div className="loan-programs-info">
          <div className="container">
            <div className="block-list">
              <div className="block">
                <div className="block-wrapper">
                  <div className="icon-holder">
                    <img src={Image1} alt="" />
                  </div>
                  <h3>Commercial</h3>
                  <p>We are your one-stop solution for all your commercial financing needs...</p>
                </div>
              </div>
              <div className="block">
                <div className="block-wrapper">
                  <div className="icon-holder">
                    <img src={Image2} alt="" />
                  </div>
                  <h3>Fix and Flip</h3>
                  <p>
                    For real estate investors interested in acquiring or rehabbing properties...
                  </p>
                </div>
              </div>
              <div className="block">
                <div className="block-wrapper">
                  <div className="icon-holder">
                    <img src={Image3} alt="" />
                  </div>
                  <h3>Rental / Refinance</h3>
                  <p>Weather you have a single property or a large portfolio, we got you...</p>
                </div>
              </div>
              <div className="block">
                <div className="block-wrapper">
                  <div className="icon-holder">
                    <img src={Image4} alt="" />
                  </div>
                  <h3>Fix to Rent</h3>
                  <p>Weather you have a single property or a large portfolio, we got you...</p>
                </div>
              </div>
              <div className="block">
                <div className="block-wrapper">
                  <div className="icon-holder">
                    <img src={Image5} alt="" />
                  </div>
                  <h3>New Construction</h3>
                  <p>
                    Our competitive edge comes from our vast experience in structuring construction
                  </p>
                </div>
              </div>
              <div className="block">
                <div className="block-wrapper">
                  <div className="icon-holder">
                    <img src={Image6} alt="" />
                  </div>
                  <h3>Multifamily</h3>
                  <p>We offer highly flexible and customizable multifamily financing</p>
                </div>
              </div>
              <div className="block">
                <div className="block-wrapper">
                  <div className="icon-holder">
                    <img src={Image7} alt="" />
                  </div>
                  <h3>Bridge</h3>
                  <p>As a leading mortgage brokerage in the commercial real estate market</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export { Featured };
