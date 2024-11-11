import { z } from 'zod'

const BasicImageSchema = z.object({
    total_results: z.number(),
    page: z.number(),
    per_page: z.number(),
    prev_page: z.string().optional(),
    next_page: z.string().optional()
})

const photoSchema = z.object({
    id: z.number(),
    width: z.number(),
    height: z.number(),
    url: z.string(),
    src: z.object({
        original: z.string(),
        large2x: z.string(),
        large: z.string(),
    }),
    avg_color: z.string(),
    photographer: z.string(),
    alt: z.string(),
    blurredDataUrl: z.string().optional(),
})

export const ImagesSchemaWithPhotos = BasicImageSchema.extend({
    photos: z.array(photoSchema)
})

export type Photo = z.infer<typeof photoSchema>

export type ImagesResults = z.infer<typeof ImagesSchemaWithPhotos>