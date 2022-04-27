"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("swiper/css");
const react_1 = require("@nextui-org/react");
const react_2 = __importStar(require("react"));
const md_1 = require("react-icons/md");
const react_3 = require("swiper/react");
const ListingLabels = ({ onChangeListing, listings, addMarginLeft, }) => {
    const { theme } = (0, react_1.useTheme)();
    const swiperRef = (0, react_2.useRef)();
    return (<react_3.Swiper spaceBetween={24} centeredSlides={false} slidesPerView={'auto'} onSwiper={(swiper) => {
            swiperRef.current = swiper;
        }} onSlideChange={(swiper) => {
            if (swiper.activeIndex >= listings.length) {
                swiper.slideTo(listings.length - 1);
            }
            else {
                onChangeListing(swiper.activeIndex);
            }
        }}>
      {[...listings, ...Array(20)].map((listing, index) => {
            var _a;
            if (index >= listings.length) {
                return (<react_3.SwiperSlide key={index} style={{
                        width: 'auto',
                    }}>
              <div style={{
                        width: 200,
                        height: '100%',
                        backgroundColor: 'trasnparent',
                    }}/>
            </react_3.SwiperSlide>);
            }
            const extraMarginLeftInit = addMarginLeft && index === 0 ? 'calc(2 * var(--nextui-space-sm))' : 0;
            const extraMarginLeft = addMarginLeft &&
                index === ((_a = swiperRef.current) === null || _a === void 0 ? void 0 : _a.activeIndex) &&
                index !== 0
                ? 'calc(calc(2 * var(--nextui-space-sm)) - 10px)'
                : 0;
            return (<react_3.SwiperSlide key={index} style={{
                    width: 'auto',
                    margin: 0,
                    padding: 0,
                    marginLeft: extraMarginLeftInit,
                }}>
            {({ isActive }) => (<react_1.Container fluid responsive={false} css={{
                        padding: 0,
                        margin: 0,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: extraMarginLeft,
                    }}>
                {isActive && index !== 0 && (<react_1.Button light auto icon={<md_1.MdChevronLeft style={{ fontSize: theme === null || theme === void 0 ? void 0 : theme.fontSizes.md.value }}/>} css={{ width: 20, height: '100%', margin: 0, padding: 0 }} onClick={() => {
                            if (swiperRef.current !== undefined) {
                                swiperRef.current.slidePrev();
                            }
                        }}/>)}
                <react_1.Button auto id={`listing-label-${listing.url}`} onClick={() => {
                        if (swiperRef.current !== undefined) {
                            swiperRef.current.slideTo(index);
                        }
                    }} css={{
                        padding: '8px 16px',
                        margin: 0,
                        borderRadius: 20,
                        backgroundColor: isActive ? '$black' : '$white',
                    }}>
                  <react_1.Text css={{
                        margin: 0,
                        height: '100%',
                        textTransform: 'capitalize',
                        color: isActive ? '$white' : '$black',
                        fontSize: '$base',
                    }}>
                    {listing.name.toLowerCase()}
                  </react_1.Text>
                </react_1.Button>
              </react_1.Container>)}
          </react_3.SwiperSlide>);
        })}
    </react_3.Swiper>);
};
exports.default = ListingLabels;
