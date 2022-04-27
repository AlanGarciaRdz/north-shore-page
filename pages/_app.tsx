import 'styles/fonts.css';

import { CssBaseline } from '@nextui-org/react';
import ContactDataProvider from 'src/context/ContactDataContext';
import ThemeProvider from 'src/context/ThemeContext';

import type { AppProps } from 'next/app';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <CssBaseline />
      <ContactDataProvider>
        <Component {...pageProps} />
      </ContactDataProvider>
    </ThemeProvider>
  );
}

export default MyApp;
