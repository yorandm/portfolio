"use client";
import style from "./css/carrouselStyle.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
export default function Carousel({
    children,
  }: {
    children: React.ReactNode[]
  }){
    return (
        <>
         <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
    >
      {children.map((child, index) => (
              <SwiperSlide  key={index} className={style.carousel}>
                {child}
              </SwiperSlide>
            ))}
    </Swiper>
        </>
    )
}