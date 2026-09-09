import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId, useCdn } from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
});

export async function sanityFetch<T>({
  query,
  params = {},
  tags = [],
}: {
  query: string;
  params?: Record<string, any>;
  tags?: string[];
}): Promise<T> {
  // If no projectId configured or demo mode, return null gracefully
  if (!projectId || projectId === 'your_project_id') {
    return null as unknown as T;
  }
  try {
    return await client.fetch<T>(query, params, {
      next: { tags, revalidate: 3600 },
    });
  } catch (error) {
    console.warn('Sanity query failed, falling back to static data:', error);
    return null as unknown as T;
  }
}
