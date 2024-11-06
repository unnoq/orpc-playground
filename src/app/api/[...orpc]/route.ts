import { appRouter } from '@/src/api'
import { createFetchHandler } from '@orpc/server/fetch'

const handler = createFetchHandler({
  router: appRouter,
  serverless: true,
})

function handleRequest(request: Request) {
  return handler({
    request,
    context: { request },
    prefix: '/api',
  })
}

export const GET = handleRequest
export const POST = handleRequest
export const PUT = handleRequest
export const DELETE = handleRequest
export const PATCH = handleRequest
