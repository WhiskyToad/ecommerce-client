/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Header from '../components/widgets/Header/Header'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider>
    <Header />
    <Component {...pageProps} />
    </ChakraProvider>)

export default MyApp
