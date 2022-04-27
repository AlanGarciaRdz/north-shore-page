"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@nextui-org/react");
const link_1 = __importDefault(require("next/link"));
const react_2 = require("react");
const ri_1 = require("react-icons/ri");
const react_spring_1 = require("react-spring");
const OptimizeImage_1 = __importDefault(require("src/components/base/OptimizeImage"));
const useScrollPosition_1 = __importDefault(require("src/hooks/useScrollPosition"));
const theme_1 = require("styles/theme");
const RenderContainer_1 = __importDefault(require("../layouts/RenderContainer"));
const NavigationLabel = ({ label, href, noMargin }) => {
    return (<link_1.default href={href}>
      <react_1.Text color='white' weight='bold' id={`navigate-to-${href}`} css={{ marginRight: noMargin ? 0 : 32, cursor: 'pointer' }}>
        {label}
      </react_1.Text>
    </link_1.default>);
};
const NavigationContainer = ({ children, useSmallNavigation, hideDuration, showDuration, smallHeaderHeight, normalHeaderHeight, }) => {
    const opacityToSet = 0.9;
    const baseStyle = {
        background: 'linear-gradient(180deg, #333333 0%, rgba(51, 51, 51, 0.53) 100%)',
        backdropFilter: ' blur(6px)',
        width: '100vw',
        maxWidth: '100vw',
    };
    const bigHeaderStyles = (0, react_spring_1.useSpring)({
        config: { duration: useSmallNavigation ? hideDuration : showDuration },
        overflow: useSmallNavigation ? 'hidden' : 'visible',
        opacity: useSmallNavigation ? 0 : opacityToSet,
        height: useSmallNavigation ? 0 : normalHeaderHeight,
    });
    const smallHeaderStyles = (0, react_spring_1.useSpring)({
        config: { duration: useSmallNavigation ? showDuration : hideDuration },
        overflow: useSmallNavigation ? 'visible' : 'hidden',
        opacity: useSmallNavigation ? opacityToSet : 0,
        height: useSmallNavigation ? smallHeaderHeight : 0,
    });
    return (<>
      <div style={{
            top: 0,
            position: 'absolute',
            zIndex: 200,
        }}>
        <react_spring_1.animated.header style={Object.assign(Object.assign({}, bigHeaderStyles), baseStyle)}>
          {children}
        </react_spring_1.animated.header>
      </div>
      <div style={{
            top: 0,
            position: 'sticky',
            zIndex: 200,
        }}>
        <react_spring_1.animated.header style={Object.assign(Object.assign({}, smallHeaderStyles), baseStyle)}>
          {children}
        </react_spring_1.animated.header>
      </div>
    </>);
};
function Navigation() {
    const navigationConf = {
        hideDuration: 50,
        showDuration: 200,
        smallHeaderHeight: 72,
        normalHeaderHeight: 120,
        positionToCheck: 100,
    };
    const [useSmallNavigation, setUseSmallNavigation] = (0, react_2.useState)(false);
    const scrollPosition = (0, useScrollPosition_1.default)();
    function handleScroll() {
        if (useSmallNavigation === true) {
            if (scrollPosition < navigationConf.positionToCheck) {
                setUseSmallNavigation(false);
            }
        }
        else {
            if (scrollPosition > navigationConf.positionToCheck) {
                setUseSmallNavigation(true);
            }
        }
    }
    (0, react_2.useEffect)(() => {
        handleScroll();
    }, [scrollPosition]);
    return (<NavigationContainer useSmallNavigation={useSmallNavigation} {...navigationConf}>
      <react_1.Container fluid responsive={false} css={{ margin: 0, padding: 0, width: '100%', height: '100%' }}>
        <react_1.Container css={Object.assign(Object.assign({}, theme_1.MainSectionsContainerCSS), { width: '100%', height: '100%' })}>
          <react_1.Grid.Container justify='space-between' alignItems='center' css={{ height: '100%' }}>
            <react_1.Grid xs={6}>
              <link_1.default href={'/'}>
                <OptimizeImage_1.default src={`/images/${useSmallNavigation
            ? 'logo-simple.png'
            : 'logo-white-text.png'}`} layout='fixed' alt='North Shore Logo' useBlur={false} width={useSmallNavigation ? 40 : 156} height={useSmallNavigation ? 40 : 80} containerCSS={{ cursor: 'pointer' }}/>
              </link_1.default>
            </react_1.Grid>
            <react_1.Grid xs={6} justify='flex-end'>
              <RenderContainer_1.default mobileViewGridProps={{
            css: { justifyContent: 'flex-end' },
        }} desktopViewGridProps={{
            css: { justifyContent: 'flex-end' },
        }} mobileView={<react_1.Button auto light css={{ padding: 0, margin: 0 }} icon={<ri_1.RiMenu3Line style={{ color: 'white' }} size={40}/>}/>} desktopView={<>
                    <NavigationLabel label='Listings' href='listings'/>
                    <NavigationLabel label='Contact us' href='contact'/>
                    <NavigationLabel label='Blog' noMargin href='blog'/>
                  </>}/>
            </react_1.Grid>
          </react_1.Grid.Container>
        </react_1.Container>
      </react_1.Container>
    </NavigationContainer>);
}
exports.default = Navigation;
