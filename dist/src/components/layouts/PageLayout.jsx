"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@nextui-org/react");
const Footer_1 = __importDefault(require("../page/Footer"));
const Navigation_1 = __importDefault(require("../page/Navigation"));
const PageLayout = ({ children, navigationOnAbsolute, showContactCard, backgroundColor, }) => {
    return (<react_1.Container responsive={false} fluid css={{
            padding: 0,
            margin: 0,
            width: '100vw',
            maxWidth: '100vw',
        }}>
      <Navigation_1.default />
      {<div style={{
                width: '100%',
                height: navigationOnAbsolute !== true ? 0 : 120,
            }}/>}
      <react_1.Container responsive={false} fluid css={{
            padding: 0,
            margin: 0,
            width: '100vw',
            maxWidth: '100vw',
            minHeight: '200vh',
            backgroundColor: backgroundColor || '$gray200',
            paddingBottom: 342,
        }}>
        {children}
      </react_1.Container>
      <Footer_1.default showContactCard={showContactCard}/>
    </react_1.Container>);
};
exports.default = PageLayout;
