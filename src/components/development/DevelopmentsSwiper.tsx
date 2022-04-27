import 'swiper/css';
import 'swiper/css/navigation';

import { Container } from '@nextui-org/react';
import React, { FC, useRef, useState } from 'react';
import { Swiper as SwiperInterface } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { DevelopmentCardProps } from './Development.types';
import DevelopmentCard from './DevelopmentCard';

interface DevelopmentsSwiperProps {
  addMarginLeft?: boolean;
  developemnts: DevelopmentCardProps[];
}

const DevelopmentsSwiper: FC<DevelopmentsSwiperProps> = ({
  addMarginLeft,
  developemnts,
}) => {
  const swiperRef = useRef<SwiperInterface>();
  return (
    <Swiper
      spaceBetween={20}
      centeredSlides={false}
      slidesPerView={'auto'}
      slidesPerGroup={1}
      style={{ margin: 0 }}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
    >
      {developemnts.map((development: DevelopmentCardProps, index: number) => {
        const extraMarginLeft =
          addMarginLeft &&
          (index === swiperRef.current?.activeIndex || index === 0)
            ? 'calc(2 * var(--nextui-space-sm))'
            : 0;
        return (
          <SwiperSlide
            key={index}
            style={{
              width: 'auto',
              marginLeft: extraMarginLeft,
            }}
          >
            <Container
              fluid
              responsive={false}
              css={{
                margin: 0,
                padding: 0,
                width: '282px',
                '@sm': {
                  width: '315px',
                },
              }}
            >
              <DevelopmentCard {...development} />
            </Container>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default DevelopmentsSwiper;
