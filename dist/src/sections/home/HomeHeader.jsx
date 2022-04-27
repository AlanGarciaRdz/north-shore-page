"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@nextui-org/react");
const OptimizeImage_1 = __importDefault(require("src/components/base/OptimizeImage"));
const theme_1 = require("styles/theme");
function HomeHeader({ image, title, button }) {
    return (<react_1.Container fluid responsive={false} css={{
            margin: 0,
            padding: 0,
            width: '100vw',
            position: 'relative',
            height: '655px',
        }}>
      <react_1.Container css={Object.assign(Object.assign({}, theme_1.MainSectionsContainerCSS), { width: '100%', position: 'absolute', left: 0, right: 0, bottom: 160, zIndex: 3 })}>
        <react_1.Grid.Container justify='space-between' alignItems='center' css={{
            width: '100%',
            bottom: 0,
            zIndex: 3,
        }}>
          <react_1.Grid xs={6} md={12}>
            <react_1.Text h2 color='#ffffff' css={{ marginBottom: 16 }}>
              {title}
            </react_1.Text>
          </react_1.Grid>
          <react_1.Grid xs={12}/>
          <react_1.Grid xs={12} sm={6}>
            <react_1.Button auto ghost css={{
            width: '100%',
            borderColor: '$white',
            color: '$white',
            '@sm': {
                width: '388px',
            },
        }}>
              {button.label}
            </react_1.Button>
          </react_1.Grid>
        </react_1.Grid.Container>
      </react_1.Container>
      <react_1.Container fluid responsive={false} css={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            background: 'linear-gradient(180deg, rgba(2,0,36,0.3) 10%,  rgba(2,0,36,0.3) 100%)',
            zIndex: 2,
        }}/>
      <OptimizeImage_1.default src={image.src} alt={image.alt} layout='fill' objectFit='cover' objectPosition='center' useBlur={true} width='100vw' height='655px' containerCSS={{
            zIndex: 1,
            position: 'absolute',
            width: '100vw',
            maxWidth: '100vw',
            overflow: 'hidden',
            height: '655px',
        }}/>
    </react_1.Container>);
}
exports.default = HomeHeader;
