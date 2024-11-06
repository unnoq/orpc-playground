import { ioc } from '@orpc/contract'
import { z } from 'zod'

export const userContract = ioc.router({
  find: ioc
    .input(z.object({ id: z.string() }))
    .output(
      z.object({ id: z.string(), name: z.string(), updatedAt: z.date() }),
    ),
})
