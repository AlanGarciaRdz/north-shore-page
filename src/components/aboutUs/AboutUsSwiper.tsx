import { useEffect, useRef, useState } from 'react';
import AboutUsCard from 'src/components/aboutUs/AboutUsCard';
import { Swiper as SwiperInterface } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { AboutUsSlide } from './AboutUs.type';

type AboutUsSwiperProps = {
  onChangeSlider: (index: number) => void;
  sliders: AboutUsSlide[];
};

export default function AboutUsSwiper({
  onChangeSlider,
  sliders,
}: AboutUsSwiperProps) {
  const swiperRef = useRef<SwiperInterface>();
  return (
    <Swiper
      slidesPerView={'auto'}
      centeredSlides={true}
      spaceBetween={0}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      onSlideChange={(swiper: SwiperInterface) => {
        onChangeSlider(swiper.activeIndex);
      }}
    >
      {sliders.map((_slider, sliderIndex) => {
        return (
          <SwiperSlide key={sliderIndex}>
            <AboutUsCard
              sliders={sliders}
              index={sliderIndex}
              swiperRef={swiperRef}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
