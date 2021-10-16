import React, { useRef } from 'react';
// import modules from react-bootstrap 
import { Container, Row, Col } from 'react-bootstrap'
// import swiper react component
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper'
// Import Swiper styles
import "swiper/swiper.scss";

import Button from "./Button"
// import icons from react-icons
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"

import { Link } from 'react-router-dom';

const HomeHeader = ({ data }) => {
  // install Swiper Modules
  SwiperCore.use([Navigation])
  let prevBtnRef = useRef(null)
  let nextBtnRef = useRef(null)  

  return (
    <div className="hero-slider">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        navigation={{
          prevEl: prevBtnRef.current,
          nextEl: nextBtnRef.current,
        }}
        onSwiper={(swiper) => {
          // Delay execution for the refs to be defined
          setTimeout(() => {
            // Override prevEl & nextEl now that refs are defined
            swiper.params.navigation.prevEl = prevBtnRef.current;
            swiper.params.navigation.nextEl = nextBtnRef.current;

            // Re-init navigation
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        className="hero-slider__slider"
      >
        {
          data && data.map((item, index) => (
            <SwiperSlide key={index} className="hero-slider__slider__item">
              <Container>
                <Row>
                  <Col md={6} sm={12}>
                    <div className="hero-slider__slider__item__info">
                      <h6>
                        <span>{item.heading}</span>
                      </h6>
                      <h1>
                        <span>{item.title}</span>
                      </h1>
                      <p>
                        <span>{item.description}</span>
                      </p>
                      <Link to="/shop">
                        <Button >
                          Shop Now
                        </Button>
                      </Link>
                    </div>
                  </Col>
                </Row>
                <div className="hero-slider__slider__item__image">
                  <img src={item.img} alt="" />
                </div>
              </Container>
            </SwiperSlide>
          ))
        }
      </Swiper>

      <div className="hero-slider__control">
        <button className="hero-slider__control__item" ref={prevBtnRef}>
          <BsArrowLeft />
        </button>
        <button className="hero-slider__control__item" ref={nextBtnRef}>
          <BsArrowRight />
        </button>
      </div>
    </div>
  );
};


export default HomeHeader
