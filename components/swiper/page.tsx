"use client"
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { data_product } from '../../interfaces/products';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Import Swiper navigation styles
import ProductCard from '../products/page';
import './style.css';

// import required modules
import { FreeMode, Pagination, Navigation } from 'swiper/modules';

export default function App({ data }: any) {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 1024px (desktop)
          1024: {
            slidesPerView: 4,
          },
          // when window width is >= 768px (tablet)
          768: {
            slidesPerView: 3,
          },
          // when window width is >= 320px (mobile)
          320: {
            slidesPerView: 2,
          },
        }}
      >
        {data?.map((e: data_product, i: number) => (
          <SwiperSlide key={i}>
            <ProductCard datas={e} />
          </SwiperSlide>
        ))}
        {/* Custom navigation buttons */}
        <div className="swiper-button-prev custom-button"></div>
        <div className="swiper-button-next custom-button"></div>
      </Swiper>
    </>
  );
}
