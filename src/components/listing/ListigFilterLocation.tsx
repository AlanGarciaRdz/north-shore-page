import { Container, Grid, Text } from '@nextui-org/react';
import React, { Dispatch, FC, SetStateAction, useRef, useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import Select from 'react-select';
import { reactSelectorTheme } from 'styles/theme';

import { DevelopmentPropertyTypeProps } from '../development/Development.types';
import { ListingFilter } from './ListingFilterCard';

const selectStyles = {
  container: (styles: any) => ({
    ...styles,
    width: '100%',
  }),
  control: (styles: any) => ({
    ...styles,
    width: '100%',
    border: '1px solid var(--nextui-colors-accents3)',
  }),
  indicatorSeparator: (styles: any) => ({
    ...styles,
    backgroundColor: 'var(--nextui-colors-accents3)',
    margin: 0,
  }),
};

type ListigFilterLocationProps = {
  currentFilter: ListingFilter;
  setCurrentFilter: Dispatch<SetStateAction<ListingFilter>>;
  propertyTypes: DevelopmentPropertyTypeProps[];
};

function ListigFilterLocation({
  currentFilter,
  setCurrentFilter,
  propertyTypes,
}: ListigFilterLocationProps) {
  return (
    <Grid.Container justify='space-between'>
      <Grid>
        <Text>{'Location'}</Text>
      </Grid>
      <Grid xs={12} />
      <Grid
        xs={12}
        css={{
          height: 35,
        }}
      >
        <Select
          options={propertyTypes}
          styles={selectStyles}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              ...reactSelectorTheme,
            },
          })}
          value={propertyTypes.find((propertyType) => {
            return propertyType.value === currentFilter.location;
          })}
          onChange={(selectedOption) => {
            setCurrentFilter({
              ...currentFilter,
              location: selectedOption?.value || 'all',
            });
          }}
          components={{
            DropdownIndicator: () => (
              <Container
                fluid
                responsive={false}
                css={{
                  padding: 0,
                  margin: 0,
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 44,
                  borderLeft: '1px solid #CACDDC',
                }}
              >
                <AiFillCaretDown />
              </Container>
            ),
          }}
        />
      </Grid>
    </Grid.Container>
  );
}

export default ListigFilterLocation;
