import { Container, Grid, Text } from '@nextui-org/react';
import OptimizeImage from 'src/components/base/OptimizeImage';
import { MainSectionsContainerCSS } from 'styles/theme';

const informationForUser =
  'All information is deemed reliable but not guaranteed. The listings on this site are displayed courtesy of the IDX program of AMPI Vallarta Nayarit MLS and may not be the listings of the site owner.';

export default function DevelopmentMLSInfo() {
  return (
    <Container
      fluid
      responsive={false}
      css={{
        margin: 0,
        padding: 0,
        width: '100vw',
        position: 'relative',
        marginBottom: 12,
      }}
    >
      <Container
        css={{
          ...MainSectionsContainerCSS,
          width: '100%',
        }}
      >
        <Grid.Container alignContent='center' alignItems='center'>
          <Grid css={{ marginRight: 10 }}>
            <OptimizeImage
              src={'/images/vnmls-logo.jpg'}
              layout='fixed'
              alt='VMLS Logo'
              useBlur={false}
              width={50}
              height={50}
            />
          </Grid>
          <Grid xs={12} md={10}>
            <Text size={'$xs'}>{informationForUser}</Text>
          </Grid>
        </Grid.Container>
      </Container>
    </Container>
  );
}
