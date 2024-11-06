'use client'

import { ORPCClientExample } from '../client'
import { ORPCReactExample, ORPCReactProvider } from '../react'

export default function Home() {
  return (
    <ORPCReactProvider>
      <div className="container py-12 mx-auto px-4 space-y-8">
        <div>
          <h2>ORPC Client Example</h2>

          <ORPCClientExample />
        </div>

        <div>
          <h2>ORPC React Example</h2>

          <ORPCReactExample />
        </div>
      </div>
    </ORPCReactProvider>
  )
}
