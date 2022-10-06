import { Container, Grid, Text, useTheme } from '@nextui-org/react';
import Link from 'next/link';
import { forwardRef, RefObject, useEffect, useState } from 'react';
import OptimizeImage from 'src/components/base/OptimizeImage';
import { useContactDataContext } from 'src/context/ContactDataContext';
import { avilableNeighborhoods, LISTINGS_URL, socialMedia } from 'src/scripts/GeneralData';
import { formatToURL } from 'src/scripts/StringTools';
import { WithChildren } from 'src/scripts/Types';
import { MainSectionsContainerCSS } from 'styles/theme';

import ContactCard from '../contact/ContactCard';

type FooterProps = WithChildren<{
  showContactCard?: boolean;
}>;

const Footer = forwardRef(({ showContactCard }: FooterProps, ref) => {
  const { theme } = useTheme();
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
        <div
          style={{
            width: '100%',
            height: 20,
            position: 'absolute',
            top: -270,
            right: 0,
          }}
          ref={ref as RefObject<HTMLDivElement>}
        />
        <Grid.Container
          justify='space-between'
          alignItems='center'
          css={{ height: '100%', position: 'relative' }}
        >
          <Grid xs={12} sm={0} css={{ position: 'absolute', width: '100%', top: -260, right: 0 }}>
            {showContactCard === true && (
              <div style={{ width: '100%' }}>
                <ContactCard />
              </div>
            )}
          </Grid>
          <Grid xs={12} sm={6}>
            <Container
              fluid
              responsive={false}
              css={{
                margin: 0,
                padding: 0,
                paddingTop: showContactCard ? 280 : 120,
                '@sm': {
                  paddingTop: showContactCard ? 120 : 52,
                },
              }}
            >
              <Grid.Container>
                <Grid xs={12} css={{ marginBottom: 32 }}>
                  <Link href={'/'}>
                    <div>
                      <OptimizeImage
                        src={'/images/logo-blue.png'}
                        layout='fixed'
                        alt='North Shore Logo'
                        useBlur={false}
                        width={65}
                        height={80}
                        containerCSS={{ cursor: 'pointer' }}
                      />
                    </div>
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
                  <a href={contactDataInfo?.phoneNumber.link}>
                    <Text color='$secondary'>{contactDataInfo?.phoneNumber.label}</Text>
                  </a>
                </Grid>
                <Grid xs={12} css={{ marginBottom: 32 }}>
                  <a href={contactDataInfo.email.link}>
                    <Text color='$secondary'>{contactDataInfo?.email.label}</Text>
                  </a>
                </Grid>
                <Grid xs={12} sm={5} css={{ marginBottom: 20 }}>
                  <Text color='$secondary'>
                    {contactDataInfo?.address1}
                    <span style={{ fontWeight: 'bold' }}>{contactDataInfo?.address2}</span>
                  </Text>
                </Grid>
                <Grid xs={12} css={{ marginBottom: 5 }}>
                  <Text weight={'bold'} color='$secondary'>
                    {'Follow us'}
                  </Text>
                </Grid>
                <Grid xs={12} css={{ marginBottom: 32 }}>
                  <Grid.Container>
                    {socialMedia.map((socialMediaItem, index) => {
                      return (
                        <Grid key={index} css={{ marginRight: 20 }}>
                          <a href={socialMediaItem.url} target='_blank' rel='noreferrer'>
                            <socialMediaItem.icon
                              style={{
                                fontSize: theme?.fontSizes.lg.value,
                                color: socialMediaItem.color,
                              }}
                            />
                          </a>
                        </Grid>
                      );
                    })}
                  </Grid.Container>
                </Grid>
                <Grid xs={12}>
                  <Grid.Container>
                    {avilableNeighborhoods.map((avilableNeighborhood, index) => {
                      return (
                        <>
                          <Grid>
                            <a
                              href={`${LISTINGS_URL}?location=${formatToURL(
                                avilableNeighborhood.name
                              )}`}
                            >
                              <Text color='$secondary'>{avilableNeighborhood.name}</Text>
                            </a>
                          </Grid>
                          {index + 1 < avilableNeighborhoods.length && (
                            <Grid>
                              <Text color='$secondary' css={{ margin: '0px 10px' }}>
                                {'·'}
                              </Text>
                            </Grid>
                          )}
                        </>
                      );
                    })}
                  </Grid.Container>
                </Grid>
              </Grid.Container>
            </Container>
          </Grid>
          <Grid xs={0} sm={6} css={{ position: 'absolute', width: '100%', top: -230, right: 0 }}>
            {showContactCard === true && (
              <div style={{ width: '100%' }} id='contact-card'>
                <ContactCard />
              </div>
            )}
          </Grid>
        </Grid.Container>
      </Container>
    </Container>
  );
});
Footer.displayName = 'Footer';
export default Footer;
