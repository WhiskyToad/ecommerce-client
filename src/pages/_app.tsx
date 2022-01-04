/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Header from '../components/widgets/Header/Header'
import theme from '../components/ui/theme/extendTheme'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    <Header />
    <Component {...pageProps} />
    </ChakraProvider>)

export default MyApp
