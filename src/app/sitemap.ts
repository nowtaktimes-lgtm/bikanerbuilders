import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://bikanerbuilders.in';

  // Core Static Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cost-estimator`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    
    // Core SEO Static Services
    {
      url: `${baseUrl}/services/3d-elevation`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/2d-naksha`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/turnkey-construction`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/interior-design`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/structural-drawing`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  /* 
   * DYNAMIC ROUTES (CMS / Locations)
   * -------------------------------------------------------------
   * You can fetch dynamic locations or WordPress CMS services here
   * and append them to the sitemap array.
   * 
   * Example:
   * 
   * const locations = await getAllLocations();
   * const dynamicRoutes: MetadataRoute.Sitemap = locations.map((loc) => ({
   *   url: \`\${baseUrl}/locations/\${loc.slug}\`,
   *   lastModified: new Date(),
   *   changeFrequency: 'weekly',
   *   priority: 0.7,
   * }));
   * 
   * return [...staticRoutes, ...dynamicRoutes];
   */

  return staticRoutes;
}
