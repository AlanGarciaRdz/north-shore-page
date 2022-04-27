import 'styles/fonts.css';

import { CssBaseline } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import LoadingPage from 'src/components/base/LoadingPage';
import ContactDataProvider from 'src/context/ContactDataContext';
import ThemeProvider from 'src/context/ThemeContext';

import type { AppProps } from 'next/app';
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [routerState, setRouterState] = useState({
    isRouteChanging: false,
    loadingKey: 0,
  });

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setRouterState((prevState) => ({
        ...prevState,
        isRouteChanging: true,
        loadingKey: prevState.loadingKey ^ 1,
      }));
    };

    const handleRouteChangeEnd = () => {
      setRouterState((prevState) => ({
        ...prevState,
        isRouteChanging: false,
      }));
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeEnd);
    router.events.on('routeChangeError', handleRouteChangeEnd);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeEnd);
      router.events.off('routeChangeError', handleRouteChangeEnd);
    };
  }, [router.events]);

  return (
    <ThemeProvider>
      <CssBaseline />
      <LoadingPage
        isRouteChanging={routerState.isRouteChanging}
        key={routerState.loadingKey}
      >
        <ContactDataProvider>
          <Component {...pageProps} />
        </ContactDataProvider>
      </LoadingPage>
    </ThemeProvider>
  );
}

export default MyApp;
