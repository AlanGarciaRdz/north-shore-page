import 'swiper/css';

import { Button, Container, Text, useTheme } from '@nextui-org/react';
import React, { FC, useRef } from 'react';
import { MdChevronLeft } from 'react-icons/md';
import { Swiper as SwiperInterface } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ListingProps } from './Listings.types';

interface ListingLabelsProps {
  listings: ListingProps[];
  onChangeListing: (index: number) => void;
  addMarginLeft?: boolean;
}

const ListingLabels: FC<ListingLabelsProps> = ({
  onChangeListing,
  listings,
  addMarginLeft,
}) => {
  const { theme } = useTheme();
  const swiperRef = useRef<SwiperInterface>();
  return (
    <Swiper
      spaceBetween={24}
      centeredSlides={false}
      slidesPerView={'auto'}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      onSlideChange={(swiper: SwiperInterface) => {
        if (swiper.activeIndex >= listings.length) {
          swiper.slideTo(listings.length - 1);
        } else {
          onChangeListing(swiper.activeIndex);
        }
      }}
    >
      {[...listings, ...Array(20)].map((listing, index) => {
        if (index >= listings.length) {
          return (
            <SwiperSlide
              key={index}
              style={{
                width: 'auto',
              }}
            >
              <div
                style={{
                  width: 200,
                  height: '100%',
                  backgroundColor: 'trasnparent',
                }}
              />
            </SwiperSlide>
          );
        }
        const extraMarginLeftInit =
          addMarginLeft && index === 0 ? 'calc(2 * var(--nextui-space-sm))' : 0;

        const extraMarginLeft =
          addMarginLeft &&
          index === swiperRef.current?.activeIndex &&
          index !== 0
            ? 'calc(calc(2 * var(--nextui-space-sm)) - 10px)'
            : 0;
        return (
          <SwiperSlide
            key={index}
            style={{
              width: 'auto',
              margin: 0,
              padding: 0,
              marginLeft: extraMarginLeftInit,
            }}
          >
            {({ isActive }) => (
              <Container
                fluid
                responsive={false}
                css={{
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: extraMarginLeft,
                }}
              >
                {isActive && index !== 0 && (
                  <Button
                    light
                    auto
                    icon={
                      <MdChevronLeft
                        style={{ fontSize: theme?.fontSizes.md.value }}
                      />
                    }
                    css={{ width: 20, height: '100%', margin: 0, padding: 0 }}
                    onClick={() => {
                      if (swiperRef.current !== undefined) {
                        swiperRef.current.slidePrev();
                      }
                    }}
                  />
                )}
                <Button
                  auto
                  id={`listing-label-${listing.url}`}
                  onClick={() => {
                    if (swiperRef.current !== undefined) {
                      swiperRef.current.slideTo(index);
                    }
                  }}
                  css={{
                    padding: '8px 16px',
                    margin: 0,
                    borderRadius: 20,
                    backgroundColor: isActive ? '$black' : '$white',
                  }}
                >
                  <Text
                    css={{
                      margin: 0,
                      height: '100%',
                      textTransform: 'capitalize',
                      color: isActive ? '$white' : '$black',
                      fontSize: '$base',
                    }}
                  >
                    {listing.name.toLowerCase()}
                  </Text>
                </Button>
              </Container>
            )}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ListingLabels;
