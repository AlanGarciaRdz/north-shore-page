"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("swiper/css");
require("swiper/css/effect-fade");
require("swiper/css/pagination");
const react_1 = require("@nextui-org/react");
const link_1 = __importDefault(require("next/link"));
const OptimizeImage_1 = __importDefault(require("src/components/base/OptimizeImage"));
const RenderContainer_1 = __importDefault(require("src/components/layouts/RenderContainer"));
const StringTools_1 = require("src/scripts/StringTools");
const swiper_1 = require("swiper");
const react_2 = require("swiper/react");
function DevelopmentMainCardImage({ development, }) {
    var _a;
    return (<RenderContainer_1.default mobileView={<react_2.Swiper effect={'fade'} pagination={{ clickable: true }} modules={[swiper_1.EffectFade, swiper_1.Pagination]} style={{ width: '100%' }}>
          {(_a = development.images) === null || _a === void 0 ? void 0 : _a.map((image, key) => {
                return (<react_2.SwiperSlide key={key}>
                <link_1.default href={development.url || '/'}>
                  <react_1.Card clickable shadow={false} css={{
                        padding: 0,
                        margin: 0,
                        borderRadius: 0,
                        height: '100%',
                        width: '100%',
                    }}>
                    <react_1.Card.Body>
                      <OptimizeImage_1.default src={image.src} layout='fill' objectFit='cover' objectPosition='center' alt={`${(0, StringTools_1.formatToURL)(development.name || '')}-gallery-image-${key}`} useBlur={false}/>
                    </react_1.Card.Body>
                  </react_1.Card>
                </link_1.default>
              </react_2.SwiperSlide>);
            })}
        </react_2.Swiper>} mobileViewGridProps={{
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
