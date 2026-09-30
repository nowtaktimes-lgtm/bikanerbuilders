const fs = require('fs');

const filesToUpdate = [
  'src/app/services/2d-naksha/page.tsx',
  'src/app/services/3d-elevation/page.tsx',
  'src/app/services/interior-design/page.tsx',
  'src/app/services/structural-drawing/page.tsx',
  'src/app/services/turnkey-construction/page.tsx'
];

let filesChanged = 0;

filesToUpdate.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    content = content.replace(/Justdial or local directories/gi, "random aggregator sites or unverified local contractor lists");
    content = content.replace(/Justdial contractors/gi, "unverified local contractors");
    content = content.replace(/Justdial/gi, "third-party directories");

    if (content !== original) {
      fs.writeFileSync(file, content);
      filesChanged++;
      console.log(`Updated: ${file}`);
    }
  }
});

console.log(`Total files changed: ${filesChanged}`);
