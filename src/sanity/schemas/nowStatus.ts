import { defineField, defineType } from 'sanity';

export const nowStatus = defineType({
  name: 'nowStatus',
  title: 'Now Status (/now)',
  type: 'document',
  fields: [
    defineField({
      name: 'lastUpdated',
      title: 'Last Updated (Month/Year)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Current Location',
      type: 'string',
      initialValue: 'Pune, India',
    }),
    defineField({
      name: 'whatImWorkingOn',
      title: "What I'm Working On",
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'whatImReading',
      title: "What I'm Reading",
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'whatImBuilding',
      title: "What I'm Building",
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
});
