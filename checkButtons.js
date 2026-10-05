const fs = require('fs');
const content = fs.readFileSync('src/app/page.tsx', 'utf8');

const regex = /className="[^"]*(bg-\[\#25D366\]|bg-orange-500|bg-orange-600)[^"]*"/g;
const matches = content.match(regex);
console.log("Matches:", matches);
