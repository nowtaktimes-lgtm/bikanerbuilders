const fs = require('fs');
let c = fs.readFileSync('src/app/locations/[slug]/page.tsx', 'utf8');
c = c.replace(
  'const locations = await getAllLocations();',
  'const locations = await getAllLocations();\n  const formattedLocationName = resolvedParams.slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");'
);
fs.writeFileSync('src/app/locations/[slug]/page.tsx', c);
