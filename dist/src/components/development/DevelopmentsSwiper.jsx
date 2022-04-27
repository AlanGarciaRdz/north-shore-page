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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("swiper/css");
require("swiper/css/navigation");
const react_1 = require("@nextui-org/react");
const react_2 = __importStar(require("react"));
const react_3 = require("swiper/react");
const DevelopmentCard_1 = __importDefault(require("./DevelopmentCard"));
const DevelopmentsSwiper = ({ addMarginLeft, developemnts, }) => {
    const swiperRef = (0, react_2.useRef)();
    return (<react_3.Swiper spaceBetween={20} centeredSlides={false} slidesPerView={'auto'} slidesPerGroup={1} style={{ margin: 0 }} onSwiper={(swiper) => {
            swiperRef.current = swiper;
        }}>
      {developemnts.map((development, index) => {
            var _a;
            const extraMarginLeft = addMarginLeft &&
                (index === ((_a = swiperRef.current) === null || _a === void 0 ? void 0 : _a.activeIndex) || index === 0)
                ? 'calc(2 * var(--nextui-space-sm))'
                : 0;
            return (<react_3.SwiperSlide key={index} style={{
                    width: 'auto',
                    marginLeft: extraMarginLeft,
                }}>
            <react_1.Container fluid responsive={false} css={{
                    margin: 0,
                    padding: 0,
                    width: '282px',
                    '@sm': {
                        width: '315px',
                    },
                }}>
              <DevelopmentCard_1.default {...development}/>
            </react_1.Container>
          </react_3.SwiperSlide>);
        })}
    </react_3.Swiper>);
};
exports.default = DevelopmentsSwiper;
