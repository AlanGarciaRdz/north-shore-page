import { Button, Card, Container, Grid, Text } from '@nextui-org/react';
import htmlReactParser from 'html-react-parser';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { Swiper as SwiperInterface } from 'swiper';

import { AboutUsSlide } from './AboutUs.type';

type AboutUsCardProps = {
  swiperRef: MutableRefObject<SwiperInterface | undefined>;
  index: number;
  sliders: AboutUsSlide[];
};

export default function AboutUsCard({
  swiperRef,
  sliders,
  index,
}: AboutUsCardProps) {
  return (
    <Card
      css={{
        padding: 0,
        borderRadius: 4,
        width: '100%',
        boxShadow:
          swiperRef.current?.activeIndex === index
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
        <Container
          fluid
          responsive={false}
          css={{
            padding: '24px 24px 40px 24px',
            margin: 0,
            width: '100%',
            backgroundColor: '$background',
          }}
        >
          <Grid xs={12} css={{ marginBottom: 20 }}>
            <Grid.Container justify='space-between'>
              <Grid
                css={{
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                {sliders.map((_slider, sliderInternalIndex) => {
                  return (
                    <Button
                      key={sliderInternalIndex}
                      light
                      auto
                      css={{ padding: 0, marginRight: 8 }}
                      onClick={() => {
                        if (swiperRef.current) {
                          swiperRef.current.slideTo(sliderInternalIndex);
                        }
                      }}
                    >
                      <Text
                        weight={
                          swiperRef.current?.activeIndex === sliderInternalIndex
                            ? 'bold'
                            : 'normal'
                        }
                      >{`0${sliderInternalIndex + 1}.`}</Text>
                    </Button>
                  );
                })}
              </Grid>
              <Grid
                css={{
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <Button
                  auto
                  disabled={swiperRef.current?.activeIndex === 0}
                  onClick={() => {
                    if (swiperRef.current) {
                      swiperRef.current.slidePrev();
                    }
                  }}
                  css={{
                    padding: 0,
                    borderRadius: 2,
                    backgroundColor: '#F5F5F5',
                    color: '$text',
                    width: '40px',
                    height: '40px',
                    marginRight: 8,
                  }}
                >
                  <BsArrowLeft color='inherit' style={{ fontSize: 20 }} />
                </Button>
                <Button
                  auto
                  disabled={
                    swiperRef.current?.activeIndex === sliders.length - 1
                  }
                  onClick={() => {
                    if (swiperRef.current) {
                      swiperRef.current.slideNext();
                    }
                  }}
                  css={{
                    padding: 0,
                    borderRadius: 2,
                    backgroundColor: '#F5F5F5',
                    color: '$text',
                    width: '40px',
                    height: '40px',
                  }}
                >
                  <BsArrowRight color='inherit' style={{ fontSize: 20 }} />
                </Button>
              </Grid>
            </Grid.Container>
          </Grid>
          <Grid xs={12} css={{ marginBottom: 24 }}>
            <Text h2>{sliders[swiperRef.current?.activeIndex || 0].title}</Text>
          </Grid>
          <Grid xs={12}>
            <div>
              {htmlReactParser(
                sliders[swiperRef.current?.activeIndex || 0].body
              )}
            </div>
          </Grid>
        </Container>
      </Card.Body>
    </Card>
  );
}
