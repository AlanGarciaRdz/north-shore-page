"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("swiper/css");
const react_1 = require("@nextui-org/react");
const react_2 = require("react");
const react_3 = require("swiper/react");
const DevelopmenstMainCardImages_1 = __importDefault(require("./DevelopmenstMainCardImages"));
const DevelopmentsMainCardInfo_1 = __importDefault(require("./DevelopmentsMainCardInfo"));
function DevelopmenstMainCard({ developments, }) {
    const swiperRef = (0, react_2.useRef)();
    return (<react_1.Container fluid responsive={false} css={{
            margin: 0,
            padding: 0,
            '.swiper-pagination-bullet': {
                backgroundColor: '$white',
                opacity: 1,
            },
            '.swiper-pagination-bullet-active': {
                backgroundColor: '$secondary',
                opacity: 1,
            },
        }}>
      <react_3.Swiper slidesPerView={'auto'} centeredSlides={true} spaceBetween={0} onSwiper={(swiper) => {
            swiperRef.current = swiper;
        }}>
        {developments.map((development, developmentIndex) => {
            return (<react_3.SwiperSlide key={developmentIndex}>
              {({ isActive }) => {
                    var _a;
                    return (<div>
                  <react_1.Card css={{
                            padding: 0,
                            borderRadius: 4,
                            boxShadow: ((_a = swiperRef.current) === null || _a === void 0 ? void 0 : _a.activeIndex) === developmentIndex
                                ? '10px 10px 20px rgba(126, 148, 166, 0.1)'
                                : 'none',
                        }}>
                    <react_1.Card.Body css={{
                            padding: 0,
                            borderRadius: 4,
                        }}>
                      <react_1.Grid.Container>
                        <react_1.Grid xs={12} sm={6}>
                          <DevelopmenstMainCardImages_1.default development={development}/>
                        </react_1.Grid>
                        <react_1.Grid xs={12} sm={6}>
                          <DevelopmentsMainCardInfo_1.default swiperRef={swiperRef} development={development} developments={developments}/>
                        </react_1.Grid>
                      </react_1.Grid.Container>
                    </react_1.Card.Body>
                  </react_1.Card>
                </div>);
                }}
            </react_3.SwiperSlide>);
        })}
      </react_3.Swiper>
    </react_1.Container>);
}
exports.default = DevelopmenstMainCard;
