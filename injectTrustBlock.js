const fs = require('fs');
const path = require('path');

const servicesDir = 'src/app/services';

const pagesToUpdate = [
  '2d-naksha',
  '3d-elevation',
  'interior-design',
  'structural-drawing',
  'turnkey-construction',
];

pagesToUpdate.forEach(slug => {
  const filePath = path.join(servicesDir, slug, 'page.tsx');
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add import if not present
    if (!content.includes('ServiceTrustBlock')) {
      content = content.replace(
        "import Link from 'next/link';",
        "import Link from 'next/link';\nimport ServiceTrustBlock from '@/components/ServiceTrustBlock';"
      );
    }

    // Replace the block
    const hardcodedBlockRegex = /\{\/\*\s*Local Trust Block\s*\*\/\}\s*<div className="bg-slate-900 text-white p-8 rounded-2xl shadow-inner mt-8">[\s\S]*?<\/div>/;
    
    content = content.replace(hardcodedBlockRegex, `<ServiceTrustBlock slug="${slug}" />`);
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filePath}`);
  }
});
