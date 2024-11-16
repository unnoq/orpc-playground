import { os } from '@orpc/server'
import { createFetchHandler } from '@orpc/server/fetch'
import { z } from 'zod'
import { userContract } from './contract'

export const globalMiddleware = os
  .context<{ request: Request }>()
  .middleware(async (_, context, meta) => {
    const start = Date.now()

    meta.onFinish(() => {
      const url = new URL(context.request.url)
      console.info(
        `---- Request ${url.pathname} finished in ${Date.now() - start}ms`,
      )
    })
  })

/**
 * The `os` builder with the request context.
 * You can use `os` directly if you don't need the context.
 */
export const osw = os.context<{ request: Request }>().use(globalMiddleware)
export const osUser = osw.contract(userContract)

// Visit http://localhost:3000/api/ping?name=ORPC
export const ping = osw
  // .route({path: '/ping', method: 'GET'})
  .input(z.object({ name: z.string().default('UNKNOWN') }))
  .output(z.string())
  .handler((input, _context, _meta) => {
    return `pong ${new Date()} ${`from ${input.name}`}`
  })

export const userFind = osUser.find.handler((input, _context, _meta) => {
  return {
    id: input.id,
    name: 'ORPC',
    updatedAt: new Date(),
  }
})

export const appRouter = osw.router({
  ping,
  user: osUser.router({
    find: userFind,
  }),
})
