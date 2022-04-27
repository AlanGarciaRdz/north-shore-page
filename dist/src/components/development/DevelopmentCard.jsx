"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@nextui-org/react");
const link_1 = __importDefault(require("next/link"));
const gr_1 = require("react-icons/gr");
const OptimizeImage_1 = __importDefault(require("src/components/base/OptimizeImage"));
const StringTools_1 = require("src/scripts/StringTools");
const DevelopmentData_1 = __importDefault(require("./DevelopmentData"));
const DevelopmentCard = (development) => {
    var _a, _b, _c, _d, _e, _f;
    return (<link_1.default href={development.url || '/'}>
      <react_1.Container responsive={false} fluid css={{
            padding: 0,
            margin: 0,
            width: '100%',
        }}>
        <react_1.Card clickable css={{
            borderRadius: 4,
            boxShadow: '10px 10px 20px rgba(126, 148, 166, 0.1)',
        }}>
          <react_1.Card.Body css={{ padding: 0, margin: 0, height: 296 }}>
            <OptimizeImage_1.default src={((_a = development.image) === null || _a === void 0 ? void 0 : _a.src) || '/'} layout='fill' objectFit='cover' objectPosition='center' alt={(_b = development.image) === null || _b === void 0 ? void 0 : _b.alt} useBlur={false}/>
          </react_1.Card.Body>
          <react_1.Card.Footer css={{ padding: 24 }}>
            <react_1.Grid.Container>
              <react_1.Grid xs={12} css={{ marginBottom: 8 }}>
                <react_1.Text h3 css={{ margin: 0 }}>
                  {development.name}
                </react_1.Text>
              </react_1.Grid>
              <react_1.Grid xs={12}>
                <react_1.Button auto light css={{
            padding: 0,
            margin: 0,
            height: 'auto',
            '.nextui-button-icon': { marginRight: 4 },
        }} icon={<gr_1.GrLocation style={{ fontSize: 15 }}/>}>
                  <react_1.Text>{(_c = development.listing) === null || _c === void 0 ? void 0 : _c.name}</react_1.Text>
                </react_1.Button>
              </react_1.Grid>
              <react_1.Grid xs={12} css={{ marginBottom: 20 }}>
                <react_1.Text weight='bold' css={{ margin: 0 }}>
                  {`${(0, StringTools_1.formatNumberToPrice)(development.price)} USD`}
                </react_1.Text>
              </react_1.Grid>
              <react_1.Grid xs={12}>
                <DevelopmentData_1.default bathrroms={(_d = development.bathrroms) === null || _d === void 0 ? void 0 : _d.toString()} bedrooms={(_e = development.bedrooms) === null || _e === void 0 ? void 0 : _e.toString()} squareFT={`${(_f = development.squareFT) === null || _f === void 0 ? void 0 : _f.toString()} ft`} bigData={false}/>
              </react_1.Grid>
            </react_1.Grid.Container>
          </react_1.Card.Footer>
        </react_1.Card>
      </react_1.Container>
    </link_1.default>);
};
exports.default = DevelopmentCard;
