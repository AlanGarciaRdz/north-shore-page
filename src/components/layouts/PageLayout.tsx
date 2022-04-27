import { Container } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { WithChildren } from 'src/scripts/Types';

import Footer from '../page/Footer';
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
  return (
    <Container
      responsive={false}
      fluid
      css={{
        padding: 0,
        margin: 0,
        width: '100vw',
        maxWidth: '100vw',
      }}
    >
      <Navigation />
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
          paddingBottom: 280,
        }}
      >
        {children}
      </Container>
      <Footer showContactCard={showContactCard} />
    </Container>
  );
};
export default PageLayout;
