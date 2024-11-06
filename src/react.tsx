'use client'

import { createORPCReact } from '@orpc/react'
import { appRouter } from './server'
import { orpcClient } from './client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

export const { orpc, ORPCContext } = createORPCReact<typeof appRouter>()

export function ORPCReactExample() {
  const { data, isLoading } = orpc.ping.useQuery({ name: 'World' })

  return (
    <div>{isLoading ? 'Loading...' : <h2 className="text-2xl">{data}</h2>}</div>
  )
}

export function ORPCReactProvider(props: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <ORPCContext.Provider value={{ client: orpcClient, queryClient }}>
        {props.children}
      </ORPCContext.Provider>
    </QueryClientProvider>
  )
}
