"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@nextui-org/react");
const link_1 = __importDefault(require("next/link"));
const react_2 = require("react");
const bs_1 = require("react-icons/bs");
const TitleWithBorder_1 = __importDefault(require("src/components/base/TitleWithBorder"));
const DevelopmentsSwiper_1 = __importDefault(require("src/components/development/DevelopmentsSwiper"));
const RenderContainer_1 = __importDefault(require("src/components/layouts/RenderContainer"));
const ListingLabels_1 = __importDefault(require("src/components/listing/ListingLabels"));
const theme_1 = require("styles/theme");
function HomeLocations({ listings, title, subtitle, goToListingLabel, }) {
    const [currentListingIndex, setCurrentListingIndex] = (0, react_2.useState)(0);
    if (listings.length === 0)
        return <div />;
    return (<react_1.Container fluid responsive={false} css={{
            margin: 0,
            padding: 0,
            width: '100vw',
            position: 'relative',
            marginBottom: 80,
        }}>
      <react_1.Container css={Object.assign(Object.assign({}, theme_1.MainSectionsContainerCSS), { marginBottom: 40 })}>
        <react_1.Grid.Container justify='flex-start' alignItems='flex-start' css={{
            width: '100%',
        }}>
          <react_1.Grid xs={12} css={{ marginBottom: 30 }}>
            <TitleWithBorder_1.default title={title}/>
          </react_1.Grid>
          <react_1.Grid xs={12} sm={3.7}>
            <react_1.Text css={{ marginBottom: 0 }}>{subtitle}</react_1.Text>
          </react_1.Grid>
        </react_1.Grid.Container>
      </react_1.Container>
      <react_1.Grid.Container justify='flex-start' alignItems='flex-start' css={{
            width: '100%',
        }}>
        <react_1.Grid xs={12} css={{ marginBottom: 40 }}>
          <RenderContainer_1.default mobileView={<react_1.Container css={{
                padding: 0,
                margin: 'auto',
            }}>
                <ListingLabels_1.default addMarginLeft listings={listings} onChangeListing={(index) => {
                setCurrentListingIndex(index);
            }}/>
              </react_1.Container>} desktopView={<react_1.Container css={Object.assign({}, theme_1.MainSectionsContainerCSS)}>
                <ListingLabels_1.default listings={listings} onChangeListing={(index) => {
                setCurrentListingIndex(index);
            }}/>
              </react_1.Container>}/>
        </react_1.Grid>
        <react_1.Grid xs={12} css={{ marginBottom: 24 }}>
          <RenderContainer_1.default mobileView={<react_1.Container css={{
                padding: 0,
                margin: 'auto',
            }}>
                <DevelopmentsSwiper_1.default addMarginLeft developemnts={listings[currentListingIndex]
                .developments}/>
              </react_1.Container>} desktopView={<react_1.Container css={Object.assign({}, theme_1.MainSectionsContainerCSS)}>
                <DevelopmentsSwiper_1.default developemnts={listings[currentListingIndex]
                .developments}/>
              </react_1.Container>}/>
        </react_1.Grid>
        <react_1.Grid xs={12}>
          <react_1.Container css={Object.assign({}, theme_1.MainSectionsContainerCSS)}>
            <link_1.default href={listings[currentListingIndex].url || ''}>
              <react_1.Button light auto css={{ padding: 0 }} iconRight={<bs_1.BsArrowRight />}>
                {`${goToListingLabel} ${listings[currentListingIndex].name}`}
              </react_1.Button>
            </link_1.default>
          </react_1.Container>
        </react_1.Grid>
      </react_1.Grid.Container>
    </react_1.Container>);
}
exports.default = HomeLocations;
