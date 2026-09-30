const fs = require('fs');

// 1. Fix DynamicFAQ.tsx
let faq = fs.readFileSync('src/components/DynamicFAQ.tsx', 'utf8');
faq = faq.replace(
  '<h3 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h3>',
  '<h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>'
);
faq = faq.replace(
  '{faq.q}',
  '<h3 className="inline m-0 font-inherit text-inherit">{faq.q}</h3>'
);
fs.writeFileSync('src/components/DynamicFAQ.tsx', faq);

// 2. Fix src/app/locations/[slug]/page.tsx
let locPage = fs.readFileSync('src/app/locations/[slug]/page.tsx', 'utf8');
if (!locPage.includes("import { formatLocationName }")) {
  locPage = locPage.replace(
    "import Link from 'next/link';",
    "import Link from 'next/link';\nimport { formatLocationName } from '@/lib/formatters';"
  );
}
locPage = locPage.replace(
  /const formattedLocationName = resolvedParams\.slug\.split\(\"-\"\)\.map\(w => w\.charAt\(0\)\.toUpperCase\(\) \+ w\.slice\(1\)\)\.join\(\" \"\);/g,
  'const formattedLocationName = formatLocationName(resolvedParams.slug);'
);
locPage = locPage.replace(
  /<h3 className="text-2xl font-bold mb-2">Why \{formattedLocationName\} Residents Choose Us<\/h3>/g,
  '<h2 className="text-2xl font-bold mb-2">Why {formattedLocationName} Residents Choose Us</h2>'
);
locPage = locPage.replace(
  /<h3 className="text-2xl font-bold text-slate-900 mb-6">Other Locations We Serve<\/h3>/g,
  '<h2 className="text-2xl font-bold text-slate-900 mb-6">Other Locations We Serve</h2>'
);
fs.writeFileSync('src/app/locations/[slug]/page.tsx', locPage);

// 3. Fix src/app/locations/page.tsx
let locList = fs.readFileSync('src/app/locations/page.tsx', 'utf8');
if (!locList.includes("import { formatLocationName }")) {
  locList = locList.replace(
    "import Link from 'next/link';",
    "import Link from 'next/link';\nimport { formatLocationName } from '@/lib/formatters';"
  );
}
locList = locList.replace(
  /const shortName = slugStr\.split\('-[^\n]*?join\(' '\);/g,
  'const shortName = formatLocationName(slugStr);'
);
// wait, regex might fail due to multiline, let's just do a string replace
locList = locList.replace(
  /const shortName = slugStr\.split\('-'\)\.map\(\(w: string\) => w\.charAt\(0\)\.toUpperCase\(\) \+ w\.slice\(1\)\)\.join\(' '\);/g,
  'const shortName = formatLocationName(slugStr);'
);
fs.writeFileSync('src/app/locations/page.tsx', locList);

// 4. Fix src/components/Footer.tsx
let footer = fs.readFileSync('src/components/Footer.tsx', 'utf8');
if (!footer.includes("import { formatLocationName }")) {
  footer = footer.replace(
    "import Link from 'next/link';",
    "import Link from 'next/link';\nimport { formatLocationName } from '@/lib/formatters';"
  );
}
footer = footer.replace(
  /const shortName = slugStr\.split\('-'\)\.map\(\(w: string\) => w\.charAt\(0\)\.toUpperCase\(\) \+ w\.slice\(1\)\)\.join\(' '\);/g,
  'const shortName = formatLocationName(slugStr);'
);
fs.writeFileSync('src/components/Footer.tsx', footer);

console.log("All fixes applied!");
