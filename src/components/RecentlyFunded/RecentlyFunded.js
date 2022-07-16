import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle';
import './RecentlyFunded.scss';
import Image1 from '../../assets/image/home-1.png';
import Image2 from '../../assets/image/home-2.png';
import Image3 from '../../assets/image/home-3.png';

const RecentlyFunded = () => (
  <section className="recently-funded">
    <h2 className="title-tabs">Recently Funded</h2>
    <Tabs>
      <TabList className="tabs-holder">
        <Tab>All</Tab>
        <Tab>Multifamily</Tab>
        <Tab>New Construction</Tab>
        <Tab>Flip and Flix</Tab>
        <Tab>Rental</Tab>
        <Tab>Fix to Rent</Tab>
        <Tab>commercial</Tab>
        <Tab>Bridge</Tab>
      </TabList>
      <TabPanel>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          slidesPerGroup={2}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          navigation
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
            <img src={Image1} alt="" />
            <div className="border">
              <div className="item-info">
                <h3>New Construction</h3>
                <p>Olympia, WA</p>
                <dl className="info-home">
                  <dd>Loan Amount:</dd>
                  <dt>$629,000</dt>
                </dl>
                <dl className="info-type">
                  <dd>Property Type:</dd>
                  <dt>Duplex</dt>
                </dl>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image2} alt="" />
            <div className="border">
              <div className="item-info">
                <h3>Multifamily Acquisition</h3>
                <p>Philadelphia, PA</p>
                <dl className="info-home">
                  <dd>Loan Amount:</dd>
                  <dt>$13,200,000</dt>
                </dl>
                <dl className="info-type">
                  <dd>Property Type:</dd>
                  <dt>24 Unit Multifamily</dt>
                </dl>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image3} alt="" />
            <div className="border">
              <div className="item-info">
                <h3>Storage Acquisition & Rehab</h3>
                <p>Dallas, TX</p>
                <dl className="info-home">
                  <dd>Loan Amount:</dd>
                  <dt>$4,380,406</dt>
                </dl>
                <dl className="info-type">
                  <dd>Property Type:</dd>
                  <dt>Self Storage Facility</dt>
                </dl>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image1} alt="" />
            <div className="border">
              <div className="item-info">
                <h3>New Construction</h3>
                <p>Olympia, WA</p>
                <dl className="info-home">
                  <dd>Loan Amount:</dd>
                  <dt>$629,000</dt>
                </dl>
                <dl className="info-type">
                  <dd>Property Type:</dd>
                  <dt>Duplex</dt>
                </dl>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image2} alt="" />
            <div className="border">
              <div className="item-info">
                <h3>Multifamily Acquisition</h3>
                <p>Philadelphia, PA</p>
                <dl className="info-home">
                  <dd>Loan Amount:</dd>
                  <dt>$13,200,000</dt>
                </dl>
                <dl className="info-type">
                  <dd>Property Type:</dd>
                  <dt>24 Unit Multifamily</dt>
                </dl>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image3} alt="" />
            <div className="border">
              <div className="item-info">
                <h3>Storage Acquisition & Rehab</h3>
                <p>Dallas, TX</p>
                <dl className="info-home">
                  <dd>Loan Amount:</dd>
                  <dt>$4,380,406</dt>
                </dl>
                <dl className="info-type">
                  <dd>Property Type:</dd>
                  <dt>Self Storage Facility</dt>
                </dl>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </TabPanel>
      <TabPanel>
        <div className="swiper-holder">
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
              <div className="item-info">
                <h3>New Construction</h3>
                <p>Olympia, WA</p>
                <dl className="info-home">
                  <dd>Loan Amount:</dd>
                  <dt>$629,000</dt>
                </dl>
                <dl className="info-type">
                  <dd>Property Type:</dd>
                  <dt>Duplex</dt>
                </dl>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image1} alt="" />
              <div className="item-info">
                <h3>New Construction</h3>
                <p>Olympia, WA</p>
                <dl className="info-home">
                  <dd>Loan Amount:</dd>
                  <dt>$629,000</dt>
                </dl>
                <dl className="info-type">
                  <dd>Property Type:</dd>
                  <dt>Duplex</dt>
                </dl>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image1} alt="" />
              <div className="item-info">
                <h3>New Construction</h3>
                <p>Olympia, WA</p>
                <dl className="info-home">
                  <dd>Loan Amount:</dd>
                  <dt>$629,000</dt>
                </dl>
                <dl className="info-type">
                  <dd>Property Type:</dd>
                  <dt>Duplex</dt>
                </dl>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image1} alt="" />
              <div className="item-info">
                <h3>New Construction</h3>
                <p>Olympia, WA</p>
                <dl className="info-home">
                  <dd>Loan Amount:</dd>
                  <dt>$629,000</dt>
                </dl>
                <dl className="info-type">
                  <dd>Property Type:</dd>
                  <dt>Duplex</dt>
                </dl>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image1} alt="" />
              <div className="item-info">
                <h3>New Construction</h3>
                <p>Olympia, WA</p>
                <dl className="info-home">
                  <dd>Loan Amount:</dd>
                  <dt>$629,000</dt>
                </dl>
                <dl className="info-type">
                  <dd>Property Type:</dd>
                  <dt>Duplex</dt>
                </dl>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image1} alt="" />
              <div className="item-info">
                <h3>New Construction</h3>
                <p>Olympia, WA</p>
                <dl className="info-home">
                  <dd>Loan Amount:</dd>
                  <dt>$629,000</dt>
                </dl>
                <dl className="info-type">
                  <dd>Property Type:</dd>
                  <dt>Duplex</dt>
                </dl>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="swiper-holder">
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
              <div className="item-info">
                <h3>New Construction</h3>
                <p>Olympia, WA</p>
                <dl className="info-home">
                  <dd>Loan Amount:</dd>
                  <dt>$629,000</dt>
                </dl>
                <dl className="info-type">
                  <dd>Property Type:</dd>
                  <dt>Duplex</dt>
                </dl>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image1} alt="" />
              <div className="item-info">
                <h3>New Construction</h3>
                <p>Olympia, WA</p>
                <dl className="info-home">
                  <dd>Loan Amount:</dd>
                  <dt>$629,000</dt>
                </dl>
                <dl className="info-type">
                  <dd>Property Type:</dd>
                  <dt>Duplex</dt>
                </dl>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image1} alt="" />
              <div className="item-info">
                <h3>New Construction</h3>
                <p>Olympia, WA</p>
                <dl className="info-home">
                  <dd>Loan Amount:</dd>
                  <dt>$629,000</dt>
                </dl>
                <dl className="info-type">
                  <dd>Property Type:</dd>
                  <dt>Duplex</dt>
                </dl>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image1} alt="" />
              <div className="item-info">
                <h3>New Construction</h3>
                <p>Olympia, WA</p>
                <dl className="info-home">
                  <dd>Loan Amount:</dd>
                  <dt>$629,000</dt>
                </dl>
                <dl className="info-type">
                  <dd>Property Type:</dd>
                  <dt>Duplex</dt>
                </dl>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image1} alt="" />
              <div className="item-info">
                <h3>New Construction</h3>
                <p>Olympia, WA</p>
                <dl className="info-home">
                  <dd>Loan Amount:</dd>
                  <dt>$629,000</dt>
                </dl>
                <dl className="info-type">
                  <dd>Property Type:</dd>
                  <dt>Duplex</dt>
                </dl>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image1} alt="" />
              <div className="item-info">
                <h3>New Construction</h3>
                <p>Olympia, WA</p>
                <dl className="info-home">
                  <dd>Loan Amount:</dd>
                  <dt>$629,000</dt>
                </dl>
                <dl className="info-type">
                  <dd>Property Type:</dd>
                  <dt>Duplex</dt>
                </dl>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="swiper-holder">
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
              <div className="item-info">
                <h3>New Construction</h3>
                <p>Olympia, WA</p>
                <dl className="info-home">
                  <dd>Loan Amount:</dd>
                  <dt>$629,000</dt>
                </dl>
                <dl className="info-type">
                  <dd>Property Type:</dd>
                  <dt>Duplex</dt>
                </dl>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image1} alt="" />
              <div className="item-info">
                <h3>New Construction</h3>
                <p>Olympia, WA</p>
                <dl className="info-home">
                  <dd>Loan Amount:</dd>
                  <dt>$629,000</dt>
                </dl>
                <dl className="info-type">
                  <dd>Property Type:</dd>
                  <dt>Duplex</dt>
                </dl>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image1} alt="" />
              <div className="item-info">
                <h3>New Construction</h3>
                <p>Olympia, WA</p>
                <dl className="info-home">
                  <dd>Loan Amount:</dd>
                  <dt>$629,000</dt>
                </dl>
                <dl className="info-type">
                  <dd>Property Type:</dd>
                  <dt>Duplex</dt>
                </dl>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image1} alt="" />
              <div className="border-top">
                <div className="item-info">
                  <h3>New Construction</h3>
                  <p>Olympia, WA</p>
                  <dl className="info-home">
                    <dd>Loan Amount:</dd>
                    <dt>$629,000</dt>
                  </dl>
                  <dl className="info-type">
                    <dd>Property Type:</dd>
                    <dt>Duplex</dt>
                  </dl>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image1} alt="" />
              <div className="border-top">
                <div className="item-info">
                  <h3>New Construction</h3>
                  <p>Olympia, WA</p>
                  <dl className="info-home">
                    <dd>Loan Amount:</dd>
                    <dt>$629,000</dt>
                  </dl>
                  <dl className="info-type">
                    <dd>Property Type:</dd>
                    <dt>Duplex</dt>
                  </dl>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image1} alt="" />
              <div className="item-info">
                <h3>New Construction</h3>
                <p>Olympia, WA</p>
                <dl className="info-home">
                  <dd>Loan Amount:</dd>
                  <dt>$629,000</dt>
                </dl>
                <dl className="info-type">
                  <dd>Property Type:</dd>
                  <dt>Duplex</dt>
                </dl>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="swiper-holder">
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
              <div className="item-info">
                <h3>New Construction</h3>
                <p>Olympia, WA</p>
                <dl className="info-home">
                  <dd>Loan Amount:</dd>
                  <dt>$629,000</dt>
                </dl>
                <dl className="info-type">
                  <dd>Property Type:</dd>
                  <dt>Duplex</dt>
                </dl>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image1} alt="" />
              <div className="item-info">
                <h3>New Construction</h3>
                <p>Olympia, WA</p>
                <dl className="info-home">
                  <dd>Loan Amount:</dd>
                  <dt>$629,000</dt>
                </dl>
                <dl className="info-type">
                  <dd>Property Type:</dd>
                  <dt>Duplex</dt>
                </dl>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image1} alt="" />
              <div className="item-info">
                <h3>New Construction</h3>
                <p>Olympia, WA</p>
                <dl className="info-home">
                  <dd>Loan Amount:</dd>
                  <dt>$629,000</dt>
                </dl>
                <dl className="info-type">
                  <dd>Property Type:</dd>
                  <dt>Duplex</dt>
                </dl>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image1} alt="" />
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
      </TabPanel>
      <TabPanel>
        <div className="swiper-holder">
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
              <img src={Image2} alt="" />
              <h3>Fix and Flip</h3>
              <p>For real estate investors interested in acquiring or rehabbing properties...</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image3} alt="" />
              <h3>Rental / Refinance</h3>
              <p>Weather you have a single property or a large portfolio, we got you...</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image1} alt="" />
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
      </TabPanel>
      <TabPanel>
        <div className="swiper-holder">
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
              <img src={Image2} alt="" />
              <h3>Fix and Flip</h3>
              <p>For real estate investors interested in acquiring or rehabbing properties...</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image3} alt="" />
              <h3>Rental / Refinance</h3>
              <p>Weather you have a single property or a large portfolio, we got you...</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image1} alt="" />
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
      </TabPanel>
      <TabPanel>
        <div className="swiper-holder">
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
              <img src={Image2} alt="" />
              <h3>Fix and Flip</h3>
              <p>For real estate investors interested in acquiring or rehabbing properties...</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image3} alt="" />
              <h3>Rental / Refinance</h3>
              <p>Weather you have a single property or a large portfolio, we got you...</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image1} alt="" />
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
      </TabPanel>
    </Tabs>
  </section>
);

export { RecentlyFunded };
