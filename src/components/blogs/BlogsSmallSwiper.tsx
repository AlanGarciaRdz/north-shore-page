import { useEffect, useRef, useState } from 'react';
import { Swiper as SwiperInterface } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { BlogSmallCardProps } from './Blogs.type';
import BlogSmallCard from './BlogsSmallCard';

type BlogsSmallSwiperProps = {
  blogs: BlogSmallCardProps[];
  addMarginLeft?: boolean;
};

export default function BlogsSmallSwiper({
  blogs,
  addMarginLeft,
}: BlogsSmallSwiperProps) {
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
      {blogs.map((_blog, blogIndex) => {
        const extraMarginLeft =
          addMarginLeft &&
          (blogIndex === swiperRef.current?.activeIndex || blogIndex === 0)
            ? 'calc(2 * var(--nextui-space-sm))'
            : 0;
        return (
          <SwiperSlide
            key={blogIndex}
            style={{
              width: 'auto',
              marginLeft: extraMarginLeft,
            }}
          >
            <BlogSmallCard blog={blogs[blogIndex]} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
