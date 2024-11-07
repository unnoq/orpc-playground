'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import { ORPCContext } from '../react'
import { orpcClient } from '../client'

export function Providers(props: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <ORPCContext.Provider value={{ client: orpcClient, queryClient }}>
        {props.children}
      </ORPCContext.Provider>
    </QueryClientProvider>
  )
}
