// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Ayphr',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/ayphr' }],
      editLink: {
        baseUrl: 'https://github.com/ayphr/docs/edit/main/',
      },
      sidebar: [
        {
          autogenerate: { directory: '' },
        },
      ],
    }),
  ],
});
