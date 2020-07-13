import React from "react";
import "./Slideshow.scss";

import slide1 from "../../images/1A.jpg";
import slide2 from "../../images/2A.jpg";
import slide3 from "../../images/3A.jpg";
import slide4 from "../../images/9.PNG";

import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
SwiperCore.use([Navigation]);
SwiperCore.use([Pagination]);
export default () => {
  return (
    <Swiper
      spaceBetween={0}
      loop={true}
      slidesPerView={1}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      pagination
    >
      <SwiperSlide>
        <img src={slide1} alt="error1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="error2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};
