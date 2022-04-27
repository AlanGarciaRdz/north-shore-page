import { Container, Grid, Text } from '@nextui-org/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import OptimizeImage from 'src/components/base/OptimizeImage';
import { useContactDataContext } from 'src/context/ContactDataContext';
import { WithChildren } from 'src/scripts/Types';
import { MainSectionsContainerCSS } from 'styles/theme';

import ContactCard from '../contact/ContactCard';

type FooterProps = WithChildren<{
  showContactCard?: boolean;
}>;

export default function Footer({ showContactCard }: FooterProps) {
  const contextData = useContactDataContext();
  const contactDataInfo = contextData?.contactDataInfo;
  if (contactDataInfo === undefined) {
    return <div />;
  }

  return (
    <Container
      fluid
      responsive={false}
      css={{
        margin: 0,
        padding: 0,
        borderTop: '8px solid $black',
        backgroundColor: '$background',
        marginBottom: 51,
      }}
    >
      <Container
        css={{
          ...MainSectionsContainerCSS,
          width: '100%',
          height: '100%',
        }}
      >
        <Grid.Container
          justify='space-between'
          alignItems='center'
          css={{ height: '100%', position: 'relative' }}
        >
          <Grid
            xs={12}
            sm={0}
            css={{ position: 'absolute', width: '100%', top: -260, right: 0 }}
          >
            {showContactCard === true && <ContactCard />}
          </Grid>
          <Grid xs={12} sm={6}>
            <Container
              fluid
              responsive={false}
              css={{
                margin: 0,
                padding: 0,
                paddingTop: 280,
                '@sm': {
                  paddingTop: 52,
                },
              }}
            >
              <Grid.Container>
                <Grid xs={12} css={{ marginBottom: 32 }}>
                  <Link href={'/'}>
                    <OptimizeImage
                      src={'/images/logo-blue.png'}
                      layout='fixed'
                      alt='North Shore Logo'
                      useBlur={false}
                      width={65}
                      height={80}
                      containerCSS={{ cursor: 'pointer' }}
                    />
                  </Link>
                </Grid>
                <Grid xs={12} css={{ marginBottom: 4 }}>
                  <Text h2 color='$secondary'>
                    {'Contact us'}
                  </Text>
                </Grid>
                <Grid xs={12} css={{ marginBottom: 32 }}>
                  <Container
                    fluid
                    responsive={false}
                    css={{
                      padding: 0,
                      margin: 0,
                      height: 2,
                      width: 81,
                      backgroundColor: '$secondary',
                    }}
                  />
                </Grid>
                <Grid xs={12} css={{ marginBottom: 0 }}>
                  <a
                    href={`tel:${contactDataInfo?.phoneNumber.replace(
                      /\s/g,
                      ''
                    )}`}
                  >
                    <Text color='$secondary'>
                      {contactDataInfo?.phoneNumber}
                    </Text>
                  </a>
                </Grid>
                <Grid xs={12} css={{ marginBottom: 32 }}>
                  <a href={`mailto:${contactDataInfo?.email}`}>
                    <Text color='$secondary'>{contactDataInfo?.email}</Text>
                  </a>
                </Grid>
                <Grid xs={12} sm={5} css={{ marginBottom: 32 }}>
                  <Text color='$secondary'>
                    {contactDataInfo?.address1}
                    <span style={{ fontWeight: 'bold' }}>
                      {contactDataInfo?.address2}
                    </span>
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <a href={`${contactDataInfo?.bottomData1.link}`}>
                    <Text color='$secondary'>
                      {contactDataInfo?.bottomData1.label}
                    </Text>
                  </a>
                  <Text color='$secondary' css={{ margin: '0px 10px' }}>
                    {'·'}
                  </Text>
                  <a href={`${contactDataInfo?.bottomData2.link}`}>
                    <Text color='$secondary'>
                      {contactDataInfo?.bottomData2.label}
                    </Text>
                  </a>
                </Grid>
              </Grid.Container>
            </Container>
          </Grid>
          <Grid
            xs={0}
            sm={6}
            css={{ position: 'absolute', width: '100%', top: -230, right: 0 }}
          >
            {showContactCard === true && <ContactCard />}
          </Grid>
        </Grid.Container>
      </Container>
    </Container>
  );
}
