// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle';
import './Featured.scss';
import Image1 from '../../assets/icons/card.svg';
import Image3 from '../../assets/icons/home.svg';
import Image4 from '../../assets/icons/money.svg';

const Featured = () => {
  return (
    <section className="featured">
      <div className="container">
        <h2>Featured Loan Programs</h2>
        <div className="swiper">
          <Swiper
            spaceBetween={32}
            slidesPerView={4}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            navigation
            modules={[Autoplay, Navigation]}
          >
            <SwiperSlide>
              <img src={Image1} alt="" />
              <h3>Commercial</h3>
              <p>We are your one-stop solution for all your commercial financing needs...</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image3} alt="" />
              <h3>Fix and Flip</h3>
              <p>For real estate investors interested in acquiring or rehabbing properties...</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image3} alt="" />
              <h3>Rental / Refinance</h3>
              <p>Weather you have a single property or a large portfolio, we got you...</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image4} alt="" />
              <h3>Fix to Rent</h3>
              <p>Weather you have a single property or a large portfolio, we got you...</p>
            </SwiperSlide>
            <SwiperSlide>
              <h3>Commercial5</h3>
              <p>We are your one-stop solution for all your commercial financing needs...</p>
            </SwiperSlide>
            <SwiperSlide>
              <h3>Commercial6</h3>
              <p>We are your one-stop solution for all your commercial financing needs...</p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export { Featured };
