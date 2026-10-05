const fs = require('fs');
const content = fs.readFileSync('src/app/page.tsx', 'utf8');

const regex = /.{0,10}className="/g;
const matches = content.match(regex);
console.log("Matches preview:");
if(matches) {
    matches.filter(m => !m.endsWith(' className="') && !m.endsWith('=className="') && !m.endsWith('\nclassName="')).forEach(m => console.log(m));
}
