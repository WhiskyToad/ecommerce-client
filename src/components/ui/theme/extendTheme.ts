import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    purple: {
      100: '#8e0084',
      200: '#8e0084',
      300: '#8e0084',
      400: '#8e0084',
      500: '#8e0084', // base colour
      600: '#72006a', // hover colour
      700: '#63005c', // acitve colour
      800: '#63005c',
      900: '#8e0084',
  },
    lightBlue: '#1e8ed5'
},
})

export default theme