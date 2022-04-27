import { Button, Container, Grid, Text } from '@nextui-org/react';
import Link from 'next/link';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { GrLocation } from 'react-icons/gr';
import { formatNumberToPrice } from 'src/scripts/StringTools';
import { Swiper as SwiperInterface } from 'swiper';

import { DevelopmentMainCardProps } from '../Development.types';
import DevelopmentAmenities from '../DevelopmentAmenities';
import DevelopmentsMainCardData from '../DevelopmentData';

type DevelopmentsMainCardInfoProps = {
  development: DevelopmentMainCardProps;
  developments: DevelopmentMainCardProps[];
  swiperRef: MutableRefObject<SwiperInterface | undefined>;
};

export default function DevelopmentsMainCardInfo({
  development,
  developments,
  swiperRef,
}: DevelopmentsMainCardInfoProps) {
  return (
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
      <Grid.Container>
        <Grid xs={12}>
          <Grid.Container justify='space-between'>
            <Grid
              css={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              {developments.map((_development, developmentHeaderIndex) => {
                return (
                  <Button
                    key={developmentHeaderIndex}
                    light
                    auto
                    css={{ padding: 0, marginRight: 8 }}
                    onClick={() => {
                      if (swiperRef.current) {
                        swiperRef.current.slideTo(developmentHeaderIndex);
                      }
                    }}
                  >
                    <Text
                      weight={
                        swiperRef.current?.activeIndex ===
                        developmentHeaderIndex
                          ? 'bold'
                          : 'normal'
                      }
                    >{`0${developmentHeaderIndex + 1}.`}</Text>
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
                  swiperRef.current?.activeIndex === developments.length - 1
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
        <Grid xs={12} css={{ marginBottom: 15 }}>
          <Link href={development.url}>
            <Button
              light
              auto
              css={{ padding: 0, margin: 0 }}
              onClick={() => {}}
            >
              <Text h2>{development.name}</Text>
            </Button>
          </Link>
        </Grid>
        <Grid xs={12}>
          <Link href={development.listing.url}>
            <Button
              auto
              light
              css={{
                padding: 0,
                margin: 0,
                height: 'auto',
                '.nextui-button-icon': { marginRight: 4 },
              }}
              icon={<GrLocation style={{ fontSize: 15 }} />}
            >
              <Text>{development.listing.name}</Text>
            </Button>
          </Link>
        </Grid>
        <Grid xs={12} css={{ marginBottom: 20 }}>
          <Text weight='bold'>
            {`${formatNumberToPrice(development.price)} USD`}
          </Text>
        </Grid>
        <Grid xs={12} sm={8} css={{ marginBottom: 28 }}>
          <DevelopmentAmenities amenities={development.amenities} />
        </Grid>
        <Grid xs={12} css={{ marginBottom: 28 }}>
          <DevelopmentsMainCardData
            squareFT={development.squareFT.toString()}
            bedrooms={development.bedrooms.toString()}
            bathrroms={development.bathrroms.toString()}
            bigData
          />
        </Grid>
        <Grid xs={12} css={{ marginBottom: 20 }}>
          <Link href={development.url}>
            <Button
              auto
              css={{
                width: '100%',
                backgroundColor: '$gray100',
                border: '1px solid $accents3',
                color: '$text',
              }}
            >
              {'View Details'}
            </Button>
          </Link>
        </Grid>
        <Grid xs={12}>
          <Button
            auto
            bordered
            css={{
              width: '100%',
            }}
          >
            {'Contact agent'}
          </Button>
        </Grid>
      </Grid.Container>
    </Container>
  );
}
