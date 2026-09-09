import { defineField, defineType } from 'sanity';

export const book = defineType({
  name: 'book',
  title: 'Book',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Book Title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'bookNumber', title: 'Book Number (One or Two)', type: 'string' }),
    defineField({ name: 'color', title: 'Cover Color', type: 'string', options: { list: ['ink', 'rosewood'] } }),
    defineField({ name: 'isbn', title: 'ISBN', type: 'string' }),
    defineField({ name: 'publishDate', title: 'Publication Date', type: 'string' }),
    defineField({ name: 'formats', title: 'Formats (e.g. Paperback + Kindle)', type: 'string' }),
    defineField({ name: 'coAuthor', title: 'Co-Author (if any)', type: 'string' }),
    defineField({ name: 'blurb', title: 'Short Summary Blurb', type: 'text', rows: 3 }),
    defineField({ name: 'lead', title: 'Lead Paragraph', type: 'text' }),
    defineField({ name: 'whoThisIsFor', title: 'Who This Book Is For', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'tableOfContents', title: 'Table of Contents', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'amazonPaperbackUrl', title: 'Amazon Paperback URL', type: 'url' }),
    defineField({ name: 'amazonKindleUrl', title: 'Amazon Kindle URL', type: 'url' }),
  ],
});
