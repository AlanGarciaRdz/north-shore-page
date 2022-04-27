"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_2 = require("swiper/react");
const BlogsSmallCard_1 = __importDefault(require("./BlogsSmallCard"));
function BlogsSmallSwiper({ blogs, addMarginLeft, }) {
    const swiperRef = (0, react_1.useRef)();
    return (<react_2.Swiper spaceBetween={20} centeredSlides={false} slidesPerView={'auto'} slidesPerGroup={1} style={{ margin: 0 }} onSwiper={(swiper) => {
            swiperRef.current = swiper;
        }}>
      {blogs.map((_blog, blogIndex) => {
            var _a;
            const extraMarginLeft = addMarginLeft &&
                (blogIndex === ((_a = swiperRef.current) === null || _a === void 0 ? void 0 : _a.activeIndex) || blogIndex === 0)
                ? 'calc(2 * var(--nextui-space-sm))'
                : 0;
            return (<react_2.SwiperSlide key={blogIndex} style={{
                    width: 'auto',
                    marginLeft: extraMarginLeft,
                }}>
            <BlogsSmallCard_1.default blog={blogs[blogIndex]}/>
          </react_2.SwiperSlide>);
        })}
    </react_2.Swiper>);
}
exports.default = BlogsSmallSwiper;
