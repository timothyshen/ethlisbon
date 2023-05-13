'use client'
import { ChakraProvider } from '@chakra-ui/react'

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    // <CacheProvider>
      <ChakraProvider>
        {children}
      </ChakraProvider>
    // </CacheProvider>
  )
}