const fs = require('fs');
let c = fs.readFileSync('src/app/locations/[slug]/page.tsx', 'utf8');

if (!c.includes("import { getFounderQuote }")) {
  c = c.replace(
    "import { formatLocationName } from '@/lib/formatters';",
    "import { formatLocationName } from '@/lib/formatters';\nimport { getFounderQuote } from '@/lib/quotes';"
  );
}

const oldText = `"As a local engineering team, we understand the specific soil conditions and climate challenges in {formattedLocationName}. We've built our reputation on 100% transparent pricing and flawless execution. When you work with us, you're working directly with the experts."`;
const newText = `"{getFounderQuote(resolvedParams.slug, formattedLocationName)}"`;

c = c.replace(oldText, newText);

fs.writeFileSync('src/app/locations/[slug]/page.tsx', c);
console.log('Update complete.');
