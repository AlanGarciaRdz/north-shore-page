"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@nextui-org/react");
const react_2 = __importDefault(require("react"));
const RenderContainer = ({ mobileView, desktopView, containerProps, mobileViewGridProps, desktopViewGridProps, }) => {
    return (<react_1.Grid.Container css={{ padding: 0, margin: 0 }} {...containerProps}>
      <react_1.Grid xs={12} sm={0} css={{ position: 'relative', padding: 0, margin: 0 }} {...mobileViewGridProps}>
        {mobileView}
      </react_1.Grid>
      <react_1.Grid xs={0} sm={12} css={{ position: 'relative', padding: 0, margin: 0 }} {...desktopViewGridProps}>
        {desktopView || mobileView}
      </react_1.Grid>
    </react_1.Grid.Container>);
};
exports.default = RenderContainer;
