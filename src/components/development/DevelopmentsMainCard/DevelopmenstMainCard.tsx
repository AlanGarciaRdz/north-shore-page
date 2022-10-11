import 'swiper/css';

import { Button, Card, Container, Grid } from '@nextui-org/react';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { Swiper as SwiperInterface } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { DevelopmentMainCardProps } from '../Development.types';
import DevelopmentMainCardImage from './DevelopmenstMainCardImages';
import DevelopmentsMainCardInfo from './DevelopmentsMainCardInfo';

type DevelopmentsMainCardProps = {
  showNavButtons?: boolean;
  isNormalSwiper?: boolean;
  addMarginLeft?: boolean;
  developments: DevelopmentMainCardProps[];
};

export default function DevelopmenstMainCard({
  showNavButtons,
  isNormalSwiper,
  addMarginLeft,
  developments,
  contactAgent,
}: DevelopmentsMainCardProps & { contactAgent: () => void }) {
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
      fluid
      responsive={false}
      css={{
        margin: 0,
        padding: 0,
        '.swiper-pagination-bullet': {
          backgroundColor: '$white',
          opacity: 1,
        },
        '.swiper-pagination-bullet-active': {
          backgroundColor: '$secondary',
          opacity: 1,
        },
      }}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <Swiper
        slidesPerView={isNormalSwiper ? 1.2 : 1}
        centeredSlides={isNormalSwiper ? false : true}
        spaceBetween={isNormalSwiper ? 20 : 0}
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
        {developments.map((development, developmentIndex) => {
          const extraMarginLeft =
            addMarginLeft && isNormalSwiper && developmentIndex === 0
              ? 'calc(2 * var(--nextui-space-sm))'
              : 0;
          const extraMarginRight =
            addMarginLeft && isNormalSwiper && developmentIndex >= developments.length - 1
              ? 'calc(calc(2 * var(--nextui-space-sm)) + 20px)'
              : '0px';
          return (
            <SwiperSlide
              key={developmentIndex}
              style={{
                width: 'auto',
                marginLeft: extraMarginLeft,
                marginRight: 0,
              }}
            >
              {({ isActive }) => (
                <div>
                  <Card
                    css={{
                      padding: 0,
                      borderRadius: 4,
                      boxShadow:
                        swiperRef.current?.activeIndex === developmentIndex
                          ? '10px 10px 20px rgba(126, 148, 166, 0.1)'
                          : 'none',
                    }}
                  >
                    <Card.Body
                      css={{
                        padding: 0,
                        borderRadius: 4,
                      }}
                    >
                      <Grid.Container>
                        <Grid xs={12} sm={6}>
                          <DevelopmentMainCardImage development={development} />
                        </Grid>
                        <Grid xs={12} sm={6}>
                          <DevelopmentsMainCardInfo
                            showHeaderData={!isNormalSwiper}
                            swiperRef={swiperRef}
                            development={development}
                            developments={developments}
                            contactAgent={contactAgent}
                          />
                        </Grid>
                      </Grid.Container>
                    </Card.Body>
                  </Card>
                </div>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
      {showNavButtons && !isEnd && onHover === true && developments.length > 1 && (
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
      {showNavButtons && !isBeginning && onHover === true && developments.length > 1 && (
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
}
