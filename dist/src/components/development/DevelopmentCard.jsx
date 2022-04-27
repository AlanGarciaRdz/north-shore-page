"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@nextui-org/react");
const OptimizeImage_1 = __importDefault(require("src/components/base/OptimizeImage"));
const DevelopmentCard = (development) => {
    return (<react_1.Container responsive={false} fluid css={{
            padding: 0,
            margin: 0,
            width: '100%',
        }}>
      <react_1.Card>
        <react_1.Card.Body css={{ padding: 0, margin: 0 }}>
          <OptimizeImage_1.default src={development.image.src} layout='fill' objectFit='cover' objectPosition='center' alt={development.image.alt} useBlur={false}/>
        </react_1.Card.Body>
      </react_1.Card>
    </react_1.Container>);
};
exports.default = DevelopmentCard;
