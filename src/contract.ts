import { oc } from '@orpc/contract'
import { z } from 'zod'

export const userContract = oc.router({
  find: oc
    .input(z.object({ id: z.string() }))
    .output(
      z.object({ id: z.string(), name: z.string(), updatedAt: z.date() }),
    ),
})
