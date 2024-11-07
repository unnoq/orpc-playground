'use client'

import { createORPCReact } from '@orpc/react'
import { appRouter } from './server'
import { useState } from 'react'

export const { orpc, ORPCContext } = createORPCReact<typeof appRouter>()

export function ORPCReactExample() {
  const [id, setId] = useState('id-default')
  const { data, isSuccess, refetch } = orpc.user.find.useSuspenseQuery({ id })

  return (
    <div>
      <input
        type="text"
        className="border border-gray-500 rounded p-2 bg-transparent"
        placeholder="search user"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      {!isSuccess ? (
        'Loading...'
      ) : (
        <div>
          <div> this content rendered on server side </div>
          <div> id: {data.id}</div>
          <div> name: {data.name}</div>
          <div> updatedAt: {data.updatedAt.toLocaleString()}</div>
        </div>
      )}
      <button
        onClick={() => refetch()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Fake update
      </button>
    </div>
  )
}
