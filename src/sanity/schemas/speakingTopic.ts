import { defineField, defineType } from 'sanity';

export const speakingTopic = defineType({
  name: 'speakingTopic',
  title: 'Speaking Topic',
  type: 'document',
  fields: [
    defineField({ name: 'order', title: 'Order (1 to 8)', type: 'number' }),
    defineField({ name: 'title', title: 'Keynote / Topic Title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'targetAudience', title: 'Target Audience', type: 'string' }),
    defineField({ name: 'synopsis', title: 'Topic Synopsis', type: 'text' }),
  ],
});
