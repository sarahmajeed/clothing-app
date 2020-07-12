import React from "react";
import "./Slideshow.scss";

import slide1 from "../../images/sarah.jpg";
import slide2 from "../../images/pic1.png";
import slide3 from "../../images/sarah.jpg";
import slide4 from "../../images/pic1.png";

import SwiperCore, { Navigation } from 'swiper';
import { Swiper , SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
SwiperCore.use([Navigation]);


export default () =>
{
  return(
    <Swiper
      spaceBetween = {50}
      slidesPerView = {3}
      navigation 
      onSwiper = {(swiper) => console.log(swiper)}
      onSlideChange = {() => console.log('slide change')}
    >
    <SwiperSlide><img src={slide1} alt="error1"/></SwiperSlide>
    <SwiperSlide><img src={slide2} alt="error2"/></SwiperSlide>
    <SwiperSlide><img src={slide3} alt=""/></SwiperSlide>
    <SwiperSlide><img src={slide4} alt=""/></SwiperSlide>
    </Swiper>
  );
};

