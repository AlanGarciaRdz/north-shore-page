"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("swiper/css");
require("swiper/css/effect-fade");
require("swiper/css/pagination");
const react_1 = require("@nextui-org/react");
const react_2 = require("react");
const OptimizeImage_1 = __importDefault(require("src/components/base/OptimizeImage"));
const RenderContainer_1 = __importDefault(require("src/components/layouts/RenderContainer"));
const StringTools_1 = require("src/scripts/StringTools");
const swiper_1 = require("swiper");
const react_3 = require("swiper/react");
function DevelopmentMainCardImage({ development, }) {
    const swiperRef = (0, react_2.useRef)();
    return (<RenderContainer_1.default mobileView={<react_3.Swiper effect={'fade'} pagination={{ clickable: true }} modules={[swiper_1.EffectFade, swiper_1.Pagination]} style={{ width: '100%' }}>
          {development.images.map((image, key) => {
                return (<react_3.SwiperSlide key={key}>
                <react_1.Card clickable shadow={false} css={{
                        padding: 0,
                        margin: 0,
                        borderRadius: 0,
                        height: '100%',
                        width: '100%',
                    }}>
                  <react_1.Card.Body>
                    <OptimizeImage_1.default src={image.src} layout='fill' objectFit='cover' objectPosition='center' alt={`${(0, StringTools_1.formatToURL)(development.name)}-gallery-image-${key}`} useBlur={false}/>
                  </react_1.Card.Body>
                </react_1.Card>
              </react_3.SwiperSlide>);
            })}
        </react_3.Swiper>} mobileViewGridProps={{
            css: {
                width: '100%',
                height: 230,
                backgroundColor: '$bakcground',
                borderRadius: '4px 4px 0px 0px',
            },
        }} desktopViewGridProps={{
            css: {
                width: '100%',
                height: '100%',
                backgroundColor: '$bakcground',
            },
        }}/>);
}
exports.default = DevelopmentMainCardImage;
