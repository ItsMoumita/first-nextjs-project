  "use client" 
 import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/pagination';
import "swiper/css";     
import { Pagination } from "swiper/modules";

export default function Hero() {
  return (
    <div className="p-4">
      <div className="h-[70vh] w-full relative overflow-hidden rounded-xl ">
      <img
        src="/assets/banner.jpg"
        className="h-full w-full object-cover "
        alt="banner"
      />
      <div className="absolute  w-full h-full inset-0 rounded-xl  bg-[rgba(0,0,0,0.4)] z-1 "></div>
      <div className="banner-des absolute inset-0 z-10 text-white flex flex-col gap-4 items-center justify-center ">
        <h1 className="text-7xl font-semibold">Find your next favorite thing.</h1>
        <p className="text-2xl font-semibold">Discover and buy amazing things</p>
       <div className="mt-12 border-4 border-white p-1 rounded-4xl">
         <button className="btn px-4 py-2 bg-white text-black font-semibold rounded-4xl ">SHOP NOW</button>
       </div>
      </div>
       
       {/* banner Carousel  */}
      <div className="relative z-10 h-[72px] ">
        <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      </div>
    </div>
    </div>
  );
}
