"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@nextui-org/react");
const DevelopmentAmenities = ({ amenities }) => {
    return (<react_1.Container responsive={false} fluid css={{
            padding: 0,
            margin: 0,
            width: '100%',
        }}>
      <react_1.Grid.Container>
        {amenities === null || amenities === void 0 ? void 0 : amenities.map((amenity, index) => {
            return (<react_1.Grid css={{ marginRight: 8, marginBottom: 8 }} key={index}>
              <react_1.Container responsive={false} fluid css={{
                    padding: '2px 8px',
                    borderRadius: 3,
                    margin: 0,
                    backgroundColor: '$secondaryLight',
                    color: '$white',
                    height: 30,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                {amenity.name}
              </react_1.Container>
            </react_1.Grid>);
        })}
      </react_1.Grid.Container>
    </react_1.Container>);
};
exports.default = DevelopmentAmenities;
