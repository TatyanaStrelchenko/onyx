import { useRef } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle';
import './RecentlyFunded.scss';
import Image1 from '../../assets/image/img-home1.jpg';
import Image2 from '../../assets/image/img-home2.jpg';
import Image3 from '../../assets/image/img-home3.jpg';

const RecentlyFunded = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section className="recently-funded section">
      <div className="container">
        <h2 className="title-tabs">Recently Funded</h2>
        <Tabs>
          <div className="tabs-title">
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
            <div className="slider-nav">
              <div className="swiper-button-prev" ref={prevRef} />
              <div className="swiper-button-next" ref={nextRef} />
            </div>
          </div>
          <TabPanel>
            <Swiper
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              spaceBetween={20}
              slidesPerView={3}
              slidesPerGroup={2}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false
              }}
              pagination={{ clickable: true }}
              modules={[Autoplay, Pagination, Navigation]}
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
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                1000: {
                  // width: 1000,
                  slidesPerView: 3,
                  spaceBetween: 20
                },
                1280: {
                  // width: 1280,
                  slidesPerView: 3,
                  spaceBetween: 32
                }
              }}
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
            <Swiper
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              spaceBetween={20}
              slidesPerView={3}
              slidesPerGroup={2}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false
              }}
              pagination={{ clickable: true }}
              modules={[Autoplay, Pagination, Navigation]}
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
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                1000: {
                  // width: 1000,
                  slidesPerView: 3,
                  spaceBetween: 20
                },
                1280: {
                  // width: 1280,
                  slidesPerView: 3,
                  spaceBetween: 32
                }
              }}
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
            <Swiper
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              spaceBetween={20}
              slidesPerView={3}
              slidesPerGroup={2}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false
              }}
              pagination={{ clickable: true }}
              modules={[Autoplay, Pagination, Navigation]}
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
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                1000: {
                  // width: 1000,
                  slidesPerView: 3,
                  spaceBetween: 20
                },
                1280: {
                  // width: 1280,
                  slidesPerView: 3,
                  spaceBetween: 32
                }
              }}
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
            <Swiper
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              spaceBetween={20}
              slidesPerView={3}
              slidesPerGroup={2}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false
              }}
              pagination={{ clickable: true }}
              modules={[Autoplay, Pagination, Navigation]}
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
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                1000: {
                  // width: 1000,
                  slidesPerView: 3,
                  spaceBetween: 20
                },
                1280: {
                  // width: 1280,
                  slidesPerView: 3,
                  spaceBetween: 32
                }
              }}
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
            <Swiper
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              spaceBetween={20}
              slidesPerView={3}
              slidesPerGroup={2}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false
              }}
              pagination={{ clickable: true }}
              modules={[Autoplay, Pagination, Navigation]}
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
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                1000: {
                  // width: 1000,
                  slidesPerView: 3,
                  spaceBetween: 20
                },
                1280: {
                  // width: 1280,
                  slidesPerView: 3,
                  spaceBetween: 32
                }
              }}
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
            <Swiper
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              spaceBetween={20}
              slidesPerView={3}
              slidesPerGroup={2}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false
              }}
              pagination={{ clickable: true }}
              modules={[Autoplay, Pagination, Navigation]}
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
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                1000: {
                  // width: 1000,
                  slidesPerView: 3,
                  spaceBetween: 20
                },
                1280: {
                  // width: 1280,
                  slidesPerView: 3,
                  spaceBetween: 32
                }
              }}
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
            <Swiper
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              spaceBetween={20}
              slidesPerView={3}
              slidesPerGroup={2}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false
              }}
              pagination={{ clickable: true }}
              modules={[Autoplay, Pagination, Navigation]}
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
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                1000: {
                  // width: 1000,
                  slidesPerView: 3,
                  spaceBetween: 20
                },
                1280: {
                  // width: 1280,
                  slidesPerView: 3,
                  spaceBetween: 32
                }
              }}
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
            <Swiper
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              spaceBetween={20}
              slidesPerView={3}
              slidesPerGroup={2}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false
              }}
              pagination={{ clickable: true }}
              modules={[Autoplay, Pagination, Navigation]}
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
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                1000: {
                  // width: 1000,
                  slidesPerView: 3,
                  spaceBetween: 20
                },
                1280: {
                  // width: 1280,
                  slidesPerView: 3,
                  spaceBetween: 32
                }
              }}
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
        </Tabs>
      </div>
    </section>
  );
};

export { RecentlyFunded };
