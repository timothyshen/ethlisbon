'use client'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'

export function Providers({
    children
  }: {
  children: React.ReactNode
  }) {
  return (
    // <CacheProvider>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    // </CacheProvider>
  )
}