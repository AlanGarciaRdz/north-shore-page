"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@nextui-org/react");
const html_react_parser_1 = __importDefault(require("html-react-parser"));
const bs_1 = require("react-icons/bs");
function AboutUsCard({ swiperRef, sliders, index, }) {
    var _a, _b, _c, _d, _e;
    return (<react_1.Card css={{
            padding: 0,
            borderRadius: 4,
            width: '100%',
            boxShadow: ((_a = swiperRef.current) === null || _a === void 0 ? void 0 : _a.activeIndex) === index
                ? '10px 10px 20px rgba(126, 148, 166, 0.1)'
                : 'none',
        }}>
      <react_1.Card.Body css={{
            padding: 0,
            borderRadius: 4,
        }}>
        <react_1.Container fluid responsive={false} css={{
            padding: '24px 24px 40px 24px',
            margin: 0,
            width: '100%',
            backgroundColor: '$background',
        }}>
          <react_1.Grid xs={12} css={{ marginBottom: 20 }}>
            <react_1.Grid.Container justify='space-between'>
              <react_1.Grid css={{
            display: 'flex',
            flexDirection: 'row',
        }}>
                {sliders.map((_slider, sliderInternalIndex) => {
            var _a;
            return (<react_1.Button key={sliderInternalIndex} light auto css={{ padding: 0, marginRight: 8 }} onClick={() => {
                    if (swiperRef.current) {
                        swiperRef.current.slideTo(sliderInternalIndex);
                    }
                }}>
                      <react_1.Text weight={((_a = swiperRef.current) === null || _a === void 0 ? void 0 : _a.activeIndex) === sliderInternalIndex
                    ? 'bold'
                    : 'normal'}>{`0${sliderInternalIndex + 1}.`}</react_1.Text>
                    </react_1.Button>);
        })}
              </react_1.Grid>
              <react_1.Grid css={{
            display: 'flex',
            flexDirection: 'row',
        }}>
                <react_1.Button auto disabled={((_b = swiperRef.current) === null || _b === void 0 ? void 0 : _b.activeIndex) === 0} onClick={() => {
            if (swiperRef.current) {
                swiperRef.current.slidePrev();
            }
        }} css={{
            padding: 0,
            borderRadius: 2,
            backgroundColor: '#F5F5F5',
            color: '$text',
            width: '40px',
            height: '40px',
            marginRight: 8,
        }}>
                  <bs_1.BsArrowLeft color='inherit' style={{ fontSize: 20 }}/>
                </react_1.Button>
                <react_1.Button auto disabled={((_c = swiperRef.current) === null || _c === void 0 ? void 0 : _c.activeIndex) === sliders.length - 1} onClick={() => {
            if (swiperRef.current) {
                swiperRef.current.slideNext();
            }
        }} css={{
            padding: 0,
            borderRadius: 2,
            backgroundColor: '#F5F5F5',
            color: '$text',
            width: '40px',
            height: '40px',
        }}>
                  <bs_1.BsArrowRight color='inherit' style={{ fontSize: 20 }}/>
                </react_1.Button>
              </react_1.Grid>
            </react_1.Grid.Container>
          </react_1.Grid>
          <react_1.Grid xs={12} css={{ marginBottom: 24 }}>
            <react_1.Text h2>{sliders[((_d = swiperRef.current) === null || _d === void 0 ? void 0 : _d.activeIndex) || 0].title}</react_1.Text>
          </react_1.Grid>
          <react_1.Grid xs={12}>
            <div>
              {(0, html_react_parser_1.default)(sliders[((_e = swiperRef.current) === null || _e === void 0 ? void 0 : _e.activeIndex) || 0].body)}
            </div>
          </react_1.Grid>
        </react_1.Container>
      </react_1.Card.Body>
    </react_1.Card>);
}
exports.default = AboutUsCard;
