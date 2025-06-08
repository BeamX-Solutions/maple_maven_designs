// generate-sitemap.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const links = [
  { url: '/', changefreq: 'monthly', priority: 1.0 },
  { url: '/services', changefreq: 'monthly', priority: 0.8 },
  { url: '/portfolio', changefreq: 'monthly', priority: 0.8 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  // Add any other routes
];

const sitemap = new SitemapStream({ hostname: 'https://maple-maven-designs.netlify.app' });
const writeStream = createWriteStream('./public/sitemap.xml');

sitemap.pipe(writeStream);

for (const link of links) {
  sitemap.write(link);
}
sitemap.end();

streamToPromise(sitemap)
  .then(() => console.log('✅ Sitemap created!'))
  .catch(console.error);
