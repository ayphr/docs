// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Ayphr Docs',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/ayphr' }],
      editLink: {
        baseUrl: 'https://github.com/ayphr/docs/edit/main/',
      },
      customCss: ['./src/styles/custom.css'],
      components: {
        ThemeSelect: './src/components/ThemeSelect.astro',
        ThemeProvider: './src/components/ThemeProvider.astro',
      },
      sidebar: [
        { label: 'Overview', slug: 'index' },
        {
          label: 'TelemetryQL (TQL)',
          badge: { text: 'v1.0', variant: 'note' },
          items: [
            { label: 'Overview & Mental Model', slug: 'tql/overview' },
            { label: 'Query Roots & Selectors', slug: 'tql/queries' },
            { label: 'Filter Syntax & Conditions', slug: 'tql/filters' },
            { label: 'Tolerance & Sensor Bounds', slug: 'tql/tolerance' },
            { label: 'Logical & Advanced Operators', slug: 'tql/operators' },
            { label: 'Pipeline Operations', slug: 'tql/pipeline' },
            { label: 'Aggregations & Analytics', slug: 'tql/aggregations' },
            { label: 'Cookbook & Recipes', slug: 'tql/cookbook' },
            { label: 'Syntax Reference', slug: 'tql/syntax' },
          ],
        },
        {
          label: 'Public Device API',
          badge: { text: 'REST', variant: 'tip' },
          items: [
            { label: 'Device Lifecycle & Flow', slug: 'api/overview' },
            { label: 'Request Device Pairing', slug: 'api/pair-device' },
            { label: 'Poll & Retrieve Device Token', slug: 'api/get-token' },
            { label: 'Upload Telemetry Data', slug: 'api/upload-data' },
          ],
        },
      ],
      head: [
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
        {
          tag: 'link',
          attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap',
          },
        },
      ],
    }),
  ],
});
