// content.config.ts
import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    proyectos: defineCollection({
      type: 'page',
      source: 'proyectos/*.md',
      schema: z.object({
        title: z.string(),
        category: z.string(),
        image: z.string(),
        tags: z.array(z.string()),
        liveUrl: z.string().optional(),
        repoUrl: z.string().optional(),
      }),
    }),
  },
})