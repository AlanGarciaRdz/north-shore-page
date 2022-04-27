"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@nextui-org/react");
const bi_1 = require("react-icons/bi");
const io5_1 = require("react-icons/io5");
const DevelopmentSingleData = ({ data, name, icon, bigData, }) => {
    return (<react_1.Container fluid responsive={false} css={{
            padding: 0,
            margin: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: bigData ? 'column' : 'row',
        }}>
      {icon}
      {bigData ? <div style={{ height: 4 }}/> : <div style={{ width: 6 }}/>}
      <react_1.Text weight='bold' css={{ margin: 0, lineHeight: 1 }}>
        {data}
      </react_1.Text>
      {bigData && <react_1.Text css={{ margin: 0, lineHeight: 1 }}>{name}</react_1.Text>}
    </react_1.Container>);
};
const DevelopmentData = ({ bathrroms, bedrooms, squareFT, bigData, }) => {
    const iconSize = bigData ? 30 : 16;
    const gridProps = bigData
        ? {
            xs: 4,
        }
        : {
            css: {
                marginRight: 16,
            },
        };
    return (<react_1.Container responsive={false} fluid css={{
            padding: 0,
            margin: 0,
            width: '100%',
        }}>
      <react_1.Grid.Container justify='flex-start' alignItems='center'>
        <react_1.Grid {...gridProps}>
          <DevelopmentSingleData data={bathrroms || '0'} name='Bathrooms' icon={<io5_1.IoMoonOutline style={{ fontSize: iconSize }}/>} bigData={bigData}/>
        </react_1.Grid>
        <react_1.Grid {...gridProps}>
          <DevelopmentSingleData data={bedrooms || '0'} name='Bedrooms' icon={<bi_1.BiDroplet style={{ fontSize: iconSize }}/>} bigData={bigData}/>
        </react_1.Grid>
        <react_1.Grid {...gridProps}>
          <DevelopmentSingleData data={squareFT || '0'} name='Square ft.' icon={<io5_1.IoExpand style={{ fontSize: iconSize }}/>} bigData={bigData}/>
        </react_1.Grid>
      </react_1.Grid.Container>
    </react_1.Container>);
};
exports.default = DevelopmentData;
