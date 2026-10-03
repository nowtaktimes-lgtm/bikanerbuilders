const fs = require('fs');

const updateCanonical = (file, basePath) => {
  if (!fs.existsSync(file)) return;
  let c = fs.readFileSync(file, 'utf8');
  
  if (c.includes('alternates: {')) {
    console.log(`Canonical already exists in ${file}`);
    return; // Already has alternates
  }

  // Find the openGraph object in the return of generateMetadata and insert alternates right before it
  c = c.replace(
    /openGraph:/g,
    `alternates: {\n      canonical: \`https://bikanerbuilders.in${basePath}/\${resolvedParams.slug}\`\n    },\n    openGraph:`
  );
  
  fs.writeFileSync(file, c);
  console.log(`Updated canonical for ${file}`);
};

updateCanonical('src/app/locations/[slug]/page.tsx', '/locations');
updateCanonical('src/app/services/[slug]/page.tsx', '/services');
updateCanonical('src/app/blog/[slug]/page.tsx', '/blog');
updateCanonical('src/app/[slug]/page.tsx', ''); // For base slugs
