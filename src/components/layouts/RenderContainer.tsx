import { Grid, GridProps } from '@nextui-org/react';
import React, { ReactElement } from 'react';
import { WithChildren } from 'src/scripts/Types';

type RenderContainerProps = WithChildren<{
  mobileView: ReactElement;
  desktopView?: ReactElement;
  containerProps?: GridProps;
  mobileViewGridProps?: GridProps;
  desktopViewGridProps?: GridProps;
}>;

const RenderContainer = ({
  mobileView,
  desktopView,
  containerProps,
  mobileViewGridProps,
  desktopViewGridProps,
}: RenderContainerProps) => {
  return (
    <Grid.Container css={{ padding: 0, margin: 0 }} {...containerProps}>
      <Grid
        xs={12}
        sm={0}
        css={{ position: 'relative', padding: 0, margin: 0 }}
        {...mobileViewGridProps}
      >
        {mobileView}
      </Grid>
      <Grid
        xs={0}
        sm={12}
        css={{ position: 'relative', padding: 0, margin: 0 }}
        {...desktopViewGridProps}
      >
        {desktopView || mobileView}
      </Grid>
    </Grid.Container>
  );
};

export default RenderContainer;
