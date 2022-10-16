import { ColorScheme, Loader, MantineProvider, Stack } from '@mantine/core';
import { useDocumentIsReady } from 'hooks';
import { AppProps } from 'next/app';
import Head from 'next/head';
import theme from 'theme';
import GlobalStyles from 'theme/globalStyles';

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const isReady = useDocumentIsReady();

  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
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
        {(isReady && <Component {...pageProps} />) || (
          <Stack align="center" justify="center" style={{ height: '100vh' }}>
            <Loader size="xl" />
          </Stack>
        )}
      </MantineProvider>
    </>
  );
}
