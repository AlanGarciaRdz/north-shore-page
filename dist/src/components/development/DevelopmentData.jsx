'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const react_1 = require('@nextui-org/react');
const io5_1 = require('react-icons/io5');
const DevelopmentSingleData = ({ data, name, icon }) => {
  return (
    <react_1.Container
      fluid
      responsive={false}
      css={{
        padding: 0,
        margin: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div style={{ marginBottom: 4 }}>{icon}</div>
      <react_1.Text weight='bold' css={{ margin: 0, lineHeight: 1 }}>
        {data}
      </react_1.Text>
      <react_1.Text css={{ margin: 0, lineHeight: 1 }}>{name}</react_1.Text>
    </react_1.Container>
  );
};
const DevelopmentData = ({ bathrroms, bedrooms, squareFT, bigData }) => {
  return (
    <react_1.Container
      responsive={false}
      fluid
      css={{
        padding: 0,
        margin: 0,
        width: '100%',
      }}
    >
      <react_1.Grid.Container justify='flex-start' alignItems='center'>
        <react_1.Grid xs={4}>
          <DevelopmentSingleData
            data={bathrroms}
            name='Bathrooms'
            icon={<io5_1.IoMoonOutline style={{ fontSize: 30 }} />}
          />
        </react_1.Grid>
        <react_1.Grid xs={4}>
          <DevelopmentSingleData
            data={bedrooms}
            name='Bedrooms'
            icon={<io5_1.IoWaterOutline style={{ fontSize: 30 }} />}
          />
        </react_1.Grid>
        <react_1.Grid xs={4}>
          <DevelopmentSingleData
            data={squareFT}
            name='Square ft.'
            icon={<io5_1.IoExpand style={{ fontSize: 30 }} />}
          />
        </react_1.Grid>
      </react_1.Grid.Container>
    </react_1.Container>
  );
};
exports.default = DevelopmentData;
