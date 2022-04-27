'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const react_1 = require('@nextui-org/react');
const bs_1 = require('react-icons/bs');
const gr_1 = require('react-icons/gr');
const StringTools_1 = require('src/scripts/StringTools');
const DevelopmentAmenities_1 = __importDefault(
  require('../DevelopmentAmenities')
);
const DevelopmentData_1 = __importDefault(require('../DevelopmentData'));
function DevelopmentsMainCardInfo({ development, developments, swiperRef }) {
  var _a, _b;
  return (
    <react_1.Container
      fluid
      responsive={false}
      css={{
        padding: '24px 24px 40px 24px',
        margin: 0,
        width: '100%',
        backgroundColor: '$background',
        minHeight: 655,
      }}
    >
      <react_1.Grid.Container>
        <react_1.Grid xs={12}>
          <react_1.Grid.Container justify='space-between'>
            <react_1.Grid
              css={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              {developments.map((_development, developmentHeaderIndex) => {
                var _a;
                return (
                  <react_1.Button
                    key={developmentHeaderIndex}
                    light
                    auto
                    css={{ padding: 0, marginRight: 8 }}
                    onClick={() => {
                      if (swiperRef.current) {
                        swiperRef.current.slideTo(developmentHeaderIndex);
                      }
                    }}
                  >
                    <react_1.Text
                      weight={
                        ((_a = swiperRef.current) === null || _a === void 0
                          ? void 0
                          : _a.activeIndex) === developmentHeaderIndex
                          ? 'bold'
                          : 'normal'
                      }
                    >{`0${developmentHeaderIndex + 1}.`}</react_1.Text>
                  </react_1.Button>
                );
              })}
            </react_1.Grid>
            <react_1.Grid
              css={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <react_1.Button
                auto
                disabled={
                  ((_a = swiperRef.current) === null || _a === void 0
                    ? void 0
                    : _a.activeIndex) === 0
                }
                onClick={() => {
                  if (swiperRef.current) {
                    swiperRef.current.slidePrev();
                  }
                }}
                css={{
                  padding: 0,
                  borderRadius: 2,
                  backgroundColor: '#F5F5F5',
                  color: '$text',
                  width: '40px',
                  height: '40px',
                  marginRight: 8,
                }}
              >
                <bs_1.BsArrowLeft color='inherit' style={{ fontSize: 20 }} />
              </react_1.Button>
              <react_1.Button
                auto
                disabled={
                  ((_b = swiperRef.current) === null || _b === void 0
                    ? void 0
                    : _b.activeIndex) ===
                  developments.length - 1
                }
                onClick={() => {
                  if (swiperRef.current) {
                    swiperRef.current.slideNext();
                  }
                }}
                css={{
                  padding: 0,
                  borderRadius: 2,
                  backgroundColor: '#F5F5F5',
                  color: '$text',
                  width: '40px',
                  height: '40px',
                }}
              >
                <bs_1.BsArrowRight color='inherit' style={{ fontSize: 20 }} />
              </react_1.Button>
            </react_1.Grid>
          </react_1.Grid.Container>
        </react_1.Grid>
        <react_1.Grid xs={12} css={{ marginBottom: 15 }}>
          <react_1.Button
            light
            auto
            css={{ padding: 0, margin: 0 }}
            onClick={() => {}}
          >
            <react_1.Text h2>{development.name}</react_1.Text>
          </react_1.Button>
        </react_1.Grid>
        <react_1.Grid xs={12}>
          <react_1.Button
            auto
            light
            css={{
              padding: 0,
              margin: 0,
              height: 'auto',
              '.nextui-button-icon': { marginRight: 4 },
            }}
            icon={<gr_1.GrLocation style={{ fontSize: 15 }} />}
          >
            <react_1.Text>{development.listing.name}</react_1.Text>
          </react_1.Button>
        </react_1.Grid>
        <react_1.Grid xs={12} css={{ marginBottom: 20 }}>
          <react_1.Text weight='bold'>
            {`${(0, StringTools_1.formatNumberToPrice)(development.price)} USD`}
          </react_1.Text>
        </react_1.Grid>
        <react_1.Grid xs={12} sm={8} css={{ marginBottom: 28 }}>
          <DevelopmentAmenities_1.default amenities={development.amenities} />
        </react_1.Grid>
        <react_1.Grid xs={12} css={{ marginBottom: 28 }}>
          <DevelopmentData_1.default
            squareFT={development.squareFT}
            bedrooms={development.bedrooms}
            bathrroms={development.bathrroms}
            bigData
          />
        </react_1.Grid>
        <react_1.Grid xs={12} css={{ marginBottom: 20 }}>
          <react_1.Button
            auto
            css={{
              width: '100%',
              backgroundColor: '$gray100',
              border: '1px solid $accents3',
              color: '$text',
            }}
          >
            {'View Details'}
          </react_1.Button>
        </react_1.Grid>
        <react_1.Grid xs={12}>
          <react_1.Button
            auto
            bordered
            css={{
              width: '100%',
            }}
          >
            {'Contact agent'}
          </react_1.Button>
        </react_1.Grid>
      </react_1.Grid.Container>
    </react_1.Container>
  );
}
exports.default = DevelopmentsMainCardInfo;
