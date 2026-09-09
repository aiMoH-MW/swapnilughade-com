import { defineField, defineType } from 'sanity';

export const article = defineType({
  name: 'article',
  title: 'Article / Writing Entry',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Article Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Operating Thesis', value: 'Operating Thesis' },
          { title: 'Portals & Platforms', value: 'Portals & Platforms' },
          { title: 'Advisory', value: 'Advisory' },
          { title: 'AI Implementation', value: 'AI Implementation' },
          { title: 'Strategy', value: 'Strategy' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'readingTime',
      title: 'Reading Time (e.g. 4 min read)',
      type: 'string',
    }),
    defineField({
      name: 'lead',
      title: 'Lead / AEO Answer Paragraph',
      type: 'text',
      rows: 3,
      description: '2 to 3 self-contained sentences answering the core question.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body Content',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'object',
          name: 'marginalia',
          title: 'Marginalia / Aside Callout',
          fields: [
            { name: 'label', type: 'string', title: 'Label (e.g. Aside, Context)' },
            { name: 'text', type: 'text', title: 'Callout Text' },
          ],
        },
        {
          type: 'object',
          name: 'dataCallout',
          title: 'Inline Data Callout',
          fields: [
            { name: 'metric', type: 'string', title: 'Metric (e.g. 50,000+)' },
            { name: 'description', type: 'string', title: 'Description' },
          ],
        },
      ],
    }),
  ],
});
