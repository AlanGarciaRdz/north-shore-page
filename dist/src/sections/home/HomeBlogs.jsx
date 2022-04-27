"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@nextui-org/react");
const TitleWithBorder_1 = __importDefault(require("src/components/base/TitleWithBorder"));
const BlogsSmallSwiper_1 = __importDefault(require("src/components/blogs/BlogsSmallSwiper"));
const RenderContainer_1 = __importDefault(require("src/components/layouts/RenderContainer"));
const theme_1 = require("styles/theme");
function HomeBlogs({ title, subtitle, blogs }) {
    if (blogs.length === 0)
        return <div />;
    return (<react_1.Container fluid responsive={false} css={{
            margin: 0,
            padding: 0,
            width: '100vw',
            position: 'relative',
            marginBottom: 80,
        }}>
      <react_1.Grid.Container justify='flex-start' alignItems='flex-start' css={{
            width: '100%',
        }}>
        <react_1.Grid xs={12} css={{ marginBottom: 30 }}>
          <react_1.Container css={Object.assign({}, theme_1.MainSectionsContainerCSS)}>
            <TitleWithBorder_1.default title={title}/>
          </react_1.Container>
        </react_1.Grid>
        <react_1.Grid xs={12}>
          <react_1.Container css={Object.assign({}, theme_1.MainSectionsContainerCSS)}>
            <react_1.Grid.Container>
              <react_1.Grid xs={12} sm={3.7}>
                <react_1.Text css={{ marginBottom: 0 }}>{subtitle}</react_1.Text>
              </react_1.Grid>
            </react_1.Grid.Container>
          </react_1.Container>
        </react_1.Grid>
        <react_1.Grid xs={12} css={{ marginBottom: 32 }}/>
        <react_1.Grid xs={12}>
          <RenderContainer_1.default mobileView={<BlogsSmallSwiper_1.default blogs={blogs} addMarginLeft/>} desktopView={<react_1.Container css={Object.assign({}, theme_1.MainSectionsContainerCSS)}>
                <BlogsSmallSwiper_1.default blogs={blogs}/>
              </react_1.Container>}/>
        </react_1.Grid>
      </react_1.Grid.Container>
    </react_1.Container>);
}
exports.default = HomeBlogs;
