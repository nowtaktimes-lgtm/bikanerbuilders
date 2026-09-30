const fs = require('fs');
let c = fs.readFileSync('src/app/layout.tsx', 'utf8');

c = c.replace(/url: '\/assets\/og_bikaner_builders_v2\.jpg'/g, "url: 'https://www.bikanerbuilders.in/assets/og_bikaner_builders_v2.jpg'");
c = c.replace(/images: \['\/assets\/og_bikaner_builders_v2\.jpg'\]/g, "images: ['https://www.bikanerbuilders.in/assets/og_bikaner_builders_v2.jpg']");

fs.writeFileSync('src/app/layout.tsx', c);
console.log('Fixed absolute URLs in layout.tsx');
