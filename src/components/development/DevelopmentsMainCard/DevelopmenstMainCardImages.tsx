import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import { Card } from '@nextui-org/react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import OptimizeImage from 'src/components/base/OptimizeImage';
import RenderContainer from 'src/components/layouts/RenderContainer';
import { formatToURL } from 'src/scripts/StringTools';
import { EffectFade, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { DevelopmentMainCardProps } from '../Development.types';

type DevelopmentMainCardImageProps = {
  development: DevelopmentMainCardProps;
};

export default function DevelopmentMainCardImage({ development }: DevelopmentMainCardImageProps) {
  return (
    <RenderContainer
      mobileView={
        <Swiper
          effect={'fade'}
          pagination={{ clickable: true }}
          modules={[EffectFade, Pagination]}
          style={{ width: '100%' }}
        >
          {development.images?.map((image, key) => {
            return (
              <SwiperSlide key={key}>
                <Link href={development.url || '/'}>
                  <div
                    style={{
                      height: '100%',
                      width: '100%',
                    }}
                  >
                    <Card
                      clickable
                      shadow={false}
                      css={{
                        padding: 0,
                        margin: 0,
                        borderRadius: 0,
                        height: '100%',
                        width: '100%',
                      }}
                    >
                      <Card.Body>
                        <OptimizeImage
                          src={image.src}
                          layout='fill'
                          objectFit='cover'
                          objectPosition='center'
                          alt={`${formatToURL(development.name || '')}-gallery-image-${key}`}
                          useBlur={false}
                        />
                      </Card.Body>
                    </Card>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      }
      mobileViewGridProps={{
        css: {
          width: '100%',
          height: 230,
          backgroundColor: '$bakcground',
          borderRadius: '4px 4px 0px 0px',
        },
      }}
      desktopViewGridProps={{
        css: {
          width: '100%',
          height: '100%',
          backgroundColor: '$bakcground',
        },
      }}
    />
  );
}
