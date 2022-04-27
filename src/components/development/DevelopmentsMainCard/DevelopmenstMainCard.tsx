import 'swiper/css';

import { Card, Container, Grid } from '@nextui-org/react';
import { useEffect, useRef, useState } from 'react';
import { Swiper as SwiperInterface } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { DevelopmentMainCardProps } from '../Development.types';
import DevelopmentMainCardImage from './DevelopmenstMainCardImages';
import DevelopmentsMainCardInfo from './DevelopmentsMainCardInfo';

type DevelopmentsMainCardProps = {
  developments: DevelopmentMainCardProps[];
};

export default function DevelopmenstMainCard({
  developments,
}: DevelopmentsMainCardProps) {
  const swiperRef = useRef<SwiperInterface>();
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
    >
      <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={0}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {developments.map((development, developmentIndex) => {
          return (
            <SwiperSlide key={developmentIndex}>
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
                            swiperRef={swiperRef}
                            development={development}
                            developments={developments}
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
    </Container>
  );
}
