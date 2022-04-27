"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@nextui-org/react");
const lodash_1 = __importDefault(require("lodash"));
const image_1 = __importDefault(require("next/image"));
const react_2 = __importDefault(require("react"));
const ImageTools_1 = require("src/scripts/ImageTools");
const StringTools_1 = require("src/scripts/StringTools");
const defaultQuality = '70';
const OptimizeImage = (props) => {
    return (<react_1.Container fluid responsive css={Object.assign({ padding: 0, margin: 0 }, props.containerCSS)}>
      {typeof props.src === 'string' &&
            !(0, StringTools_1.IsEmptyString)(props.src) &&
            !props.src.startsWith('?') &&
            !props.src.startsWith('[object Object]') && (<image_1.default {...lodash_1.default.omit(props, ['style'])} className={props.className || ''} quality={props.quality || defaultQuality} priority={props.priority || false} title={props.title || props.alt || 'North Shore'} alt={props.alt || 'North Shore'} blurDataURL={props.useBlur === false ? undefined : ImageTools_1.blurDataURL}/>)}
    </react_1.Container>);
};
exports.default = OptimizeImage;
