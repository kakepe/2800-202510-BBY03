import { readdir } from 'fs/promises';
import path from 'path';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  try {
    const guidesDir = path.resolve('static/guides');
    const files = await readdir(guidesDir);

    const htmlFiles = files.filter(file => file.endsWith('.html'));

    const guides = htmlFiles.map(file => ({
      name: file.replace(/_/g, ' ').replace(/\.html$/, ''),
      path: `/guides/${file}`
    }));

    return { guides };
  } catch (err) {
    console.error('Error loading guide files:', err);
    return { guides: [] };
  }
};
