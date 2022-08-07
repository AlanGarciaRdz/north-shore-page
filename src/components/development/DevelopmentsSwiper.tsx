import 'swiper/css';
import 'swiper/css/pagination';

import { Button, Container } from '@nextui-org/react';
import React, { FC, useRef, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { Pagination, Swiper as SwiperInterface } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { DevelopmentCardProps } from './Development.types';
import DevelopmentCard from './DevelopmentCard';

interface DevelopmentsSwiperProps {
  showNavButtons?: boolean;
  addMarginLeft?: boolean;
  developments: DevelopmentCardProps[];
}

const DevelopmentsSwiper: FC<DevelopmentsSwiperProps> = ({
  showNavButtons,
  addMarginLeft,
  developments,
}) => {
  const swiperRef = useRef<SwiperInterface>();
  const [onHover, setOnHover] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);
  const generalSwiperHelpersDistance = -2;
  const generalSwiperHelpersCSS = {
    position: 'absolute',
    padding: 0,
    margin: 0,
    height: 50,
    width: 50,
    borderRadius: '50%',
    fontSize: '$md',
    zIndex: 100,
    bottom: '50%',
    backgroundColor: '#ffffff',
    color: '$primary',
    '&:hover': {
      backgroundColor: '$primary',
      color: '#ffffff',
    },
  };
  return (
    <Container
      responsive={false}
      fluid
      css={{
        padding: 0,
        margin: 0,
        '.swiper-pagination': {
          bottom: '0px !important',
          zIndex: '100 !important',
          '.swiper-pagination-bullet': {
            width: '$sm',
            height: '$sm',
            opacity: '1 !important',
            backgroundColor: '$gray700 !important',
          },
          '.swiper-pagination-bullet-active': {
            backgroundColor: '$primary !important',
          },
        },
      }}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <Swiper
        modules={[Pagination]}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        spaceBetween={20}
        centeredSlides={false}
        slidesPerView={'auto'}
        slidesPerGroup={1}
        style={{ margin: 0 }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          if (swiper !== undefined) {
            if (swiper.isBeginning !== isBeginning) {
              setIsBeginning(swiper.isBeginning);
            }
            if (swiper.isEnd !== isEnd) {
              setIsEnd(swiper.isEnd);
            }
          }
        }}
      >
        {developments.map((development: DevelopmentCardProps, index: number) => {
          const extraMarginLeft =
            addMarginLeft && (index === swiperRef.current?.activeIndex || index === 0)
              ? 'calc(2 * var(--nextui-space-sm))'
              : 0;
          return (
            <SwiperSlide
              key={index}
              style={{
                height: 500,
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
      {showNavButtons && !isEnd && developments.length > 4 && onHover === true && (
        <Button
          auto
          css={{
            ...generalSwiperHelpersCSS,
            right: generalSwiperHelpersDistance,
          }}
          onClick={() => {
            if (swiperRef.current !== undefined) {
              swiperRef.current.slideNext();
            }
          }}
        >
          <AiOutlineArrowRight />
        </Button>
      )}
      {showNavButtons && !isBeginning && developments.length > 4 && onHover === true && (
        <Button
          auto
          css={{
            ...generalSwiperHelpersCSS,
            left: generalSwiperHelpersDistance,
          }}
          onClick={() => {
            if (swiperRef.current !== undefined) {
              swiperRef.current.slidePrev();
            }
          }}
        >
          <AiOutlineArrowLeft />
        </Button>
      )}
    </Container>
  );
};

export default DevelopmentsSwiper;
