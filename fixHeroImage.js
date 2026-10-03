const fs = require('fs');

let c = fs.readFileSync('src/components/DynamicPageHero.tsx', 'utf8');

// Find the Next.js <Image component that doesn't have priority
if (!c.includes('priority={true}') && !c.includes(' priority\n')) {
  c = c.replace(
    /sizes="\(max-width: 768px\) 100vw, 50vw"/,
    'sizes="(max-width: 768px) 100vw, 50vw"\n                priority={true}'
  );
  fs.writeFileSync('src/components/DynamicPageHero.tsx', c);
  console.log('Added priority to DynamicPageHero');
} else {
  console.log('Priority already exists');
}
