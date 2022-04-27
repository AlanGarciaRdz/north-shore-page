"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@nextui-org/react");
const react_2 = require("react");
const AboutUsSwiper_1 = __importDefault(require("src/components/aboutUs/AboutUsSwiper"));
const OptimizeImage_1 = __importDefault(require("src/components/base/OptimizeImage"));
const TitleWithBorder_1 = __importDefault(require("src/components/base/TitleWithBorder"));
const RenderContainer_1 = __importDefault(require("src/components/layouts/RenderContainer"));
const theme_1 = require("styles/theme");
function HomeAboutUs({ title, subtitle, sliders, }) {
    const [currentSlider, setCurrentSlider] = (0, react_2.useState)(0);
    return (<react_1.Container fluid responsive={false} css={{
            margin: 0,
            padding: 0,
            width: '100vw',
            position: 'relative',
        }}>
      <react_1.Container fluid responsive={false} css={{
            padding: 0,
            margin: 0,
            marginBottom: 90,
        }}>
        <react_1.Grid.Container justify='flex-start' alignItems='flex-start' css={{
            width: '100%',
        }}>
          <react_1.Grid xs={12} css={{ marginBottom: 30 }}>
            <react_1.Container css={Object.assign({}, theme_1.MainSectionsContainerCSS)}>
              <TitleWithBorder_1.default title={title}/>
            </react_1.Container>
          </react_1.Grid>
          <react_1.Grid xs={12} css={{ marginBottom: 40 }}>
            <react_1.Container css={Object.assign({}, theme_1.MainSectionsContainerCSS)}>
              <react_1.Grid.Container>
                <react_1.Grid xs={12} sm={6} md={4}>
                  <react_1.Text css={{ marginBottom: 0 }}>{subtitle}</react_1.Text>
                </react_1.Grid>
              </react_1.Grid.Container>
            </react_1.Container>
          </react_1.Grid>
          <react_1.Grid xs={12}/>
          <react_1.Grid xs={12}>
            <RenderContainer_1.default mobileView={<react_1.Container fluid responsive={false} css={{
                padding: 0,
                margin: 0,
                width: '100%',
                height: 418,
                position: 'relative',
                '@lg': {
                    height: 525,
                },
            }}>
                  <OptimizeImage_1.default src={sliders[currentSlider].image.src} layout='fill' objectFit='cover' objectPosition='center' alt={sliders[currentSlider].image.alt} useBlur={true}/>
                </react_1.Container>} desktopView={<react_1.Container css={Object.assign({}, theme_1.MainSectionsContainerCSS)}>
                  <react_1.Container fluid responsive={false} css={{
                padding: 0,
                margin: 0,
                width: '100%',
                height: 418,
                position: 'relative',
                '@lg': {
                    height: 525,
                },
            }}>
                    <OptimizeImage_1.default src={sliders[currentSlider].image.src} layout='fill' objectFit='cover' objectPosition='center' alt={sliders[currentSlider].image.alt} useBlur={true}/>
                  </react_1.Container>
                </react_1.Container>}/>
          </react_1.Grid>
          <react_1.Grid xs={12} css={{ marginTop: -80, position: 'relative' }}>
            <react_1.Container css={Object.assign({}, theme_1.MainSectionsContainerCSS)}>
              <react_1.Grid.Container justify='flex-end' alignItems='center'>
                <react_1.Grid xs={12} sm={8}>
                  <AboutUsSwiper_1.default onChangeSlider={function (index) {
            setTimeout(() => setCurrentSlider(index), 400);
        }} sliders={sliders}/>
                </react_1.Grid>
                <react_1.Grid xs={1}/>
              </react_1.Grid.Container>
            </react_1.Container>
          </react_1.Grid>
        </react_1.Grid.Container>
      </react_1.Container>
    </react_1.Container>);
}
exports.default = HomeAboutUs;
