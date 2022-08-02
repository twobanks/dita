import type { AppProps } from 'next/app'
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/global";
import theme from '../styles/theme'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Dita Ateliê</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Dita Ateliê" />
      <meta property="og:locale" content="pt_BR"/>
      <meta property="og:type" content="website"/>
    </Head>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  </>
)

export default MyApp
