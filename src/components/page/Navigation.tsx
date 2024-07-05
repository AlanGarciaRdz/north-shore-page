import { Button, Container, Grid } from '@nextui-org/react';
import Link from 'next/link';
import { RefObject, useEffect, useState } from 'react';
import { RiMenu3Line } from 'react-icons/ri';
import { animated, useSpring } from 'react-spring';
import OptimizeImage from 'src/components/base/OptimizeImage';
import useScrollPosition from 'src/hooks/useScrollPosition';
import { BLOGS_URL, LISTINGS_URL } from 'src/scripts/GeneralData';
import { WithChildren } from 'src/scripts/Types';
import { MainSectionsContainerCSS } from 'styles/theme';

import RenderContainer from '../layouts/RenderContainer';
import NavigationLabel from './NavigationLabel';

type NavigationContainerProps = WithChildren<{
  useSmallNavigation: boolean;
  hideDuration: number;
  showDuration: number;
  smallHeaderHeight: number;
  normalHeaderHeight: number;
  positionToCheck: number;
}>;
const NavigationContainer = ({
  children,
  useSmallNavigation,
  hideDuration,
  showDuration,
  smallHeaderHeight,
  normalHeaderHeight,
}: NavigationContainerProps) => {
  const opacityToSet = 0.9;
  const baseStyle = {
    background: 'linear-gradient(180deg, #333333 0%, rgba(51, 51, 51, 0.53) 100%)',
    backdropFilter: ' blur(6px)',
    width: '100vw',
    maxWidth: '100vw',
  };
  const bigHeaderStyles = useSpring({
    config: { duration: useSmallNavigation ? hideDuration : showDuration },
    overflow: useSmallNavigation ? 'hidden' : 'visible',
    opacity: useSmallNavigation ? 0 : opacityToSet,
    height: useSmallNavigation ? 0 : normalHeaderHeight,
  });
  const smallHeaderStyles = useSpring({
    config: { duration: useSmallNavigation ? showDuration : hideDuration },
    overflow: useSmallNavigation ? 'visible' : 'hidden',
    opacity: useSmallNavigation ? opacityToSet : 0,
    height: useSmallNavigation ? smallHeaderHeight : 0,
  });
  return (
    <>
      <div
        style={{
          top: 0,
          position: 'absolute',
          zIndex: 200,
        }}
      >
        <animated.header style={{ ...bigHeaderStyles, ...baseStyle }}>{children}</animated.header>
      </div>
      <div
        style={{
          top: 0,
          position: 'sticky',
          zIndex: 200,
        }}
      >
        <animated.header style={{ ...smallHeaderStyles, ...baseStyle }}>{children}</animated.header>
      </div>
    </>
  );
};

type NavigationProps = {
  contactRef: RefObject<HTMLDivElement>;
  toggleDrawer: () => void;
};

export default function Navigation({ contactRef, toggleDrawer }: NavigationProps) {
  const navigationConf = {
    hideDuration: 50,
    showDuration: 200,
    smallHeaderHeight: 72,
    normalHeaderHeight: 120,
    positionToCheck: 100,
  };
  const [useSmallNavigation, setUseSmallNavigation] = useState(false);
  const scrollPosition = useScrollPosition();
  function handleScroll() {
    if (useSmallNavigation === true) {
      if (scrollPosition < navigationConf.positionToCheck) {
        setUseSmallNavigation(false);
      }
    } else {
      if (scrollPosition > navigationConf.positionToCheck) {
        setUseSmallNavigation(true);
      }
    }
  }
  useEffect(() => {
    handleScroll();
  }, [scrollPosition]);

  return (
    <NavigationContainer useSmallNavigation={useSmallNavigation} {...navigationConf}>
      <Container
        fluid
        responsive={false}
        css={{ margin: 0, padding: 0, width: '100%', height: '100%' }}
      >
        <Container css={{ ...MainSectionsContainerCSS, width: '100%', height: '100%' }}>
          <Grid.Container justify='space-between' alignItems='center' css={{ height: '100%' }}>
            <Grid xs={6}>
              <Link href={'/'}>
                <div>
                  <OptimizeImage
                    src={`/images/${
                      useSmallNavigation ? 'logo-simple.png' : 'logo-white-text.png'
                    }`}
                    alt='North Shore Logo'
                    useBlur={false}
                    width={useSmallNavigation ? 40 : 156}
                    height={useSmallNavigation ? 40 : 80}
                    containerCSS={{ cursor: 'pointer' }}
                  />
                </div>
              </Link>
            </Grid>
            <Grid xs={6} justify='flex-end'>
              <RenderContainer
                mobileViewGridProps={{
                  css: { justifyContent: 'flex-end' },
                }}
                desktopViewGridProps={{
                  css: { justifyContent: 'flex-end' },
                }}
                mobileView={
                  <Button
                    auto
                    light
                    css={{ padding: 0, margin: 0 }}
                    icon={<RiMenu3Line style={{ color: 'white' }} size={40} />}
                    onClick={() => toggleDrawer()}
                  />
                }
                desktopView={
                  <>
                    <NavigationLabel label='Listing' href={LISTINGS_URL} />
                    <NavigationLabel
                      simpleText
                      label='Contact us'
                      href=''
                      onClick={() => {
                        if (contactRef.current !== null) {
                          contactRef.current.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                          });
                        }
                      }}
                    />
                    <NavigationLabel label='Blog' noMargin href={BLOGS_URL} />
                  </>
                }
              />
            </Grid>
          </Grid.Container>
        </Container>
      </Container>
    </NavigationContainer>
  );
}
