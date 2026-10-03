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
    let c = fs.readFileSync(filePath, 'utf8');
    
    // Fix literal string bugs
    c = c.replace(/dangerouslySetInnerHTML=\{\{ __html: \`JSON\.stringify\(serviceSchema\)\` \}\}/g, 'dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}');
    c = c.replace(/dangerouslySetInnerHTML=\{\{ __html: \`JSON\.stringify\(faqSchema\)\` \}\}/g, 'dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}');
    
    fs.writeFileSync(filePath, c);
    console.log(`Fixed static service schema bug in ${slug}`);
  }
});
