import { Text } from '@nextui-org/react';
import Link from 'next/link';
import { RefObject, useEffect, useState } from 'react';

type NavigationLabelProps = {
  label: string;
  href: string;
  noMargin?: boolean;
  simpleText?: boolean;
  isBigText?: boolean;
  onClick?: () => void;
};
const NavigationLabel = ({
  label,
  href,
  noMargin,
  onClick,
  simpleText,
  isBigText,
}: NavigationLabelProps) => {
  if (simpleText === true) {
    return (
      <Text
        onClick={onClick}
        color='white'
        weight='bold'
        id={`navigate-to-${href}`}
        css={{
          marginRight: noMargin ? 0 : 32,
          cursor: 'pointer',
          fontSize: isBigText ? '$lg' : '$base',
        }}
      >
        {label}
      </Text>
    );
  }
  return (
    <Link href={href}>
      <div>
        <Text
          color='white'
          weight='bold'
          id={`navigate-to-${href}`}
          css={{
            marginRight: noMargin ? 0 : 32,
            cursor: 'pointer',
            fontSize: isBigText ? '$lg' : '$base',
          }}
          onClick={onClick}
        >
          {label}
        </Text>
      </div>
    </Link>
  );
};

export default NavigationLabel;
