import { Container, Text } from '@nextui-org/react';
import { useEffect, useState } from 'react';

type TitleWithBorderProps = {
  title: string;
};

export default function TitleWithBorder({ title }: TitleWithBorderProps) {
  return (
    <Container
      fluid
      responsive={false}
      css={{
        margin: 0,
        padding: 0,
        width: 'auto',
      }}
    >
      <Text h2>{title}</Text>
      <Container
        fluid
        responsive={false}
        css={{
          margin: 0,
          padding: 0,
          width: '81px',
          height: 3,
          backgroundColor: '$secondaryLight',
        }}
      />
    </Container>
  );
}
