'use client'

export default function Error({ error }: { error: Error }) {
  return (
    <div>
      <h2>Error: {error.message}</h2>
    </div>
  )
}
