import 'styles/fonts.css';

import { CssBaseline } from '@nextui-org/react';
import App from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import qs from 'qs';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import API from 'src/API/API';
import LoadingPage from 'src/components/base/LoadingPage';
import ContactDataProvider from 'src/context/ContactDataContext';
import ThemeProvider from 'src/context/ThemeContext';

import type { AppContext, AppProps } from 'next/app';
interface Props {
  GTM_ID: string;
}
function MyApp({ Component, pageProps, GTM_ID }: AppProps & Props) {
  const router = useRouter();
  const [routerState, setRouterState] = useState({
    isRouteChanging: false,
    loadingKey: 0,
  });

   GTM_ID = 'GTM-NT9SPBHF'

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
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=5' />
        <meta name='google' content='notranslate' />
      </Head>
      <Script src='https://platform.twitter.com/widgets.js' strategy='lazyOnload' />
      <Script id='google-tag-manager' strategy='beforeInteractive'>
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-NT9SPBHF');
      `}
      </Script>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NT9SPBHF"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      ></noscript>
      <ThemeProvider>
        <CssBaseline />
        <LoadingPage isRouteChanging={routerState.isRouteChanging} key={routerState.loadingKey}>
          <ContactDataProvider>
            <Component {...pageProps} />
            <Toaster />
          </ContactDataProvider>
        </LoadingPage>
      </ThemeProvider>
    </>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  // const api = new API();
  // const query = qs.stringify(
  //   {
  //     populate: ['GTM'],
  //   },
  //   {
  //     encodeValuesOnly: true,
  //   }
  // );
  // console.log(query)
  //const getSEO = await api.GET(`/main-seo?${query}`);
  //return { ...appProps, GTM_ID: getSEO?.data?.attributes?.GTM || 'FIX_GTM_ON_CMS' };
  return { ...appProps}; //ALAN
};

export default MyApp;
