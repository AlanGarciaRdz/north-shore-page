import { Container, Grid, Text } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { BiDroplet } from 'react-icons/bi';
import { IoExpand, IoMoonOutline } from 'react-icons/io5';

type DevelopmentSingleDataProps = {
  icon: React.ReactNode;
  data: string;
  name: string;
  bigData?: boolean;
};

const DevelopmentSingleData = ({
  data,
  name,
  icon,
  bigData,
}: DevelopmentSingleDataProps) => {
  return (
    <Container
      fluid
      responsive={false}
      css={{
        padding: 0,
        margin: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: bigData ? 'column' : 'row',
      }}
    >
      {icon}
      {bigData ? <div style={{ height: 4 }} /> : <div style={{ width: 6 }} />}
      <Text weight='bold' css={{ margin: 0, lineHeight: 1 }}>
        {data}
      </Text>
      {bigData && <Text css={{ margin: 0, lineHeight: 1 }}>{name}</Text>}
    </Container>
  );
};

type DevelopmentDataProps = {
  bathrroms?: string;
  bedrooms?: string;
  squareFT?: string;
  bigData?: boolean;
};
const DevelopmentData = ({
  bathrroms,
  bedrooms,
  squareFT,
  bigData,
}: DevelopmentDataProps) => {
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
  return (
    <Container
      responsive={false}
      fluid
      css={{
        padding: 0,
        margin: 0,
        width: '100%',
      }}
    >
      <Grid.Container justify='flex-start' alignItems='center'>
        <Grid {...gridProps}>
          <DevelopmentSingleData
            data={bathrroms || '0'}
            name='Bathrooms'
            icon={<IoMoonOutline style={{ fontSize: iconSize }} />}
            bigData={bigData}
          />
        </Grid>
        <Grid {...gridProps}>
          <DevelopmentSingleData
            data={bedrooms || '0'}
            name='Bedrooms'
            icon={<BiDroplet style={{ fontSize: iconSize }} />}
            bigData={bigData}
          />
        </Grid>
        <Grid {...gridProps}>
          <DevelopmentSingleData
            data={squareFT || '0'}
            name='Square ft.'
            icon={<IoExpand style={{ fontSize: iconSize }} />}
            bigData={bigData}
          />
        </Grid>
      </Grid.Container>
    </Container>
  );
};
export default DevelopmentData;