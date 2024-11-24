import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      year: z.number(),
      location: z.string(),
      type: z.string(),
      area: z.string(),
      feat_img: image(),
      imgs: z.array(image()),
    }),
});

export const collections = {
  projects: projectsCollection,
};
