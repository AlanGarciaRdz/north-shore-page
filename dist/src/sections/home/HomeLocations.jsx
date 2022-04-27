"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@nextui-org/react");
const react_2 = require("react");
const TitleWithBorder_1 = __importDefault(require("src/components/base/TitleWithBorder"));
const DevelopmentsSwiper_1 = __importDefault(require("src/components/development/DevelopmentsSwiper"));
const ListingLabels_1 = __importDefault(require("src/components/listing/ListingLabels"));
const theme_1 = require("styles/theme");
function HomeLocations({ listings, title, subtitle, }) {
    const [currentListingIndex, setCurrentListingIndex] = (0, react_2.useState)(0);
    return (<react_1.Container fluid responsive={false} css={{
            margin: 0,
            padding: 0,
            width: '100vw',
            position: 'relative',
        }}>
      <react_1.Container css={Object.assign({}, theme_1.MainSectionsContainerCSS)}>
        <react_1.Grid.Container justify='flex-start' alignItems='flex-start' css={{
            width: '100%',
        }}>
          <react_1.Grid xs={12} css={{ marginBottom: 30 }}>
            <TitleWithBorder_1.default title={title}/>
          </react_1.Grid>
          <react_1.Grid xs={12} sm={3.7} css={{ marginBottom: 30 }}>
            <react_1.Text>{subtitle}</react_1.Text>
          </react_1.Grid>
          <react_1.Grid xs={12}/>
          <react_1.Grid xs={12} css={{ marginBottom: 40 }}>
            <ListingLabels_1.default listings={listings} onChangeListing={(index) => {
            setCurrentListingIndex(index);
        }}/>
          </react_1.Grid>
          <react_1.Grid xs={12}>
            <DevelopmentsSwiper_1.default developemnts={listings[currentListingIndex].developments}/>
          </react_1.Grid>
        </react_1.Grid.Container>
      </react_1.Container>
    </react_1.Container>);
}
exports.default = HomeLocations;
