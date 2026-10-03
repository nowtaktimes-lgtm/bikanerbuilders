const fs = require('fs');

let c = fs.readFileSync('src/app/sitemap.ts', 'utf8');

const dedupeLogic = `
  // Task 3: Combine, Deduplicate and Return
  const allRoutes = [...staticRoutes, ...dynamicRoutes];
  
  // Use a Map to deduplicate based on URL. If a URL is already in the map, 
  // it means we have a duplicate (e.g. hardcoded service vs CMS service).
  // The map will keep the first instance it sees.
  const deduplicatedRoutes = [];
  const seenUrls = new Set();
  
  for (const route of allRoutes) {
    if (!seenUrls.has(route.url)) {
      seenUrls.add(route.url);
      deduplicatedRoutes.push(route);
    }
  }

  return deduplicatedRoutes;
}
`;

c = c.replace(
  /\/\/ Task 3: Combine and Return[\s\S]*?return \[\.\.\.staticRoutes, \.\.\.dynamicRoutes\];\n\}/,
  dedupeLogic
);

fs.writeFileSync('src/app/sitemap.ts', c);
console.log('Fixed sitemap.ts deduplication');
