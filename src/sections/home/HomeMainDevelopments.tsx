import { Container, Grid } from '@nextui-org/react';
import { DevelopmentMainCardProps } from 'src/components/development/Development.types';
import DevelopmentMainCard from 'src/components/development/DevelopmentsMainCard/DevelopmenstMainCard';
import { MainSectionsContainerCSS } from 'styles/theme';

type HomeMainDevelopmentsProps = {
  developments: DevelopmentMainCardProps[];
};

export default function HomeMainDevelopments({ developments }: HomeMainDevelopmentsProps) {
  return (
    <Container
      fluid
      responsive={false}
      css={{
        margin: 0,
        padding: 0,
        width: '100vw',
        position: 'relative',
        marginBottom: -30,
      }}
    >
      <Container
        css={{
          ...MainSectionsContainerCSS,
          positon: 'absolute',
          zIndex: 5,
          top: -110,
        }}
      >
        <Grid.Container
          justify='center'
          alignItems='center'
          css={{
            width: '100%',
          }}
        >
          <Grid xs={12} md={10.5}>
            <DevelopmentMainCard developments={developments} />
          </Grid>
        </Grid.Container>
      </Container>
    </Container>
  );
}
