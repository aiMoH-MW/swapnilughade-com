import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/sanity/schemas';
import { dataset, projectId, apiVersion } from './src/sanity/env';

export default defineConfig({
  basePath: '/studio',
  name: 'swapnil_ughade_cms',
  title: 'Swapnil Ughade CMS',
  projectId,
  dataset,
  apiVersion,
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
