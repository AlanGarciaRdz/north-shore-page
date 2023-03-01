import { Container, CSS } from '@nextui-org/react';
import Image, { ImageProps } from 'next/image';
import React, { CSSProperties } from 'react';
import { blurDataURL } from 'src/scripts/ImageTools';
import { IsEmptyString } from 'src/scripts/StringTools';

interface OptimizeImageProps {
  style?: CSSProperties;
  quality?: string;
  useBlur?: boolean;
  containerCSS?: CSS;
}
const defaultQuality = '70';

const OptimizeImage = (props: ImageProps & OptimizeImageProps) => {
  return (
    <Container fluid responsive css={{ padding: 0, margin: 0, ...props.containerCSS }}>
      {typeof props.src === 'string' &&
        !IsEmptyString(props.src) &&
        !props.src.startsWith('?') &&
        !props.src.startsWith('[object Object]') && (
          <Image
            {...props}
            className={props.className || ''}
            quality={props.quality || defaultQuality}
            priority={props.priority || false}
            title={props.title || props.alt || 'North Shore'}
            alt={props.alt || 'North Shore'}
            blurDataURL={props.useBlur === false ? undefined : blurDataURL}
          />
        )}
    </Container>
  );
};

export default OptimizeImage;
