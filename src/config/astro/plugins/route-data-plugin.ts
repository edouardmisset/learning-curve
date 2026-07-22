import type { StarlightPlugin } from '@astrojs/starlight/types'

export const routeDataPlugin = (): StarlightPlugin => ({
  name: 'route-data',
  hooks: {
    'config:setup'({ addRouteMiddleware }): void {
      addRouteMiddleware({
        entrypoint: './src/route-data.ts',
        order: 'post',
      })
    },
  },
})
