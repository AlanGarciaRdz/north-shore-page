import { Container } from '@nextui-org/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { WithChildren } from 'src/scripts/Types';

import Footer from '../page/Footer';
import MobileDrawer from '../page/MobileDrawer';
import Navigation from '../page/Navigation';

type PageLayoutProps = WithChildren<{
  navigationOnAbsolute?: boolean;
  showContactCard?: boolean;
  backgroundColor?: string;
}>;

const PageLayout = ({
  children,
  navigationOnAbsolute,
  showContactCard,
  backgroundColor,
}: PageLayoutProps) => {
  const contactRef = useRef<HTMLDivElement>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = useCallback(() => {
    setIsDrawerOpen((isDrawerOpen) => !isDrawerOpen);
  }, []);
  return (
    <>
      <MobileDrawer
        isOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
        closeDrawer={() => {
          setIsDrawerOpen(false);
        }}
        contactRef={contactRef}
      />
      <Container
        responsive={false}
        fluid
        css={{
          ...(isDrawerOpen ? { height: '100vh', overflow: 'hidden' } : {}),
          padding: 0,
          margin: 0,
          width: '100vw',
          maxWidth: '100vw',
        }}
      >
        <Navigation contactRef={contactRef} toggleDrawer={toggleDrawer} />
        {
          <div
            style={{
              width: '100%',
              height: navigationOnAbsolute !== true ? 0 : 120,
            }}
          />
        }
        <Container
          responsive={false}
          fluid
          css={{
            padding: 0,
            margin: 0,
            width: '100vw',
            maxWidth: '100vw',
            minHeight: '200vh',
            backgroundColor: backgroundColor || '$gray200',
            paddingBottom: showContactCard ? 280 : 120,
          }}
        >
          {children}
        </Container>
        <Footer showContactCard={showContactCard} ref={contactRef} />
      </Container>
    </>
  );
};
export default PageLayout;
