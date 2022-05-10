import '../styles/globals.css'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Fonts from 'lib/Font'

function MyApp({ Component, pageProps }) {
  const breakpoints = createBreakpoints({
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1272px',
    '3xl': '1880px',
    '4xl': '1900px',
  })

  const theme = extendTheme({
    fonts: {
      heading: 'Poppins',
      body: 'Poppins-Normal',
    },
    breakpoints,
  })

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
