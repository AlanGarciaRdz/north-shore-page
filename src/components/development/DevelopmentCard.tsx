import { Button, Card, Container, Grid, Text } from '@nextui-org/react';
import Link from 'next/link';
import { GrLocation } from 'react-icons/gr';
import OptimizeImage from 'src/components/base/OptimizeImage';
import { formatNumberToPrice } from 'src/scripts/StringTools';

import { DevelopmentCardProps } from './Development.types';
import DevelopmentData from './DevelopmentData';

const DevelopmentCard = (development: DevelopmentCardProps) => {
  return (
    <Link href={development.url || '/'}>
      <Container
        responsive={false}
        fluid
        css={{
          padding: 0,
          margin: 0,
          width: '100%',
        }}
      >
        <Card
          clickable
          css={{
            borderRadius: 4,
            boxShadow: '10px 10px 20px rgba(126, 148, 166, 0.1)',
          }}
        >
          <Card.Body css={{ padding: 0, margin: 0, height: 296 }}>
            <OptimizeImage
              src={development.image?.src || '/'}
              layout='fill'
              objectFit='cover'
              objectPosition='center'
              alt={development.image?.alt}
              useBlur={false}
            />
          </Card.Body>
          <Card.Footer css={{ padding: 24 }}>
            <Grid.Container>
              <Grid xs={12} css={{ marginBottom: 8 }}>
                <Text h3 css={{ margin: 0 }}>
                  {development.name}
                </Text>
              </Grid>
              <Grid xs={12}>
                <Button
                  auto
                  light
                  css={{
                    padding: 0,
                    margin: 0,
                    height: 'auto',
                    '.nextui-button-icon': { marginRight: 4 },
                  }}
                  icon={<GrLocation style={{ fontSize: 15 }} />}
                >
                  <Text>{development.listing?.name}</Text>
                </Button>
              </Grid>
              <Grid xs={12} css={{ marginBottom: 20 }}>
                <Text weight='bold' css={{ margin: 0 }}>
                  {`${formatNumberToPrice(development.price)} USD`}
                </Text>
              </Grid>
              <Grid xs={12}>
                <DevelopmentData
                  bathroms={development.bathroms?.toString()}
                  bedrooms={development.bedrooms?.toString()}
                  squareFT={`${development.squareFT?.toString()} ft`}
                  bigData={false}
                />
              </Grid>
            </Grid.Container>
          </Card.Footer>
        </Card>
      </Container>
    </Link>
  );
};
export default DevelopmentCard;
