"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@nextui-org/react");
function TitleWithBorder({ title }) {
    return (<react_1.Container fluid responsive={false} css={{
            margin: 0,
            padding: 0,
            width: 'auto',
        }}>
      <react_1.Text h2>{title}</react_1.Text>
      <react_1.Container fluid responsive={false} css={{
            margin: 0,
            padding: 0,
            width: '81px',
            height: 3,
            backgroundColor: '$secondaryLight',
        }}/>
    </react_1.Container>);
}
exports.default = TitleWithBorder;
