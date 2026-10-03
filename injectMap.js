const fs = require('fs');

let c = fs.readFileSync('src/app/locations/[slug]/page.tsx', 'utf8');

// Add import
if (!c.includes('DynamicGoogleMap')) {
  c = c.replace(
    "import DynamicFAQ from '@/components/DynamicFAQ';",
    "import DynamicFAQ from '@/components/DynamicFAQ';\nimport DynamicGoogleMap from '@/components/DynamicGoogleMap';"
  );
}

// Inject component before Automated SEO Enhancements
c = c.replace(
  "{/* Automated SEO Enhancements: Local Grids */}",
  "<DynamicGoogleMap locationName={formattedLocationName} />\n\n            {/* Automated SEO Enhancements: Local Grids */}"
);

fs.writeFileSync('src/app/locations/[slug]/page.tsx', c);
console.log('Injected DynamicGoogleMap into locations page');
