// 1. Import `createTheme`
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import React, { ReactNode, useEffect, useState } from 'react';
import BaseTheme from 'styles/theme';

type ThemeProviderProps = {
  children: ReactNode;
};

function BaseThemeProvider({ children }: ThemeProviderProps) {
  const lightTheme = createTheme({
    type: 'light',
    theme: {
      colors: BaseTheme.lightColors,
      fonts: BaseTheme.fonts,
      fontSizes: BaseTheme.fontSizes,
      fontWeights: BaseTheme.fontWeights,
    },
  });

  const darkTheme = createTheme({
    type: 'dark',
    theme: {
      colors: BaseTheme.darkColors,
      fonts: BaseTheme.fonts,
      fontSizes: BaseTheme.fontSizes,
      fontWeights: BaseTheme.fontWeights,
    },
  });

  return (
    <NextThemesProvider
      defaultTheme='light'
      attribute='class'
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>{children}</NextUIProvider>
    </NextThemesProvider>
  );
}
export default BaseThemeProvider;
