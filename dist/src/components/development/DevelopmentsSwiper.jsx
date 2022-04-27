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
const react_1 = __importStar(require("react"));
const react_2 = require("swiper/react");
const RenderContainer_1 = __importDefault(require("../layouts/RenderContainer"));
const DevelopmentCard_1 = __importDefault(require("./DevelopmentCard"));
const MobileView = ({ developemnts }) => {
    const swiperRef = (0, react_1.useRef)();
    return (<react_2.Swiper spaceBetween={20} centeredSlides={false} slidesPerView={'auto'} slidesPerGroup={1} style={{ margin: 0 }} onSwiper={(swiper) => {
            swiperRef.current = swiper;
        }}>
      {developemnts.map((development, index) => {
            const extraWidth = index === developemnts.length - 1
                ? 'calc(2 * var(--nextui-space-sm))'
                : '0px';
            const extraMarginLeft = index !== 0 ? 0 : 'calc(2 * var(--nextui-space-sm))';
            return (<react_2.SwiperSlide key={index} style={{
                    width: `min(calc(282px + ${extraWidth}), calc(80vw + ${extraWidth}))`,
                    marginLeft: extraMarginLeft,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                }}>
            <DevelopmentCard_1.default {...development}/>
            <div style={{ width: extraWidth }}/>
          </react_2.SwiperSlide>);
        })}
    </react_2.Swiper>);
};
const DevelopmentsSwiper = ({ developemnts }) => {
    return (<RenderContainer_1.default mobileView={<MobileView developemnts={developemnts}/>}/>);
};
exports.default = DevelopmentsSwiper;
