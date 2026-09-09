import { defineField, defineType } from 'sanity';

export const venture = defineType({
  name: 'venture',
  title: 'Venture',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Venture Name', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'legalName', title: 'Full Legal Name (e.g. MagicWorks IT Solutions Pvt Ltd)', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } }),
    defineField({ name: 'role', title: 'Swapnil Role (e.g. Founder-Director)', type: 'string' }),
    defineField({ name: 'year', title: 'Year (e.g. 2009)', type: 'number' }),
    defineField({ name: 'sector', title: 'Sector Description', type: 'string' }),
    defineField({ name: 'website', title: 'Website URL (e.g. https://simplidistance.com)', type: 'url' }),
    defineField({ name: 'domainName', title: 'Domain Display Name (e.g. simplidistance.com)', type: 'string' }),
    defineField({ name: 'summary', title: 'Short Overview', type: 'text' }),
    defineField({ name: 'body', title: 'Detailed Long-Form Note', type: 'array', of: [{ type: 'block' }] }),
  ],
});
