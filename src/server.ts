import { ios } from '@orpc/server'
import { createFetchHandler } from '@orpc/server/fetch'
import { z } from 'zod'

/**
 * The `os` builder with the request context.
 * You can use `ios` directly if you don't need the context.
 */
export const os = ios.context<{ request: Request }>()

// Visit http://localhost:3000/api/ping?name=ORPC
export const ping = os
  // .route({path: '/ping', method: 'GET'})
  .input(z.object({ name: z.string().default('UNKNOWN') }))
  .output(z.string())
  .handler((input, context) => {
    console.log(context.request.url)

    return `pong ${input.name}`
  })

// ===============================================================================

export const appRouter = os.router({
  ping,
})
