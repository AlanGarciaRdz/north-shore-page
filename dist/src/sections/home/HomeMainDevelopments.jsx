"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@nextui-org/react");
const DevelopmenstMainCard_1 = __importDefault(require("src/components/development/DevelopmentsMainCard/DevelopmenstMainCard"));
const theme_1 = require("styles/theme");
function HomeMainDevelopments({ developments, }) {
    return (<react_1.Container fluid responsive={false} css={{
            margin: 0,
            padding: 0,
            width: '100vw',
            position: 'relative',
            marginBottom: -30,
        }}>
      <react_1.Container css={Object.assign(Object.assign({}, theme_1.MainSectionsContainerCSS), { positon: 'absolute', zIndex: 5, top: -110 })}>
        <react_1.Grid.Container justify='center' alignItems='center' css={{
            width: '100%',
        }}>
          <react_1.Grid xs={12} md={10.5}>
            <DevelopmenstMainCard_1.default developments={developments}/>
          </react_1.Grid>
        </react_1.Grid.Container>
      </react_1.Container>
    </react_1.Container>);
}
exports.default = HomeMainDevelopments;
