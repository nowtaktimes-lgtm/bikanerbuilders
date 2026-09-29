import { MetadataRoute } from 'next';
import { fetchGraphQL } from '@/lib/api';

const baseUrl = 'https://bikanerbuilders.in';

// Define expected GraphQL response shapes
interface CMSNode {
  slug: string;
  modified?: string;
}
interface GraphQLResponse {
  services?: { nodes: CMSNode[] };
  locations?: { nodes: CMSNode[] };
  posts?: { nodes: CMSNode[] };
  pages?: { nodes: CMSNode[] };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Task 1: Static Routes Array
  const staticRoutes: MetadataRoute.Sitemap = [
    // Core Pages
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/portfolio`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/cost-estimator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/locations`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/terms-conditions`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    
    // Hardcoded Service Pages
    { url: `${baseUrl}/services/2d-naksha`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/services/3d-elevation`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/services/turnkey-construction`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/services/interior-design`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/services/structural-drawing`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
  ];

  // Task 2: Dynamic WordPress Fetch Logic
  let dynamicRoutes: MetadataRoute.Sitemap = [];

  try {
    const query = `
      query AllDynamicRoutes {
        locations(first: 100) { nodes { slug modified } }
        services(first: 100) { nodes { slug modified } }
        posts(first: 100) { nodes { slug modified } }
        pages(first: 100) { nodes { slug modified } }
      }
    `;

    // Await the fetch via our existing utility (or direct fetch if it fails)
    const response = await fetchGraphQL<GraphQLResponse>(query);
    const data = response?.data;

    if (data) {
      // 1. Locations -> /locations/[slug] (Priority 0.7)
      if (data.locations?.nodes) {
        data.locations.nodes.forEach((loc) => {
          if (loc.slug) {
            dynamicRoutes.push({
              url: `${baseUrl}/locations/${loc.slug}`,
              lastModified: loc.modified ? new Date(loc.modified) : new Date(),
              changeFrequency: 'weekly',
              priority: 0.7,
            });
          }
        });
      }

      // 2. Dynamic Services -> /services/[slug] (Priority 0.8)
      if (data.services?.nodes) {
        data.services.nodes.forEach((svc) => {
          if (svc.slug) {
            dynamicRoutes.push({
              url: `${baseUrl}/services/${svc.slug}`,
              lastModified: svc.modified ? new Date(svc.modified) : new Date(),
              changeFrequency: 'weekly',
              priority: 0.8,
            });
          }
        });
      }

      // 3. Blogs -> /blog/[slug] (Priority 0.7)
      if (data.posts?.nodes) {
        data.posts.nodes.forEach((post) => {
          if (post.slug) {
            dynamicRoutes.push({
              url: `${baseUrl}/blog/${post.slug}`,
              lastModified: post.modified ? new Date(post.modified) : new Date(),
              changeFrequency: 'monthly',
              priority: 0.7,
            });
          }
        });
      }

      // 4. General Pages -> /[slug] (Priority 0.6)
      // Exclude static pages that already exist in staticRoutes
      const existingSlugs = ['about', 'contact', 'portfolio', 'cost-estimator', 'locations', 'privacy-policy', 'terms-conditions'];
      if (data.pages?.nodes) {
        data.pages.nodes.forEach((page) => {
          if (page.slug && !existingSlugs.includes(page.slug)) {
            dynamicRoutes.push({
              url: `${baseUrl}/${page.slug}`,
              lastModified: page.modified ? new Date(page.modified) : new Date(),
              changeFrequency: 'monthly',
              priority: 0.6,
            });
          }
        });
      }
    }
  } catch (error) {
    console.error('Sitemap dynamic fetch failed, returning static routes only:', error);
    // If the CMS goes down, it will gracefully fallback and just return the staticRoutes below.
  }

  // Task 3: Combine and Return
  return [...staticRoutes, ...dynamicRoutes];
}
