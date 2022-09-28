import { ColorScheme, MantineProvider } from '@mantine/core';
import { AppProps } from 'next/app';
import Head from 'next/head';
import theme from 'theme';
import GlobalStyles from 'theme/globalStyles';

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Dálcio Garcia</title>
      </Head>
      <MantineProvider
        theme={{
          colorScheme: 'dark',
          ...theme,
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <GlobalStyles />
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
