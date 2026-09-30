const fs = require('fs');

let c = fs.readFileSync('src/app/locations/[slug]/page.tsx', 'utf8');

c = c.replace(
  /{loc\.title}/g,
  '{formatLocationName(loc.slug)}'
);

fs.writeFileSync('src/app/locations/[slug]/page.tsx', c);
console.log('Other locations updated.');
