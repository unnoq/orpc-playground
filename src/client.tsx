'use client'

import { useEffect, useState } from 'react'
import { appRouter } from './server'
import { createORPCClient } from '@orpc/client'

export const orpcClient = createORPCClient<typeof appRouter>({
  baseURL: 'http://localhost:3000/api',
})

export function ORPCClientExample() {
  const [pong, setPong] = useState('pending ....')

  useEffect(() => {
    orpcClient
      .ping({ name: 'ORPC' })
      .then((pong) => {
        setPong(pong)
      })
      .catch((err) => {
        setPong(err.message)
      })
  }, [])

  return <div>ORPC Client Example: {pong}</div>
}
