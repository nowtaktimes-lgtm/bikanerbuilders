const fs = require('fs');
let c = fs.readFileSync('src/app/locations/[slug]/page.tsx', 'utf8');
c = c.replace(
  "import dynamic from 'next/dynamic';\nconst DynamicGoogleMap = dynamic(() => import('@/components/DynamicGoogleMap'), { ssr: false });", 
  "import ClientMapWrapper from '@/components/ClientMapWrapper';"
);
// just in case it was a different newline
c = c.replace(
  /import dynamic from 'next\/dynamic';[\s\S]*?ssr: false \}\);/m,
  "import ClientMapWrapper from '@/components/ClientMapWrapper';"
);
c = c.replace(/<DynamicGoogleMap/g, '<ClientMapWrapper');
fs.writeFileSync('src/app/locations/[slug]/page.tsx', c);
console.log('Fixed locations map import');
