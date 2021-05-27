
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";

import "swiper/components/pagination/pagination.min.css"
import './hero.scss'

//
import pic1 from '../../static/images/svg/slider/gameBuilder.svg'
import pic2 from '../../static/images/svg/slider/switchYellow.svg'
import pic3 from '../../static/images/svg/slider/switchBlue.svg'
import pic4 from '../../static/images/svg/slider/myNintendo.svg'


// import Swiper core and required modules

import SwiperCore, {
    Pagination,Navigation, Autoplay
  } from 'swiper/core';
  
  // install Swiper modules
  SwiperCore.use([Pagination,Navigation, Autoplay]);


export default function App() {

//https://codesandbox.io/s/ndpx6?file=/src/App.js
  
  return (
    <>
    <Swiper className="swiperConfig" slidesPerView={1} spaceBetween={1} autoplay={{ delay: 3000 }} loop={true} pagination={{"clickable": true}} navigation={true} className="mySwiper autoplay play carousel">
    <SwiperSlide > <img src={pic1} className="carouselIMG" alt="" /></SwiperSlide>
    <SwiperSlide > <img id="pic2" src={pic2} className="carouselIMG" alt="" /> </SwiperSlide>
    <SwiperSlide > <img src={pic3} className="carouselIMG" alt="" /> </SwiperSlide>
    <SwiperSlide > <img src={pic4} className="carouselIMG"alt="" /> </SwiperSlide>
    </Swiper>
    </>
  )
}