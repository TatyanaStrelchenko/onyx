// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/bundle';
import './Featured.scss';

const Featured = () => {
  return (
    <section>
      <div className="container">
        <div className="swiper">
          <Swiper
            spaceBetween={32}
            slidesPerView={4}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            pagination={{
              clickable: true
            }}
            navigation
            modules={[Autoplay, Pagination, Navigation]}
          >
            <SwiperSlide>
              <h3>Commercial</h3>
              <p>We are your one-stop solution for all your commercial financing needs...</p>
            </SwiperSlide>
            <SwiperSlide>
              <h3>Commercial</h3>
              <p>We are your one-stop solution for all your commercial financing needs...</p>
            </SwiperSlide>
            <SwiperSlide>
              <h3>Commercial3</h3>
              <p>We are your one-stop solution for all your commercial financing needs...</p>
            </SwiperSlide>
            <SwiperSlide>
              <h3>Commercial4</h3>
              <p>We are your one-stop solution for all your commercial financing needs...</p>
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
