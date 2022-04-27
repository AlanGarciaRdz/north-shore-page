"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const AboutUsCard_1 = __importDefault(require("src/components/aboutUs/AboutUsCard"));
const react_2 = require("swiper/react");
function AboutUsSwiper({ onChangeSlider, sliders, }) {
    const swiperRef = (0, react_1.useRef)();
    return (<react_2.Swiper slidesPerView={'auto'} centeredSlides={true} spaceBetween={0} onSwiper={(swiper) => {
            swiperRef.current = swiper;
        }} onSlideChange={(swiper) => {
            onChangeSlider(swiper.activeIndex);
        }}>
      {sliders.map((_slider, sliderIndex) => {
            return (<react_2.SwiperSlide key={sliderIndex}>
            <AboutUsCard_1.default sliders={sliders} index={sliderIndex} swiperRef={swiperRef}/>
          </react_2.SwiperSlide>);
        })}
    </react_2.Swiper>);
}
exports.default = AboutUsSwiper;
