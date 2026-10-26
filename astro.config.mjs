import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const envPath = fileURLToPath(new URL('.env', import.meta.url));
if (existsSync(envPath)) process.loadEnvFile(envPath);
const site = process.env.SITE_URL;
if (site && !['http:', 'https:'].includes(new URL(site).protocol)) throw new Error('SITE_URL must be an absolute HTTP(S) URL');
const base = process.env.BASE_PATH || '/';
if (!base.startsWith('/') || base.startsWith('//') || /[?#]/.test(base)) throw new Error('BASE_PATH must be an absolute URL path, for example /Portfolio');

export default defineConfig({
  site,
  base,
  output: 'static',
  devToolbar: { enabled: false },
  trailingSlash: 'always',
  integrations: [mdx(), ...(site ? [sitemap()] : [])],
});
