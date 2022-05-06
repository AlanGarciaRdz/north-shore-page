import { Button, Container, Grid, Text, useTheme } from '@nextui-org/react';
import React, { FC, RefObject, useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { BLOGS_URL, LISTINGS_URL } from 'src/scripts/GeneralData';

import Separator from '../base/Separator';
import Drawer from '../layouts/Drawer';
import NavigationLabel from './NavigationLabel';

interface MobileDrawerProps {
  isOpen: boolean;
  toggleDrawer: () => void;
  closeDrawer: () => void;
  contactRef: RefObject<HTMLDivElement>;
}

const MobileDrawer: FC<MobileDrawerProps> = ({
  isOpen,
  closeDrawer,
  toggleDrawer,
  contactRef,
}) => {
  const { theme } = useTheme();
  return (
    <Drawer isOpen={isOpen} closeDrawer={closeDrawer}>
      <Container
        fluid
        responsive={false}
        css={{
          width: '100%',
          height: '100vh',
          background:
            'linear-gradient(180deg, #333333 0%, rgba(51, 51, 51, 0.53) 100%)',
          backdropFilter: ' blur(6px)',
          position: 'relative',
          padding: 0,
          zIndex: 1000,
        }}
      >
        <div
          style={{
            width: '100vw',
            height: '100vh',
            padding: '32px 0px 30px 0px',
            overflow: 'scroll',
          }}
        >
          <Container
            fluid
            responsive={false}
            css={{
              width: '100vw',
              padding: '0px 24px',
            }}
          >
            <Grid.Container
              css={{ padding: 0, margin: 0 }}
              justify='space-between'
              alignItems='center'
            >
              <Grid>
                <Text weight='bold' color='$white' css={{ fontSize: '$lg' }}>
                  {'Menú'}
                </Text>
              </Grid>
              <Grid>
                <Button
                  light
                  auto={true}
                  css={{ padding: 0 }}
                  icon={
                    <MdClose
                      style={{
                        fontSize: theme?.fontSizes.lg.value,
                        color: 'white',
                      }}
                    />
                  }
                  onClick={toggleDrawer}
                />
              </Grid>
            </Grid.Container>
            <Container
              fluid
              responsive={false}
              css={{ marginTop: 5, marginBottom: 32, padding: 0 }}
            >
              <Separator />
            </Container>
            <Grid.Container gap={0} css={{ marginBottom: 20 }}>
              <Grid xs={12}>
                <NavigationLabel
                  label='Listings'
                  isBigText
                  href={LISTINGS_URL}
                  onClick={() => {
                    toggleDrawer();
                  }}
                />
              </Grid>
              <Grid xs={12}>
                <NavigationLabel
                  simpleText
                  label='Contact us'
                  href=''
                  isBigText
                  onClick={() => {
                    toggleDrawer();
                    if (contactRef.current !== null) {
                      contactRef.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                      });
                    }
                  }}
                />
              </Grid>
              <Grid xs={12}>
                <NavigationLabel
                  label='Blog'
                  noMargin
                  isBigText
                  href={BLOGS_URL}
                  onClick={() => {
                    toggleDrawer();
                  }}
                />
              </Grid>
            </Grid.Container>
          </Container>
          <div style={{ width: '100%', height: '90px' }} />
        </div>
      </Container>
    </Drawer>
  );
};

export default MobileDrawer;
