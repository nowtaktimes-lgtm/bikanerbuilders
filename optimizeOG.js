const fs = require('fs');

const optimizedUrl = 'https://www.bikanerbuilders.in/_next/image?url=%2Fassets%2Fog_bikaner_builders_v2.jpg&w=1200&q=75';

// 1. Update layout.tsx
let layout = fs.readFileSync('src/app/layout.tsx', 'utf8');
layout = layout.replace(/url: 'https:\/\/www\.bikanerbuilders\.in\/assets\/og_bikaner_builders_v2\.jpg'/g, `url: '${optimizedUrl}'`);
layout = layout.replace(/images: \['https:\/\/www\.bikanerbuilders\.in\/assets\/og_bikaner_builders_v2\.jpg'\]/g, `images: ['${optimizedUrl}']`);
fs.writeFileSync('src/app/layout.tsx', layout);

// 2. Update dynamic pages globally
const globReplace = (dir) => {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = dir + '/' + file;
        if (fs.statSync(fullPath).isDirectory()) {
            globReplace(fullPath);
        } else if (fullPath.endsWith('.tsx')) {
            let c = fs.readFileSync(fullPath, 'utf8');
            let changed = false;
            
            // replace the hardcoded old absolute url if present
            if (c.includes("'https://bikanerbuilders.in/assets/og_bikaner_builders_v2.jpg'")) {
                c = c.replace(/'https:\/\/bikanerbuilders\.in\/assets\/og_bikaner_builders_v2\.jpg'/g, `'${optimizedUrl}'`);
                changed = true;
            }
            if (c.includes("'https://www.bikanerbuilders.in/assets/og_bikaner_builders_v2.jpg'")) {
                c = c.replace(/'https:\/\/www\.bikanerbuilders\.in\/assets\/og_bikaner_builders_v2\.jpg'/g, `'${optimizedUrl}'`);
                changed = true;
            }
            
            if (changed) {
                fs.writeFileSync(fullPath, c);
            }
        }
    });
}
globReplace('src');
console.log('URLs optimized!');
