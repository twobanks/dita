import type { AppProps } from 'next/app'
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/global";
import theme from '../styles/theme'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="shortcut icon" href="/icon/favicon.png" />
      <link rel="apple-touch-icon" href="/icon/favicon.png" />
    </Head>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  </>
)

export default MyApp
